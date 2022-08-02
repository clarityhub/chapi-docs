---
title: Get Toxicity
date: "2019-08-26T14:12:03.284Z"
category: NLP
tags:
 - Getting Started
---

You can get the toxicity of utterances by using our toxicity API. This includes attributes on the following characteristics:

- identity_attack
- insult
- obscene
- severe_toxicity
- sexual_explicit
- threat
- toxicity

## Before you start

Before you can get the sentiment using our APIs, you will need to make sure that you have an Access Key ID and Secret ready. See our [Create an Access Key](/guides/access-keys/create-access-key) guide.

## Get your data ready to analyze

In order to get toxicity scores, you will need to make sure your data is formatted properly.

You can supply a list of utterances to analyze:

```json
{
    "utterances": [
        "utterance 1",
        "utterance 2"
    ]
}
```

## Get Toxicity Scores

Now that you have your data ready, you can create a request via the API. ∂Remember to replace `[YOUR BASIC AUTH HERE]` with the base-64 encoded version of your access key id and your access key password, and replace `[YOUR JSON PAYLOAD HERE]` with the JSON payload from above.

```curl
curl -X POST \
  https://api.clarityhub.io/nlp/toxicity \
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
            "labels": {
                "identity_attack": false,
                "insult": false,
                "obscene": false,
                "severe_toxicity": false,
                "sexual_explicit": false,
                "threat": false,
                "toxicity": false
            }
        },
        {
            "utterance": "How are you doing?",
            "labels": {
                "identity_attack": false,
                "insult": false,
                "obscene": false,
                "severe_toxicity": false,
                "sexual_explicit": false,
                "threat": false,
                "toxicity": false
            }
        },
        {
            "utterance": "Is today a good day?",
            "labels": {
                "identity_attack": false,
                "insult": false,
                "obscene": false,
                "severe_toxicity": false,
                "sexual_explicit": false,
                "threat": false,
                "toxicity": false
            }
        }
    ]
}
```
