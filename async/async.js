const func = cb => {
  setTimeout(() => {
    cb('test')
  }, 1000)
}

const funcPromise = str => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (str == 'yooo') {
        resolve(str)
      } else {
        reject('error')
      }
    }, 1000)
  })
}

module.exports = {
  func,
  funcPromise
}