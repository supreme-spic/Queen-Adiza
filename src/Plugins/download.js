function hi() {
  console.log("Hello World!");
}
hi();
const {
  fetchJson
} = require("../../lib/myfunc");
const {
  ringtone
} = require("../../lib/scraper");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const yts = require("yt-search");
module.exports = [{
  command: ["apk", "apkdl"],
  operate: async ({
    m: _0x1c57fd,
    text: _0x21efa1,
    Cypher: _0x2efc53,
    botname: _0x1e38a0,
    reply: _0x27f4fd
  }) => {
    if (!_0x21efa1) {
      return _0x27f4fd("*Which apk do you want to download?*");
    }
    try {
      let _0x5308e4 = await fetchJson("https://bk9.fun/search/apk?q=" + _0x21efa1);
      let _0x2552ff = await fetchJson("https://bk9.fun/download/apk?id=" + _0x5308e4.BK9[0].id);
      await _0x2efc53.sendMessage(_0x1c57fd.chat, {
        document: {
          url: _0x2552ff.BK9.dllink
        },
        fileName: _0x2552ff.BK9.name,
        mimetype: "application/vnd.android.package-archive",
        contextInfo: {
          externalAdReply: {
            title: _0x1e38a0,
            body: "" + _0x2552ff.BK9.name,
            thumbnailUrl: "" + _0x2552ff.BK9.icon,
            sourceUrl: "" + _0x2552ff.BK9.dllink,
            mediaType: 2,
            showAdAttribution: true,
            renderLargerThumbnail: false
          }
        }
      }, {
        quoted: _0x1c57fd
      });
    } catch (_0x3472fe) {
      _0x27f4fd("*Error fetching APK details*\n" + _0x3472fe.message);
    }
  }
}, {
  command: ["download"],
  operate: async ({
    m: _0x5d7493,
    text: _0x5638fb,
    Cypher: _0x72b314,
    reply: _0x252605
  }) => {
    if (!_0x5638fb) {
      return _0x252605("Enter download URL");
    }
    try {
      let _0x1bf51d = await fetch(_0x5638fb, {
        method: "GET",
        redirect: "follow"
      });
      let _0x177222 = _0x1bf51d.headers.get("content-type");
      let _0x169a46 = await _0x1bf51d.buffer();
      let _0x404564 = _0x177222.split("/")[1];
      let _0x48e08f = _0x1bf51d.headers.get("content-disposition")?.match(/filename="(.*)"/)?.[1] || "download-" + Math.random().toString(36).slice(2, 10) + "." + _0x404564;
      let _0x5b222;
      switch (_0x177222) {
        case "audio/mpeg":
          _0x5b222 = "audio/mpeg";
          break;
        case "image/png":
          _0x5b222 = "image/png";
          break;
        case "image/jpeg":
          _0x5b222 = "image/jpeg";
          break;
        case "application/pdf":
          _0x5b222 = "application/pdf";
          break;
        case "application/zip":
          _0x5b222 = "application/zip";
          break;
        case "video/mp4":
          _0x5b222 = "video/mp4";
          break;
        case "video/webm":
          _0x5b222 = "video/webm";
          break;
        case "application/vnd.android.package-archive":
          _0x5b222 = "application/vnd.android.package-archive";
          break;
        default:
          _0x5b222 = "application/octet-stream";
      }
      _0x72b314.sendMessage(_0x5d7493.chat, {
        document: _0x169a46,
        mimetype: _0x5b222,
        fileName: _0x48e08f
      }, {
        quoted: _0x5d7493
      });
    } catch (_0x116c16) {
      _0x252605("Error downloading file: " + _0x116c16.message);
    }
  }
}, {
  command: ["facebook", "fbdl"],
  operate: async ({
    m: _0x152311,
    text: _0x4c920f,
    Cypher: _0x27929e,
    reply: _0x3291fc
  }) => {
    if (!_0x4c920f) {
      return _0x3291fc("*Please provide a Facebook video url!*");
    }
    try {
      var _0x1c570a = await fetchJson("https://api-aswin-sparky.koyeb.app/api/downloader/fbdl?url=" + _0x4c920f);
      var _0x27ca33 = _0x1c570a.data.high;
      await _0x27929e.sendMessage(_0x152311.chat, {
        video: {
          url: _0x27ca33,
          caption: global.botname
        }
      }, {
        quoted: _0x152311
      });
    } catch (_0x53bd40) {
      _0x3291fc("Error fetching video: " + _0x53bd40.message);
    }
  }
}, {
  command: ["gdrive"],
  operate: async ({
    Cypher: _0x355335,
    m: _0x85af7,
    reply: _0x5cc4fe,
    text: _0x49089c
  }) => {
    if (!_0x49089c) {
      return _0x5cc4fe("*Please provide a Google Drive file URL*");
    }
    try {
      let _0x45024f = await fetch("https://api.siputzx.my.id/api/d/gdrive?url=" + encodeURIComponent(_0x49089c));
      let _0x729e7a = await _0x45024f.json();
      if (_0x45024f.status !== 200 || !_0x729e7a.status || !_0x729e7a.data) {
        return _0x5cc4fe("*Please try again later or try another command!*");
      } else {
        const _0x43bad1 = _0x729e7a.data.download;
        const _0x5cf458 = path.join(__dirname, "" + _0x729e7a.data.name);
        const _0x3f0a55 = fs.createWriteStream(_0x5cf458);
        const _0x1ffe60 = await axios({
          url: _0x43bad1,
          method: "GET",
          responseType: "stream"
        });
        _0x1ffe60.data.pipe(_0x3f0a55);
        _0x3f0a55.on("finish", async () => {
          await _0x355335.sendMessage(_0x85af7.chat, {
            document: {
              url: _0x5cf458
            },
            fileName: _0x729e7a.data.name,
            mimetype: _0x1ffe60.headers["content-type"]
          });
          fs.unlinkSync(_0x5cf458);
        });
        _0x3f0a55.on("error", _0x29d56f => {
          console.error("Error downloading the file:", _0x29d56f);
          _0x5cc4fe("An error occurred while downloading the file.");
        });
      }
    } catch (_0x1f2d53) {
      console.error("Error fetching Google Drive file details:", _0x1f2d53);
      _0x5cc4fe("An error occurred while fetching the Google Drive file details.");
    }
  }
}, {
  command: ["gitclone"],
  operate: async ({
    m: _0x5cec9d,
    args: _0xc8e019,
    prefix: _0x24df23,
    command: _0x2cc8ae,
    Cypher: _0x35e6b2,
    reply: _0x583bfb,
    mess: _0x48073b,
    isUrl: _0x342bea
  }) => {
    if (!_0xc8e019[0]) {
      return _0x583bfb("*GitHub link to clone?*\nExample :\n" + _0x24df23 + _0x2cc8ae + " https://github.com/Matri199/Matrixmddata.git ");
    }
    if (!_0x342bea(_0xc8e019[0])) {
      return _0x583bfb("*Link invalid! Please provide a valid URL.*");
    }
    const _0x93a782 = /(?:https|git)(?::\/\/|@)(www\.)?github\.com[\/:]([^\/:]+)\/(.+)/i;
    const [,, _0x1dbd59, _0x377b09] = _0xc8e019[0].match(_0x93a782) || [];
    if (!_0x377b09) {
      return _0x583bfb("*Invalid GitHub link format. Please double-check the provided link.*");
    }
    const _0x115999 = _0x377b09.replace(/.git$/, "");
    const _0x5c6274 = "https://api.github.com/repos/" + _0x1dbd59 + "/" + _0x115999 + "/zipball";
    try {
      const _0x45a41b = await fetch(_0x5c6274, {
        method: "HEAD"
      });
      const _0x289d2d = _0x45a41b.headers.get("content-disposition").match(/attachment; filename=(.*)/)[1];
      await _0x35e6b2.sendMessage(_0x5cec9d.chat, {
        document: {
          url: _0x5c6274
        },
        fileName: _0x289d2d + ".zip",
        mimetype: "application/zip"
      }, {
        quoted: _0x5cec9d
      });
    } catch (_0x4e8bc3) {
      console.error(_0x4e8bc3);
      _0x583bfb(_0x48073b.error);
    }
  }
}, {
  command: ["image", "img"],
  operate: async ({
    Cypher: _0x60dc07,
    m: _0x409431,
    reply: _0x539ee7,
    text: _0x28ec8b
  }) => {
    if (!_0x28ec8b) {
      return _0x539ee7("*Please provide a search query*");
    }
    try {
      let _0x270e80 = await fetch("https://api.siputzx.my.id/api/s/pinterest?query=" + encodeURIComponent(_0x28ec8b));
      let _0x3cea8b = await _0x270e80.json();
      if (_0x270e80.status !== 200 || !_0x3cea8b.status || !_0x3cea8b.data || _0x3cea8b.data.length === 0) {
        return _0x539ee7("*Please try again later or try another command!*");
      } else {
        const _0x5e2343 = _0x3cea8b.data.slice(0, 5);
        for (const _0x27b250 of _0x5e2343) {
          await _0x60dc07.sendMessage(_0x409431.chat, {
            image: {
              url: _0x27b250.images_url
            }
          });
        }
      }
    } catch (_0x7897e2) {
      console.error("Error fetching images:", _0x7897e2);
      _0x539ee7("An error occurred while fetching images.");
    }
  }
}, {
  command: ["instagram", "igdl"],
  operate: async ({
    Cypher: _0x5e1205,
    m: _0x1987c6,
    reply: _0x463896,
    text: _0x207a28
  }) => {
    if (!_0x207a28) {
      return _0x463896("*Please provide an Instagram URL!*");
    }
    const _0x4dc8de = "https://xploader-api.vercel.app/igdl?url=" + encodeURIComponent(_0x207a28);
    try {
      const _0x581760 = await fetch(_0x4dc8de);
      const _0x257dc5 = await _0x581760.json();
      if (!_0x257dc5 || _0x257dc5.url.length === 0) {
        return _0x463896("*Failed to retrieve the video!*");
      }
      const _0x51c63b = _0x257dc5.url;
      const _0x281b63 = "Instagram Video";
      await _0x5e1205.sendMessage(_0x1987c6.chat, {
        video: {
          url: _0x51c63b
        },
        mimetype: "video/mp4",
        fileName: _0x281b63 + ".mp4"
      }, {
        quoted: _0x1987c6
      });
    } catch (_0x20b62e) {
      console.error("Download command failed:", _0x20b62e);
      _0x1987c6.reply("Error: " + _0x20b62e.message);
    }
  }
}, {
  command: ["itunes"],
  operate: async ({
    m: _0x23e797,
    text: _0x29a348,
    Cypher: _0x148ede,
    reply: _0xfd646a
  }) => {
    if (!_0x29a348) {
      return _0xfd646a("*Please provide a song name*");
    }
    try {
      let _0x5c7166 = await fetch("https://api.popcat.xyz/itunes?q=" + encodeURIComponent(_0x29a348));
      if (!_0x5c7166.ok) {
        throw new Error("*API request failed with status " + _0x5c7166.status + "*");
      }
      let _0x99e50b = await _0x5c7166.json();
      let _0x544be2 = "*Song Information:*\n\n\n • *Name:* " + _0x99e50b.name + "\n\n\n • *Artist:* " + _0x99e50b.artist + "\n\n\n • *Album:* " + _0x99e50b.album + "\n\n\n • *Release Date:* " + _0x99e50b.release_date + "\n\n\n • *Price:* " + _0x99e50b.price + "\n\n\n • *Length:* " + _0x99e50b.length + "\n\n\n • *Genre:* " + _0x99e50b.genre + "\n\n\n • *URL:* " + _0x99e50b.url;
      if (_0x99e50b.thumbnail) {
        await _0x148ede.sendMessage(_0x23e797.chat, {
          image: {
            url: _0x99e50b.thumbnail
          },
          caption: _0x544be2
        }, {
          quoted: _0x23e797
        });
      } else {
        _0xfd646a(_0x544be2);
      }
    } catch (_0x440df6) {
      console.error(_0x440df6);
      _0xfd646a("Error fetching song information: " + _0x440df6.message);
    }
  }
}, {
  command: ["mediafire"],
  operate: async ({
    Cypher: _0x559b0e,
    m: _0x906d3a,
    reply: _0x11d71d,
    text: _0x514ee7
  }) => {
    if (!_0x514ee7) {
      return _0x11d71d("*Please provide a MediaFire file URL*");
    }
    try {
      let _0x30c2e6 = await fetch("https://api.siputzx.my.id/api/d/mediafire?url=" + encodeURIComponent(_0x514ee7));
      let _0x215aed = await _0x30c2e6.json();
      if (_0x30c2e6.status !== 200 || !_0x215aed.status || !_0x215aed.data) {
        return _0x11d71d("*Please try again later or try another command!*");
      } else {
        const _0x3fd2cc = _0x215aed.data.downloadLink;
        const _0x4f9256 = path.join(__dirname, _0x215aed.data.fileName + ".zip");
        const _0x5c7e51 = fs.createWriteStream(_0x4f9256);
        const _0x14b4a2 = await axios({
          url: _0x3fd2cc,
          method: "GET",
          responseType: "stream"
        });
        _0x14b4a2.data.pipe(_0x5c7e51);
        _0x5c7e51.on("finish", async () => {
          await _0x559b0e.sendMessage(_0x906d3a.chat, {
            document: {
              url: _0x4f9256
            },
            fileName: _0x215aed.data.fileName,
            mimetype: "application/zip"
          });
          fs.unlinkSync(_0x4f9256);
        });
        _0x5c7e51.on("error", _0xa3ee2c => {
          console.error("Error downloading the file:", _0xa3ee2c);
          _0x11d71d("An error occurred while downloading the file.");
        });
      }
    } catch (_0xccbacd) {
      console.error("Error fetching MediaFire file details:", _0xccbacd);
      _0x11d71d("An error occurred while fetching the MediaFire file details.");
    }
  }
}, {
  command: ["pinterest"],
  operate: async ({
    Cypher: _0x3ad924,
    m: _0x15ffc9,
    reply: _0x4d9acf,
    text: _0x3283cf
  }) => {
    if (!_0x3283cf) {
      return _0x4d9acf("*Please provide a search query*");
    }
    try {
      let _0x43e8ea = await fetch("https://api.siputzx.my.id/api/s/pinterest?query=" + encodeURIComponent(_0x3283cf));
      let _0x55119e = await _0x43e8ea.json();
      if (_0x43e8ea.status !== 200 || !_0x55119e.status || !_0x55119e.data || _0x55119e.data.length === 0) {
        return _0x4d9acf("*Please try again later or try another command!*");
      } else {
        const _0x2d244a = _0x55119e.data[0];
        await _0x3ad924.sendMessage(_0x15ffc9.chat, {
          image: {
            url: _0x2d244a.images_url
          },
          caption: "Title: " + _0x2d244a.grid_title + "\nLink: " + _0x2d244a.link
        });
      }
    } catch (_0x9d5db1) {
      console.error("Error fetching Pinterest images:", _0x9d5db1);
      _0x4d9acf("An error occurred while fetching Pinterest images.");
    }
  }
}, {
  command: ["play", "song"],
  operate: async ({
    Cypher: _0x56a354,
    m: _0x4303a2,
    reply: _0x5aafa4,
    text: _0x32bfab,
    fetchMp3DownloadUrl: _0x138024
  }) => {
    if (!_0x32bfab) {
      return _0x5aafa4("*Please provide a song name!*");
    }
    try {
      const _0x65ceaf = await yts(_0x32bfab);
      if (!_0x65ceaf || _0x65ceaf.all.length === 0) {
        return _0x5aafa4("*The song you are looking for was not found.*");
      }
      const _0x58b4cc = _0x65ceaf.all[0];
      const _0x6668b4 = await _0x138024(_0x58b4cc.url);
      await _0x56a354.sendMessage(_0x4303a2.chat, {
        audio: {
          url: _0x6668b4
        },
        mimetype: "audio/mpeg",
        fileName: _0x58b4cc.title + ".mp3"
      }, {
        quoted: _0x4303a2
      });
    } catch (_0x377fb4) {
      console.error("play command failed:", _0x377fb4);
      _0x5aafa4("Error: " + _0x377fb4.message);
    }
  }
}, {
  command: ["playdoc", "songdoc"],
  operate: async ({
    Cypher: _0x2185c8,
    m: _0x515e41,
    reply: _0x1aa6e9,
    text: _0x3448d8,
    fetchMp3DownloadUrl: _0xbf0202
  }) => {
    if (!_0x3448d8) {
      return _0x1aa6e9("*Please provide a song name!*");
    }
    try {
      const _0x47aa2d = await yts(_0x3448d8);
      if (!_0x47aa2d || _0x47aa2d.all.length === 0) {
        return _0x1aa6e9("*The song you are looking for was not found.*");
      }
      const _0x14678b = _0x47aa2d.all[0];
      const _0x31f411 = await _0xbf0202(_0x14678b.url);
      await _0x2185c8.sendMessage(_0x515e41.chat, {
        document: {
          url: _0x31f411
        },
        mimetype: "audio/mpeg",
        fileName: _0x14678b.title + ".mp3"
      }, {
        quoted: _0x515e41
      });
    } catch (_0x139935) {
      console.error("playdoc command failed:", _0x139935);
      _0x1aa6e9("Error: " + _0x139935.message);
    }
  }
}, {
  command: ["ringtone"],
  operate: async ({
    m: _0x76f50d,
    text: _0x5a4074,
    prefix: _0x3b6808,
    command: _0x2cd1fc,
    Cypher: _0x2ab346,
    reply: _0x5bbb7b
  }) => {
    if (!_0x5a4074) {
      return _0x5bbb7b("*Example: " + (_0x3b6808 + _0x2cd1fc) + " black rover*");
    }
    try {
      let _0xb42a6 = await ringtone.ringtone(_0x5a4074);
      let _0x3ba733 = _0xb42a6[Math.floor(Math.random() * _0xb42a6.length)];
      await _0x2ab346.sendMessage(_0x76f50d.chat, {
        audio: {
          url: _0x3ba733.audio
        },
        fileName: _0x3ba733.title + ".mp3",
        mimetype: "audio/mpeg"
      }, {
        quoted: _0x76f50d
      });
    } catch (_0x2a6afe) {
      _0x5bbb7b("Error fetching ringtone: " + _0x2a6afe.message);
    }
  }
}, {
  command: ["savestatus", "save"],
  operate: async ({
    m: _0x3cecda,
    saveStatusMessage: _0x8a59b3
  }) => {
    await _0x8a59b3(_0x3cecda);
  }
}, {
  command: ["tiktok", "tikdl", "tiktokvideo"],
  operate: async ({
    m: _0x541c34,
    args: _0x3b8c4d,
    fetchJson: _0x4ed735,
    Cypher: _0x344f61,
    reply: _0x1f0c17
  }) => {
    if (!_0x3b8c4d[0]) {
      return _0x1f0c17("*Please provide a TikTok video url!*");
    }
    try {
      let _0x42b311 = await _0x4ed735("https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=" + _0x3b8c4d[0]);
      await _0x344f61.sendMessage(_0x541c34.chat, {
        caption: global.wm,
        video: {
          url: _0x42b311.data.video
        },
        fileName: "video.mp4",
        mimetype: "video/mp4"
      }, {
        quoted: _0x541c34
      });
    } catch (_0x116dd9) {
      _0x1f0c17("Error fetching video: " + _0x116dd9.message);
    }
  }
}, {
  command: ["tiktokaudio"],
  operate: async ({
    m: _0x18c69a,
    args: _0x2458b2,
    fetchJson: _0x24afc7,
    Cypher: _0x42dc3b,
    reply: _0x486d84
  }) => {
    if (!_0x2458b2[0]) {
      return _0x486d84("*Please provide a TikTok audio url!*");
    }
    try {
      let _0x23ad65 = await _0x24afc7("https://api-aswin-sparky.koyeb.app/api/downloader/tiktok?url=" + _0x2458b2[0]);
      await _0x42dc3b.sendMessage(_0x18c69a.chat, {
        audio: {
          url: _0x23ad65.data.audio
        },
        fileName: "tiktok.mp3",
        mimetype: "audio/mpeg"
      }, {
        quoted: _0x18c69a
      });
    } catch (_0x12f753) {
      _0x486d84("Error fetching audio: " + _0x12f753.message);
    }
  }
}, {
  command: ["video"],
  operate: async ({
    Cypher: _0x45aa8d,
    m: _0x694674,
    reply: _0x1c3456,
    text: _0xaea5d4,
    fetchVideoDownloadUrl: _0x294844
  }) => {
    if (!_0xaea5d4) {
      return _0x1c3456("*Please provide a song name!*");
    }
    try {
      const _0x5ddf21 = await yts(_0xaea5d4);
      if (!_0x5ddf21 || _0x5ddf21.all.length === 0) {
        return _0x1c3456("*The song you are looking for was not found.*");
      }
      const _0xed2c9d = _0x5ddf21.all[0];
      const _0x518f0e = await _0x294844(_0xed2c9d.url);
      await _0x45aa8d.sendMessage(_0x694674.chat, {
        video: {
          url: _0x518f0e.data.dl
        },
        mimetype: "video/mp4",
        fileName: _0x518f0e.data.title + ".mp4",
        caption: _0x518f0e.data.title
      }, {
        quoted: _0x694674
      });
    } catch (_0x5118b0) {
      console.error("video command failed:", _0x5118b0);
      _0x1c3456("Error: " + _0x5118b0.message);
    }
  }
}, {
  command: ["videodoc"],
  operate: async ({
    Cypher: _0x51ec5f,
    m: _0x4e5e19,
    reply: _0x28b621,
    text: _0x50cc34,
    fetchVideoDownloadUrl: _0x18812a
  }) => {
    if (!_0x50cc34) {
      return _0x28b621("*Please provide a song name!*");
    }
    try {
      const _0x69e8da = await yts(_0x50cc34);
      if (!_0x69e8da || _0x69e8da.all.length === 0) {
        return _0x28b621("*The song you are looking for was not found.*");
      }
      const _0x2da3f4 = _0x69e8da.all[0];
      const _0x458955 = await _0x18812a(_0x2da3f4.url);
      await _0x51ec5f.sendMessage(_0x4e5e19.chat, {
        document: {
          url: _0x458955.data.dl
        },
        mimetype: "video/mp4",
        fileName: _0x458955.data.title + ".mp4",
        caption: _0x458955.data.title
      }, {
        quoted: _0x4e5e19
      });
    } catch (_0x21a531) {
      console.error("videodoc command failed:", _0x21a531);
      _0x28b621("Error: " + _0x21a531.message);
    }
  }
}, {
  command: ["videodoc"],
  operate: async ({
    Cypher: _0x1edb40,
    m: _0x2a578f,
    reply: _0x5c8363,
    text: _0xc8a0a9,
    fetchVideoDownloadUrl: _0x3f1a5f
  }) => {
    if (!_0xc8a0a9) {
      return _0x5c8363("*Please provide a song name!*");
    }
    try {
      const _0x2b1846 = await yts(_0xc8a0a9);
      if (!_0x2b1846 || _0x2b1846.all.length === 0) {
        return _0x5c8363("*The song you are looking for was not found.*");
      }
      const _0x18d2b4 = _0x2b1846.all[0];
      const _0x3e527c = await _0x3f1a5f(_0x18d2b4.url);
      await _0x1edb40.sendMessage(_0x2a578f.chat, {
        document: {
          url: _0x3e527c.data.dl
        },
        mimetype: "video/mp4",
        fileName: _0x3e527c.data.title + ".mp4",
        caption: _0x3e527c.data.title
      }, {
        quoted: _0x2a578f
      });
    } catch (_0x6377) {
      console.error("videodoc command failed:", _0x6377);
      _0x5c8363("Error: " + _0x6377.message);
    }
  }
}, {
  command: ["xvideos", "porn", "xdl"],
  operate: async ({
    m: _0x1716da,
    text: _0x2f226e,
    isCreator: _0x1944c8,
    reply: _0x25244d,
    mess: _0x563044,
    Cypher: _0x1659bf,
    fetchJson: _0x55687b,
    quoted: _0x4d3d6b
  }) => {
    if (!_0x1944c8) {
      return _0x25244d(_0x563044.owner);
    }
    if (!_0x2f226e) {
      return _0x25244d("*Please provide a porn video search query!*");
    }
    let _0x541e46 = await _0x55687b("https://api-aswin-sparky.koyeb.app/api/search/xnxx?search=" + _0x2f226e);
    let _0x19984b = await _0x55687b("https://api-aswin-sparky.koyeb.app/api/downloader/xnxx?url=" + _0x541e46.result.result[0].link);
    await _0x1659bf.sendMessage(_0x1716da.chat, {
      video: {
        url: _0x19984b.data.files.high
      },
      caption: global.wm,
      contextInfo: {
        externalAdReply: {
          title: global.botname,
          body: "" + _0x541e46.result.result[0].title,
          sourceUrl: "" + _0x541e46.result.result[0].link,
          mediaType: 2,
          mediaUrl: "" + _0x541e46.result.result[0].link
        }
      }
    }, {
      quoted: _0x1716da
    });
    let _0x4ddb57 = await _0x55687b("https://api-aswin-sparky.koyeb.app/api/downloader/xnxx?url=" + _0x541e46.result.result[1].link);
    await _0x1659bf.sendMessage(_0x1716da.chat, {
      video: {
        url: _0x4ddb57.data.files.high
      },
      caption: global.wm,
      contextInfo: {
        externalAdReply: {
          title: global.botname,
          body: "" + _0x541e46.result.result[1].title,
          sourceUrl: "" + _0x541e46.result.result[1].link,
          mediaType: 2,
          mediaUrl: "" + _0x541e46.result.result[1].link
        }
      }
    }, {
      quoted: _0x1716da
    });
  }
}, {
  command: ["ytmp3"],
  operate: async ({
    Cypher: _0x215258,
    m: _0x2518fb,
    reply: _0x38ddd2,
    text: _0x3ab014,
    fetchMp3DownloadUrl: _0x1f9855
  }) => {
    if (!_0x3ab014) {
      return _0x38ddd2("*Please provide a valid YouTube link!*");
    }
    try {
      const _0x34e88d = _0x3ab014.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!_0x34e88d) {
        return _0x38ddd2("*Seems like your message does not contain a valid YouTube link*");
      }
      const _0x612a7c = _0x34e88d[0];
      const _0x581b59 = await _0x1f9855(_0x612a7c);
      await _0x215258.sendMessage(_0x2518fb.chat, {
        audio: {
          url: _0x581b59
        },
        mimetype: "audio/mpeg"
      }, {
        quoted: _0x2518fb
      });
    } catch (_0x39eae6) {
      console.error("ytmp3 command failed:", _0x39eae6);
      _0x38ddd2("Error: " + _0x39eae6.message);
    }
  }
}, {
  command: ["ytmp3doc"],
  operate: async ({
    Cypher: _0x31252f,
    m: _0x3350fb,
    reply: _0x36797d,
    text: _0x1d0ea1,
    fetchMp3DownloadUrl: _0x134bf8
  }) => {
    if (!_0x1d0ea1) {
      return _0x36797d("*Please provide a valid YouTube link!*");
    }
    try {
      const _0x217a53 = _0x1d0ea1.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!_0x217a53) {
        return _0x36797d("*Seems like your message does not contain a valid YouTube link*");
      }
      const _0x183406 = _0x217a53[0];
      const _0x2f7b5f = await _0x134bf8(_0x183406);
      const _0x39f94f = await yts(_0x183406);
      const _0x4eb6e0 = _0x39f94f.all[0];
      await _0x31252f.sendMessage(_0x3350fb.chat, {
        document: {
          url: _0x2f7b5f
        },
        mimetype: "audio/mpeg",
        fileName: _0x4eb6e0.title + ".mp3",
        caption: _0x4eb6e0.title + ".mp3"
      }, {
        quoted: _0x3350fb
      });
    } catch (_0x64449d) {
      console.error("ytmp3doc command failed:", _0x64449d);
      _0x36797d("Error: " + _0x64449d.message);
    }
  }
}, {
  command: ["ytmp4"],
  operate: async ({
    Cypher: _0x20b5c9,
    m: _0x48d015,
    reply: _0x1a3bbc,
    text: _0x76b3ad,
    fetchVideoDownloadUrl: _0x2558c0
  }) => {
    if (!_0x76b3ad) {
      return _0x1a3bbc("*Please provide a valid YouTube link!*");
    }
    try {
      const _0x2586e4 = _0x76b3ad.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!_0x2586e4) {
        return _0x1a3bbc("*Seems like your message does not contain a valid YouTube link*");
      }
      const _0x2b8b6c = _0x2586e4[0];
      const _0x1cfad4 = await _0x2558c0(_0x2b8b6c);
      await _0x20b5c9.sendMessage(_0x48d015.chat, {
        video: {
          url: _0x1cfad4.data.dl
        },
        mimetype: "video/mp4",
        fileName: _0x1cfad4.data.title + ".mp4",
        caption: _0x1cfad4.data.title
      }, {
        quoted: _0x48d015
      });
    } catch (_0x1209e1) {
      console.error("ytmp4 command failed:", _0x1209e1);
      _0x1a3bbc("Error: " + _0x1209e1.message);
    }
  }
}, {
  command: ["ytmp4doc"],
  operate: async ({
    Cypher: _0x38b1d2,
    m: _0x4ef0d8,
    reply: _0x228b53,
    text: _0x4369d8,
    fetchVideoDownloadUrl: _0x3593d3
  }) => {
    if (!_0x4369d8) {
      return _0x228b53("*Please provide a valid YouTube link!*");
    }
    try {
      const _0x2bd206 = _0x4369d8.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!_0x2bd206) {
        return _0x228b53("*Seems like your message does not contain a valid YouTube link*");
      }
      const _0x2ea08f = _0x2bd206[0];
      const _0x2e938c = await _0x3593d3(_0x2ea08f);
      await _0x38b1d2.sendMessage(_0x4ef0d8.chat, {
        document: {
          url: _0x2e938c.data.dl
        },
        mimetype: "video/mp4",
        fileName: _0x2e938c.data.title + ".mp4",
        caption: _0x2e938c.data.title
      }, {
        quoted: _0x4ef0d8
      });
    } catch (_0x46db92) {
      console.error("ytmp4doc command failed:", _0x46db92);
      _0x228b53("Error: " + _0x46db92.message);
    }
  }
}];