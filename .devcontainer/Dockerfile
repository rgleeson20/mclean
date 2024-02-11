ARG VARIANT="20-bullseye"
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

USER node

WORKDIR /home/node/app
RUN chown -R node:node /home/node/app

RUN node -c "npm install -g @angular/cli npm"

COPY --chown=node:node . .
