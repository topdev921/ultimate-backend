<h1 align="center">
ULTIMATE BACKEND
</h1>
  
<p align="center">
  (WiP): This is an enterprise scale advanced microservice pattern with GraphQL, based on Domain  (DDD) using the command query responsibility segregation (CQRS) design pattern. This is a proof of concept project designed to be extremly slim and scalable, with distributed data request and process handling and built from the ground up for production use.
</p>
    <p align="center">
</p>

## Description
This should be the go to backend base for your next scalable project. It comes with Multi-Tenancy, following different multi-tenancy database strategy as well as different resolver patterns
to identify your tenants. The goal is to give your next big project that extra leap to awesomeness.

## Features
Software features

 * ✅ CQRS
 * ✅ Authentication by stateful session
 * ✅ User
 * ✅ Event Sourcing
 * ✅ Federated GraphQL Microservice
 * ❌ Emailing Queue
 * ❌ Authentication by session
 * ✅ Role Based Access Control (WiP)
 * ❌ Security
 * ✅ Multi Tenancy (WiP)
 * ❌ React Website
 
### Requirements
| Store and Cache                                                           | Stack and frameworks                          | Deployment                            |
|---------------------------------------------------------------------------|-----------------------------------------------|----------------------------------------|
| [Event Store (Event Source datastore)](https://eventstore.org)            | [TypeORM](https://typeorm.io)                 | [Docker](https://www.docker.com/) |
| [Redis (For cache database calls and graphql queries)](https://redis.io/) | [NodeJS (System runtime)](https://nodejs.org) | [Kubernetes](https://kubernetes.io/) |
| [MongoDB (Database, can be easily replaced)](https://www.mongodb.com/)    | [Typescript](https://www.typescriptlang.org)  | [Azure Pipeline](https://azure.microsoft.com/en-us/services/devops/pipelines/) |
|                                                                           | [Apollo Server](https://www.apollographql.com/docs/apollo-server) |   |
|                                                                           | [NestJS (Server Framework)](https://nestjs.com) |   |
|                                                                           | [Apollo Gateway](https://www.apollographql.com/docs/apollo-server/federation/introduction) |   |
|                                                                           | [Express JS](https://expressjs.com)            |   |
|                                                                           | [Fastify](https://www.fastify.io)              |   |


## Installation

```bash
$ yarn bootstrap
```

## Running the admin gateway microservice
```bash
# development for admin gateway
$ yarn run start gateway-admin

# watch mode for admin gateway
$ yarn run start:dev gateway-admin

# production mode for admin gateway
$ yarn run start:prod
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

### System requirements

### System Benefits

## License

  This project is [MIT licensed](LICENSE).
