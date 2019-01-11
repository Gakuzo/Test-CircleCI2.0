# Circle CI2.0テスト

## (参考) Circle CIのセットアップ
https://circleci.com/setup-project/gh/manabufujisawa/test02

```
# Javascript Node CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
#
version: 2
jobs:
  build:
    docker:
      # specify the version you desire here
      - image: circleci/node:7.10
      
      # Specify service dependencies here if necessary
      # CircleCI maintains a library of pre-built images
      # documented at https://circleci.com/docs/2.0/circleci-images/
      # - image: circleci/mongo:3.4.4

    working_directory: ~/repo

    steps:
      - checkout

      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-

      - run: yarn install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
        
      # run tests!
      - run: yarn test
```

## Circle CI上でのパスワードの設定方法

(参考) 
https://circleci.com/docs/2.0/env-vars/
```
Adding Environment Variables in the App
To add keys or secret environment variables to your private project, use the Environment Variables page of the Build > Project > Settings in the CircleCI application. The value of the variables are neither readable nor editable in the app after they are set. To change the value of an environment variable, delete the current variable and add it again with the new value. It is possible to add individual variables or to import variables from another project.
```
