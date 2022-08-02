---
title: Create an Infer Model
date: "2019-07-24T22:12:03.284Z"
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

Before you can make an Infer Model, you will need to make sure that you have an Access Key ID and Secret ready. See our [Create an Access Key](/guides/access-keys/create-access-key) guide.

## Get your data ready to train

In order to train an infer model to predict labels from your data, you will need to make sure your data is formatted properly.

The simplest way to get started is to pass an object that looks like the following:

```json
{
    "utterances": [
        "utterance 1",
        "utterance 2"
    ]
}
```

If you already know the label for some utterances, or you want to add meta data for your utterances, you can use the verbose syntax:

```json
{
    "utterances": [
        "utterance 1",
        {
            "utterance": "utterance 2",
            "label": "my label",
            "meta": {
                "you can put": "anything here"
            }
        }
    ]
}
```

## Create a model via the API

Now that you have your data ready, you can create a request via the API. Remember to replace `[YOUR BASIC AUTH HERE]` with the base-64 encoded version of your access key id and your access key password.

```curl
curl -X POST \
  https://api.clarityhub.io/infer/models \
  -H 'Authorization: Basic [YOUR BASIC AUTH HERE]' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test Model",
    "description": "Creating a test model"
  }'
```

You will get back a response similar to:

```json
{
    "item": {
        "organizationId": "YOUR ORGANIZATION ID",
        "modelId": "b4a3f7d6-dceb-4814-82e3-c0bddcebfc7e",
        "name": "Test Model",
        "description": "Creating a test model",
        "creatorUserId": "Access Key",
        "createdAt": 1566852345539,
        "modifiedAt": 1566852345539
    }
}
```

Take note of the `modelId` that was returned when you ran the above cURL command.

## Train the model via the API

Now that we have an Infer model, we can train it with the data we got ready.

Remember to replace `[YOUR BASIC AUTH HERE]` with the base-64 encoded version of your access key id and your access key password, and replace `[YOUR JSON PAYLOAD HERE]` with the JSON payload from above.

```curl
curl -X POST \
  https://api.clarityhub.io/infer/models/b4a3f7d6-dceb-4814-82e3-c0bddcebfc7e/train \
  -H 'Authorization: Basic [YOUR BASIC AUTH HERE]' \
  -H 'Content-Type: application/json' \
  -d '[YOUR JSON PAYLOAD HERE]'
```

You will get a response back similar to the following:

```json
{
    "items": [
        {
            "organizationId": "YOUR ORGANIZATION ID",
            "modelId": "b4a3f7d6-dceb-4814-82e3-c0bddcebfc7e",
            "labelId": "0cea0dca-6d34-4b9d-a4f1-32badd53e55b",
            "exemplarUtterance": {
                "utterance": "When does the train arrive?"
            },
            "numberOfUtterances": 1,
            "label": "train",
            "userLabel": null,
            "createdAt": 1566852688710,
            "version": 1566852688710
        }
    ]
}
```

## Notes about Infer Models

Each time you train your model, we will create a new set of labels. These labels are versioned and we will always use the latest version of labels when you use our prediction API unless you specify the version you want to use.

When you train the model, the payload we return will have a version attribute for each label to let you save that version in your system for future use.
