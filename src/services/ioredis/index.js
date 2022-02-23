import Redis from 'ioredis'
import { cacheUri } from '../../config'

export default new Redis(cacheUri, { lazyConnect: true })
