import Redis from 'ioredis'
import { redisUri } from '../../config'

export default new Redis(redisUri, { lazyConnect: true })
