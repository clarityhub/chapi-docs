---
title: Predict using Infer Models
date: "2019-08-26T14:12:03.284Z"
category: Infer Models
tags:
 - Getting Started
---

**Infer Models** allow you to get intents out of a corpus of utterances that you
already have. You don't need to spend time labelling and training a model.

Using our Infer Model API, you can quick train and do two types of predictions:

* Predict the label the utterance belongs to.
* Determine the most similar utterances that have been used to train the model.

## Before you start

Before you can predict using an Infer Model, you will need to make sure that you have an Access Key ID and Secret ready. See our [Create an Access Key](/guides/access-keys/create-access-key) guide. You will also need an existing Infer Model. You can read our [Create an Infer Model](/guides/infer-models/create-infer-model) guide to create one.

## Get your data ready to predict

In order to predict labels from an infer model, you will need to make sure your data is formatted properly.

The simplest way to get started is to pass an object that looks like the following:

```json
{
    "utterances": [
        "utterance 1",
        "utterance 2"
    ]
}
```

## Predict using an Infer Model

Now that you have your data ready, you can create a request via the API. ∂Remember to replace `[YOUR BASIC AUTH HERE]` with the base-64 encoded version of your access key id and your access key password, and replace `[YOUR JSON PAYLOAD HERE]` with the JSON payload from above.

```curl
curl -X POST \
  https://api.clarityhub.io/infer/models/b4a3f7d6-dceb-4814-82e3-c0bddcebfc7e/predict/labels \
  -H 'Authorization: Basic [YOUR BASIC AUTH HERE]' \
  -H 'Content-Type: application/json' \
  -d '[YOUR JSON PAYLOAD HERE]'
```

You will get a response back similar to the following:

```json
{
    "items": [
        {
            "utterance": "Hello there",
            "similar": [
                {
                    "similarity": 0.999999999999996,
                    "label": "greeting"
                },
                {
                    "similarity": 0.43663469475016703,
                    "label": "weather"
                }
            ]
        }
    ]
}
```

## Notes about Infer Models

Each time you train your model, we will create a new set of labels. These labels are versioned and we will always use the latest version of labels when you use our prediction API unless you specify the version you want to use.

When querying an Infer model for labels, you can use the query parameter version to specify which set of labels you want to predict from. IE: `https://api.clarityhub.io/infer/models/b4a3f7d6-dceb-4814-82e3-c0bddcebfc7e/predict/labels?version=XYZ`.
