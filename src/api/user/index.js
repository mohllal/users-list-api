import { Router } from 'express'
import { query } from '../../middlewares'
import { index, show } from './controller'
export User from './model'

const router = new Router()

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup User
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of users.
 * @apiSuccess {Object[]} rows List of users.
 * @apiSuccess {Number} offset Page number.
 * @apiSuccess {Number} limit Page size.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query,
  index)

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 * @apiGroup User
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.get('/:id',
  show)

export default router
