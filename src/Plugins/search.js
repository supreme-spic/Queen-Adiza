function hi() {
  console.log("Hello World!");
}
hi();
const fetch = require("node-fetch");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment-timezone");
const yts = require("yt-search");
module.exports = [{
  command: ["define"],
  operate: async ({
    Cypher: _0x52ad33,
    m: _0x236b21,
    reply: _0x4f3082,
    text: _0x1c5889
  }) => {
    if (!_0x1c5889) {
      return _0x4f3082("Enter a word to define.");
    }
    try {
      const _0x498ddf = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x1c5889);
      const _0x2e1bad = await _0x498ddf.json();
      if (!_0x2e1bad.length) {
        throw new Error();
      }
      const _0xc470c7 = _0x2e1bad[0].meanings[0].definitions.map((_0xe44f19, _0x8e13ba) => "*Definition " + (_0x8e13ba + 1) + ":* " + _0xe44f19.definition).join("\n\n");
      _0x52ad33.sendMessage(_0x236b21.chat, {
        text: "📖 *Definitions for:* " + _0x1c5889 + "\n\n" + _0xc470c7
      }, {
        quoted: _0x236b21
      });
    } catch (_0x1af231) {
      _0x4f3082("❌ No definition found for *" + _0x1c5889 + "*");
    }
  }
}, {
  command: ["define2"],
  operate: async ({
    m: _0x3bef50,
    text: _0x558d73,
    Cypher: _0x27bb39,
    reply: _0x32ec02
  }) => {
    if (!_0x558d73) {
      return _0x32ec02("What do you want to define?");
    }
    try {
      const {
        data: _0x533b21
      } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x558d73);
      if (!_0x533b21.list.length) {
        throw new Error();
      }
      const _0x1eb6d6 = _0x533b21.list[0].definition.replace(/|/g, "");
      const _0x2e866c = _0x533b21.list[0].example.replace(/|/g, "");
      _0x27bb39.sendMessage(_0x3bef50.chat, {
        text: "📖 *Urban Definition of:* " + _0x558d73 + "\n\n*Definition:* " + _0x1eb6d6 + "\n\n*Example:* " + _0x2e866c
      }, {
        quoted: _0x3bef50
      });
    } catch (_0x357401) {
      _0x32ec02("❌ No definition found for *" + _0x558d73 + "*");
    }
  }
}, {
  command: ["imdb", "movie"],
  operate: async ({
    Cypher: _0x66bc72,
    m: _0x2f7632,
    reply: _0xd05312,
    text: _0x1b57dc
  }) => {
    if (!_0x1b57dc) {
      return _0xd05312("Provide a movie or series name.");
    }
    try {
      const {
        data: _0x1ac993
      } = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x1b57dc + "&plot=full");
      if (_0x1ac993.Response === "False") {
        throw new Error();
      }
      const _0x76c00c = "🎬 *IMDB SEARCH*\n\n" + ("*Title:* " + _0x1ac993.Title + "\n*Year:* " + _0x1ac993.Year + "\n*Rated:* " + _0x1ac993.Rated + "\n") + ("*Released:* " + _0x1ac993.Released + "\n*Runtime:* " + _0x1ac993.Runtime + "\n*Genre:* " + _0x1ac993.Genre + "\n") + ("*Director:* " + _0x1ac993.Director + "\n*Actors:* " + _0x1ac993.Actors + "\n*Plot:* " + _0x1ac993.Plot + "\n") + ("*IMDB Rating:* " + _0x1ac993.imdbRating + " ⭐\n*Votes:* " + _0x1ac993.imdbVotes);
      _0x66bc72.sendMessage(_0x2f7632.chat, {
        image: {
          url: _0x1ac993.Poster
        },
        caption: _0x76c00c
      }, {
        quoted: _0x2f7632
      });
    } catch (_0x3d4d15) {
      _0xd05312("❌ Unable to fetch IMDb data.");
    }
  }
}, {
  command: ["lyrics"],
  operate: async ({
    m: _0x43c434,
    text: _0xd760ca,
    Cypher: _0xa8cd1,
    reply: _0x353bbc
  }) => {
    if (!_0xd760ca) {
      return _0x353bbc("Provide a song name.");
    }
    try {
      const _0x5aa356 = "https://xploader-api.vercel.app/lyrics?query=" + encodeURIComponent(_0xd760ca);
      const _0x87b88 = await fetch(_0x5aa356);
      const _0x149136 = await _0x87b88.json();
      if (!_0x149136.length || !_0x149136[0].song || !_0x149136[0].artist || !_0x149136[0].lyrics) {
        throw new Error();
      }
      _0xa8cd1.sendMessage(_0x43c434.chat, {
        text: "🎵 *Lyrics for:* " + _0x149136[0].song + " - " + _0x149136[0].artist + "\n\n" + _0x149136[0].lyrics
      }, {
        quoted: _0x43c434
      });
    } catch (_0x2077ed) {
      console.error("❌ Unable to fetch lyrics:", _0x2077ed);
      _0x353bbc("❌ Unable to fetch lyrics.");
    }
  }
}, {
  command: ["shazam", "find", "whatmusic"],
  operate: async ({
    m: _0x4bbe0b,
    acr: _0x31f753,
    reply: _0x3284f3
  }) => {
    const _0x7ad334 = _0x4bbe0b.quoted ? _0x4bbe0b.quoted : null || _0x4bbe0b.msg;
    const _0x277fb4 = _0x7ad334?.mimetype || "";
    if (!_0x7ad334 || !/audio|video/.test(_0x277fb4)) {
      return _0x3284f3("Reply to an audio or video to identify music.");
    }
    try {
      const _0x5036b4 = await _0x4bbe0b.quoted.download();
      const _0x28ff6a = "./tmp/" + _0x4bbe0b.sender + "." + _0x277fb4.split("/")[1];
      fs.writeFileSync(_0x28ff6a, _0x5036b4);
      const _0x43e30b = await _0x31f753.identify(fs.readFileSync(_0x28ff6a));
      if (_0x43e30b.status.code !== 0) {
        throw new Error(_0x43e30b.status.msg);
      }
      const {
        title: _0x4c18d8,
        artists: _0x41887c,
        album: _0x3122d6,
        release_date: _0xda3f56
      } = _0x43e30b.metadata.music[0];
      const _0x28bacb = "🎵 *Music Identified!*\n\n*Title:* " + _0x4c18d8 + "\n*Artist(s):* " + _0x41887c.map(_0x2f80d9 => _0x2f80d9.name).join(", ") + "\n" + ("*Album:* " + (_0x3122d6.name || "Unknown") + "\n*Release Date:* " + (_0xda3f56 || "Unknown"));
      fs.unlinkSync(_0x28ff6a);
      _0x3284f3(_0x28bacb);
    } catch (_0x1b3e4c) {
      _0x3284f3("❌ Unable to identify the music.");
    }
  }
}, {
  command: ["weather"],
  operate: async ({
    Cypher: _0x45dda3,
    m: _0x33ef7f,
    reply: _0x34cc59,
    text: _0x59b172
  }) => {
    if (!_0x59b172) {
      return _0x34cc59("Provide a location.");
    }
    try {
      const {
        data: _0x487997
      } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0x59b172 + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273");
      const _0x4fd9ca = "🌤️ *Weather for " + _0x59b172 + "*\n\n" + ("🌡️ *Temperature:* " + _0x487997.main.temp + "°C (Feels like " + _0x487997.main.feels_like + "°C)\n") + ("🌪️ *Weather:* " + _0x487997.weather[0].main + " - " + _0x487997.weather[0].description + "\n") + ("💨 *Wind Speed:* " + _0x487997.wind.speed + " m/s\n") + ("📍 *Coordinates:* " + _0x487997.coord.lat + ", " + _0x487997.coord.lon + "\n") + ("🌍 *Country:* " + _0x487997.sys.country);
      _0x45dda3.sendMessage(_0x33ef7f.chat, {
        text: _0x4fd9ca
      }, {
        quoted: _0x33ef7f
      });
    } catch (_0x501172) {
      _0x34cc59("❌ Unable to fetch weather data.");
    }
  }
}, {
  command: ["yts", "ytsearch"],
  operate: async ({
    Cypher: _0x2f400e,
    m: _0x46141b,
    reply: _0x26dd4b,
    text: _0x1484e2,
    prefix: _0x3c72b8,
    command: _0x52f1a1
  }) => {
    if (!_0x1484e2) {
      return _0x26dd4b("📌 *Example: " + (_0x3c72b8 + _0x52f1a1) + " Eminem Godzilla*");
    }
    try {
      const _0x5b2ce8 = await yts(_0x1484e2);
      if (!_0x5b2ce8.all.length) {
        return _0x26dd4b("❌ *No YouTube results found.*");
      }
      let _0x4df1fb = "🎥 *YouTube Search Results for:* " + _0x1484e2 + "\n\n";
      _0x5b2ce8.all.slice(0, 10).forEach((_0x5647d7, _0x4d5d9d) => {
        _0x4df1fb += "□ *" + (_0x4d5d9d + 1) + ".* " + _0x5647d7.title + "\n□ *Uploaded:* " + _0x5647d7.ago + "\n□ *Views:* " + _0x5647d7.views + "\n□ *Duration:* " + _0x5647d7.timestamp + "\n□ *URL:* " + _0x5647d7.url + "\n\n─────────────────\n\n";
      });
      await _0x2f400e.sendMessage(_0x46141b.chat, {
        image: {
          url: _0x5b2ce8.all[0].thumbnail
        },
        caption: _0x4df1fb
      }, {
        quoted: _0x46141b
      });
    } catch (_0x16aafe) {
      console.error("YT Search command failed:", _0x16aafe);
      _0x26dd4b("❌ *An error occurred while fetching YouTube search results.*");
    }
  }
}];