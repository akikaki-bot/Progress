# Progress

## What is progress?

簡単にプログレスバーをコンソールでつくれるやーつです

## Install

```cmd
npm i https://github.com/akikaki-bot/progress
```

## How to use?

- NormalProgressBar

```js
const { ProgressBar } = require('progress')

let pgr = new ProgressBar()

pgr.gen({ 10,100 })
//Return [#---------]
```

- Customized ProgressBar

```js

const { ProgressBar } = require('progress')

const progress = new ProgressBar().setProgressTextA('$').setProgressTextB('~').gen( {10, 100} )

console.log(progress)

```

## Licence

このパッケージはMITライセンスで保護されています。
