# node-api-boilerplate

---

This is a boilerplate code to bootstrap a Node.js REST API. It is pre-configured with Swagger, Eslint, Prettier, and Docker in case you need to work with a container. Also, Typescript is already installed and set up out of the box.

## Technologies

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Swagger](https://swagger.io/docs/)
- [Docker](https://docs.docker.com/)


## Running the Project

To run the API, you will need Docker installed on your machine. Once Docker is set up, you can start the project using the following command:

```bash
docker-compose up
```
This command will build the Docker image if it's not already built and start the containers as defined in your docker-compose.yml file. The API should then be accessible at http://localhost:8080.

Make sure your Docker daemon is running and that there are no issues with your Docker setup or the docker-compose.yml file.