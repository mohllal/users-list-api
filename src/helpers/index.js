import _ from 'lodash'
import { Schema } from 'querymen'

export const query = (req, res, next) => {
  const schema = new Schema()
  schema.validate(req.query, function (err) {
    if (err) {
      req.querymen = { error: err }
      res.status(400)
      return next(err.message)
    }

    const { select, cursor: { skip: offset, limit, sort } } = schema.parse()
    const attributes = formatQueryAttributes(select)
    const order = formatQueryOrdering(sort)

    req.querymen = { attributes, order, offset, limit }
    req.querymen.schema = schema
    next()
  })
}

const formatQueryAttributes = (select) => {
  const attributes = { include: [], exclude: [] }

  _.keys(select).forEach(key => select[key] ? attributes.include.push(key) : attributes.exclude.push(key))

  return attributes
}

const formatQueryOrdering = (sort) => {
  const order = []

  _.keys(sort).forEach(key => sort[key] === 1 ? order.push([key, 'ASC']) : order.push([key, 'DESC']))

  return order
}
