import { EventEmitter } from 'events'
import sequelize from '../src/services/sequelize'

EventEmitter.defaultMaxListeners = Infinity
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

global.Array = Array
global.Date = Date
global.Function = Function
global.Math = Math
global.Number = Number
global.Object = Object
global.RegExp = RegExp
global.String = String
global.Uint8Array = Uint8Array
global.WeakMap = WeakMap
global.Set = Set
global.Error = Error
global.TypeError = TypeError
global.parseInt = parseInt
global.parseFloat = parseFloat
global.console = {
  warn: jest.fn,
  info: jest.fn,
  debug: jest.fn,
  error: console.error,
  log: console.log
}

beforeAll(async () => {
  await sequelize.sync()
})

afterAll(async () => {
  await sequelize.close()
})
