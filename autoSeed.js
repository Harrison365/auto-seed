const cron = require("node-cron");
const axios = require("axios");

let number = 1;

const seed = () => {
  axios
    .post("https://nc-marketplace-sem-2.onrender.com/api/reset")
    .then(() => {
      console.log(`Another One! Seed #${number++} completed!`);
    })
    .catch((err) => {
      console.log(err);
    });
};

cron.schedule("*/5 * * * * ", () => {
  seed();
});
