const a = require('./index').auto.id

a.success('id success')
a.error('id error')
a.info('id info')
a.warn('id warn')

console.log('')
console.log('=============')
console.log('')

const b = require('./index').auto.en

b.success('en success')
b.error('en error')
b.info('en info')
b.warn('en warn')

console.log('')
console.log('=============')
console.log('')

const c = require('./index').manual.id

console.log(c.success('manual id success'))
console.log(c.error('manual id error'))
console.log(c.info('manual id info'))
console.log(c.warn('manual id warn'))

console.log('')
console.log('=============')
console.log('')

const d = require('./index').manual.en

console.log(d.success('manual en success'))
console.log(d.error('manual en error'))
console.log(d.info('manual en info'))
console.log(d.warn('manual en warn'))
