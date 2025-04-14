function hi() {
  console.log("Hello World!");
}
hi();
const AdmZip = require("adm-zip");
const axios = require("axios");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const https = require("https");
const {
  sleep
} = require("../../lib/myfunc");
const {
  promisify
} = require("util");
const {
  exec
} = require("child_process");
const execAsync = promisify(exec);
const {
  generateProfilePicture,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");
module.exports = [{
  command: ["block"],
  operate: async ({
    Cypher: _0x56d88e,
    m: _0x5bb861,
    reply: _0x48b6d8,
    isCreator: _0x223a5a,
    mess: _0x56ef07,
    text: _0x327e03
  }) => {
    if (!_0x223a5a) {
      return _0x48b6d8(_0x56ef07.owner);
    }
    if (!_0x5bb861.quoted && !_0x5bb861.mentionedJid[0] && !_0x327e03) {
      return _0x48b6d8("Reply to a message or mention/user ID to block");
    }
    const _0x310b24 = _0x5bb861.mentionedJid[0] || _0x5bb861.quoted?.sender || _0x327e03.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await _0x56d88e.updateBlockStatus(_0x310b24, "block");
    _0x48b6d8(_0x56ef07.done);
  }
}, {
  command: ["delete", "del"],
  operate: async ({
    Cypher: _0x5ad5cf,
    m: _0x1b56e4,
    reply: _0x2ad074,
    isCreator: _0x39661c,
    mess: _0x799171
  }) => {
    if (!_0x39661c) {
      return _0x2ad074(_0x799171.owner);
    }
    if (!_0x1b56e4.quoted) {
      return _0x2ad074("*Please reply to a message*");
    }
    let _0x2acea9 = {};
    try {
      _0x2acea9.remoteJid = _0x1b56e4.quoted ? _0x1b56e4.quoted.fakeObj.key.remoteJid : _0x1b56e4.key.remoteJid;
      _0x2acea9.fromMe = _0x1b56e4.quoted ? _0x1b56e4.quoted.fakeObj.key.fromMe : _0x1b56e4.key.fromMe;
      _0x2acea9.id = _0x1b56e4.quoted ? _0x1b56e4.quoted.fakeObj.key.id : _0x1b56e4.key.id;
      _0x2acea9.participant = _0x1b56e4.quoted ? _0x1b56e4.quoted.fakeObj.participant : _0x1b56e4.key.participant;
    } catch (_0x5c08d0) {
      console.error(_0x5c08d0);
    }
    _0x5ad5cf.sendMessage(_0x1b56e4.chat, {
      delete: _0x2acea9
    });
  }
}, {
  command: ["deljunk", "deletejunk", "clearjunk"],
  operate: async _0x46df20 => {
    const {
      Cypher: _0xbdf943,
      m: _0x116d93,
      reply: _0x3e3be9,
      isCreator: _0x27938e,
      mess: _0x2872d7
    } = _0x46df20;
    if (!_0x27938e) {
      return _0x3e3be9(_0x2872d7.owner);
    }
    fsp.readdir("./session", async function (_0x275450, _0xec4a80) {
      if (_0x275450) {
        console.log("Unable to scan directory: " + _0x275450);
        return _0x3e3be9("Unable to scan directory: " + _0x275450);
      }
      let _0x1b79ed = await _0xec4a80.filter(_0x56d4cb => _0x56d4cb.startsWith("pre-key") || _0x56d4cb.startsWith("sender-key") || _0x56d4cb.startsWith("session-") || _0x56d4cb.startsWith("app-state"));
      console.log(_0x1b79ed.length);
      await sleep(2000);
      _0x3e3be9("*Clearing " + _0x1b79ed.length + " junk files in the session folder...*");
      await _0x1b79ed.forEach(function (_0x420756) {
        fs.unlinkSync("./session/" + _0x420756);
      });
      await sleep(2000);
      _0x3e3be9("*Successfully cleared all the junk files in the session's folder*");
    });
    const _0x599522 = path.resolve("./tmp");
    fsp.readdir(_0x599522, async function (_0xce42c4, _0x3fe41e) {
      if (_0xce42c4) {
        console.log("Unable to scan directory: " + _0xce42c4);
        return _0x3e3be9("Unable to scan directory: " + _0xce42c4);
      }
      let _0x29377d = _0x3fe41e.filter(_0x1899d4 => _0x1899d4.endsWith("gif") || _0x1899d4.endsWith("png") || _0x1899d4.endsWith("mp3") || _0x1899d4.endsWith("mp4") || _0x1899d4.endsWith("opus") || _0x1899d4.endsWith("jpg") || _0x1899d4.endsWith("webp") || _0x1899d4.endsWith("webm") || _0x1899d4.endsWith("zip"));
      console.log(_0x29377d.length);
      await sleep(2000);
      _0x3e3be9("*Clearing " + _0x29377d.length + " junk files in the tmp folder...*");
      await _0x29377d.forEach(function (_0x3d55d7) {
        fs.unlinkSync(_0x599522 + "/" + _0x3d55d7);
      });
      await sleep(2000);
      _0x3e3be9("*Successfully cleared all the junk files in the tmp folder*");
    });
  }
}, {
  command: ["disk"],
  operate: async ({
    Cypher: _0x5966a4,
    m: _0x2b27ec,
    reply: _0x3d9074,
    isCreator: _0x4fc616,
    mess: _0x36afd1
  }) => {
    if (!_0x4fc616) {
      return _0x3d9074(_0x36afd1.owner);
    }
    await _0x3d9074("Please Wait");
    let _0x5a330b;
    try {
      _0x5a330b = await execAsync("cd && du -h --max-depth=1");
    } catch (_0x567ba3) {
      _0x5a330b = _0x567ba3;
    } finally {
      let {
        stdout: _0x135579,
        stderr: _0x4390c7
      } = _0x5a330b;
      if (_0x135579.trim()) {
        _0x3d9074(_0x135579);
      }
      if (_0x4390c7.trim()) {
        _0x3d9074(_0x4390c7);
      }
    }
  }
}, {
  command: ["vv1"],
  operate: async ({
    Cypher: _0x3c3154,
    m: _0x1634d2,
    reply: _0x49f60f,
    isCreator: _0x3b7d20,
    mess: _0x115782
  }) => {
    if (!_0x3b7d20) {
      return _0x49f60f(_0x115782.owner);
    }
    if (!_0x1634d2.quoted) {
      return _0x49f60f("*Please reply to a view once message!*");
    }
    let _0xd139d8 = _0x1634d2.msg?.contextInfo?.quotedMessage;
    let _0x348d28 = Object.keys(_0xd139d8)[0];
    if (!/image|video|audioMessage/.test(_0x348d28)) {
      return _0x49f60f("*Only view once images, videos, and audio messages are supported!*");
    }
    try {
      let _0x2b9d20;
      let _0x37a1d2;
      let _0x47e91f = _0xd139d8[_0x348d28]?.caption || global.wm;
      if (_0x348d28 === "imageMessage") {
        _0x2b9d20 = await downloadContentFromMessage(_0xd139d8[_0x348d28], "image");
        _0x37a1d2 = "media.jpg";
      } else if (_0x348d28 === "videoMessage") {
        _0x2b9d20 = await downloadContentFromMessage(_0xd139d8[_0x348d28], "video");
        _0x37a1d2 = "media.mp4";
      } else if (_0x348d28 === "audioMessage") {
        _0x2b9d20 = await downloadContentFromMessage(_0xd139d8[_0x348d28], "audio");
        _0x37a1d2 = "audio.mp3";
      }
      let _0x1bbe5f = Buffer.from([]);
      for await (const _0x42e88e of _0x2b9d20) {
        _0x1bbe5f = Buffer.concat([_0x1bbe5f, _0x42e88e]);
      }
      return _0x3c3154.sendFile(_0x1634d2.chat, _0x1bbe5f, _0x37a1d2, _0x47e91f, _0x1634d2);
    } catch (_0x37a3e3) {
      console.error(_0x37a3e3);
      _0x49f60f("*Failed to retrieve media. The message might not be a valid view-once media.*");
    }
  }
}, {
  command: ["vv2"],
  operate: async ({ Cypher: David, m, reply, isCreator, mime, quoted, q }) => {
    // React with a floppy disk emoji to indicate saving
    await David.sendMessage(m.chat, { react: { text: `💾`, key: m.key } });

    if (!isCreator) {
      await David.sendMessage(m.chat, { react: { text: `❌`, key: m.key } });
      return reply('For My Owner Only');
    }

    try {
      let mediaType;

      if (/video/.test(mime)) {
        mediaType = 'video';
      } else if (/image/.test(mime)) {
        mediaType = 'image';
      } else if (/audio/.test(mime)) {
        mediaType = 'audio';
      } else {
        await David.sendMessage(m.chat, { react: { text: `❓`, key: m.key } });
        return reply('Reply to a Video, Image, or Audio You Want to Save');
      }

      const mediaFile = await David.downloadAndSaveMediaMessage(quoted);
      const messageOptions = {
        caption: q || ''
      };

      messageOptions[mediaType] = {
        url: mediaFile
      };

      await David.sendMessage(m.sender, messageOptions, { quoted: m });
      await David.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
    } catch (error) {
      console.error("Error saving media:", error);
      await David.sendMessage(m.chat, { react: { text: `🚫`, key: m.key } });
      reply('Failed to save and send the media.');
    }
  }
}, {
  command: ["gcaddprivacy"],
  operate: async ({
    Cypher: _0x32c16f,
    m: _0x2e19a6,
    reply: _0x42f6ec,
    isCreator: _0xe14365,
    mess: _0x4014d4,
    prefix: _0x4140a3,
    command: _0x1d5855,
    text: _0x33f88a,
    args: _0x5f6f60
  }) => {
    if (!_0xe14365) {
      return _0x42f6ec(_0x4014d4.owner);
    }
    if (!_0x33f88a) {
      return _0x42f6ec("Options: all/contacts/contact_blacklist/none\nExample: " + (_0x4140a3 + _0x1d5855) + " all");
    }
    const _0x86582 = ["all", "contacts", "contact_blacklist"];
    if (!_0x86582.includes(_0x5f6f60[0])) {
      return _0x42f6ec("*Invalid option!*");
    }
    await _0x32c16f.updateGroupsAddPrivacy(_0x33f88a);
    await _0x42f6ec(_0x4014d4.done);
  }
}, {
  command: ["alive"],
  operate: async ({ Cypher: David, m, reply }) => {
    const msgai = "*🌹Hi. I am 👸Queen Adiza, a beautiful queen from Ghana🇬🇭, created by Matrix-X-King, don't worry I'm still Alive☺🚀*";

    // 7 fixed media pairs
    const mediaPairs = [
      { image: './adiza-media/alive1.jpg', audio: './adiza-sounds/menu1.mp3' },
      { image: './adiza-media/alive2.jpg', audio: './adiza-sounds/menu2.mp3' },
      { image: './adiza-media/alive3.jpg', audio: './adiza-sounds/menu3.mp3' },
      { image: './adiza-media/alive4.jpg', audio: './adiza-sounds/menu4.mp3' },
      { image: './adiza-media/alive5.jpg', audio: './adiza-sounds/menu5.mp3' },
      { image: './adiza-media/alive6.jpg', audio: './adiza-sounds/menu6.mp3' },
      { image: './adiza-media/alive7.jpg', audio: './adiza-sounds/menu7.mp3' }
    ];

    // Get or init current index
    const settings = global.db.data.settings || {};
    settings.aliveIndex = (settings.aliveIndex || 0) % mediaPairs.length;
    const currentPair = mediaPairs[settings.aliveIndex];

    // Increment index for next time
    settings.aliveIndex = (settings.aliveIndex + 1) % mediaPairs.length;
    global.db.data.settings = settings;

    // React to the command
    await David.sendMessage(m.chat, {
      react: { text: "❤️", key: m.key }
    });

    // Send image with caption
    await David.sendMessage(m.chat, {
      image: { url: currentPair.image },
      caption: msgai
    }, { quoted: m });

    // Send paired audio
    await David.sendMessage(m.chat, {
      audio: { url: currentPair.audio },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
}, {
  command: ["getsession"],
  operate: async ({
    Cypher: _0x3c8b18,
    m: _0x2599bb,
    reply: _0x145ff2,
    isCreator: _0x40fcbb,
    mess: _0x490f30
  }) => {
    if (!_0x40fcbb) {
      return _0x145ff2(_0x490f30.owner);
    }
    _0x145ff2("*Fetching session file...*");
    if (global.SESSION_ID) {
      _0x3c8b18.sendMessage(_0x2599bb.chat, {
        text: "" + global.SESSION_ID
      }, {
        quoted: _0x2599bb
      });
    }
    let _0x274311 = fs.readFileSync("./session/creds.json");
    _0x3c8b18.sendMessage(_0x2599bb.chat, {
      document: _0x274311,
      mimetype: "application/json",
      fileName: "creds.json"
    }, {
      quoted: _0x2599bb
    });
  }
}, {
  command: ["getpp"],
  operate: async ({ Cypher: David, m, reply, prefix }) => {
    // React with a camera emoji to indicate fetching profile picture
    await David.sendMessage(m.chat, { react: { text: "📸", key: m.key } });

    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
      await David.sendMessage(m.chat, { react: { text: "❓", key: m.key } });
      return reply(`Reply to someone's message or tag a user with ${prefix}getpp`);
    }

    try {
      const targetUser = m.quoted ? m.quoted.sender : m.mentionedJid[0];
      const profilePicUrl = await David.profilePictureUrl(targetUser, 'image');
      const responseMessage = `Profile picture of @${targetUser.split('@')[0]}`;
      await David.sendMessage(m.chat, {
        image: { url: profilePicUrl },
        caption: responseMessage,
        mentions: [targetUser]
      });
      // React with a checkmark on successful retrieval
      await David.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    } catch (error) {
      console.error("Error fetching profile picture:", error);
      // React with an 'X' on failure
      await David.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
      reply("Couldn't fetch profile picture. The user might not have a profile picture or an error occurred.");
    }
  }
}, {
  command: ["update"],
  tags: ["owner"],
  help: ["update"],
  operate: async ({ Cypher, m, text, reply }) => {
    try {
      const fs = require("fs");
      const path = require("path");
      const axios = require("axios");
      const AdmZip = require("adm-zip");
      const { execSync } = require("child_process");

      const steps = [
        "Queen-Adiza Bot Updating...🚀",
        "📦 Downloading the latest code...",
        "📦 Extracting the latest code...",
        "🔄 Replacing files...",
        "♻️ Finalizing and restarting..."
      ];

      await Cypher.sendMessage(m.chat, {
        text: steps[0],
        react: { text: "🔍", key: m.key }
      });

      const pkgPath = path.join(process.cwd(), "package.json");

      while (true) {
        const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
        const { data: commitInfo } = await axios.get("https://api.github.com/repos/Matri199/Queen-Adiza/commits/main");
        const latestCommit = commitInfo.sha;
        const currentCommit = packageJson.commitHash || "unknown";

        if (latestCommit === currentCommit) {
          return reply("✅ *Bot is already up-to-date with the latest commit.*");
        }

        await Cypher.sendMessage(m.chat, {
          text: steps[1],
          react: { text: "📦", key: m.key }
        });

        const zipPath = path.join(process.cwd(), "latest.zip");
        const { data: zipData } = await axios.get("https://github.com/Matri199/Queen-Adiza/archive/main.zip", {
          responseType: "arraybuffer"
        });
        fs.writeFileSync(zipPath, zipData);

        await Cypher.sendMessage(m.chat, {
          text: steps[2],
          react: { text: "✅", key: m.key }
        });

        const extractPath = path.join(process.cwd(), "latest");
        const zip = new AdmZip(zipPath);
        zip.extractAllTo(extractPath, true);

        const extractedFolder = path.join(extractPath, "Queen-Adiza-main");
        if (!fs.existsSync(extractedFolder)) throw new Error("Extracted folder not found.");

        function copyFolderSync(from, to) {
          if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
          const items = fs.readdirSync(from);
          for (const item of items) {
            const src = path.join(from, item);
            const dest = path.join(to, item);
            if (fs.lstatSync(src).isDirectory()) {
              copyFolderSync(src, dest);
            } else {
              fs.copyFileSync(src, dest);
            }
          }
        }

        copyFolderSync(extractedFolder, process.cwd());

        await Cypher.sendMessage(m.chat, {
          text: steps[3],
          react: { text: "🔄", key: m.key }
        });

        fs.unlinkSync(zipPath);
        fs.rmSync(extractPath, { recursive: true, force: true });

        // Rebuild package.json with updated commitHash
        const finalPkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
        const reorderedPkg = {
          name: finalPkg.name,
          version: finalPkg.version,
          description: finalPkg.description,
          commitHash: latestCommit,
          main: finalPkg.main,
          engines: finalPkg.engines,
          scripts: finalPkg.scripts,
          author: finalPkg.author,
          license: finalPkg.license,
          dependencies: finalPkg.dependencies
        };
        fs.writeFileSync(pkgPath, JSON.stringify(reorderedPkg, null, 2));

        await Cypher.sendMessage(m.chat, {
          text: steps[4],
          react: { text: "♻️", key: m.key }
        });

        reply("```✅ Bot updated and restarting via PM2...```");

        // Restart with PM2
        execSync("yarn pm2 restart", { stdio: "inherit" });

        process.exit(0);
        break;
      }
    } catch (err) {
      console.error("Update error:", err);
      reply("❌ *Update failed.* Please try again or update manually.");
    }
  }
} {
  command: ["userinfo"],
  operate: async ({ Cypher: Matrix, m, reply, prefix }) => {
    if (!m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
      return reply(`Reply to someone's message or tag a user with ${prefix}userinfo`);
    }

    try {
      const targetUser = m.quoted ? m.quoted.sender : m.mentionedJid[0];
      const phoneNumber = targetUser.split('@')[0];

      // Fetch profile picture
      const profilePicUrl = await Matrix.profilePictureUrl(targetUser, 'image').catch(() => null);

      const userInfoMessage = `
*User Info:*
- JID: ${targetUser}
- Phone Number: ${phoneNumber}
${profilePicUrl ? `- Profile Picture: [Click Here](${profilePicUrl})` : '- No Profile Picture'}
      `.trim();

      await Matrix.sendMessage(m.chat, {
        image: profilePicUrl ? { url: profilePicUrl } : undefined,
        caption: userInfoMessage,
        mentions: [targetUser]
      });

    } catch (error) {
      console.error("Error fetching user info:", error);
      reply("Couldn't fetch user information. The user might have privacy settings enabled.");
    }
  }
}, {
  command: ["groupid", "idgc"],
  operate: async ({
    Cypher: _0x858a65,
    m: _0x263681,
    reply: _0x52fd2c,
    isCreator: _0x28b98e,
    mess: _0x154c39,
    args: _0x11dc19,
    q: _0x286173
  }) => {
    if (!_0x28b98e) {
      return _0x52fd2c(_0x154c39.owner);
    }
    if (!_0x286173) {
      return _0x52fd2c("Please provide a group link!");
    }
    let _0x3ade33 = _0x11dc19.join(" ");
    let _0x2903f0 = _0x3ade33.split("https://chat.whatsapp.com/")[1];
    if (!_0x2903f0) {
      return _0x52fd2c("Link Invalid");
    }
    _0x858a65.query({
      tag: "iq",
      attrs: {
        type: "get",
        xmlns: "w:g2",
        to: "@g.us"
      },
      content: [{
        tag: "invite",
        attrs: {
          code: _0x2903f0
        }
      }]
    }).then(async _0x186d1c => {
      const _0x5ea06e = "" + (_0x186d1c.content[0].attrs.id ? _0x186d1c.content[0].attrs.id : "undefined");
      _0x52fd2c(_0x5ea06e + "@g.us");
    });
  }
}, {
  command: ["hostip", "ipbot"],
  operate: async ({
    Cypher: _0x43700a,
    m: _0x3bbe69,
    reply: _0x59a364,
    isCreator: _0x34b37c,
    mess: _0x11ac38
  }) => {
    if (!_0x34b37c) {
      return _0x59a364(_0x11ac38.owner);
    }
    https.get("https://api.ipify.org", _0x191f5c => {
      let _0x515d04 = "";
      _0x191f5c.on("data", _0x132885 => _0x515d04 += _0x132885);
      _0x191f5c.on("end", () => _0x59a364("Bot's public IP: " + _0x515d04));
    });
  }
}, {
  command: ["pinchat"],
  operate: async ({ Cypher: David, m, reply, isCreator }) => {
    if (!isCreator) return reply('This command is for the owner only.');

    try {
      await David.chatModify({ pin: true }, m.chat);
      await David.sendMessage(m.chat, {
        react: {
          text: `📌`,
          key: m.key
        }
      });
    } catch (error) {
      console.error("Error pinning chat:", error);
      reply('Failed to pin the chat.');
    }
  }
}, {
  command: ["unpinchat"],
  operate: async ({ Cypher: David, m, reply, isCreator }) => {
    if (!isCreator) return reply('This command is for the owner only.');

    try {
      await David.chatModify({ pin: false }, m.chat);
      await David.sendMessage(m.chat, {
        react: {
          text: `✅`,
          key: m.key
        }
      });
    } catch (error) {
      console.error("Error unpinning chat:", error);
      reply('Failed to unpin the chat.');
    }
  }
}, {
  command: ["listblock"],
  operate: async ({ Cypher: David, reply, isCreator }) => {
    if (!isCreator) return reply("For My Owner Only");

    try {
      const block = await David.fetchBlocklist();
      if (!block || block.length === 0) {
        return reply("List Block:\n\n*0* Blocked");
      }

      const blockList = block.map(v => '• ' + v.replace(/@.+/, '')).join('\n');
      reply(`List Block:\n\n*${block.length}* Blocked\n${blockList}`);
    } catch (error) {
      console.error("Error fetching block list:", error);
      reply("Failed to retrieve block list.");
    }
  }
}, {
  command: ["join"],
  operate: async ({
    Cypher: _0x16a3ee,
    m: _0xcc04be,
    reply: _0x3aabb6,
    isCreator: _0x3e6ceb,
    mess: _0x23ff01,
    args: _0x4750ac,
    text: _0x3303c9,
    isUrl: _0x143fb9
  }) => {
    // React with a handshake emoji to indicate joining
    await _0x16a3ee.sendMessage(_0xcc04be.chat, {
      react: {
        text: "🤝",
        key: _0xcc04be.key
      }
    });

    if (!_0x3e6ceb) {
      await _0x16a3ee.sendMessage(_0xcc04be.chat, {
        react: {
          text: "❌",
          key: _0xcc04be.key
        }
      });
      return _0x3aabb6(_0x23ff01.owner);
    }
    if (!_0x3303c9) {
      await _0x16a3ee.sendMessage(_0xcc04be.chat, {
        react: {
          text: "❓",
          key: _0xcc04be.key
        }
      });
      return _0x3aabb6("Enter group link");
    }
    if (!_0x143fb9(_0x4750ac[0]) && !_0x4750ac[0].includes("whatsapp.com")) {
      await _0x16a3ee.sendMessage(_0xcc04be.chat, {
        react: {
          text: "🔗", // Or "🚫" for invalid link
          key: _0xcc04be.key
        }
      });
      return _0x3aabb6("Invalid link");
    }
    try {
      const _0x3ecaf1 = _0x4750ac[0].split("https://chat.whatsapp.com/")[1];
      await _0x16a3ee.groupAcceptInvite(_0x3ecaf1);
      await _0x16a3ee.sendMessage(_0xcc04be.chat, {
        react: {
          text: "✅",
          key: _0xcc04be.key
        }
      });
      _0x3aabb6("Joined successfully");
    } catch {
      await _0x16a3ee.sendMessage(_0xcc04be.chat, {
        react: {
          text: "⚠️", // Or "❌" for failure
          key: _0xcc04be.key
        }
      });
      _0x3aabb6("Failed to join group");
    }
  }
}, {
  command: ["lastseen"],
  operate: async ({
    Cypher: _0x44284e,
    m: _0x24e5a9,
    reply: _0x28660d,
    isCreator: _0xca9948,
    mess: _0x145006,
    prefix: _0x2546b6,
    command: _0x50e364,
    text: _0x27cc5c,
    args: _0x564c8d
  }) => {
    if (!_0xca9948) {
      return _0x28660d(_0x145006.owner);
    }
    if (!_0x27cc5c) {
      return _0x28660d("Options: all/contacts/contact_blacklist/none\nExample: " + (_0x2546b6 + _0x50e364) + " all");
    }
    const _0x315cd3 = ["all", "contacts", "contact_blacklist", "none"];
    if (!_0x315cd3.includes(_0x564c8d[0])) {
      return _0x28660d("Invalid option");
    }
    await _0x44284e.updateLastSeenPrivacy(_0x27cc5c);
    await _0x28660d(_0x145006.done);
  }
}, {
  command: ["leave", "leavegc"],
  operate: async ({
    Cypher: _0x2fad0b,
    m: _0x425107,
    reply: _0x253135,
    isCreator: _0x297e9d,
    mess: _0x4b4781,
    sleep: _0x153cc7
  }) => {
    if (!_0x297e9d) {
      return _0x253135(_0x4b4781.owner);
    }
    if (!_0x425107.isGroup) {
      return _0x253135(_0x4b4781.group);
    }
    _0x253135("*Goodbye, it was nice being here!*");
    await _0x153cc7(3000);
    await _0x2fad0b.groupLeave(_0x425107.chat);
  }
}, {
  command: ["listbadword"],
  operate: async ({
    m: _0x484dff,
    reply: _0x6564b9,
    isCreator: _0x125ece,
    mess: _0x55b963,
    bad: _0x3efa57
  }) => {
    if (!_0x125ece) {
      return _0x6564b9(_0x55b963.owner);
    }
    if (_0x484dff.isGroup) {
      return _0x6564b9("This command cannot be used in personal chats.");
    }
    if (_0x3efa57.length === 0) {
      return _0x6564b9("No bad words have been added yet.");
    }
    let _0x404d78 = "*Bad Words List:*\n\n";
    _0x3efa57.forEach((_0x168970, _0x174968) => {
      _0x404d78 += _0x174968 + 1 + ". " + _0x168970 + "\n";
    });
    _0x404d78 += "\nTotal bad words: " + _0x3efa57.length;
    _0x6564b9(_0x404d78);
  }
}, {
  command: ["listignorelist"],
  operate: async ({
    reply: _0x4ba225,
    loadBlacklist: _0x7a2cce
  }) => {
    let _0x37d785 = _0x7a2cce();
    if (_0x37d785.blacklisted_numbers.length === 0) {
      _0x4ba225("The ignore list is empty.");
    } else {
      _0x4ba225("Ignored users/chats:\n" + _0x37d785.blacklisted_numbers.join("\n"));
    }
  }
}, {
  command: ["listsudo"],
  operate: async ({
    reply: _0x30aba4
  }) => {
    const _0x40cc98 = global.db.data.sudo;
    if (_0x40cc98.length === 0) {
      _0x30aba4("The sudo list is empty.");
    } else {
      _0x30aba4("Sudo users:\n" + _0x40cc98.join("\n"));
    }
  }
}, {
  command: ["modestatus", "botmode"],
  operate: async ({
    Xploader: _0x38ce81,
    m: _0x594f0e,
    reply: _0xaaa537,
    isCreator: _0x50106c,
    mess: _0x738293,
    modeStatus: _0x33e84c
  }) => {
    if (!_0x50106c) {
      return _0xaaa537(_0x738293.owner);
    }
    _0xaaa537("Current mode: " + _0x33e84c);
  }
}, {
  command: ["online"],
  operate: async ({
    Cypher: _0x331730,
    m: _0xa470c5,
    reply: _0x4aa6e8,
    isCreator: _0x2963a7,
    mess: _0x51da96,
    prefix: _0x18f2c5,
    command: _0x4ffd87,
    text: _0x5bba4b,
    args: _0x31b12c
  }) => {
    if (!_0x2963a7) {
      return _0x4aa6e8(_0x51da96.owner);
    }
    if (!_0x5bba4b) {
      return _0x4aa6e8("Options: all/match_last_seen\nExample: " + (_0x18f2c5 + _0x4ffd87) + " all");
    }
    const _0x1f2f95 = ["all", "match_last_seen"];
    if (!_0x1f2f95.includes(_0x31b12c[0])) {
      return _0x4aa6e8("Invalid option");
    }
    await _0x331730.updateOnlinePrivacy(_0x5bba4b);
    await _0x4aa6e8(_0x51da96.done);
  }
}, {
  command: ["owner"],
  operate: async ({
    m: _0x3ca650,
    Cypher: _0x2a56f3,
    sender: _0x907bf8
  }) => {
    try {
      const _0x504fff = [];
      const _0x1c9814 = [global.ownernumber.includes("@") ? global.ownernumber : global.ownernumber + "@s.whatsapp.net"];
      for (const _0x1774ae of _0x1c9814) {
        const _0x2bd558 = await _0x2a56f3.getName(_0x1774ae);
        _0x504fff.push({
          displayName: _0x2bd558 || global.ownername,
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:" + global.ownername + "\nFN:" + global.ownername + "\nitem1.TEL;waid=" + _0x1774ae.split("@")[0] + ":" + _0x1774ae.split("@")[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
        });
      }
      await _0x2a56f3.sendMessage(_0x3ca650.chat, {
        contacts: {
          displayName: _0x504fff.length + " Contact",
          contacts: _0x504fff
        },
        mentions: [_0x907bf8]
      }, {
        quoted: _0x3ca650
      });
    } catch (_0x882fca) {
      console.error("Error sending owner contact:", _0x882fca.message);
      await _0x2a56f3.sendMessage(_0x3ca650.chat, {
        text: "*Error:* " + _0x882fca.message
      }, {
        quoted: _0x3ca650
      });
    }
  }
}, {
  command: ["ppprivacy"],
  operate: async ({
    Cypher: _0x47bbfb,
    m: _0x10b163,
    reply: _0x279f0d,
    isCreator: _0x2a1b16,
    mess: _0x1a2caa,
    prefix: _0x1ea5e8,
    command: _0x2114c4,
    text: _0x3d809c,
    args: _0x370a12
  }) => {
    if (!_0x2a1b16) {
      return _0x279f0d(_0x1a2caa.owner);
    }
    if (!_0x3d809c) {
      return _0x279f0d("Options: all/contacts/contact_blacklist/none\nExample: " + (_0x1ea5e8 + _0x2114c4) + " all");
    }
    const _0x5d8a30 = ["all", "contacts", "contact_blacklist", "none"];
    if (!_0x5d8a30.includes(_0x370a12[0])) {
      return _0x279f0d("Invalid option");
    }
    await _0x47bbfb.updateProfilePicturePrivacy(_0x3d809c);
    await _0x279f0d(_0x1a2caa.done);
  }
}, {
  command: ["react"],
  operate: async ({
    Cypher: _0x2b322d,
    m: _0x36ed05,
    reply: _0x182f9e,
    isCreator: _0x54c50a,
    mess: _0x531f5f,
    args: _0x11c7c9,
    quoted: _0x514ef7
  }) => {
    if (!_0x54c50a) {
      return _0x182f9e(_0x531f5f.owner);
    }
    if (!_0x11c7c9) {
      return _0x182f9e("*Reaction emoji needed*\n Example .react 🤔");
    }
    const _0x59f3fb = {
      react: {
        text: _0x11c7c9[0],
        key: {
          remoteJid: _0x36ed05.chat,
          fromMe: true,
          id: _0x514ef7.id
        }
      }
    };
    _0x2b322d.sendMessage(_0x36ed05.chat, _0x59f3fb);
  }
}, {
  command: ["readreceipts"],
  operate: async ({
    Cypher: _0x366cdf,
    m: _0x41e3e3,
    reply: _0x727a53,
    isCreator: _0x5d2446,
    mess: _0x3fee5b,
    prefix: _0x4afe15,
    command: _0x5128bd,
    text: _0x527575,
    args: _0x116a1f
  }) => {
    if (!_0x5d2446) {
      return _0x727a53(_0x3fee5b.owner);
    }
    if (!_0x527575) {
      return _0x727a53("Options: all/none\nExample: " + (_0x4afe15 + _0x5128bd) + " all");
    }
    const _0x2a175a = ["all", "none"];
    if (!_0x2a175a.includes(_0x116a1f[0])) {
      return _0x727a53("Invalid option");
    }
    await _0x366cdf.updateReadReceiptsPrivacy(_0x527575);
    await _0x727a53(_0x3fee5b.done);
  }
}, {
  command: ["clearchat"],
  operate: async ({ Cypher: Adiza, m }) => {
    try {
      await Adiza.chatModify(
        {
          delete: true,
          lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
        },
        m.chat
      );

      await Adiza.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
      });
    } catch (error) {
      console.error("Error clearing chat:", error);
    }
  }
}, {
  command: ["reportbug"],
  operate: async ({
    m: _0x4c8035,
    mess: _0x160be4,
    text: _0x3f13e8,
    Cypher: _0x155220,
    isCreator: _0x2779a7,
    versions: _0x2494d1,
    prefix: _0x415fd6,
    reply: _0x270332,
    command: _0x3a61fc,
    mainOwner: _0x1f6bae
  }) => {
    if (!_0x2779a7) {
      return _0x270332(_0x160be4.owner);
    }
    if (!_0x3f13e8) {
      return _0x270332("Example: " + (_0x415fd6 + _0x3a61fc) + " Hey, play command isn't working");
    }
    const _0x117618 = "\n*BUG REPORT*\n\n*User*: @" + _0x4c8035.sender.split("@")[0] + "\n*Issue*: " + _0x3f13e8 + "\n\n*Version*: " + _0x2494d1 + "\n    ";
    const _0x344f76 = "\nHi " + _0x4c8035.pushName + ",\n\nYour bug report has been forwarded to my developer.\nPlease wait for a reply.\n\n*Details:*\n" + _0x117618 + "\n    ";
    _0x155220.sendMessage(_0x1f6bae, {
      text: _0x117618,
      mentions: [_0x4c8035.sender]
    }, {
      quoted: _0x4c8035
    });
    _0x155220.sendMessage(_0x4c8035.chat, {
      text: _0x344f76,
      mentions: [_0x4c8035.sender]
    }, {
      quoted: _0x4c8035
    });
  }
}, {
  command: ["biography"],
  operate: async ({
    Cypher: _0x56a354,
    m: _0x4303a2,
    reply: _0x5aafa4,
    text: _0x32bfab
  }) => {
    const biography = `
      *🔮Creator's Biography🔮:*

      👋🌹Hello, I am 𝗠𝗮𝘁𝗿𝗶𝘅-𝗫-𝗞𝗶𝗻𝗴, from Ghana 🇬🇭, the developer behind this bot. I have been passionate about programming and AI development for many years. My primary focus is on creating bots and automating tasks that make life easier for users.

      *🔑Key Points🔑:*
      - I'm a self-taught developer with a deep interest in AI.
      - My work involves building chatbots, web applications, and exploring machine learning.
      - I enjoy solving problems and contributing to open-source projects.

      *🕴Fun Facts🕴:*
      - My favorite programming language is JavaScript, but I also enjoy Python.
      - I believe in the power of automation to simplify everyday tasks.
      - In my free time, I love exploring new tech and learning new skills.

      Thank you for using this bot, and I hope you enjoy its features!

      *🪩Social Media & Contact🪩:*
      - Contact: 233593734312
      - GitHub: github.com/Matri199
      - Email: Matrixzat99@gmail.com
      - Whatsapp: https://wa.me/message/65YSIVJZVUXVF1
      - Telegram: https://t.me/MatriXXXXXXXXX
      
    `;

    // Image URL or file path
    const imageUrl = "https://files.catbox.moe/k33au9.jpeg";  // Replace with your image URL

    // Send the biography and the image together
    await _0x56a354.sendMessage(_0x4303a2.chat, {
      text: biography
    });

    // Send the image separately
    await _0x56a354.sendMessage(_0x4303a2.chat, {
      image: { url: imageUrl }, // If you have the image URL
      caption: "*🌹Here's a picture of the creator!🌹*"
    });
  }
}, {
  command: ["request"],
  operate: async ({
    m: _0xb45806,
    mess: _0x44e31e,
    text: _0x1e72db,
    Cypher: _0xb63358,
    isCreator: _0xaa1edc,
    versions: _0x8f4baa,
    prefix: _0x3f8965,
    command: _0x50cbf3,
    reply: _0x3c5509,
    mainOwner: _0x339721
  }) => {
    if (!_0xaa1edc) {
      return _0x3c5509(_0x44e31e.owner);
    }
    if (!_0x1e72db) {
      return _0x3c5509("Example: " + (_0x3f8965 + _0x50cbf3) + " I would like a new feature (specify) to be added.");
    }
    const _0x14262c = "\n*REQUEST*\n\n*User*: @" + _0xb45806.sender.split("@")[0] + "\n*Request*: " + _0x1e72db + "\n\n*Version*: " + _0x8f4baa + "\n    ";
    const _0x167c04 = "\nHi " + _0xb45806.pushName + ",\n\nYour request has been forwarded to my developer.\nPlease wait for a reply.\n\n*Details:*\n" + _0x14262c + "\n    ";
    _0xb63358.sendMessage(_0x339721, {
      text: _0x14262c,
      mentions: [_0xb45806.sender]
    }, {
      quoted: _0xb45806
    });
    _0xb63358.sendMessage(_0xb45806.chat, {
      text: _0x167c04,
      mentions: [_0xb45806.sender]
    }, {
      quoted: _0xb45806
    });
  }
}, {
  command: ["restart"],
  operate: async ({
    Cypher: _0x1832ff,
    m: _0x16d3f6,
    reply: _0x124ced,
    isCreator: _0x81d6d7,
    mess: _0x375466
  }) => {
    // React with a circular arrow emoji to indicate restarting
    await _0x1832ff.sendMessage(_0x16d3f6.chat, {
      react: {
        text: "🔄",
        key: _0x16d3f6.key
      }
    });

    if (!_0x81d6d7) {
      await _0x1832ff.sendMessage(_0x16d3f6.chat, {
        react: {
          text: "❌",
          key: _0x16d3f6.key
        }
      });
      return _0x124ced(_0x375466.owner);
    }
    _0x124ced("*Restarting...*");
    await sleep(3000);
    process.exit(0);
  }
}, {
  command: ["setbio"],
  operate: async ({
    Cypher: _0x5f387e,
    m: _0x29686e,
    reply: _0x2067bf,
    isCreator: _0x2e9a11,
    mess: _0x431ba3,
    prefix: _0x298a46,
    command: _0xeed0e2,
    text: _0x4ae8fe
  }) => {
    if (!_0x2e9a11) {
      return _0x2067bf(_0x431ba3.owner);
    }
    if (!_0x4ae8fe) {
      return _0x2067bf("*Text needed*\nExample: " + (_0x298a46 + _0xeed0e2) + " " + global.botname);
    }
    await _0x5f387e.updateProfileStatus(_0x4ae8fe);
    _0x2067bf("*Successfully updated bio to \"" + _0x4ae8fe + "\"*");
  }
}, {
  command: ["setprofilepic"],
  operate: async ({
    Cypher: _0x333883,
    m: _0x4de18b,
    reply: _0x21b791,
    isCreator: _0x29218e,
    mess: _0xaf55ec,
    prefix: _0x4652b6,
    command: _0x1a4f65,
    quoted: _0x2033ff,
    mime: _0x9f8515,
    args: _0x4e3ccc,
    botNumber: _0x3c8fee
  }) => {
    if (!_0x29218e) {
      return _0x21b791(_0xaf55ec.owner);
    }
    if (!_0x2033ff) {
      return _0x21b791("*Send or reply to an image With captions " + (_0x4652b6 + _0x1a4f65) + "*");
    }
    if (!/image/.test(_0x9f8515)) {
      return _0x21b791("*Send or reply to an image With captions " + (_0x4652b6 + _0x1a4f65) + "*");
    }
    if (/webp/.test(_0x9f8515)) {
      return _0x21b791("*Send or reply to an image With captions " + (_0x4652b6 + _0x1a4f65) + "*");
    }
    const _0x15132e = await _0x333883.downloadAndSaveMediaMessage(_0x2033ff, "ppbot.jpeg");
    if (_0x4e3ccc[0] === "full") {
      const {
        img: _0x5c9c05
      } = await generateProfilePicture(_0x15132e);
      await _0x333883.query({
        tag: "iq",
        attrs: {
          to: _0x3c8fee,
          type: "set",
          xmlns: "w:profile:picture"
        },
        content: [{
          tag: "picture",
          attrs: {
            type: "image"
          },
          content: _0x5c9c05
        }]
      });
      fs.unlinkSync(_0x15132e);
      _0x21b791(_0xaf55ec.done);
    } else {
      await _0x333883.updateProfilePicture(_0x3c8fee, {
        url: _0x15132e
      });
      fs.unlinkSync(_0x15132e);
      _0x21b791(_0xaf55ec.done);
    }
  }
}, {
  command: ["toviewonce", "tovo", "tovv"],
  operate: async ({
    Cypher: _0x5b0e6b,
    m: _0x575e4f,
    reply: _0x16f88e,
    isCreator: _0x1a95f9,
    mess: _0x3cd9cc,
    quoted: _0x1f65a8,
    mime: _0x13f135
  }) => {
    if (!_0x1a95f9) {
      return _0x16f88e(_0x3cd9cc.owner);
    }
    if (!_0x1f65a8) {
      return _0x16f88e("*Reply to an Image or Video*");
    }
    if (/image/.test(_0x13f135)) {
      const _0x34a31f = await _0x5b0e6b.downloadAndSaveMediaMessage(_0x1f65a8);
      _0x5b0e6b.sendMessage(_0x575e4f.chat, {
        image: {
          url: _0x34a31f
        },
        caption: _0x3cd9cc.done,
        fileLength: "999",
        viewOnce: true
      }, {
        quoted: _0x575e4f
      });
    } else if (/video/.test(_0x13f135)) {
      const _0x2b7eb3 = await _0x5b0e6b.downloadAndSaveMediaMessage(_0x1f65a8);
      _0x5b0e6b.sendMessage(_0x575e4f.chat, {
        video: {
          url: _0x2b7eb3
        },
        caption: _0x3cd9cc.done,
        fileLength: "99999999",
        viewOnce: true
      }, {
        quoted: _0x575e4f
      });
    } else if (/audio/.test(_0x13f135)) {
      const _0x36d09b = await _0x5b0e6b.downloadAndSaveMediaMessage(_0x1f65a8);
      _0x5b0e6b.sendMessage(_0x575e4f.chat, {
        audio: {
          url: _0x36d09b
        },
        mimetype: "audio/mpeg",
        ptt: true,
        viewOnce: true
      });
    }
  }
}, {
  command: ["unblock"],
  operate: async ({
    Cypher: _0x1cb404,
    m: _0x18b95e,
    reply: _0x1d140b,
    isCreator: _0x2e79ca,
    mess: _0x18b567,
    text: _0x42b637
  }) => {
    if (!_0x2e79ca) {
      return _0x1d140b(_0x18b567.owner);
    }
    if (!_0x18b95e.quoted && !_0x18b95e.mentionedJid[0] && !_0x42b637) {
      return _0x1d140b("Reply to a message or mention/user ID to unblock");
    }
    const _0x2811e6 = _0x18b95e.mentionedJid[0] || _0x18b95e.quoted?.sender || _0x42b637.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await _0x1cb404.updateBlockStatus(_0x2811e6, "unblock");
    _0x1d140b(_0x18b567.done);
  }
}];