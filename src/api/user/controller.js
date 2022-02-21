import { success, notFound } from '../../services/response/'
import { User } from '.'

export const index = ({ querymen: { query: where, select: attributes, cursor: { skip: offset, limit, sort: order } } }, res, next) =>
  User.findAndCountAll({ where, attributes, offset, limit })
    .then(success(res))
    .catch(next)

export const show = ({ params: { id } }, res, next) =>
  User.findOne({ where: { id } })
    .then(notFound(res))
    .then((product) => product.view(true))
    .then(success(res))
    .catch(next)
