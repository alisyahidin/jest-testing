const { func, funcPromise }= require('./async')

beforeEach(() => console.log('before test'))

afterEach(() => console.log('after test'))

describe('test scope', () => {
  beforeEach(() => console.log('before each scoped'))

  test('async callback testing', done => {
    function cb(data) {
      expect(data).toBe('test')
      done()
    }

    func(cb)
  })
})

test('async promise test', () => {
  // promise must be returned

  expect.assertions(1)
  return funcPromise('yooo').then(result => {
    expect(result).toBe('yooo')
  }).catch(err => {
    expect(err).toMatch('error')
  })
})

// async await

test('async async test', async () => {
  expect.assertions(1)
  const result = await funcPromise('yooo')
  expect(result).toBe('yooo')
})

test('async async await test', async () => {
  expect.assertions(1)
  await expect(funcPromise('yooo')).resolves.toBe('yooo')
})