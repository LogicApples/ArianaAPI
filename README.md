<div align="center">
  <br />
  <p>
    <a href="https://ariana.js.org"><img src="https://i.ibb.co/jwb9244/2.png" width="546" alt="discord.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/bRCvFy9"><img src="https://img.shields.io/discord/799629261891698738?color=7289da&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/ariana.js"><img src="https://img.shields.io/npm/v/ariana.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/ariana.js"><img src="https://img.shields.io/npm/dt/ariana.js.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/ariana.js/"><img src="https://nodei.co/npm/ariana.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)
- [Links](#links)
- [Help](#help)

## About

ariana.js is a [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Ariana API](https://api.logicapples.repl.co).

It is made for the purpose of making interaction with the [Ariana API](https://api.logicapples.repl.co) easier.

## Installation

`npm install ariana.js`

## Example usage

### Discord bot example:

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const ariana = require("ariana.js");
const image = (await ariana.send()).img;

client.on("ready", () => {
  console.log(`${client.user.tag} Logged in!`);
});

client.on("message", (message) => {
  if (message.content === "ariana") {
    message.channel.send(image);
  }
});

client.login("token");
```

### basic JS:

`coming soon`

## Links

- [Website](https://ariana.js.org/)
- [Documentation](https://ariana.js.org/docs) (soon... for now use this page for documentation.)
- [Ariana.js Discord server](https://discord.gg/h3EAMPuGjz)
- [NPM](https://www.npmjs.com/package/ariana.js)

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Ariana.js Server](https://discord.gg/h3EAMPuGjz).
