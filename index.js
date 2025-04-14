require("./settings");
const makeWASocket = require("@whiskeysockets/baileys").default;
const {
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  Browsers,
  normalizeMessageContent
} = require("@whiskeysockets/baileys");
const {
  color
} = require("./lib/color");
const fs = require("fs");
const pino = require("pino");
console.log("Pino loaded:", typeof pino);
const path = require("path");
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const fetch = require("node-fetch");
const FileType = require("file-type");
const _ = require("lodash");
const chalk = require("chalk");
const os = require("os");
const express = require("express");
const app = express();
const moment = require("moment-timezone");
const {
  File
} = require("megajs");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const {
  formatSize,
  runtime,
  sleep,
  serialize,
  smsg,
  getBuffer
} = require("./lib/myfunc");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const {
  toAudio,
  toPTT,
  toVideo
} = require("./lib/converter");
const store = makeInMemoryStore({
  logger: pino().child({
    level: "silent",
    stream: "store"
  })
});
const low = require("./lib/lowdb");
const yargs = require("yargs/yargs");
const {
  Low,
  JSONFile
} = low;
const port = process.env.PORT || 3000;
const versions = require("./package.json").version;
const dbName = "CypherX-db";
const dbPath = ownernumber + ".json";
const localDb = path.join(__dirname, "src", "database.json");
global.db = new Low(new JSONFile(localDb));
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x51250d => setInterval(() => {
      if (!global.db.READ) {
        clearInterval(this);
        _0x51250d(global.db.data ?? global.loadDatabase());
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  try {
    await global.db.read();
    if (!global.db.data || Object.keys(global.db.data).length === 0) {
      console.log("[ADIZA-V2] Syncing local database...");
      await readDB();
      await global.db.read();
    }
  } catch (_0x363664) {
    console.error("❌ Error loading database:", _0x363664);
  }
  global.db.READ = false;
  global.db.data = {
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
  global.db.chain = _.chain(global.db.data);
  await global.db.write();
};
async function getOctokit() {
  const {
    Octokit: _0x4a0659
  } = await import("@octokit/rest");
  return new _0x4a0659({
    auth: global.dbToken
  });
}
async function getOwner(_0x19885d) {
  const _0x551c91 = await _0x19885d.rest.users.getAuthenticated();
  return _0x551c91.data.login;
}
async function createDB() {
  if (!global.dbToken) {
    return;
  }
  try {
    const _0x2b0b50 = await getOctokit();
    const _0x51b1d9 = await getOwner(_0x2b0b50);
    await _0x2b0b50.repos.createForAuthenticatedUser({
      name: dbName,
      private: true
    });
    console.log("[ADIZA-V2] Database created successfully.");
  } catch (_0xdf529d) {
    if (_0xdf529d.status === 422) {
      return;
    } else {
      console.error("❌ Error creating repository database:", _0xdf529d);
    }
  }
}
async function readDB() {
  if (!global.dbToken) {
    return;
  }
  try {
    const _0x5e6c69 = await getOctokit();
    const _0x10bef0 = await getOwner(_0x5e6c69);
    const {
      data: _0x274903
    } = await _0x5e6c69.repos.getContent({
      owner: _0x10bef0,
      repo: dbName,
      path: dbPath
    });
    const _0x19c314 = Buffer.from(_0x274903.content, "base64").toString("utf-8");
    const _0xf44743 = JSON.parse(_0x19c314);
    console.log("[?ADIZA-V2?] Fetching database from GitHub...");
    const _0x518cb2 = {
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
    };
    global.db.data = {
      chats: _0xf44743.chats || {},
      settings: {
        ..._0x518cb2,
        ...(_0xf44743.settings || {})
      },
      blacklist: _0xf44743.blacklist || {
        blacklisted_numbers: []
      },
      sudo: _0xf44743.sudo && Array.isArray(_0xf44743.sudo) ? _0xf44743.sudo : []
    };
    fs.writeFileSync(localDb, JSON.stringify(global.db.data, null, 2));
    console.log("[?ADIZA-V2?] Local database updated.");
  } catch (_0x3056d0) {
    if (_0x3056d0.status === 404) {
      console.log("[?ADIZA-V2?] Database not found on GitHub. Creating a new one...");
      await writeDB();
    } else {
      console.error("❌ Error reading database from GitHub:", _0x3056d0);
    }
  }
}
global.writeDB = async function () {
  if (!global.dbToken) {
    return;
  }
  try {
    await global.db.write();
    const _0x49a4b3 = await getOctokit();
    const _0x400d57 = await getOwner(_0x49a4b3);
    const _0x424149 = fs.readFileSync(localDb, "utf-8");
    let _0x2a8573;
    try {
      const {
        data: _0x59b688
      } = await _0x49a4b3.repos.getContent({
        owner: _0x400d57,
        repo: dbName,
        path: dbPath
      });
      _0x2a8573 = _0x59b688.sha;
    } catch (_0x90de26) {
      if (_0x90de26.status !== 404) {
        throw _0x90de26;
      }
    }
    await _0x49a4b3.repos.createOrUpdateFileContents({
      owner: _0x400d57,
      repo: dbName,
      path: dbPath,
      message: "Updated database",
      content: Buffer.from(_0x424149).toString("base64"),
      sha: _0x2a8573
    });
    console.log("[ADIZA-V2] Successfully synced database.");
  } catch (_0x7ec237) {
    console.error("❌ Error writing database to GitHub:", _0x7ec237);
  }
};
(async () => {
  if (global.dbToken) {
    await createDB();
    await readDB();
  }
  await global.loadDatabase();
})();
if (global.dbToken) {
  setInterval(writeDB, 1800000);
}
if (global.db) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write();
    }
  }, 30000);
}
global.settings = null;
(async () => {
  await global.loadDatabase();
  if (!global.db || !global.db.data || !global.db.data.settings) {
    console.error("❌ Failed to load database settings!");
    return;
  }
  global.settings = global.db.data.settings;
  global.modeStatus = global.settings.mode === "public" ? "Public" : global.settings.mode === "private" ? "Private" : global.settings.mode === "group" ? "Group Only" : global.settings.mode === "pm" ? "PM Only" : "Unknown";
})();
let phoneNumber = "233593734312";
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const usePairingCode = true;
const question = _0x4a2fbc => {
  const _0x8066aa = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(_0x17f727 => {
    _0x8066aa.question(_0x4a2fbc, _0x17f727);
  });
};
const axios = require("axios");

