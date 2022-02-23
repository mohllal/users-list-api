import _ from 'lodash'
import { Schema } from 'querymen'
import ioredis from '../services/ioredis'
import { success } from '../services/response'

export const query = (req, res, next) => {
  const schema = new Schema()
  schema.validate(req.query, function (err) {
    if (err) {
      req.querymen = { error: err }
      res.status(400)
      return next(err.message)
    }

    const { select, cursor: { skip: offset, limit, sort } } = schema.parse()

    const attributes = { include: [], exclude: [] }
    _.keys(select).forEach(key => select[key] ? attributes.include.push(key) : attributes.exclude.push(key))

    const order = []
    _.keys(sort).forEach(key => sort[key] === 1 ? order.push([key, 'ASC']) : order.push([key, 'DESC']))

    req.querymen = { attributes, order, offset, limit }
    req.querymen.schema = schema

    return next()
  })
}

export const cache = (duration) => {
  return async (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url

    const cached = await ioredis.get(key)
    if (cached) {
      const json = JSON.parse(cached)
      return success(res)(json)
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        ioredis.set(key, body, 'EX', duration * 1000)
        res.sendResponse(body)
      }
      return next()
    }
  }
}
