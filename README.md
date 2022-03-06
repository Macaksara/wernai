# @macaksara/wernai

something useless to colorize your nodejs console...

# Instalation

```cli
npm i @macaksara/wernai
```

# Example Usage

You can define with `require('@macaksara/wernai').method.language`

> `require('@macaksara/wernai').<auto | manual>.<id | en>`

> _[Click me to See available method](#method)_

> For now langauge only `id` and `en`, `id` for `Indonesian`, `en` for `English`

```js
const werna = require('@macaksara/wernai').auto.en // auto print to console with English language

werna.success('this is message!')
```

# Output of the [Example Usage](#exaple-usage) above.

![default](https://fs-01.cyberdrop.to/output-usage-hvuSqJTN.png)

# Method

- `auto` - Auto print to console without `console.log` in your code.

```js
require('@macaksara/wernai').auto.en
// or
require('@macaksara/wernai').auto.id
```

```js
const werna = require('@macaksara/wernai').auto.en

werna.success('this is success message!')
werna.error('this is error message!')
werna.info('this is info message!')
werna.warn('this is warn message!')
```

```js
const werna = require('@macaksara/wernai').auto.id

werna.success('ini pesan sukses!')
werna.error('ini pesan eror!')
werna.info('ini pesan info!')
werna.warn('ini pesan peringatan!')
```

> [showcase the all example output](#showcase)

- `manual` - Manually with `console.log` in your code to print to console.

```js
require('@macaksara/wernai').manual.en
// or
require('@macaksara/wernai').manual.id
```

```js
const werna = require('@macaksara/wernai').manual.en

console.log(werna.success('this is success message!'))
console.log(werna.error('this is error message!'))
console.log(werna.info('this is info message!'))
console.log(werna.warn('this is warn message!'))
```

```js
const werna = require('@macaksara/wernai').manual.id

console.log(werna.success('ini pesan sukses!'))
console.log(werna.error('ini pesan eror!'))
console.log(werna.info('ini pesan info!'))
console.log(werna.warn('ini pesan peringatan!'))
```

> [showcase the all example output](#showcase)

# Function
to see all the output of the all function you can go to the [showcase](#showcase) section.
- `<werna>.success('message')` - Success indicator.
- `<werna>.error('message')` - Error indicator.
- `<werna>.info('message')` - Info indicator.
- `<werna>.warn('message')` - Warning indicator.

# Showcase
- `Auto or Manual with English Language:`

![showcaseen](https://fs-01.cyberdrop.to/showcase-en-1sPrPgOd.png)

- `Auto or Manual with Indonesian Language:`

![showcaseen](https://fs-01.cyberdrop.to/showcase-id-A7XLIQbV.png)

