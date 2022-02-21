import { faker } from '@faker-js/faker'
import { User } from '.'

let user

beforeEach(async () => {
  user = await User.create({
    name: faker.name.findName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    phone: faker.phone.phoneNumber(),
    company: faker.company.companyName()
  })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = user.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.email).toBe(user.email)
    expect(view.name).toBe(user.name)
    expect(view.phone).toBe(user.phone)
    expect(view.company).toBeFalsy()
    expect(view.createdAt).toBeFalsy()
    expect(view.updatedAt).toBeFalsy()
  })

  it('returns full view', () => {
    const view = user.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(user.id)
    expect(view.email).toBe(user.email)
    expect(view.name).toBe(user.name)
    expect(view.phone).toBe(user.phone)
    expect(view.company).toBe(user.company)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
