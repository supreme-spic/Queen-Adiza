const axios = require('axios');

const fetchReactionImage = async ({ Matrix, m, reply, command }) => {
  try {
    const { data } = await axios.get(`https://api.waifu.pics/sfw/${command}`);
    await Matrix.sendImageAsSticker(m.chat, data.url, m, {
      packname: global.packname,
      author: global.author,
    });
  } catch (error) {
    reply(`❌ Error fetching image: ${error.message}`);
  }
};

module.exports = [
  { command: ["8ball"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "8ball" }) },
  { command: ["avatar"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "avatar" }) },
  { command: ["awoo"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "awoo" }) },
  { command: ["bite"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "bite" }) },
  { command: ["blush"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "blush" }) },
  { command: ["bonk"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "bonk" }) },
  { command: ["bully"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "bully" }) },
  { command: ["cringe"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "cringe" }) },
  { command: ["cry"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "cry" }) },
  { command: ["cuddle"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "cuddle" }) },
  { command: ["dance"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "dance" }) },
  { command: ["feed"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "feed" }) },
  { command: ["foxgirl"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "foxgirl" }) },
  { command: ["gecg"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "gecg" }) },
  { command: ["glomp"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "glomp" }) },
  { command: ["goose"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "goose" }) },
  { command: ["handhold"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "handhold" }) },
  { command: ["happy"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "happy" }) },
  { command: ["highfive"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "highfive" }) },
  { command: ["hug"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "hug" }) },
  { command: ["kill"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "kill" }) },
  { command: ["kiss"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "kiss" }) },
  { command: ["lick"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "lick" }) },
  { command: ["lizard"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "lizard" }) },
  { command: ["meow"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "meow" }) },
  { command: ["nom"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "nom" }) },
  { command: ["pat"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "pat" }) },
  { command: ["poke"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "poke" }) },
  { command: ["shinobu"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "shinobu" }) },
  { command: ["slap"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "slap" }) },
  { command: ["smile"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "smile" }) },
  { command: ["smug"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "smug" }) },
  { command: ["spank"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "spank" }) },
  { command: ["tickle"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "tickle" }) },
  { command: ["wave"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "wave" }) },
  { command: ["wink"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "wink" }) },
  { command: ["woof"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "woof" }) },
  { command: ["yeet"], operate: async (Matrixx) => fetchReactionImage({ ...Matrixx, command: "yeet" }) },
];
