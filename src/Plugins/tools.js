function hi() {
  console.log("Hello World!");
}
hi();
const { addReminder } = require("../../lib/remindme.js");
const { parseTime } = require("../../lib/timeparser.js");
const { toAudio } = require('../../lib/converter.js');
const FormData = require("form-data");
const fetch = require("node-fetch");
const googleTTS = require("google-tts-api");
const fs = require("fs");
const axios = require("axios");
const {
  exec
} = require("child_process");
const {
  getRandom
} = require("../../lib/myfunc");
const path = require("path");
const {
  addExif
} = require("../../lib/exif");
const {
  styletext
} = require("../../lib/scraper");
const {
  handleMediaUpload
} = require("../../lib/catbox");
const {
  getDevice
} = require("@whiskeysockets/baileys");
module.exports = [{
  command: ["browse"],
  operate: async ({
    m: _0x38df39,
    text: _0x4f4329,
    Cypher: _0x5a239d,
    reply: _0x59a143
  }) => {
    if (!_0x4f4329) {
      return _0x59a143("Enter URL");
    }
    try {
      let _0x523094 = await fetch(_0x4f4329);
      if (_0x523094.headers.get("Content-Type").includes("application/json")) {
        let _0x2b702f = await _0x523094.json();
        await _0x5a239d.sendMessage(_0x38df39.chat, {
          text: JSON.stringify(_0x2b702f, null, 2)
        }, {
          quoted: _0x38df39
        });
      } else {
        let _0x4a42f5 = await _0x523094.text();
        await _0x5a239d.sendMessage(_0x38df39.chat, {
          text: _0x4a42f5
        }, {
          quoted: _0x38df39
        });
      }
      if (!_0x523094.ok) {
        throw new Error("HTTP Error " + _0x523094.status);
      }
    } catch (_0x5f2cf8) {
      _0x59a143("Error fetching URL: " + _0x5f2cf8.message);
    }
  }
}, {
  command: ["emojimix", "emix"],
  operate: async ({
    m: _0x283888,
    text: _0x156dc3,
    prefix: _0x2d95bc,
    command: _0xd80231,
    Cypher: _0x1a51b2,
    fetchJson: _0x5dab24,
    reply: _0x4abea7
  }) => {
    let [_0x5b303f, _0x5ed854] = _0x156dc3.split`+`;
    if (!_0x5b303f) {
      return _0x4abea7("*Example : " + (_0x2d95bc + _0xd80231) + " 😅+🤔*");
    }
    if (!_0x5ed854) {
      return _0x4abea7("*Example : " + (_0x2d95bc + _0xd80231) + " 😅+🤔*");
    }
    try {
      let _0x5b5c83 = await _0x5dab24("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x5b303f) + "_" + encodeURIComponent(_0x5ed854));
      for (let _0x392500 of _0x5b5c83.results) {
        await _0x1a51b2.sendImageAsSticker(_0x283888.chat, _0x392500.url, _0x283888, {
          packname: global.packname,
          author: global.author,
          categories: _0x392500.tags
        });
      }
    } catch (_0xe670eb) {
      console.error(_0xe670eb);
      _0x4abea7("*An error occurred while fetching emoji mix.*");
    }
  }
}, {
  command: ["fliptext"],
  operate: async ({
    m: _0x37b4e0,
    args: _0x12f6b3,
    prefix: _0x3eb42a,
    command: _0x2343c6,
    reply: _0x1de280
  }) => {
    if (_0x12f6b3.length < 1) {
      return _0x1de280("*Example:\n" + _0x3eb42a + "fliptext Tylor*");
    }
    let _0xcc8611 = _0x12f6b3.join(" ");
    let _0x2177b6 = _0xcc8611.split("").reverse().join("");
    _0x1de280("Normal:\n" + _0xcc8611 + "\n\nFlip:\n" + _0x2177b6);
  }
}, {
  command: ["gsmarena"],
  operate: async ({
    m: _0x2fc680,
    reply: _0x77def,
    text: _0x4d4960
  }) => {
    if (!_0x4d4960) {
      return _0x77def("*Please provide a query to search for smartphones.*");
    }
    try {
      const _0x4ac64c = "https://api.siputzx.my.id/api/s/gsmarena?query=" + encodeURIComponent(_0x4d4960);
      const _0x2af146 = await fetch(_0x4ac64c);
      const _0x220965 = await _0x2af146.json();
      if (!_0x220965.status || !_0x220965.data || _0x220965.data.length === 0) {
        return _0x77def("*No results found. Please try another query.*");
      }
      const _0x1885a1 = _0x220965.data.slice(0, 10);
      let _0x38feb1 = "*Top 10 Results for \"" + _0x4d4960 + "\":*\n\n";
      for (let _0x5addb6 of _0x1885a1) {
        _0x38feb1 += "📱 *Name:* " + _0x5addb6.name + "\n";
        _0x38feb1 += "📝 *Description:* " + _0x5addb6.description + "\n";
        _0x38feb1 += "🌐 [View Image](" + _0x5addb6.thumbnail + ")\n\n";
      }
      _0x77def(_0x38feb1);
    } catch (_0x5725d3) {
      console.error("Error fetching results from GSMArena API:", _0x5725d3);
      _0x77def("❌ An error occurred while fetching results from GSMArena.");
    }
  }
}, {
  command: ["genpass", "genpassword"],
  operate: async ({
    Cypher: _0x578efc,
    m: _0x56c1a5,
    reply: _0x28af75,
    text: _0x15f210
  }) => {
    let _0x58ff5d = _0x15f210 ? parseInt(_0x15f210) : 12;
    let _0x3b6451 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let _0x118ae8 = "";
    for (let _0x42cd4c = 0; _0x42cd4c < _0x58ff5d; _0x42cd4c++) {
      _0x118ae8 += _0x3b6451.charAt(Math.floor(Math.random() * _0x3b6451.length));
    }
    try {
      _0x578efc.sendMessage(_0x56c1a5.chat, {
        text: _0x118ae8
      }, {
        quoted: _0x56c1a5
      });
    } catch (_0x52c038) {
      console.error("Error generating password:", _0x52c038);
      _0x28af75("An error occurred while generating the password.");
    }
  }
}, {
  command: ["device", "getdevice"],
  operate: async ({
    Cypher: _0x20eb04,
    m: _0x42aff7,
    reply: _0x403ac8
  }) => {
    if (!_0x42aff7.quoted) {
      return _0x403ac8("*Please quote a message to use this command!*");
    }
    console.log("Quoted Message:", _0x42aff7.quoted);
    console.log("Quoted Key:", _0x42aff7.quoted?.key);
    try {
      const _0x3650aa = await _0x42aff7.getQuotedMessage();
      if (!_0x3650aa) {
        return _0x403ac8("*Could not detect, please try with newly sent message!*");
      }
      const _0x19c036 = _0x3650aa.key.id;
      const _0x25e7bd = getDevice(_0x19c036) || "Unknown";
      _0x403ac8("The message is sent from *" + _0x25e7bd + "* device.");
    } catch (_0x3cf622) {
      console.error("Error determining device:", _0x3cf622);
      _0x403ac8("Error determining device: " + _0x3cf622.message);
    }
  }
}, {
  command: ["modapk"],
  operate: async ({ Cypher: David, m, reply, text, command }) => {
    const axios = require('axios');
    const cheerio = require('cheerio');

    async function mods(apk) {
      const url = `https://m.happymod.com/search.html?q=${apk}`;
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);

      const apps = [];

      $('.app-info-list .s-app-block').each((index, element) => {
        const app = {
          creator: '`Matrix King`',
          status: 200,
          title: $(element).find('.info-wrap .nowrap a').text().trim(),
          image: $(element).find('.img img').attr('data-src'),
          downloadUrl: `https://m.happymod.com${$(element).find('.down a').attr('href')}`
        };
        apps.push(app);
        if (apps.length >= 5) return false;
      });

      return apps;
    }

    if (!text) {
      return reply(`Enter Text, *Like This Format*: .${command} minecraft`);
    }

    try {
      const response = await mods(text);
      let result = '';

      response.forEach((app, index) => {
        result += `*${index + 1}*. ${app.title}:\n`;
        result += `∘ Download ${app.downloadUrl}\n\n`;
      });

      await David.sendMessage(m.chat, {
        text: result,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: false,
            title: `M O D S  S E A R C H`,
            body: `Looking for Cool and Free Apk Mods!`,
            sourceUrl: 'https://m.happymod.com',
            thumbnailUrl: 'https://imgur.com/a/PD8nT5X',
            mediaType: 2,
            renderLargerThumbnail: true
          }
        }
      });
    } catch (error) {
      console.error("Error fetching mod search results:", error);
      reply("Something went wrong while searching for mods.");
    }
  }
}, {
  command: ["tempmail"],
  operate: async ({
    reply
  }) => {
    try {
      const apiUrl = "https://bk9.fun/tools/tempmail";
      const response = await fetch(apiUrl);

      if (!response.ok) {
        return reply(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.status) {
        const email = data.BK9[0]; // Extract the email address from the response.
        const expiry = data.BK9[2]; // Extract the expiry time

        if(email){
          reply(`Your temporary email address is: ${email}\nIt will expire approximately on: ${expiry}`);
        }else{
          reply("*No email address found in API response*");
        }

      } else {
        reply(data.message || "API request failed.");
      }
    } catch (error) {
      console.error("Error fetching temporary email:", error);
      reply("An error occurred while fetching a temporary email address.");
    }
  }
}, {
  command: ["obfuscate"],
  operate: async ({
    m,
    text,
    reply,
    prefix,
    command
  }) => {
    if (!text) {
      return reply(`*Usage: ${prefix}${command} [your javascript code]*`);
    }
    try {
      const apiUrl = `https://apis.davidcyriltech.my.id/obfuscate?code=${encodeURIComponent(text)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        return reply(`API request failed with status ${response.status}: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        reply("```javascript\n" + data.result.obfuscated_code.code + "\n```"); // Sends obfuscated code within backticks.
      } else {
        reply(data.message || "API request failed.");
      }
    } catch (error) {
      console.error("Error obfuscating code:", error);
      reply("An error occurred while obfuscating the code.");
    }
  }
}, {
  command: ["speak"], // Changed command name for clarity
  operate: async ({ m, text, reply, prefix, command, Cypher }) => {
    const apiKey = "MatrixZatKing";
    const voiceId = "21m00Tcm4TlvDq8ikWAM"; // ElevenLabs voice ID

    if (!text) {
      return reply(`*Usage: ${prefix}${command} [text]*`);
    }

    const textToSpeak = encodeURIComponent(text.trim());
    const apiUrl = `https://api.nexoracle.com/tts/elevenlabs?apikey=${apiKey}&id=${voiceId}&text=${textToSpeak}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
        return reply(`API request failed with status ${response.status}: ${errorMessage}`);
      }

      const data = await response.json();

      if (data.status === 200 && data.result) {
        const audioUrl = data.result;
        const audioBuffer = await fetch(audioUrl).then(res => res.buffer()); //Download the audio

        await Cypher.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' }, { quoted: m }); //Send audio message
      } else {
        reply(`API error: ${data.status} - ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error generating TTS audio:", error);
      reply("An error occurred while generating the TTS audio.");
    }
  }
}, {
  command: ["removebg", "rmbg"],
  tags: ["tools"],
  help: ["removebg"],
  operate: async ({ Cypher, m, reply }) => {
    try {
      const q = m.quoted ? m.quoted : m;
      const mime = (q.msg || q).mimetype || '';

      if (!mime.startsWith("image/") || !/\/(jpe?g|png)/.test(mime)) {
        return reply("❌ Please reply to a valid image (jpg, webp, jpeg, png).");
      }

      await Cypher.sendMessage(m.chat, {
        react: { text: "⏳", key: m.key }
      });

      const img = await Cypher.downloadMediaMessage(q);
      const formData = new FormData();
      formData.append("size", "auto");
      formData.append("image_file", img, "image.jpg");

      const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
        headers: {
          ...formData.getHeaders(),
          "X-Api-Key": "Zp1HW5vtCXNDZe6XLBheY4xP", // Your API key
        },
        responseType: "arraybuffer",
      });

      const buffer = Buffer.from(response.data, "binary");
      await Cypher.sendMessage(m.chat, {
        image: buffer,
        caption: "✅ *Background removed successfully!🚀*",
      }, { quoted: m });

      await Cypher.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
      });

    } catch (err) {
      console.error(err);
      await Cypher.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
      });
      reply("❌ Failed to remove background. Make sure your image is valid and try again.");
    }
  }
}, {
  command: ["walink"],
  tags: ["tools"],
  help: ["walink"],
  operate: async ({ Cypher, m, text, reply, command, prefix }) => {
    await Cypher.sendMessage(m.chat, {
      react: { text: "⏳", key: m.key }
    });

    let waLin = '';
    if (text) {
      waLin = text.replace(/[^0-9]/g, '');
    } else if (m.quoted) {
      waLin = m.quoted.sender.replace(/[^0-9]/g, '');
    } else if (m.mentionedJid && m.mentionedJid[0]) {
      waLin = m.mentionedJid[0].replace(/[^0-9]/g, '');
    } else {
      await Cypher.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
      });
      return reply(
        `*Please provide a number, quote a user, or mention someone!*\n\n` +
        `*Examples:*\n` +
        `- ${prefix + command} 2349012345678\n` +
        `- Reply to a user's message with: ${prefix + command}\n` +
        `- Mention a user like: ${prefix + command} @someone`
      );
    }

    const waLink = `https://wa.me/${waLin}`;
    const message = `*WhatsApp Link:*\n${waLink}`;

    await Cypher.sendMessage(m.chat, {
      text: message,
      quoted: m,
      contextInfo: {
        mentionedJid: [m.sender],
      },
    });

    await Cypher.sendMessage(m.chat, {
      react: { text: "✅", key: m.key }
    });
  }
}, {
  command: ["remindme", "remind"],
  operate: async ({
    Cypher: _0x3fbb3e,
    m: _0x52a939,
    reply: _0x1bde34,
    text: _0x30c487
  }) => {
    await _0x3fbb3e.sendMessage(_0x52a939.chat, {
      react: {
        text: "⏰",
        key: _0x52a939.key
      }
    });

    if (!_0x30c487) {
      await _0x3fbb3e.sendMessage(_0x52a939.chat, {
        react: {
          text: "❌",
          key: _0x52a939.key
        }
      });

      return _0x1bde34(
        `⚠️ *Examples:*\n\n` +
        `• \`remindme 10m Take a break!\`\n` +
        `• \`remindme 2h Check the oven\`\n` +
        `• \`remindme 1d Submit assignment\`\n` +
        `• \`remindme 30d Join meeting\`\n\n` +
        `Supported formats: \`m\`, \`h\`, \`d\``
      );
    }

    const _0x17ab72 = _0x30c487.trim().split(" ");
    const _0x5dfb95 = _0x17ab72.shift();
    const _0x2b2ef1 = _0x17ab72.join(" ").trim();

    const _0x56cc5d = parseTime(_0x5dfb95);
    if (!_0x56cc5d) {
      return _0x1bde34("❌ *Invalid time format.* Use `10m`, `2h`, `1d`, or 30d vacation`.");
    }

    if (!_0x2b2ef1) return _0x1bde34("⏳ *What should I remind you about?*");

    addReminder(
      _0x52a939.chat,
      _0x2b2ef1,
      _0x56cc5d,
      (r) => _0x3fbb3e.sendMessage(r.chat, { text: `⏰ Reminder:\n${r.message}` })
    );

    const _0x37fc9c = new Date(_0x56cc5d).toLocaleString("en-GB", {
      timeZone: "Africa/Lagos", // adjust to your user base
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });

    const _0xeta = (() => {
      const ms = _0x56cc5d - Date.now();
      const s = Math.floor((ms / 1000) % 60);
      const m = Math.floor((ms / (1000 * 60)) % 60);
      const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
      const d = Math.floor(ms / (1000 * 60 * 60 * 24));
      return `${d ? `${d}d ` : ""}${h ? `${h}h ` : ""}${m ? `${m}m ` : ""}${s ? `${s}s` : ""}`.trim();
    })();

    _0x1bde34(`✅ Reminder set for:\n⏰ *${_0x37fc9c}*\n⏳ In: *${_0xeta}*\n📌 *${_0x2b2ef1}*`);
  }
}, {
  command: ["tomp3"],
  tags: ["tools"],
  help: ["videotomp3 <reply to a video>"],
  operate: async ({ Cypher, m, quoted, reply }) => {
    await Cypher.sendMessage(m.chat, {
      react: { text: "⏳", key: m.key }
    });

    if (!quoted || quoted.mtype !== "videoMessage") {
      await Cypher.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
      });
      return reply("*Please reply to a video to convert it to MP3!*");
    }

    try {
      const { toMp3 } = require("../../lib/converter");
      const media = await quoted.download();
      const audio = await toMp3(media, "mp4");

      await Cypher.sendMessage(m.chat, {
        audio: audio.data,
        mimetype: "audio/mpeg",
        ptt: false,
        quoted: m
      });

      await audio.delete?.();

      await Cypher.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
      });
    } catch (e) {
      console.error(e);
      await Cypher.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
      });
      reply("*Failed to convert video to MP3.*");
    }
  }
}, {
  command: ["calc"],
  operate: async ({
    Cypher: _0x56a354, // Assuming 'Cypher' is your messaging object
    m,
    text,
    reply,
    prefix,
    command
  }) => {
    // React with a calculator emoji when the command is received
    await _0x56a354.sendMessage(m.chat, {
      react: {
        text: "🧮",
        key: m.key
      }
    });

    if (!text) {
      await _0x56a354.sendMessage(m.chat, {
        react: {
          text: "❓",
          key: m.key
        }
      });
      return reply(`*Usage: ${prefix}${command} [your calculation]*`);
    }
    try {
      const expression = text.trim(); // Remove extra whitespace
      const apiUrl = `https://apis.davidcyriltech.my.id/tools/calculate?expr=${encodeURIComponent(expression)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        await _0x56a354.sendMessage(m.chat, {
          react: {
            text: "⚠️",
            key: m.key
          }
        });
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        return reply(`API request failed with status ${response.status}: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        await _0x56a354.sendMessage(m.chat, {
          react: {
            text: "✅",
            key: m.key
          }
        });
        reply(`Result of ${data.expression}: ${data.result}`);
      } else {
        await _0x56a354.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key
          }
        });
        reply(data.message || "API request failed.");
      }
    } catch (error) {
      console.error("Error calculating:", error);
      await _0x56a354.sendMessage(m.chat, {
        react: {
          text: "🚫",
          key: m.key
        }
      });
      reply("An error occurred while performing the calculation.");
    }
  }
}, {
  command: ["base64encoder", "encode"],
  operate: async ({ m, text, reply, prefix, command }) => {
    if (!text) {
      return reply(`*Usage: ${prefix}${command} [text to encode]*`);
    }

    try {
      const textToEncode = text.trim();
      const apiUrl = `https://api.siputzx.my.id/api/tools/text2base64?text=${encodeURIComponent(textToEncode)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        return reply(`API request failed with status ${response.status}: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();

      if (data.status) {
        reply(`Base64 encoded text: \`${data.data.base64}\``);
      } else {
        reply(data.message || "API request failed.");
      }
    } catch (error) {
      console.error("Error encoding text:", error);
      reply("An error occurred while encoding the text.");
    }
  }
}, {
  command: ["base64decoder", "decode"],
  operate: async ({ m, text, reply, prefix, command }) => {
    if (!text) {
      return reply(`*Usage: ${prefix}${command} [base64 text to decode]*`);
    }

    const apiKey = "08da4ef3bedbb2a90a"; // Your API key
    const apiUrl = `https://api.nexoracle.com/converter/decode-base64?apikey=${apiKey}&text=${encodeURIComponent(text.trim())}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
        return reply(`API request failed with status ${response.status}: ${errorMessage}`);
      }

      const data = await response.json();

      if (data.status === 200) {
        if (data.result && data.result.text) {
          reply(`Decoded text: \`${data.result.text}\``);
        } else {
          reply("*API returned a successful status but no decoded text.*");
        }
      } else {
        reply(`API error: ${data.status} - ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error decoding Base64:", error);
      reply("An error occurred while decoding the Base64 text.");
    }
  }
}, {
  command: ["qrcode"],
  operate: async ({
    Cypher: _0x8342f7,
    m: _0x4e6c34,
    reply: _0xa7203c,
    text: _0xdf311a
  }) => {
    if (!_0xdf311a) {
      return _0xa7203c("Enter text or URL");
    }
    try {
      let _0x442dae = await fetch("https://api.qrserver.com/v1/create-qr-code/?data=" + _0xdf311a + "&size=200x200");
      let _0x242d62 = _0x442dae.url;
      await _0x8342f7.sendMessage(_0x4e6c34.chat, {
        image: {
          url: _0x242d62
        }
      }, {
        quoted: _0x4e6c34
      });
    } catch (_0x21a38e) {
      console.error("Error generating QR code:", _0x21a38e);
      _0xa7203c("An error occurred while generating the QR code.");
    }
  }
}, {
  command: ['jid'],
  tags: ['tools'],
  help: ['jid'],
  operate: async ({ m, isGroup, reply, command, prefix }) => {
    let jid;

    if (isGroup) {
      if (m.quoted) {
        jid = m.quoted.sender;
      } else if (m.mentionedJid && m.mentionedJid.length) {
        jid = m.mentionedJid[0];
      } else {
        return reply(`*Please quote or mention someone to get their JID!*\n\n*EG:* ${prefix}${command} @username`);
      }
    } else {
      jid = m.chat;
    }

    reply(`*JID:* ${jid}`);
  }
}, {
  command: ["say", "tts"],
  operate: async ({
    m: _0x3da4af,
    args: _0x2b995d,
    reply: _0x52e98b,
    Cypher: _0x199131
  }) => {
    let _0x5648ae = _0x2b995d.join(" ");
    if (!_0x5648ae) {
      return _0x52e98b("*Text needed!*");
    }
    try {
      const _0x534632 = await googleTTS.getAllAudioBase64(_0x5648ae, {
        lang: "en",
        slow: false,
        host: "https://translate.google.com",
        timeout: 10000
      });
      if (!_0x534632.length) {
        return _0x52e98b("*Failed to generate TTS audio.*");
      }
      const _0x1664c2 = [];
      for (let _0x56b54b = 0; _0x56b54b < _0x534632.length; _0x56b54b++) {
        let _0x239ffc = "/tmp/tts_part" + _0x56b54b + ".mp3";
        fs.writeFileSync(_0x239ffc, Buffer.from(_0x534632[_0x56b54b].base64, "base64"));
        _0x1664c2.push(_0x239ffc);
      }
      let _0x47589c = "/tmp/tts_merged.mp3";
      let _0x3362ac = "ffmpeg -i \"concat:" + _0x1664c2.join("|") + "\" -acodec copy " + _0x47589c;
      exec(_0x3362ac, async _0xf474a3 => {
        if (_0xf474a3) {
          console.error("FFmpeg error:", _0xf474a3);
          return _0x52e98b("*Error merging audio files.*");
        }
        await _0x199131.sendMessage(_0x3da4af.chat, {
          audio: fs.readFileSync(_0x47589c),
          mimetype: "audio/mp4",
          ptt: true,
          fileName: "tts_audio.mp3"
        }, {
          quoted: _0x3da4af
        });
        _0x1664c2.forEach(_0x1ad8a2 => fs.unlinkSync(_0x1ad8a2));
        fs.unlinkSync(_0x47589c);
      });
    } catch (_0x3c2217) {
      console.error("Error in TTS Command:", _0x3c2217);
      _0x52e98b("*An error occurred while processing the TTS request.*");
    }
  }
}, {
  command: ["ssweb", "screenshot", "ss"],
  operate: async ({
    Cypher: _0x5b0132,
    m: _0x2f70b1,
    reply: _0x434ff4,
    args: _0x48ecc5
  }) => {
    const _0x4280a1 = _0x48ecc5.join(" ");
    if (!_0x4280a1) {
      return _0x434ff4("Please provide a URL to screenshot!");
    }
    const _0x33b07c = "https://api.siputzx.my.id/api/tools/ssweb?url=" + _0x4280a1 + "&theme=light&device=mobile";
    try {
      await _0x5b0132.sendMessage(_0x2f70b1.chat, {
        image: {
          url: _0x33b07c
        }
      }, {
        quoted: _0x2f70b1
      });
    } catch (_0x4a915f) {
      console.error("Error generating screenshot:", _0x4a915f);
      _0x434ff4("An error occurred while generating the image.");
    }
  }
}, {
  command: ["sswebpc"],
  operate: async ({
    Cypher: _0x8757d7,
    m: _0x381d86,
    reply: _0x2b03d9,
    args: _0x5a2dcd
  }) => {
    const _0x53973f = _0x5a2dcd.join(" ");
    if (!_0x53973f) {
      return _0x2b03d9("Please provide a URL to screenshot!");
    }
    const _0x34d3af = "https://api.siputzx.my.id/api/tools/ssweb?url=" + _0x53973f + "&theme=light&device=desktop";
    try {
      await _0x8757d7.sendMessage(_0x381d86.chat, {
        image: {
          url: _0x34d3af
        }
      }, {
        quoted: _0x381d86
      });
    } catch (_0x28a5e1) {
      console.error("Error generating screenshot:", _0x28a5e1);
      _0x2b03d9("An error occurred.");
    }
  }
}, {
  command: ["sswebtab"],
  operate: async ({
    Cypher: _0x5014c4,
    m: _0x354d9b,
    reply: _0x30fea6,
    args: _0x514764
  }) => {
    const _0x36163a = _0x514764.join(" ");
    if (!_0x36163a) {
      return _0x30fea6("Please provide a URL to screenshot!");
    }
    const _0x2dbb10 = "https://api.siputzx.my.id/api/tools/ssweb?url=" + _0x36163a + "&theme=light&device=tablet";
    try {
      await _0x5014c4.sendMessage(_0x354d9b.chat, {
        image: {
          url: _0x2dbb10
        }
      }, {
        quoted: _0x354d9b
      });
    } catch (_0x343a8b) {
      console.error("Error generating screenshot:", _0x343a8b);
      _0x30fea6("An error occurred.");
    }
  }
}, {
  command: ["channel", "followchannel"],
  operate: async ({ Cypher: David, m, reply }) => {
    try {
      await David.sendMessage(m.chat, {
        react: {
          text: `💝`,
          key: m.key
        }
      });

      reply(`*🌹FOLLOW OUR OFFICIAL CHANNEL🌹*\n\nhttps://chat.whatsapp.com/Iz8jA4DdW9qCQpR0YbMlnz`);
    } catch (error) {
      console.error("Error sending channel link:", error);
      reply("Failed to share the channel link.");
    }
  }
}, {
  command: ["sticker", "s"],
  operate: async ({
    Cypher: _0x234f03,
    m: _0x220d6f,
    reply: _0x4e0c68,
    args: _0x367524,
    prefix: _0x68307b,
    command: _0x1b5c6e
  }) => {
    const _0x56d209 = _0x220d6f.quoted || _0x220d6f.msg?.quoted;
    if (!_0x56d209) {
      return _0x4e0c68("Send or reply to images, videos, or gifs with captions " + (_0x68307b + _0x1b5c6e));
    }
    const _0x322024 = _0x56d209.mimetype || _0x56d209.msg?.mimetype;
    if (!_0x322024) {
      return _0x4e0c68("The quoted message does not contain media. Please send or reply to an image, video, or gif.");
    }
    const _0x6fc7dc = _0x367524.join(" ");
    const _0x4e3517 = _0x6fc7dc.split("|")[0];
    const _0x1ba6a4 = _0x6fc7dc.split("|")[1];
    try {
      if (/image/.test(_0x322024)) {
        const _0x34a666 = await _0x56d209.download();
        await _0x234f03.sendImageAsSticker(_0x220d6f.chat, _0x34a666, _0x220d6f, {
          packname: _0x4e3517 ? _0x4e3517 : global.packname,
          author: _0x1ba6a4 ? _0x1ba6a4 : global.author
        });
      } else if (/video/.test(_0x322024)) {
        if ((_0x56d209.msg || _0x56d209).seconds > 10) {
          return _0x4e0c68("The video length must be 10 seconds or less. Please try again.");
        }
        const _0x4c681a = await _0x56d209.download();
        await _0x234f03.sendVideoAsSticker(_0x220d6f.chat, _0x4c681a, _0x220d6f, {
          packname: _0x4e3517 ? _0x4e3517 : global.packname,
          author: _0x1ba6a4 ? _0x1ba6a4 : global.author
        });
      } else {
        return _0x4e0c68("Send or reply to images, videos, or gifs with captions " + (_0x68307b + _0x1b5c6e));
      }
    } catch (_0x524451) {
      console.error("Error processing sticker:", _0x524451);
      _0x4e0c68("An error occurred while processing the sticker.");
    }
  }
}, {
  command: ["fancy", "styletext"],
  operate: async ({
    m: _0xa6e330,
    text: _0xbdf789,
    Cypher: _0x22c0cc,
    reply: _0xff96b7
  }) => {
    if (!_0xbdf789) {
      return _0xff96b7("*Enter a text!*");
    }
    try {
      let _0x2512a4 = await styletext(_0xbdf789);
      let _0x37900f = "Styles for " + _0xbdf789 + "\n\n";
      for (let _0x16b88a of _0x2512a4) {
        _0x37900f += "□ *" + _0x16b88a.name + "* : " + _0x16b88a.result + "\n\n";
      }
      _0xff96b7(_0x37900f);
    } catch (_0x1aeac4) {
      console.error(_0x1aeac4);
      _0xff96b7("*An error occurred while fetching fancy text styles.*");
    }
  }
}, {
  command: ["take", "wm", "steal"],
  operate: async ({
    Cypher: _0x55f51c,
    m: _0x4a7857,
    reply: _0x24fe35,
    args: _0x3e404b,
    pushname: _0x3fbb81
  }) => {
    if (!_0x4a7857.quoted) {
      return _0x24fe35("Please reply to a sticker to add watermark or metadata.");
    }
    try {
      let _0x25ef13 = _0x3e404b.join(" ").split("|");
      let _0x4106ae = _0x25ef13[0] && _0x25ef13[0].trim() !== "" ? _0x25ef13[0] : _0x3fbb81 || global.packname;
      let _0x49bd86 = _0x25ef13[1] ? _0x25ef13[1].trim() : "";
      let _0x3d3305 = _0x4a7857.quoted.mimetype || "";
      if (!/webp/.test(_0x3d3305)) {
        return _0x24fe35("Please reply to a sticker.");
      }
      let _0x3f27b6 = await _0x4a7857.quoted.download();
      if (!_0x3f27b6) {
        return _0x24fe35("Failed to download the sticker. Please try again.");
      }
      let _0x3f03e8 = await addExif(_0x3f27b6, _0x4106ae, _0x49bd86);
      if (_0x3f03e8) {
        await _0x55f51c.sendFile(_0x4a7857.chat, _0x3f03e8, "sticker.webp", "", _0x4a7857, null, {
          mentions: [_0x4a7857.sender]
        });
      } else {
        throw new Error("Failed to process the sticker with metadata.");
      }
    } catch (_0x1488c4) {
      console.error("Error in watermark/sticker metadata plugin:", _0x1488c4);
      _0x24fe35("An error occurred while processing the sticker.");
    }
  }
}, {
  command: ["tinyurl", "shortlink"],
  operate: async ({
    m: _0xf73a06,
    text: _0x10b117,
    prefix: _0x4cc531,
    command: _0x4ac30e,
    reply: _0x23f3df
  }) => {
    if (!_0x10b117) {
      return _0x23f3df("*Example: " + (_0x4cc531 + _0x4ac30e) + " https://instagram.com/heyits_tylor*");
    }
    try {
      const _0x36bc79 = await axios.get("https://tinyurl.com/api-create.php?url=" + _0x10b117);
      _0x23f3df(_0x36bc79.data);
    } catch (_0x4a4fb3) {
      console.error(_0x4a4fb3);
      _0x23f3df("*An error occurred while shortening the URL.*");
    }
  }
}, {
  command: ["toimage", "toimg"],
  operate: async ({
    Cypher: _0x198348,
    m: _0x3c592f,
    reply: _0x4b6891,
    args: _0x40252e,
    prefix: _0x466656,
    command: _0x5d2deb
  }) => {
    const _0x18ca51 = _0x3c592f.quoted || _0x3c592f.msg?.quoted;
    const _0x1f5410 = _0x18ca51?.mimetype || _0x18ca51?.msg?.mimetype;
    if (!_0x18ca51 || !/webp/.test(_0x1f5410)) {
      return _0x4b6891("*Send or reply to a sticker with the caption " + (_0x466656 + _0x5d2deb) + "*");
    }
    try {
      const _0x574ea2 = await _0x18ca51.download();
      const _0x505a47 = path.join(__dirname, getRandom(".webp"));
      fs.writeFileSync(_0x505a47, _0x574ea2);
      const _0x16dee5 = path.join(__dirname, getRandom(".png"));
      exec("ffmpeg -i " + _0x505a47 + " " + _0x16dee5, _0xfd980b => {
        fs.unlinkSync(_0x505a47);
        if (_0xfd980b) {
          console.error("Error converting to image:", _0xfd980b);
          return _0x4b6891("An error occurred while converting the sticker to an image.");
        }
        const _0x2cf7c0 = fs.readFileSync(_0x16dee5);
        _0x198348.sendMessage(_0x3c592f.chat, {
          image: _0x2cf7c0
        }, {
          quoted: _0x3c592f
        });
        fs.unlinkSync(_0x16dee5);
      });
    } catch (_0x49ec00) {
      console.error("Error converting to image:", _0x49ec00);
      _0x4b6891("An error occurred while converting the sticker to an image.");
    }
  }
}, {
  command: ["currency"],
  operate: async ({ m, text, reply, prefix, command }) => {
    //Check for correct input format: amount, from_currency, to_currency
    const parts = text.trim().split(" ");
    if (parts.length !== 3) {
      return reply(`*Usage: ${prefix}${command} [amount] [from_currency] [to_currency]*\nExample: ${prefix}${command} 100 USD GHS`);
    }

    const amount = parseFloat(parts[0]);
    const fromCurrency = parts[1].toUpperCase();
    const toCurrency = parts[2].toUpperCase();

    if (isNaN(amount) || amount <= 0) {
      return reply("Invalid amount. Please enter a positive number.");
    }

    try {
      const apiUrl = `https://apis.davidcyriltech.my.id/tools/convert?amount=${encodeURIComponent(amount)}&from=${encodeURIComponent(fromCurrency)}&to=${encodeURIComponent(toCurrency)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        return reply(`API request failed with status ${response.status}: ${errorData.message || response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        reply(`${amount} ${fromCurrency} is equal to ${data.result} ${toCurrency}`);
      } else {
        reply(data.message || "API request failed.");
      }
    } catch (error) {
      console.error("Error converting currency:", error);
      reply("An error occurred while converting the currency.");
    }
  }
}, {
  command: ["tourl", "url"],
  operate: async ({
    m: _0x35341b,
    Cypher: _0x1f5154,
    reply: _0x1e16f9
  }) => {
    const _0xa29476 = _0x35341b.quoted || _0x35341b.msg?.quoted;
    const _0x245b8a = _0xa29476?.mimetype || _0xa29476?.msg?.mimetype;
    if (!_0xa29476 || !_0x245b8a) {
      return _0x1e16f9("*Please reply to a media message!*");
    }
    try {
      const _0x4fdca0 = await handleMediaUpload(_0xa29476, _0x1f5154, _0x245b8a);
      _0x1e16f9("*Uploaded successfully:*\n" + _0x4fdca0);
    } catch (_0x441286) {
      console.error(_0x441286);
      _0x1e16f9("*An error occurred while uploading the media.*");
    }
  }
}, {
  command: ["teraboxdl", "tbxd"],
  operate: async ({ m, text, reply, prefix, command }) => {
    if (!text) {
      return reply(`*Usage: ${prefix}${command} [Terabox download link]*`);
    }

    try {
      const teraboxLink = text.trim();
      const apiUrl = `https://vapis.my.id/api/terabox?url=${encodeURIComponent(teraboxLink)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        const errorMessage = `API request failed with status ${response.status}: ${errorData.message || response.statusText}`;
        return reply(errorMessage);
      }

      const data = await response.json();

      if (data.status && data.data && data.data.length > 0) {
        const file = data.data[0]; // Assuming only one file is returned
        reply(`Filename: ${file.filename}\nSize: ${file.size} bytes\nDownload URL: ${file.downloadUrl}`);
      } else {
        reply(data.message || "API request failed.  No download URL found.");
      }
    } catch (error) {
      console.error("Error getting Terabox download link:", error);
      reply("An error occurred while processing the Terabox link.");
    }
  }
}, {
  command: ["checktime"],
  operate: async ({ Cypher, m, reply, text, prefix, command }) => {
    // React with loading emoji first
    await Cypher.sendMessage(m.chat, {
      react: {
        text: "⏳",
        key: m.key
      }
    });

    if (!text) {
      await Cypher.sendMessage(m.chat, {
        react: {
          text: "❌",
          key: m.key
        }
      });
      return reply(`*Usage:* ${prefix}${command} [country or city name]\n\nExample: ${prefix}${command} India`);
    }

    const timezones = {
      ghana: "Africa/Accra",
      india: "Asia/Kolkata",
      nigeria: "Africa/Lagos",
      usa: "America/New_York",
      uk: "Europe/London",
      canada: "America/Toronto",
      australia: "Australia/Sydney",
      japan: "Asia/Tokyo",
      germany: "Europe/Berlin",
      france: "Europe/Paris",
      china: "Asia/Shanghai",
      russia: "Europe/Moscow",
      brazil: "America/Sao_Paulo",
      kenya: "Africa/Nairobi",
      southafrica: "Africa/Johannesburg"
    };

    try {
      const input = text.trim().toLowerCase().replace(/\s+/g, '');
      const zone = timezones[input] || text.trim();
      const query = encodeURIComponent(zone);
      const apiUrl = `https://timeapi.io/api/Time/current/zone?timeZone=${query}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        await Cypher.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key
          }
        });
        return reply(`Failed to fetch time for *${text}*.`);
      }

      const data = await response.json();

      if (!data || !data.dateTime) {
        await Cypher.sendMessage(m.chat, {
          react: {
            text: "❌",
            key: m.key
          }
        });
        return reply(`Time data not found for "*${text}*".`);
      }

      const time = new Date(data.dateTime);
      const formattedTime = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      const formattedDate = time.toDateString();

      await Cypher.sendMessage(m.chat, {
        react: {
          text: "✅",
          key: m.key
        }
      });

      reply(`Current time in *${text}*:\n*${formattedTime}* (${formattedDate})`);
    } catch (error) {
      console.error("Time fetch error:", error);
      await Cypher.sendMessage(m.chat, {
        react: {
          text: "❌",
          key: m.key
        }
      });
      reply("An error occurred while fetching the time.");
    }
  }
}, {
  command: ["find"],
  operate: async ({ m, reply, Cypher }) => {
    const crypto = require('crypto');
    const FormData = require('form-data');
    const { audioCut } = require('../../lib/audio');

    const acrOptions = {
      host: 'identify-eu-west-1.acrcloud.com',
      endpoint: '/v1/identify',
      signature_version: '1',
      data_type: 'audio',
      secure: true,
      access_key: 'c816ad50a2bd6282e07b90447d93c38c',
      access_secret: 'ZpYSwmCFpRovcSQBCFCe1KArX7xt8DTkYx2XKiIP',
    };

    function buildStringToSign(method, uri, accessKey, dataType, signatureVersion, timestamp) {
      return [method, uri, accessKey, dataType, signatureVersion, timestamp].join('\n');
    }

    function sign(signString, accessSecret) {
      return crypto
        .createHmac('sha1', accessSecret)
        .update(Buffer.from(signString, 'utf-8'))
        .digest()
        .toString('base64');
    }

    const quoted = m.quoted || m.msg?.quoted;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (!quoted || !(mimetype && (mimetype.includes("audio") || mimetype.includes("video")))) {
      return reply("*Reply to an audio or video message!*");
    }

    try {
      const filePath = await Cypher.downloadAndSaveMediaMessage(quoted, 'find');
      const data = await audioCut(filePath, 0, 15); // cut first 15 seconds
      const timestamp = Math.floor(Date.now() / 1000);

      const stringToSign = buildStringToSign(
        'POST',
        acrOptions.endpoint,
        acrOptions.access_key,
        acrOptions.data_type,
        acrOptions.signature_version,
        timestamp
      );

      const signature = sign(stringToSign, acrOptions.access_secret);

      const form = new FormData();
      form.append('sample', data, { filename: 'sample.mp3' });
      form.append('sample_bytes', data.length);
      form.append('access_key', acrOptions.access_key);
      form.append('data_type', acrOptions.data_type);
      form.append('signature_version', acrOptions.signature_version);
      form.append('signature', signature);
      form.append('timestamp', timestamp);

      const response = await fetch(`https://${acrOptions.host}${acrOptions.endpoint}`, {
        method: 'POST',
        body: form,
        headers: form.getHeaders(),
      });

      const result = await response.json();

      if (result.status.msg !== 'Success') {
        return reply(`❌ Failed: ${result.status.msg}`);
      }

      const song = result.metadata.music[0];
      const { title, album, release_date, artists } = song;

      const output = `*Title:* ${title}
*Album:* ${album?.name || "-"}
*Artists:* ${artists?.map(a => a.name).join(', ') || "-"}
*Release Date:* ${release_date || "-"}`;

      await Cypher.sendMessage(m.chat, { text: output }, { quoted: m });

    } catch (err) {
      console.error("Song detection error:", err);
      reply("❌ An error occurred while detecting the song.");
    }
  }
}, {
  command: ["translate", "tr"],
  operate: async ({ m, text, reply, prefix, command }) => {
    if (!text) {
      return reply(`*Usage: ${prefix}${command} [language code] [text to translate]*`);
    }

    const args = text.trim().split(" ");
    if (args.length < 2) {
      return reply(`*Usage: ${prefix}${command} [language code] [text to translate]*`);
    }

    const targetLanguage = args[0].toLowerCase();
    const textToTranslate = args.slice(1).join(" ");

    try {
      const apiUrl = `https://api.popcat.xyz/translate?to=${targetLanguage}&text=${encodeURIComponent(textToTranslate)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        const errorMessage = `API request failed with status ${response.status}: ${errorData.message || response.statusText}`;
        return reply(errorMessage);
      }

      const data = await response.json();

      if (data.translated) {
        reply(`Translation to ${targetLanguage}: ${data.translated}`);
      } else {
        reply(data.message || "API request failed. No translation found.");
      }
    } catch (error) {
      console.error("Error during translation:", error);
      reply("An error occurred during the translation process.");
    }
  }
}, {
  command: ["vcc"],
  operate: async ({
    m: _0x4b1ca2,
    reply: _0x560228,
    args: _0x29481a
  }) => {
    const _0x3f3f01 = "https://api.siputzx.my.id/api/tools/vcc-generator?type=MasterCard&count=5";
    try {
      const _0x2858a7 = await fetch(_0x3f3f01);
      const _0x107815 = await _0x2858a7.json();
      if (!_0x107815.status || !_0x107815.data || _0x107815.data.length === 0) {
        return _0x560228("❌ Unable to generate VCCs. Please try again later.");
      }
      let _0x3f4a05 = "🎴 *Generated VCCs* (Type: Mastercard and Count: 5):\n\n";
      _0x107815.data.forEach((_0x813aa7, _0x9f5107) => {
        _0x3f4a05 += "#️⃣ *Card " + (_0x9f5107 + 1) + ":*\n";
        _0x3f4a05 += "🔢 *Card Number:* " + _0x813aa7.cardNumber + "\n";
        _0x3f4a05 += "📅 *Expiration Date:* " + _0x813aa7.expirationDate + "\n";
        _0x3f4a05 += "🧾 *Cardholder Name:* " + _0x813aa7.cardholderName + "\n";
        _0x3f4a05 += "🔒 *CVV:* " + _0x813aa7.cvv + "\n\n";
      });
      _0x560228(_0x3f4a05);
    } catch (_0x3132a4) {
      console.error("Error fetching VCC data:", _0x3132a4);
      _0x560228("An error occurred while generating VCCs. Please try again later.");
    }
  }
}];