// Configuration (Ideally, load from a config file or environment variables)
const config = {
  owner: "Matri199",
  repo: "Queen-Adiza",
  currentVersion: "2.4.1", // Replace with your current version
};

async function checkForUpdates() {
  try {
    const apiUrl = `https://api.github.com/repos/${config.owner}/${config.repo}/releases/latest`;
    const response = await axios.get(apiUrl);
    const latestVersion = response.data.tag_name;

    // Robustly remove ALL leading 'v' characters
    const cleanedLatestVersion = latestVersion.replace(/^v+/g, "");
    const cleanedCurrentVersion = config.currentVersion.replace(/^v+/g, "");

    if (cleanedLatestVersion !== cleanedCurrentVersion) {
      return `🚀 Update available!\nLatest: v${cleanedLatestVersion}\nCurrent: v${cleanedCurrentVersion}`;
    } else {
      return `✅ Queen Adiza is up to date (v${cleanedCurrentVersion}).`;
    }
  } catch (error) {
    if (error.response) {
      // API error
      return `⚠️ API Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      // Network error
      return `⚠️ Network Error: Could not reach GitHub API.`;
    } else {
      // Other error
      return `⚠️ Error checking for updates: ${error.message}`;
    }
  }
}
function cleanUp() {
  const _0x1c5d11 = [path.join(__dirname, ".npm"), path.join(__dirname, ".cache")];
  _0x1c5d11.forEach(_0x216fb8 => {
    if (fs.existsSync(_0x216fb8)) {
      try {
        fs.rmSync(_0x216fb8, {
          recursive: true,
          force: true
        });
      } catch (_0x4e9a98) {
        console.error("Error cleaning up " + _0x216fb8 + ":", _0x4e9a98);
      }
    }
  });
}
const storeFile = "./src/store.json";
const maxMessageAge = 86400;
function loadStoredMessages() {
  if (fs.existsSync(storeFile)) {
    try {
      return JSON.parse(fs.readFileSync(storeFile));
    } catch (_0x369324) {
      console.error("⚠️ Error loading store.json:", _0x369324);
      return {};
    }
  }
  return {};
}
function saveStoredMessages(_0x3fd41f, _0x350224, _0x1302cd) {
  let _0xb40ed2 = loadStoredMessages();
  if (!_0xb40ed2[_0x3fd41f]) {
    _0xb40ed2[_0x3fd41f] = {};
  }
  if (!_0xb40ed2[_0x3fd41f][_0x350224]) {
    _0xb40ed2[_0x3fd41f][_0x350224] = _0x1302cd;
    fs.writeFileSync(storeFile, JSON.stringify(_0xb40ed2, null, 2));
  }
}
function cleanupOldMessages() {
  let _0x31e9f1 = Math.floor(Date.now() / 1000);
  let _0x323c44 = {};
  if (fs.existsSync(storeFile)) {
    try {
      _0x323c44 = JSON.parse(fs.readFileSync(storeFile));
    } catch (_0x6c4f91) {
      console.error("❌ Error reading store.json:", _0x6c4f91);
      return;
    }
  }
  let _0xc5b788 = 0;
  let _0x43bfb5 = 0;
  let _0xba2430 = 0;
  for (let _0x1a84f0 in _0x323c44) {
    let _0x367fd6 = _0x323c44[_0x1a84f0];
    for (let _0x26f385 in _0x367fd6) {
      let _0x189d47 = _0x367fd6[_0x26f385].timestamp;
      if (typeof _0x189d47 === "object" && _0x189d47.low !== undefined) {
        _0x189d47 = _0x189d47.low;
      }
      if (_0x189d47 > 1000000000000) {
        _0x189d47 = Math.floor(_0x189d47 / 1000);
      }
      _0xc5b788++;
      if (_0x31e9f1 - _0x189d47 > maxMessageAge) {
        delete _0x323c44[_0x1a84f0][_0x26f385];
        _0x43bfb5++;
      } else {
        _0xba2430++;
      }
    }
    if (Object.keys(_0x323c44[_0x1a84f0]).length === 0) {
      delete _0x323c44[_0x1a84f0];
    }
  }
  fs.writeFileSync(storeFile, JSON.stringify(_0x323c44, null, 2));
  console.log("[Adizaa-V2] 🧹 Cleaning up:");
  console.log("- Total messages processed: " + _0xc5b788);
  console.log("- Old messages removed: " + _0x43bfb5);
  console.log("- Remaining messages: " + _0xba2430);
}
const sessionDir = path.join(__dirname, "session");
const credsPath = path.join(sessionDir, "creds.json");
async function downloadSessionData() {
  try {
    await fs.promises.mkdir(sessionDir, {
      recursive: true
    });
    if (!fs.existsSync(credsPath) && global.SESSION_ID) {
      const _0x2ff7ef = global.SESSION_ID.split("QUEEN-ADIZA~")[1];
      const _0x38a5a8 = File.fromURL("https://mega.nz/file/" + _0x2ff7ef);
      _0x38a5a8.download(async (_0xf11b73, _0x40574b) => {
        if (_0xf11b73) {
          throw _0xf11b73;
        }
        await fs.promises.writeFile(credsPath, _0x40574b);
        console.log(color("[ADIZA-V2] Session saved successfully", "green"));
        await startCypher();
      });
    }
  } catch (_0x24f3af) {
    console.error("Error downloading session data:", _0x24f3af);
  }
}
async function startCypher() {
  const {
    state: _0x4a39ce,
    saveCreds: _0x2d4bf9
  } = await useMultiFileAuthState("./session");
  const _0x16ce40 = new NodeCache();
  const _0x5e5430 = makeWASocket({
    logger: pino({
      level: "silent"
    }),
    printQRInTerminal: !pairingCode,
    version: [2, 3000, 1017531287],
    browser: Browsers.ubuntu("Edge"),
    auth: {
      creds: _0x4a39ce.creds,
      keys: makeCacheableSignalKeyStore(_0x4a39ce.keys, pino({
        level: "fatal"
      }).child({
        level: "fatal"
      }))
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    getMessage: async _0x248634 => {
      let _0x57da88 = jidNormalizedUser(_0x248634.remoteJid);
      let _0xc66d0a = await store.loadMessage(_0x57da88, _0x248634.id);
      return _0xc66d0a?.message || "";
    },
    msgRetryCounterCache: _0x16ce40,
    defaultQueryTimeoutMs: undefined
  });
  store.bind(_0x5e5430.ev);
  if (usePairingCode && !_0x5e5430.authState.creds.registered) {
    if (useMobile) {
      throw new Error("Cannot use pairing code with mobile API");
    }
    let _0xedecbe;
    _0xedecbe = await question(chalk.bgBlack(chalk.greenBright("Number to be connected to Adiza Bot eg 233544981163?\nExample 233593734312:- ")));
    _0xedecbe = _0xedecbe.trim();
    setTimeout(async () => {
      const _0x46927d = await _0x5e5430.requestPairingCode(_0xedecbe);
      console.log(chalk.black(chalk.bgWhite("[ADIZA-V2]:- " + _0x46927d)));
    }, 3000);
  }
  _0x5e5430.ev.on("connection.update", async _0x54cce8 => {
    const {
      connection: _0x352e49,
      lastDisconnect: _0x4d73f6
    } = _0x54cce8;
    try {
      if (_0x352e49 === "close" && _0x4d73f6 && _0x4d73f6.error && _0x4d73f6.error.output.statusCode != 401) {
        if (_0x4d73f6.error.output.statusCode === DisconnectReason.loggedOut) {
          console.log("Logged out. Please link again.");
        }
        if (_0x4d73f6.error.output.statusCode === DisconnectReason.badSession) {
          console.log("Bad session. Log out and link again.");
        }
        startCypher();
      }
      if (_0x54cce8.connection == "connecting") {
        console.log(color("[ADIZA-V2] Connecting...", "red"));
      }
      if (_0x54cce8.connection == "open") {
        console.log(color("[ADIZA-V2] Connected", "green"));
        await sleep(2000);
        try {
         // await _0x5e5430.groupAcceptInvite("Iz8jA4DdW9qCQpR0YbMlnz");
          console.log("Joining group is disabled");
        } catch (_0x9d07d0) {
          console.log("An error occurred: " + (_0x9d07d0.message || _0x9d07d0));
          /**
          if (_0x9d07d0.status === 409 || _0x9d07d0.status === 403 || _0x9d07d0.status === 410) {
            console.log("Bot cannot join the group. Continuing...");
          } else {
            console.log("Unexpected error. Restarting bot...");
            startCypher();
          }
          **/
        }
        async function _0x2cade7(_0x1c71ae, _0x29c268 = 3) {
          for (let _0x1ca920 = 1; _0x1ca920 <= _0x29c268; _0x1ca920++) {
            try {
              await _0x5e5430.groupAcceptInvite(_0x1c71ae);
              return;
            } catch (_0x5ef7fd) {
              if (_0x1ca920 === _0x29c268) {
                return;
              } else {
                await new Promise(_0x35b41c => setTimeout(_0x35b41c, 5000));
              }
            }
          }
        }
        const _0x180a1c = "Iz8jA4DdW9qCQpR0YbMlnz";
        _0x2cade7(_0x180a1c).then(() => {
          console.log("🙂🙂🙂");
        });
        const _0x403cc0 = await checkForUpdates();
        await _0x5e5430.sendMessage(_0x5e5430.user.id, {
          text: "┏━━─『 🌹𝗤𝗨𝗘𝗘𝗡-𝗔𝗗𝗜𝗭𝗔🌹 』─━━\n┃ » Username: " + _0x5e5430.user.name + "\n┃ » Platform: " + os.platform() + "\n┃ » Prefix: [ " + global.settings.prefix + " ]\n┃ » Mode: " + modeStatus + "\n┃ » Version: [ " + versions + " ]\n┗━━━━━━━━━━━━─··· \n\n┏━━─『 🚀𝗨𝗣𝗗𝗔𝗧𝗘𝗦🚀 』─━━\n┃ " + _0x403cc0 + "\n┗━━━━━━━━━━━━─···"
        }, {
          ephemeralExpiration: 1800
        });
      }
    } catch (_0x525aa1) {
      console.log("Error in Connection.update " + _0x525aa1);
      startCypher();
    }
  });
  _0x5e5430.ev.on("creds.update", _0x2d4bf9);
  _0x5e5430.ev.on("messages.upsert", async _0x5c85be => {
    try {
      const _0x86db6b = _0x5c85be.messages;
      for (const _0x27b462 of _0x86db6b) {
        if (!_0x27b462.message) {
          continue;
        }
        _0x27b462.message = normalizeMessageContent(_0x27b462.message);
        if (_0x27b462.key && _0x27b462.key.remoteJid === "status@broadcast") {
          if (global.db.data.settings.autoviewstatus === true) {
            await _0x5e5430.readMessages([_0x27b462.key]);
          }
          const _0x1fe49b = new Map();
          const _0x82237 = 5000;
          if (global.db.data.settings.autoreactstatus === true && global.db.data.settings.autoviewstatus === true) {
            const _0x1d67da = global.db.data.settings.statusemoji || "💚";
            const _0x46fd1b = _0x27b462.key.participant || _0x27b462.participant;
            const _0x4e1cb0 = await _0x5e5430.decodeJid(_0x5e5430.user.id);
            const _0x4aa1a9 = _0x27b462.key.id;
            const _0x315f7f = _0x27b462.key.remoteJid;
            if (_0x4aa1a9.startsWith("3EB0")) {
              return;
            }
            if (_0x46fd1b && _0x4aa1a9 && _0x315f7f) {
              const _0x570f0a = _0x1fe49b.get(_0x46fd1b) || 0;
              const _0x4d1d1b = Date.now();
              if (_0x4d1d1b - _0x570f0a < _0x82237) {
                console.log("⏳ Cooldown active. Skipping reaction for: " + _0x46fd1b);
                return;
              }
              _0x1fe49b.set(_0x46fd1b, _0x4d1d1b);
              try {
                await _0x5e5430.sendMessage("status@broadcast", {
                  react: {
                    key: {
                      id: _0x4aa1a9,
                      remoteJid: _0x315f7f,
                      participant: _0x46fd1b
                    },
                    text: _0x1d67da
                  }
                }, {
                  statusJidList: [_0x46fd1b, _0x4e1cb0]
                });
                console.log("✅ Successfully reacted to status: " + _0x46fd1b);
              } catch (_0x473f06) {
                console.error("❌ Failed to send reaction for " + _0x4aa1a9 + ":", _0x473f06);
              }
            } else {
              console.warn("⚠️ Missing data! Reaction skipped.");
            }
          }
          continue;
        }
        if (_0x27b462.key.id.startsWith("BAE5") || _0x27b462.key.id.startsWith("3EBO") && _0x27b462.key.id.length === 22 || !_0x27b462.key.id.startsWith("3EBO") && _0x27b462.key.id.length === 22 || _0x27b462.key.id.length !== 32 && _0x27b462.key.id.length !== 20) {
          continue;
        }
        const _0x50f8d9 = new Set();
        const _0x3c26ff = _0x27b462.key.id;
        if (_0x50f8d9.has(_0x3c26ff)) {
          continue;
        }
        _0x50f8d9.add(_0x3c26ff);
        const _0x438241 = smsg(_0x5e5430, _0x27b462, store);
        require("./system")(_0x5e5430, _0x438241, _0x5c85be, store);
      }
    } catch (_0x3efb06) {
      console.error("Error handling messages.upsert:", _0x3efb06);
    }
  });
  _0x5e5430.ev.on("messages.upsert", async _0x44e385 => {
    for (const _0x7b1389 of _0x44e385.messages) {
      if (!_0x7b1389.message) {
        return;
      }
      let _0x3bbd56 = _0x7b1389.key.remoteJid;
      let _0x8c71e2 = _0x7b1389.key.id;
      if (!_0x3bbd56 || !_0x8c71e2) {
        return;
      }
      let _0x1b6622 = _0x7b1389.message?.conversation || _0x7b1389.message?.extendedTextMessage?.text || null;
      if (!_0x1b6622) {
        return;
      }
      let _0x386ff7 = {
        sender: _0x7b1389.key.participant || _0x7b1389.key.remoteJid,
        text: _0x1b6622,
        timestamp: _0x7b1389.messageTimestamp
      };
      saveStoredMessages(_0x3bbd56, _0x8c71e2, _0x386ff7);
    }
  });
  setInterval(() => {
    try {
      const _0x24ade3 = path.join(__dirname, "session");
      fs.readdir(_0x24ade3, (_0x5dec6d, _0x2b4f0b) => {
        if (_0x5dec6d) {
          console.error("Unable to scan directory:", _0x5dec6d);
          return;
        }
        const _0x4cab50 = Date.now();
        const _0x3ef7fd = _0x2b4f0b.filter(_0x1b25d6 => {
          const _0x3d35f6 = path.join(_0x24ade3, _0x1b25d6);
          const _0xf754ce = fs.statSync(_0x3d35f6);
          return (_0x1b25d6.startsWith("pre-key") || _0x1b25d6.startsWith("sender-key") || _0x1b25d6.startsWith("session-") || _0x1b25d6.startsWith("app-state")) && _0x1b25d6 !== "creds.json" && _0x4cab50 - _0xf754ce.mtimeMs > 172800000;
        });
        if (_0x3ef7fd.length > 0) {
          console.log("Found " + _0x3ef7fd.length + " old session files.");
          console.log("Clearing " + _0x3ef7fd.length + " old session files...");
          _0x3ef7fd.forEach(_0x52e287 => {
            const _0x3fe8fd = path.join(_0x24ade3, _0x52e287);
            fs.unlinkSync(_0x3fe8fd);
          });
        } else {
          console.log("No old session files found.");
        }
      });
    } catch (_0x1865bb) {
      console.error("Error clearing old session files:", _0x1865bb);
    }
  }, 7200000);
  setInterval(cleanupOldMessages, 3600000);
  function _0x298e5c() {
    const _0x2df5ac = "tmp";
    const _0x18bd02 = path.join(__dirname, _0x2df5ac);
    if (!fs.existsSync(_0x18bd02)) {
      fs.mkdirSync(_0x18bd02);
    }
  }
  _0x298e5c();
  setInterval(() => {
    let _0x5266d6 = path.join();
    fs.readdir(_0x5266d6, async function (_0x31333a, _0x124d1b) {
      var _0x53247e = await _0x124d1b.filter(_0x635cf1 => _0x635cf1.endsWith("gif") || _0x635cf1.endsWith("png") || _0x635cf1.endsWith("mp3") || _0x635cf1.endsWith("mp4") || _0x635cf1.endsWith("opus") || _0x635cf1.endsWith("jpg") || _0x635cf1.endsWith("webp") || _0x635cf1.endsWith("webm") || _0x635cf1.endsWith("zip"));
      if (_0x53247e.length > 0) {
        let _0x530d18 = "Detected " + _0x53247e.length + " junk files,\nJunk files have been deleted🚮";
        _0x5e5430.sendMessage(_0x5e5430.user.id, {
          text: _0x530d18
        });
        setInterval(() => {
          if (_0x53247e.length == 0) {
            return console.log("Junk files cleared");
          }
          _0x53247e.forEach(function (_0x32f031) {
            let _0x5135ca = fs.existsSync(_0x32f031);
            if (_0x5135ca) {
              fs.unlinkSync(_0x32f031);
            }
          });
        }, 15000);
      }
    });
  }, 30000);
  _0x5e5430.decodeJid = _0x4d6a3e => {
    if (!_0x4d6a3e) {
      return _0x4d6a3e;
    }
    if (/:\d+@/gi.test(_0x4d6a3e)) {
      let _0x500b7a = jidDecode(_0x4d6a3e) || {};
      return _0x500b7a.user && _0x500b7a.server && _0x500b7a.user + "@" + _0x500b7a.server || _0x4d6a3e;
    } else {
      return _0x4d6a3e;
    }
  };
  _0x5e5430.ev.on("contacts.update", _0x5e1dea => {
    for (let _0x22a34b of _0x5e1dea) {
      let _0x5f3dc0 = _0x5e5430.decodeJid(_0x22a34b.id);
      if (store && store.contacts) {
        store.contacts[_0x5f3dc0] = {
          id: _0x5f3dc0,
          name: _0x22a34b.notify
        };
      }
    }
  });
  _0x5e5430.ev.on("group-participants.update", async ({
    id: _0x558bb9,
    participants: _0x2f7ce7,
    action: _0x213dfa
  }) => {
    if (global.db.data.settings.welcome === true) {
      try {
        const _0x1ff8d3 = await _0x5e5430.groupMetadata(_0x558bb9);
        const _0x3a8741 = _0x1ff8d3.participants.length;
        const _0x38515b = _0x1ff8d3.subject;
        for (const _0x2c8ec9 of _0x2f7ce7) {
          const _0x3ca43c = await _0x5b89f8(_0x2c8ec9);
          const _0x4e4c76 = await _0x4636bb(_0x558bb9);
          if (_0x213dfa === "add") {
            _0x539cb9(_0x558bb9, _0x2c8ec9, _0x38515b, _0x3a8741, _0x3ca43c);
          } else if (_0x213dfa === "remove") {
            _0x5c2c77(_0x558bb9, _0x2c8ec9, _0x38515b, _0x3a8741, _0x3ca43c);
          }
        }
      } catch (_0x2522ea) {
        console.error(_0x2522ea);
      }
    }
  });
  async function _0x5b89f8(_0x206002) {
    try {
      return await _0x5e5430.profilePictureUrl(_0x206002, "image");
    } catch {
      return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
  }
  async function _0x4636bb(_0x4b8ef3) {
    try {
      return await _0x5e5430.profilePictureUrl(_0x4b8ef3, "image");
    } catch {
      return "https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60";
    }
  }
  async function _0x539cb9(_0x36bd1e, _0x3e9bb1, _0x720b25, _0x308a3b, _0x2749f4) {
    const _0x544ea8 = "🌹🥰 *Welcome Sweety🕊" + "!*                                        🫂🌺@" + _0x3e9bb1.split("@")[0] + "\n\nYou're our " + _0x308a3b + "th member!\n\nJoin time: " + moment.tz("" + timezones).format("HH:mm:ss") + ",  " + moment.tz("" + timezones).format("DD/MM/YYYY") + "\n\nEnjoy Your Stay!❤🫶😘\n\n> " + global.wm;
    _0x5e5430.sendMessage(_0x36bd1e, {
      text: _0x544ea8,
      contextInfo: {
        mentionedJid: [_0x3e9bb1],
        externalAdReply: {
          title: global.botname,
          body: ownername,
          previewType: "PHOTO",
          thumbnailUrl: "",
          thumbnail: await getBuffer(_0x2749f4),
          sourceUrl: plink
        }
      }
    });
  }
  async function _0x5c2c77(_0x50acf2, _0x3146a0, _0x260498, _0x451673, _0x2f3f74) {
    const _0x145ccf = "👋🥺 *Goodbye @" + _0x3146a0.split("@")[0] + "!* ✨\n\nYou'll be missed sweety🌸 " + "!🥲\n\nWe're now " + _0x451673 + " members.\n\nLeft at: " + moment.tz(timezones).format("HH:mm:ss") + ",  " + moment.tz(timezones).format("DD/MM/YYYY") + "\n\n> " + global.wm;
    _0x5e5430.sendMessage(_0x50acf2, {
      text: _0x145ccf,
      contextInfo: {
        mentionedJid: [_0x3146a0],
        externalAdReply: {
          title: global.botname,
          body: ownername,
          previewType: "PHOTO",
          thumbnailUrl: "",
          thumbnail: await getBuffer(_0x2f3f74),
          sourceUrl: plink
        }
      }
    });
  }
  _0x5e5430.ev.on("call", async _0xae3bb2 => {
    let _0x16aeca = await _0x5e5430.decodeJid(_0x5e5430.user.id);
    if (global.db.data.settings.anticall !== "decline" && global.db.data.settings.anticall !== "block") {
      return;
    }
    console.log(_0xae3bb2);
    for (let _0x2a0dde of _0xae3bb2) {
      if (!_0x2a0dde.isGroup && _0x2a0dde.status === "offer") {
        let _0x16d142 = "🚨 *𝙲𝙰𝙻𝙻 𝙳𝙴𝚃𝙴𝙲𝚃𝙴𝙳!* 🚨\n\n";
        _0x16d142 += "@" + _0x2a0dde.from.split("@")[0] + ", my owner cannot receive " + (_0x2a0dde.isVideo ? "video" : "audio") + " calls at the moment.\n\n";
        if (global.db.data.settings.anticall === "block") {
          _0x16d142 += "❌ You are being *blocked* for causing a disturbance. If this was a mistake, contact my owner to be unblocked.";
        } else {
          _0x16d142 += "⚠️ Your call has been *declined*. Please avoid calling.";
        }
        await _0x5e5430.sendTextWithMentions(_0x2a0dde.from, _0x16d142);
        await _0x5e5430.rejectCall(_0x2a0dde.id, _0x2a0dde.from);
        if (global.db.data.settings.anticall === "block") {
          await sleep(8000);
          await _0x5e5430.updateBlockStatus(_0x2a0dde.from, "block");
        }
      }
    }
  });
  _0x5e5430.serializeM = _0x26b757 => smsg(_0x5e5430, _0x26b757, store);
  _0x5e5430.getName = (_0x2ead69, _0x517063 = false) => {
    id = _0x5e5430.decodeJid(_0x2ead69);
    _0x517063 = _0x5e5430.withoutContact || _0x517063;
    let _0x37f999;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x2f3ddc => {
        _0x37f999 = store.contacts[id] || {};
        if (!_0x37f999.name && !_0x37f999.subject) {
          _0x37f999 = _0x5e5430.groupMetadata(id) || {};
        }
        _0x2f3ddc(_0x37f999.name || _0x37f999.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    } else {
      _0x37f999 = id === "0@s.whatsapp.net" ? {
        id: id,
        name: "WhatsApp"
      } : id === _0x5e5430.decodeJid(_0x5e5430.user.id) ? _0x5e5430.user : store.contacts[id] || {};
    }
    return (_0x517063 ? "" : _0x37f999.name) || _0x37f999.subject || _0x37f999.verifiedName || PhoneNumber("+" + _0x2ead69.replace("@s.whatsapp.net", "")).getNumber("international");
  };
  _0x5e5430.getFile = async (_0x1b122b, _0x1afa4e) => {
    let _0x39eb74;
    let _0x1578c1;
    const _0x2dbb18 = Buffer.isBuffer(_0x1b122b) ? _0x1b122b : /^data:.*?\/.*?;base64,/i.test(_0x1b122b) ? Buffer.from(_0x1b122b.split`, `[1], "base64") : /^https?:\/\//.test(_0x1b122b) ? await (_0x39eb74 = await fetch(_0x1b122b)).buffer() : fs.existsSync(_0x1b122b) ? (_0x1578c1 = _0x1b122b, fs.readFileSync(_0x1b122b)) : typeof _0x1b122b === "string" ? _0x1b122b : Buffer.alloc(0);
    if (!Buffer.isBuffer(_0x2dbb18)) {
      throw new TypeError("Result is not a buffer");
    }
    const _0xfda897 = (await FileType.fromBuffer(_0x2dbb18)) || {
      mime: "application/octet-stream",
      ext: ".bin"
    };
    if (_0x1afa4e && !_0x1578c1) {
      _0x1578c1 = path.join(__dirname, "./tmp/" + new Date() * 1 + "." + _0xfda897.ext);
      await fs.promises.writeFile(_0x1578c1, _0x2dbb18);
    }
    const _0xef0e88 = async () => {
      if (_0x1578c1 && fs.existsSync(_0x1578c1)) {
        await fs.promises.unlink(_0x1578c1).catch(() => {});
      }
    };
    setImmediate(_0xef0e88);
    _0x2dbb18.fill(0);
    return {
      res: _0x39eb74,
      filename: _0x1578c1,
      ..._0xfda897,
      data: _0x2dbb18,
      deleteFile: _0xef0e88
    };
  };
  _0x5e5430.downloadMediaMessage = async _0x13f589 => {
    let _0x2b2717 = (_0x13f589.msg || _0x13f589).mimetype || "";
    let _0x4e70d9 = _0x13f589.mtype ? _0x13f589.mtype.replace(/Message/gi, "") : _0x2b2717.split("/")[0];
    const _0x2bcdec = await downloadContentFromMessage(_0x13f589, _0x4e70d9);
    let _0x17f28b = Buffer.from([]);
    for await (const _0x4016f5 of _0x2bcdec) {
      _0x17f28b = Buffer.concat([_0x17f28b, _0x4016f5]);
    }
    const _0x370249 = Buffer.from(_0x17f28b);
    _0x17f28b.fill(0);
    _0x17f28b = null;
    return _0x370249;
  };
  _0x5e5430.sendFile = async (_0x2b2373, _0x61313b, _0x462472 = "", _0x2a5adc = "", _0x1da2bd, _0x7de2da = false, _0x37b781 = {}) => {
    let _0x2d9d9a = await _0x5e5430.getFile(_0x61313b, true);
    let {
      res: _0x35bbc4,
      data: _0x2b9ea4,
      filename: _0x3a438e
    } = _0x2d9d9a;
    if (_0x35bbc4 && _0x35bbc4.status !== 200 || _0x2b9ea4.length <= 65536) {
      try {
        throw {
          json: JSON.parse(_0x2b9ea4.toString())
        };
      } catch (_0x1510ae) {
        if (_0x1510ae.json) {
          throw _0x1510ae.json;
        }
      }
    }
    let _0xd65c1e = {
      filename: _0x462472
    };
    if (_0x1da2bd) {
      _0xd65c1e.quoted = _0x1da2bd;
    }
    if (!_0x2d9d9a) {
      _0x37b781.asDocument = true;
    }
    let _0xe1ebed = "";
    let _0x4a7b26 = _0x2d9d9a.mime;
    let _0x3f04a4;
    if (/webp/.test(_0x2d9d9a.mime) || /image/.test(_0x2d9d9a.mime) && _0x37b781.asSticker) {
      _0xe1ebed = "sticker";
    } else if (/image/.test(_0x2d9d9a.mime) || /webp/.test(_0x2d9d9a.mime) && _0x37b781.asImage) {
      _0xe1ebed = "image";
    } else if (/video/.test(_0x2d9d9a.mime)) {
      _0xe1ebed = "video";
    } else if (/audio/.test(_0x2d9d9a.mime)) {
      _0x4a7b26 = "audio/mpeg";
      _0x3f04a4 = await (_0x7de2da ? toPTT : toAudio)(_0x2b9ea4, _0x2d9d9a.ext);
      _0x2b9ea4 = _0x3f04a4.data;
      _0x3a438e = _0x3f04a4.filename;
      _0xe1ebed = "audio";
    } else {
      _0xe1ebed = "document";
    }
    if (_0x37b781.asDocument) {
      _0xe1ebed = "document";
    }
    let _0x383387 = {
      ..._0x37b781,
      caption: _0x2a5adc,
      ptt: _0x7de2da,
      [_0xe1ebed]: {
        url: _0x3a438e
      },
      mimetype: _0x4a7b26
    };
    let _0x345e67;
    try {
      _0x345e67 = await _0x5e5430.sendMessage(_0x2b2373, _0x383387, {
        ..._0xd65c1e,
        ..._0x37b781
      });
    } catch (_0x5d1a83) {
      console.error(_0x5d1a83);
      _0x345e67 = null;
    } finally {
      if (!_0x345e67) {
        _0x345e67 = await _0x5e5430.sendMessage(_0x2b2373, {
          ..._0x383387,
          [_0xe1ebed]: _0x2b9ea4
        }, {
          ..._0xd65c1e,
          ..._0x37b781
        });
      }
      return _0x345e67;
    }
  };
  _0x5e5430.copyNForward = async (_0x4488ba, _0x6daa33, _0x27fa24 = false, _0x40c41d = {}) => {
    let _0x2448e6;
    if (_0x40c41d.readViewOnce) {
      _0x6daa33.message = _0x6daa33.message && _0x6daa33.message.ephemeralMessage && _0x6daa33.message.ephemeralMessage.message ? _0x6daa33.message.ephemeralMessage.message : _0x6daa33.message || undefined;
      _0x2448e6 = Object.keys(_0x6daa33.message.viewOnceMessage.message)[0];
      delete (_0x6daa33.message && _0x6daa33.message.ignore ? _0x6daa33.message.ignore : _0x6daa33.message || undefined);
      delete _0x6daa33.message.viewOnceMessage.message[_0x2448e6].viewOnce;
      _0x6daa33.message = {
        ..._0x6daa33.message.viewOnceMessage.message
      };
    }
    let _0x55133a = Object.keys(_0x6daa33.message)[0];
    let _0x291aa5 = await generateForwardMessageContent(_0x6daa33, _0x27fa24);
    let _0x14e0f8 = Object.keys(_0x291aa5)[0];
    let _0x1cf402 = {};
    if (_0x55133a != "conversation") {
      _0x1cf402 = _0x6daa33.message[_0x55133a].contextInfo;
    }
    _0x291aa5[_0x14e0f8].contextInfo = {
      ..._0x1cf402,
      ..._0x291aa5[_0x14e0f8].contextInfo
    };
    const _0xaf62d9 = await generateWAMessageFromContent(_0x4488ba, _0x291aa5, _0x40c41d ? {
      ..._0x291aa5[_0x14e0f8],
      ..._0x40c41d,
      ...(_0x40c41d.contextInfo ? {
        contextInfo: {
          ..._0x291aa5[_0x14e0f8].contextInfo,
          ..._0x40c41d.contextInfo
        }
      } : {})
    } : {});
    await _0x5e5430.relayMessage(_0x4488ba, _0xaf62d9.message, {
      messageId: _0xaf62d9.key.id
    });
    return _0xaf62d9;
  };
  _0x5e5430.sendVideoAsSticker = async (_0x44af29, _0x49ea53, _0xcaf46, _0x2abbe7 = {}) => {
    let _0x2adf57 = Buffer.isBuffer(_0x49ea53) ? _0x49ea53 : /^data:.*?\/.*?;base64,/i.test(_0x49ea53) ? Buffer.from(_0x49ea53.split`,`[1], "base64") : /^https?:\/\//.test(_0x49ea53) ? await await getBuffer(_0x49ea53) : fs.existsSync(_0x49ea53) ? fs.readFileSync(_0x49ea53) : Buffer.alloc(0);
    let _0x1c5dd6;
    if (_0x2abbe7 && (_0x2abbe7.packname || _0x2abbe7.author)) {
      _0x1c5dd6 = await writeExifVid(_0x2adf57, _0x2abbe7);
    } else {
      _0x1c5dd6 = await videoToWebp(_0x2adf57);
    }
    await _0x5e5430.sendMessage(_0x44af29, {
      sticker: {
        url: _0x1c5dd6
      },
      ..._0x2abbe7
    }, {
      quoted: _0xcaf46
    });
    return _0x1c5dd6;
  };
  _0x5e5430.downloadAndSaveMediaMessage = async (_0x49793a, _0x5a9cd8, _0x2b3ca8 = true) => {
    let _0xeb5acf = _0x49793a.msg ? _0x49793a.msg : _0x49793a;
    let _0x12c929 = (_0x49793a.msg || _0x49793a).mimetype || "";
    let _0x2efacc = _0x49793a.mtype ? _0x49793a.mtype.replace(/Message/gi, "") : _0x12c929.split("/")[0];
    const _0x54195f = await downloadContentFromMessage(_0xeb5acf, _0x2efacc);
    let _0x1b675d = Buffer.from([]);
    for await (const _0xc3ff30 of _0x54195f) {
      _0x1b675d = Buffer.concat([_0x1b675d, _0xc3ff30]);
    }
    let _0x2c73a4 = await FileType.fromBuffer(_0x1b675d);
    let _0x4ea118 = _0x2b3ca8 ? _0x5a9cd8 + "." + _0x2c73a4.ext : _0x5a9cd8;
    let _0x128d2e = path.join(__dirname, "tmp", _0x4ea118);
    await fs.writeFileSync(_0x128d2e, _0x1b675d);
    _0x1b675d = null;
    global.gc?.();
    return _0x128d2e;
  };
  _0x5e5430.sendImageAsSticker = async (_0x1d7ae8, _0x30252d, _0x45384f, _0x599d2d = {}) => {
    let _0x42c875 = Buffer.isBuffer(_0x30252d) ? _0x30252d : /^data:.*?\/.*?;base64,/i.test(_0x30252d) ? Buffer.from(_0x30252d.split`,`[1], "base64") : /^https?:\/\//.test(_0x30252d) ? await await getBuffer(_0x30252d) : fs.existsSync(_0x30252d) ? fs.readFileSync(_0x30252d) : Buffer.alloc(0);
    let _0x2dec7c;
    if (_0x599d2d && (_0x599d2d.packname || _0x599d2d.author)) {
      _0x2dec7c = await writeExifImg(_0x42c875, _0x599d2d);
    } else {
      _0x2dec7c = await imageToWebp(_0x42c875);
    }
    await _0x5e5430.sendMessage(_0x1d7ae8, {
      sticker: {
        url: _0x2dec7c
      },
      ..._0x599d2d
    }, {
      quoted: _0x45384f
    });
    return _0x2dec7c;
  };
  _0x5e5430.sendText = (_0x2824dc, _0x482baf, _0x51f531 = "", _0x3e99c0) => _0x5e5430.sendMessage(_0x2824dc, {
    text: _0x482baf,
    ..._0x3e99c0
  }, {
    quoted: _0x51f531
  });
  _0x5e5430.sendTextWithMentions = async (_0x559b77, _0x270de4, _0x461ec6, _0x379668 = {}) => _0x5e5430.sendMessage(_0x559b77, {
    text: _0x270de4,
    contextInfo: {
      mentionedJid: [..._0x270de4.matchAll(/@(\d{0,16})/g)].map(_0x8f15fa => _0x8f15fa[1] + "@s.whatsapp.net")
    },
    ..._0x379668
  }, {
    quoted: _0x461ec6
  });
  return _0x5e5430;
}
async function tylor() {
  await cleanUp();
  await cleanupOldMessages();
  if (fs.existsSync(credsPath)) {
    await startCypher();
  } else {
    const _0x17f004 = await downloadSessionData();
    if (_0x17f004) {
      await startCypher();
    } else if (!fs.existsSync(credsPath)) {
      if (!global.SESSION_ID) {
        console.log(color("Please wait for a few seconds to enter your number!", "red"));
        await startCypher();
      }
    }
  }
}
const porDir = path.join(__dirname, "Media");
const porPath = path.join(porDir, "Jin.html");
function getUptime() {
  return runtime(process.uptime());
}
app.get("/", (_0x56bf39, _0x404d42) => {
  _0x404d42.sendFile(porPath);
});
app.get("/uptime", (_0x504732, _0x5e2ef1) => {
  _0x5e2ef1.json({
    uptime: getUptime()
  });
});
app.listen(port, _0x39c3f7 => {
  if (_0x39c3f7) {
    console.error(color("Failed to start server on port: " + port, "red"));
  } else {
    console.log(color("[MATRIX-X] Running on port: " + port, "white"));
  }
});
tylor();
