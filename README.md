# Nest JS with NX Workspace

## Setup
- Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- Install nodejs v16 or latest version
- Go to root of directory
- Run `yarn install`
- Setup Gcloud project with cli `gcloud config set project yummy-oms`

## Build App
- Run `yarn nx build stocktake-waste-service --configuration production`

## Deploy App to Gcloud
> With Gcloud beta command line

    Run `yarn nx deploy:beta stocktake-waste-service --gcpProject yummy-oms`
>Without Gcloud beta command line

    Run `yarn nx deploy stocktake-waste-service --gcpProject yummy-oms`

## 📌 Note
- Replace yummy-oms as your target [[project_id]][gcloud-project-id]
[gcloud-project-id]: https://cloud.google.com/sdk/gcloud/reference/projects/list "Google Cloud Project ID"
