const fetch = require("node-fetch");
exports.send = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.logicapples.repl.co`)
      .then((res) => res.json())
      .then((json) => {
        resolve({
          img: json.image,
        });
      });
  });
};

exports.test = fetch("https://api.logicapples.repl.co")
  .then((res) => res.json())
  .then((json) => {
    const image = json.image;
  });