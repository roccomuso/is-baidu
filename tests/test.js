const test = require('tape')
const isBaidu = require('../')

test('should fail on wrong IPs', (t) => {
  t.plan(2)
  isBaidu('1.1.1.1').then(outcome => t.notOk(outcome))
  isBaidu('123.123.123.123').catch(err => t.equal(err.code, 'ENOTFOUND'))
})

test('should fail with wrong inputs', (t) => {
  t.plan(3)
  isBaidu('helloworld').catch(err => t.ok(err))
  isBaidu('0.0.0.0.0.0').catch(err => t.ok(err))
  isBaidu().catch(err => t.ok(err))
})

test('should pass on valid baidu.com crawler ip', (t) => {
  t.plan(1)
  isBaidu('123.125.71.87').then(outcome => t.ok(outcome)).catch(console.log)
})
