---
title: Manage Your Infer Models
date: "2019-08-26T22:12:03.284Z"
category: Infer Models
tags:
 - Management
---

You can list, edit, and delete Infer Models once you have created some.

## List Infer Models

To list you Infer Models, just do a simple GET request:

```curl
curl -X GET \
  https://api.clarityhub.io/infer/models/ \
  -H 'Authorization: Basic [YOUR BASIC AUTH HERE]' \
  -H 'Content-Type: application/json'
```

You will get a JSON response that looks similar to the following:

```json
{
    "items": [
        {
            "modelId": "MODEL ID",
            "latestVersion": 1566852688710,
            "modifiedAt": 1566852345539,
            "organizationId": "ORGANIZATION ID",
            "createdAt": 1566852345539,
            "description": null,
            "name": "Test Model",
            "creatorUserId": "Access Key"
        }
    ]
}
```

## Edit Infer Models

Once an Infer Model has been created, you can edit the name and description attributes:

```json
{
    "description": "New description",
    "name": "New name"
}
```

Then you can make a PUT reques to update the model:

```curl
curl -X PUT \
  https://api.clarityhub.io/infer/models/b4a3f7d6-dceb-4814-82e3-c0bddcebfc7e \
  -H 'Authorization: Basic [YOUR BASIC AUTH HERE]' \
  -H 'Content-Type: application/json' \
  -d '[YOUR JSON PAYLOAD HERE]'
```

## Delete Infer Models

If you no longer need an Infer Model, you can delete it with the following DELETE request:

```curl
curl -X DELETE \
  https://api.clarityhub.io/infer/models/b4a3f7d6-dceb-4814-82e3-c0bddcebfc7e \
  -H 'Authorization: Basic [YOUR BASIC AUTH HERE]' \
  -H 'Content-Type: application/json'
```

Note that deleting is destructive and non-reversible. Deleting an infer model will cascade delete the labels and any training data associated with the model.
