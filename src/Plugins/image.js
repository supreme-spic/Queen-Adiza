function hi() {
  console.log("Hello World!");
}
hi();
const {
  remini
} = require("../../lib/remini");
const {
  wallpaper,
  wikimedia
} = require("../../lib/scraper");
module.exports = [{
  command: ["remini", "enhance", "hd"],
  operate: async ({
    m: _0x571cd9,
    prefix: _0x1fa217,
    command: _0x4aa659,
    Cypher: _0x31dd3f,
    mess: _0x2086cc,
    reply: _0x590416
  }) => {
    const _0x264a33 = _0x571cd9.quoted ? _0x571cd9.quoted : null || _0x571cd9.msg;
    const _0x206dcd = _0x264a33?.mimetype || "";
    if (!_0x264a33) {
      return _0x590416("📌 *Send or reply to an image.*");
    }
    if (!/image/.test(_0x206dcd)) {
      return _0x590416("📌 *Send or reply to an image with caption:* " + (_0x1fa217 + _0x4aa659));
    }
    try {
      const _0x569957 = await _0x571cd9.quoted.download();
      if (!_0x569957) {
        return _0x590416("❌ *Failed to download media. Try again.*");
      }
      const _0x157509 = await remini(_0x569957, "enhance");
      await _0x31dd3f.sendMessage(_0x571cd9.chat, {
        image: _0x157509,
        caption: "*Image enhanced successfully*"
      }, {
        quoted: _0x571cd9
      });
    } catch (_0x26468c) {
      console.error(_0x26468c);
      _0x590416("❌ *An error occurred while enhancing the image.*");
    }
  }
}, {
  command: ["wallpaper"],
  operate: async ({
    m: _0xf2b52c,
    text: _0xf653ac,
    Cypher: _0x8a04ed,
    reply: _0x59e0df
  }) => {
    if (!_0xf653ac) {
      return _0x59e0df("📌 *Enter a search query.*");
    }
    try {
      const _0x129b59 = await wallpaper(_0xf653ac);
      if (!_0x129b59.length) {
        return _0x59e0df("❌ *No wallpapers found.*");
      }
      const _0x512449 = _0x129b59[Math.floor(Math.random() * _0x129b59.length)];
      await _0x8a04ed.sendMessage(_0xf2b52c.chat, {
        caption: "📌 *ᴛɪᴛᴛʟᴇ:* " + _0x512449.title + "\n📁 *ᴄᴀᴛᴇɢᴏʀʏ:* " + _0x512449.type + "\n🔗 *sᴏᴜʀᴄᴇ:* " + _0x512449.source + "\n🖼️ *ᴍᴇᴅɪᴀ ᴜʀʟ:* " + (_0x512449.image[2] || _0x512449.image[1] || _0x512449.image[0]),
        image: {
          url: _0x512449.image[0]
        }
      }, {
        quoted: _0xf2b52c
      });
    } catch (_0x4ad4d8) {
      console.error(_0x4ad4d8);
      _0x59e0df("❌ *An error occurred while fetching the wallpaper.*");
    }
  }
}, {
  command: ["wikimedia"],
  operate: async ({
    m: _0x5b6022,
    text: _0x28e96b,
    Cypher: _0x3a4baf,
    reply: _0x3dc1db
  }) => {
    if (!_0x28e96b) {
      return _0x3dc1db("📌 *Enter a search query.*");
    }
    try {
      const _0x318c7e = await wikimedia(_0x28e96b);
      if (!_0x318c7e.length) {
        return _0x3dc1db("❌ *No Wikimedia results found.*");
      }
      const _0x3fc846 = _0x318c7e[Math.floor(Math.random() * _0x318c7e.length)];
      await _0x3a4baf.sendMessage(_0x5b6022.chat, {
        caption: "📌 *ᴛɪᴛʟᴇ:* " + _0x3fc846.title + "\n🔗 *sᴏᴜʀᴄᴇ:* " + _0x3fc846.source + "\n🖼️ *ᴍᴇᴅɪᴀ ᴜʀʟ:* " + _0x3fc846.image,
        image: {
          url: _0x3fc846.image
        }
      }, {
        quoted: _0x5b6022
      });
    } catch (_0x160578) {
      console.error(_0x160578);
      _0x3dc1db("❌ *An error occurred while fetching Wikimedia results.*");
    }
  }
}];