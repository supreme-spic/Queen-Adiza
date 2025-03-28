function hi() {
  console.log("Hello World!");
}
hi();
const os = require("os");
const fs = require("fs");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
const {
  formatSize,
  checkBandwidth,
  runtime
} = require("../../lib/myfunc");
const checkDiskSpace = require("check-disk-space").default;
const performance = require("perf_hooks").performance;
const botImage = fs.readFileSync("./Media/Images/jin5.jpg");
module.exports = [{
  command: ["botstatus", "statusbot"],
  operate: async ({
    Cypher: _0x30032b,
    m: _0x374d06,
    reply: _0x2e0211
  }) => {
    const _0x2ef71a = process.memoryUsage();
    const _0x3e72c5 = formatSize(_0x2ef71a.heapUsed) + " / " + formatSize(os.totalmem());
    const _0x1223af = formatSize(os.freemem());
    const _0x185a78 = await checkDiskSpace(process.cwd());
    const _0x436b7c = performance.now();
    await _0x2e0211("⏳ *Calculating ping...*");
    const _0x41d6c9 = performance.now();
    const _0x4a24ad = (_0x41d6c9 - _0x436b7c).toFixed(2) + " ms";
    const {
      download: _0x5c08e6,
      upload: _0x5a9571
    } = await checkBandwidth();
    const _0x18b9ab = runtime(process.uptime());
    const _0x342c8b = "\n\n      *🔹 BOT STATUS 🔹*\n\n🔸 *Ping:* " + _0x4a24ad + "\n\n🔹️ *Uptime:* " + _0x18b9ab + "\n\n🔸 *RAM Usage:* " + _0x3e72c5 + "\n\n🔹️ *Free RAM:* " + _0x1223af + "\n\n🔸 *Disk Usage:* " + formatSize(_0x185a78.size - _0x185a78.free) + " / " + formatSize(_0x185a78.size) + "\n\n🔹️ *Free Disk:* " + formatSize(_0x185a78.free) + "\n\n🔸 *Platform:* " + os.platform() + "\n\n🔹️ *NodeJS Version:* " + process.version + "\n\n🔸 *CPU Model:* " + os.cpus()[0].model + "\n\n🔹️ *Downloaded:* " + _0x5c08e6 + "\n\n🔸 *Uploaded:* " + _0x5a9571 + "\n\n";
    _0x30032b.sendMessage(_0x374d06.chat, {
      text: _0x342c8b.trim()
    }, {
      quoted: _0x374d06
    });
  }
}, {
  command: ["pair"],
  operate: async ({
    m: _0x43a65b,
    text: _0x6d32b9,
    reply: _0x8895ab
  }) => {
    if (!_0x6d32b9) {
      return _0x8895ab("*Provide a phone number*\nExample: .pair 23359373431x");
    }
    const _0x2f36c9 = _0x6d32b9.replace(/\+|\s/g, "").trim();
    const _0x322048 = ["https://adiza-session.onrender.com/code?number=" + encodeURIComponent(_0x2f36c9), "https://adiza-session.onrender.com/code?number=" + encodeURIComponent(_0x2f36c9)];
    for (const _0x891021 of _0x322048) {
      try {
        const _0x27a9f3 = await fetch(_0x891021);
        if (!_0x27a9f3.ok) {
          continue;
        }
        const _0x5eb4cb = await _0x27a9f3.json();
        const _0x1d22bf = _0x5eb4cb.code || "No code received";
        return _0x8895ab("*🔹 Pair Code:*\n```" + _0x1d22bf + "```\n\n🔹 *How to Link:* \n\n1. Open WhatsApp on your phone.\n\n2. Go to *Settings > Linked Devices*.\n\n3. Tap *Link a Device* then *Link with Phone*.\n\n4. Enter the pair code above.\n\n5. Alternatively, tap the WhatsApp notification sent to your phone.\n\n\n⏳ *Code expires in 2 minutes!*");
      } catch (_0x492f5b) {
        continue;
      }
    }
    _0x8895ab("❌ *Error fetching pair code. Try again later.*");
  }
}, {
  command: ["ping", "p"],
  operate: async ({
    m: _0x20d4d2,
    Cypher: _0x2f5590
  }) => {
    const _0x210da5 = performance.now();
    try {
      const _0x5aeaf4 = await _0x2f5590.sendMessage(_0x20d4d2.chat, {
        text: "📍Ping!",
        contextInfo: {
          quotedMessage: _0x20d4d2.message
        }
      });
      const _0x3ebbbb = performance.now();
      const _0x3f014e = (_0x3ebbbb - _0x210da5).toFixed(2) + " ms";
      await _0x2f5590.sendMessage(_0x20d4d2.chat, {
        text: "*⚡ 𝙈𝙖𝙩𝙧𝙞𝙭 𝙎𝙥𝙚𝙚𝙙:* " + _0x3f014e,
        edit: _0x5aeaf4.key,
        contextInfo: {
          quotedMessage: _0x20d4d2.message
        }
      });
    } catch (_0x16006d) {
      console.error("Error sending ping message:", _0x16006d);
      await _0x2f5590.sendMessage(_0x20d4d2.chat, {
        text: "An error occurred while trying to ping.",
        contextInfo: {
          quotedMessage: _0x20d4d2.message
        }
      });
    }
  }
}, {
  command: ["runtime", "uptime"],
  operate: async ({
    Cypher: _0x2d4828,
    m: _0x5155a6,
    reply: _0x9c1dac
  }) => {
    const _0x38a366 = runtime(process.uptime());
    _0x9c1dac("*⏰ " + _0x38a366 + "*");
  }
}, {
  command: ["repo", "sc", "repository", "script"],
  operate: async ({
    m: _0x40a183,
    Cypher: _0xdd323,
    reply: _0x2e05a5
  }) => {
    try {
      const {
        data: _0x532684
      } = await axios.get("https://api.github.com/repos/kingmalvn/Jinwoo-bot");
      const _0x29523e = "\n\n        *🔹 𝙈𝙖𝙩𝙧𝙞𝙭 𝘽𝙤𝙩 𝙍𝙚𝙥𝙤 🔹*\n\n        \n\n🤖 *ɴᴀᴍᴇ:* " + _0x532684.name + "\n\n🌟 *sᴛᴀʀs:* " + _0x532684.stargazers_count + "\n\n👥 *𝘿𝙖𝙞𝙡𝙮 𝙐𝙨𝙚𝙧𝙨:* " + _0x532684.forks_count + "\n\n🔎 *ʙᴏᴛ ʟɪɴᴋ:* https://tinyurl.com/2ycs6xve\n\n@" + _0x40a183.sender.split("@")[0] + "👋, Don't forget to star and fork my repository!";
      _0xdd323.sendMessage(_0x40a183.chat, {
        text: _0x29523e.trim(),
        contextInfo: {
          mentionedJid: [_0x40a183.sender],
          externalAdReply: {
            title: "MATRIX v2.4 REPOSITORY",
            thumbnail: botImage,
            mediaType: 1
          }
        }
      }, {
        quoted: _0x40a183
      });
    } catch (_0x39a6c1) {
      _0x2e05a5("❌ *Error fetching repository details.*");
    }
  }
}, {
  command: ["time", "date"],
  operate: async ({
    m: _0x85e0e7,
    reply: _0xeb8670
  }) => {
    const _0x2e844b = moment().tz(global.timezones);
    const _0x2e5c1c = "\n\n      *🔹 CURRENT TIME 🔹*\n\n🗓️ *ᴅᴀʏ:* " + _0x2e844b.format("dddd") + "\n\n⌚ *ᴛɪᴍᴇ:* " + _0x2e844b.format("HH:mm:ss") + "\n\n📆 *ᴅᴀᴛᴇ:* " + _0x2e844b.format("LL") + "\n\n⏰ *ᴛɪᴍᴇᴢᴏɴᴇ:* " + global.timezones + "\n\n";
    _0xeb8670(_0x2e5c1c.trim());
  }
}];
