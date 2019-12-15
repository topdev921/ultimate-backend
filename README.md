<h1 align="center">
ULTIMATE BACKEND
</h1>
  
<p align="center">
  <bold>(WIP)</bold>: This is an enterprise scale advanced microservice pattern with GraphQL, based on Domain  (DDD) using the command query responsibility segregation (CQRS) design pattern.
</p>
    <p align="center">
</p>

<p align="center">
<a href="https://img.shields.io/github/license/juicycleff/ultimate-backend?style=flat-square" target="_blank"><img src="https://img.shields.io/github/license/juicycleff/ultimate-backend?style=flat-square" alt="License"/></a>
<a href="https://img.shields.io/snyk/vulnerabilities/github/juicycleff/ultimate-backend?style=flat-square" target="_blank"><img src="https://img.shields.io/snyk/vulnerabilities/github/juicycleff/ultimate-backend?style=flat-square" alt="Snyk"/></a>
<a href="https://img.shields.io/github/languages/code-size/juicycleff/ultimate-backend?style=flat-square" target="_blank"><img src="https://img.shields.io/github/languages/code-size/juicycleff/ultimate-backend?style=flat-square" alt="Code Size"/></a>
<a href="https://img.shields.io/github/package-json/v/juicycleff/ultimate-backend?style=flat-square" target="_blank"><img src="https://img.shields.io/github/package-json/v/juicycleff/ultimate-backend?style=flat-square" alt="Version"/></a>
<a href="https://img.shields.io/github/languages/top/juicycleff/ultimate-backend?style=flat-square" target="_blank"><img src="https://img.shields.io/github/languages/top/juicycleff/ultimate-backend?style=flat-square" alt="Top Language"/></a>
<a href="https://img.shields.io/codacy/grade/dc460840375d4ac995f5647a5ed10179?style=flat-square" target="_blank"><img src="https://img.shields.io/codacy/grade/dc460840375d4ac995f5647a5ed10179?style=flat-square" alt="Top Language"/></a>
</p>

## Description

This should be the go to backend base for your next scalable project. This is a proof of concept project designed to be extremely slim and scalable, with distributed data request and process handling, built from the ground up for production use. It comes with Multi-Tenancy SaaS support, following different multi-tenancy database strategy as well as different resolver patterns
to identify your tenants. The goal is to give your next big project that extra leap to awesomeness.

## Features

Software features

*   ✅ CQRS
*   ✅ Software as a Service
*   ✅ Authentication by stateful session
*   ✅ User
*   ✅ Event Sourcing
*   ✅ Federated GraphQL Microservice
*   ✅ Emailing Queue
*   ✅ Role Based Access Control (WiP)
*   ✅ Multi Tenancy (WiP)
*   ✅ Payment ([Stripe](https://stripe.com/))
*   ✅ SaaS Plans ([Stripe](https://stripe.com/))
*   ❌ (WiP) Security
*   ❌ Reactive health check for federated service and rebuilding gateway schema
*   ❌ WiP: [React Website](https://github.com/juicycleff/ultimate-backend-dashboard)

### Requirements

| Store and Cache                                            | Stack and frameworks                                                                       | Deployment                                                                     |
|------------------------------------------------------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [Event Store (Event Source Store)](https://eventstore.org) | [NestJS (Server Framework)](https://nestjs.com)                                            | [Docker](https://www.docker.com/)                                              |
| [HazelCast (cache)](https://hazelcast.com/)                | [NodeJS (System runtime)](https://nodejs.org)                                              | [Kubernetes](https://kubernetes.io/)                                           |
| [MongoDB (Database)](https://www.mongodb.com/)             | [Typescript](https://www.typescriptlang.org)                                               | [Azure Pipeline](https://azure.microsoft.com/en-us/services/devops/pipelines/) |
|                                                            | [Apollo Server](https://www.apollographql.com/docs/apollo-server)                          |                                                                                |
|                                                            | [Express JS](https://expressjs.com)                                          |                                                                                |
|                                                            | [Apollo Gateway](https://www.apollographql.com/docs/apollo-server/federation/introduction) |                                                                                |                                                                               |
|                                                            | [Fastify](https://www.fastify.io)                                                          |                                                                                |

## Installation

```bash
$ yarn
```

## Running the admin gateway microservice

```bash
# development for admin gateway
$ yarn run start gateway-admin

# watch mode for admin gateway
$ yarn run start:dev gateway-admin

# production mode for admin gateway
$ yarn run start:prod

# Start with different evironment
$ NODE_ENV=staging npx nest start service-user
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## System

### The Problem

### System Architecture & Design

### System Benefits

## License

  This project is [MIT licensed](LICENSE).
