const cron = require("node-cron");
const axios = require("axios");
let number = 0;
const seed = () => {
  axios
    .post("https://nc-marketplace-sem-2.onrender.com/api/reset")
    .then((res) => {
      console.log("Another One! Seeded!");
    })
    .catch((err) => {
      console.log(err);
    });
};

cron.schedule("*/1 * * * * ", () => {
  seed();
});
