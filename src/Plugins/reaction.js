function hi() {
  console.log("Hello World!");
}
hi();
const axios = require("axios");
const fetchReactionImage = async ({
  Cypher: _0x2560b2,
  m: _0x340da4,
  reply: _0x391e11,
  command: _0x3f6f3c
}) => {
  try {
    const {
      data: _0x42a8f2
    } = await axios.get("https://api.waifu.pics/sfw/" + _0x3f6f3c);
    await _0x2560b2.sendImageAsSticker(_0x340da4.chat, _0x42a8f2.url, _0x340da4, {
      packname: global.packname,
      author: global.author
    });
  } catch (_0x1cc49f) {
    _0x391e11("❌ Error fetching image: " + _0x1cc49f.message);
  }
};
module.exports = [{
  command: ["8ball"],
  operate: async _0x3dcd24 => fetchReactionImage({
    ..._0x3dcd24,
    command: "8ball"
  })
}, {
  command: ["avatar"],
  operate: async _0x27087c => fetchReactionImage({
    ..._0x27087c,
    command: "avatar"
  })
}, {
  command: ["awoo"],
  operate: async _0x4414c4 => fetchReactionImage({
    ..._0x4414c4,
    command: "awoo"
  })
}, {
  command: ["bite"],
  operate: async _0x429882 => fetchReactionImage({
    ..._0x429882,
    command: "bite"
  })
}, {
  command: ["blush"],
  operate: async _0x144b65 => fetchReactionImage({
    ..._0x144b65,
    command: "blush"
  })
}, {
  command: ["bonk"],
  operate: async _0x5b72e7 => fetchReactionImage({
    ..._0x5b72e7,
    command: "bonk"
  })
}, {
  command: ["bully"],
  operate: async _0x3013e3 => fetchReactionImage({
    ..._0x3013e3,
    command: "bully"
  })
}, {
  command: ["cringe"],
  operate: async _0x33cc4b => fetchReactionImage({
    ..._0x33cc4b,
    command: "cringe"
  })
}, {
  command: ["cry"],
  operate: async _0x1c8ce7 => fetchReactionImage({
    ..._0x1c8ce7,
    command: "cry"
  })
}, {
  command: ["cuddle"],
  operate: async _0x543d61 => fetchReactionImage({
    ..._0x543d61,
    command: "cuddle"
  })
}, {
  command: ["dance"],
  operate: async _0x20e543 => fetchReactionImage({
    ..._0x20e543,
    command: "dance"
  })
}, {
  command: ["feed"],
  operate: async _0xb9be33 => fetchReactionImage({
    ..._0xb9be33,
    command: "feed"
  })
}, {
  command: ["foxgirl"],
  operate: async _0x5c3816 => fetchReactionImage({
    ..._0x5c3816,
    command: "foxgirl"
  })
}, {
  command: ["gecg"],
  operate: async _0x5518c5 => fetchReactionImage({
    ..._0x5518c5,
    command: "gecg"
  })
}, {
  command: ["glomp"],
  operate: async _0x2b72bd => fetchReactionImage({
    ..._0x2b72bd,
    command: "glomp"
  })
}, {
  command: ["goose"],
  operate: async _0x36f50c => fetchReactionImage({
    ..._0x36f50c,
    command: "goose"
  })
}, {
  command: ["handhold"],
  operate: async _0x2674f4 => fetchReactionImage({
    ..._0x2674f4,
    command: "handhold"
  })
}, {
  command: ["happy"],
  operate: async _0x59dc79 => fetchReactionImage({
    ..._0x59dc79,
    command: "happy"
  })
}, {
  command: ["highfive"],
  operate: async _0x48277f => fetchReactionImage({
    ..._0x48277f,
    command: "highfive"
  })
}, {
  command: ["hug"],
  operate: async _0x5e2cf3 => fetchReactionImage({
    ..._0x5e2cf3,
    command: "hug"
  })
}, {
  command: ["kill"],
  operate: async _0x1f5217 => fetchReactionImage({
    ..._0x1f5217,
    command: "kill"
  })
}, {
  command: ["kiss"],
  operate: async _0x4800f0 => fetchReactionImage({
    ..._0x4800f0,
    command: "kiss"
  })
}, {
  command: ["lick"],
  operate: async _0x2aa173 => fetchReactionImage({
    ..._0x2aa173,
    command: "lick"
  })
}, {
  command: ["lizard"],
  operate: async _0x3689e4 => fetchReactionImage({
    ..._0x3689e4,
    command: "lizard"
  })
}, {
  command: ["meow"],
  operate: async _0x3b672f => fetchReactionImage({
    ..._0x3b672f,
    command: "meow"
  })
}, {
  command: ["nom"],
  operate: async _0x28196b => fetchReactionImage({
    ..._0x28196b,
    command: "nom"
  })
}, {
  command: ["pat"],
  operate: async _0x301690 => fetchReactionImage({
    ..._0x301690,
    command: "pat"
  })
}, {
  command: ["poke"],
  operate: async _0x4ae8e1 => fetchReactionImage({
    ..._0x4ae8e1,
    command: "poke"
  })
}, {
  command: ["shinobu"],
  operate: async _0x5b5db7 => fetchReactionImage({
    ..._0x5b5db7,
    command: "shinobu"
  })
}, {
  command: ["slap"],
  operate: async _0x5e2c7a => fetchReactionImage({
    ..._0x5e2c7a,
    command: "slap"
  })
}, {
  command: ["smile"],
  operate: async _0xe03b7c => fetchReactionImage({
    ..._0xe03b7c,
    command: "smile"
  })
}, {
  command: ["smug"],
  operate: async _0x2057c0 => fetchReactionImage({
    ..._0x2057c0,
    command: "smug"
  })
}, {
  command: ["spank"],
  operate: async _0x1c732c => fetchReactionImage({
    ..._0x1c732c,
    command: "spank"
  })
}, {
  command: ["tickle"],
  operate: async _0x1a2ae9 => fetchReactionImage({
    ..._0x1a2ae9,
    command: "tickle"
  })
}, {
  command: ["wave"],
  operate: async _0x2a494e => fetchReactionImage({
    ..._0x2a494e,
    command: "wave"
  })
}, {
  command: ["wink"],
  operate: async _0x118b24 => fetchReactionImage({
    ..._0x118b24,
    command: "wink"
  })
}, {
  command: ["woof"],
  operate: async _0x12e345 => fetchReactionImage({
    ..._0x12e345,
    command: "woof"
  })
}, {
  command: ["yeet"],
  operate: async _0x263188 => fetchReactionImage({
    ..._0x263188,
    command: "yeet"
  })
}];