---
title: Node JS Usage
date: "2020-05-18T12:00:00.000Z"
category: Node JS
tags:
 - Getting Started
---

If you use NodeJS, you can use our [npm package](https://github.com/clarityhub/node-api).

Install using npm:

```sh
npm i --save @clarityhub/node-api axios
```

## Usage

To start using the package in your application, you'll need to create a Clarity Hub instance using an access key id and secret. You can generate one by following the [Create an Access Key](https://docs.clarityhub.io/guides/access-keys/create-access-key/) guide.

```js
const clarityhub = require('@clarityhub/node-api')({
    accessKeyId: process.env.ACCESS_KEY_ID,
    accessKeySecret: process.env.ACCESS_KEY_SECRET,
});
```

## Example

Here is a full end-to-end example using the package:

```js
const myModel = await clarityhub.models.create({
    name: 'human readable name',
    description: 'your model description',
});

await myModel.train([
    { utterance: 'hello world', label: 'greeting' },
    { utterance: 'good morning', label: 'greeting' },
    { utterance: 'how do I login', label: 'auth' },
    { utterance: 'how do I reset my password', label: 'auth' },
]);

const predictions = await myModel.predictSimilar('hi there');
console.log('predicted similar utterance', predictions[0]);

const predictions = await myModel.predictLabel('hi there');
console.log('predicted label', predictions[0]);
```
