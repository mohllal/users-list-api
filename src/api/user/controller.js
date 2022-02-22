import { success, notFound } from '../../services/response/'
import { User } from '.'

export const index = ({ querymen: { attributes, offset, limit, order } }, res, next) =>
  User.findAndCountAll({ attributes, offset, limit, order })
    .then(({ rows, count }) => ({ rows, count, offset, limit }))
    .then(success(res))
    .catch(next)

export const show = ({ params: { id } }, res, next) =>
  User.findByPk(id)
    .then(notFound(res))
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)
