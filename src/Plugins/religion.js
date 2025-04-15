function hi() {
  console.log("Hello World!");
}
hi();
const fetch = require("node-fetch");
module.exports = [{
  command: ["bible"],
  operate: async ({
    m: _0x30299f,
    text: _0x2734ed,
    prefix: _0x289c5a,
    command: _0x2d47a3,
    reply: _0x2dc2a1
  }) => {
    const _0x23a538 = "https://bible-api.com";
    try {
      let _0x1e6e65 = _0x2734ed.split(" ").join("").trim();
      if (!_0x1e6e65) {
        throw new Error("*Please specify the chapter number or name. Example: " + (_0x289c5a + _0x2d47a3) + " John 3:16*");
      }
      _0x1e6e65 = encodeURIComponent(_0x1e6e65);
      let _0x20bf7c = await fetch(_0x23a538 + "/" + _0x1e6e65);
      if (!_0x20bf7c.ok) {
        throw new Error("*Please specify the chapter number or name. Example: " + (_0x289c5a + _0x2d47a3) + " John 3:16*");
      }
      let _0x3f9ec5 = await _0x20bf7c.json();
      let _0x5b541f = "\n\n*The Holy Bible*\n\n\n*Chapter " + _0x3f9ec5.reference + "*\n\n\nType: " + _0x3f9ec5.translation_name + "\n\n\nNumber of verses: " + _0x3f9ec5.verses.length + "\n\n\n*Chapter Content:*\n\n\n" + _0x3f9ec5.text + "\n";
      _0x2dc2a1(_0x5b541f);
    } catch (_0x5deea2) {
      _0x2dc2a1("Error: " + _0x5deea2.message);
    }
  }
}, {
  command: ["quran"],
  operate: async ({
    m: _0x3752ef,
    text: _0x20a5d9,
    Xploader: _0x1e25e3,
    reply: _0x47287d
  }) => {
    try {
      let _0x59050f = _0x20a5d9.split(" ")[0];
      if (!_0x59050f) {
        throw new Error("*Please specify the surah number or name*");
      }
      let _0x47006c = await fetch("https://quran-endpoint.vercel.app/quran");
      let _0x69c5a9 = await _0x47006c.json();
      let _0x386e6e = _0x69c5a9.data.find(_0x3585f7 => _0x3585f7.number === Number(_0x59050f) || _0x3585f7.asma.ar.short.toLowerCase() === _0x59050f.toLowerCase() || _0x3585f7.asma.en.short.toLowerCase() === _0x59050f.toLowerCase());
      if (!_0x386e6e) {
        throw new Error("Couldn't find surah with number or name \"" + _0x59050f + "\"");
      }
      let _0x162402 = await fetch("https://quran-endpoint.vercel.app/quran/" + _0x386e6e.number);
      if (!_0x162402.ok) {
        let _0x142857 = await _0x162402.json();
        throw new Error("API request failed with status " + _0x162402.status + " and message " + _0x142857.message);
      }
      let _0x1f7490 = await _0x162402.json();
      let _0x519862 = "\n\n*Quran: The Holy Book*\n\n\n*Surah " + _0x1f7490.data.number + ": " + _0x1f7490.data.asma.ar.long + " (" + _0x1f7490.data.asma.en.long + ")*\n\n\nType: " + _0x1f7490.data.type.en + "\n\n\nNumber of verses: " + _0x1f7490.data.ayahCount + "\n\n\n*Explanation:*\n\n\n" + _0x1f7490.data.tafsir.id;
      _0x47287d(_0x519862);
      if (_0x1f7490.data.recitation.full) {
        await _0x1e25e3.sendMessage(_0x3752ef.chat, {
          audio: {
            url: _0x1f7490.data.recitation.full
          },
          mimetype: "audio/mp4",
          ptt: true,
          fileName: "recitation.mp3"
        }, {
          quoted: _0x3752ef
        });
      }
    } catch (_0x2f418c) {
      _0x47287d("Error: " + _0x2f418c.message);
    }
  }
}, {
  command: ["gita", "gita-verse", "bhagavatgita"],
  operate: async ({
    m,
    reply,
    baileys // Replace with the actual name of your Baileys instance
  }) => {
    try {
      let verseNumber = m.text.split(' ')[1];
      if (!verseNumber || isNaN(verseNumber)) {
        verseNumber = Math.floor(Math.random() * 700) + 1;
      }
      const res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`);
      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          `API request failed with status ${res.status} and message: ${error.detail?.[0]?.msg || error.message}`
        );
      }
      const json = await res.json();
      const gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`;
      reply(gitaVerse);
      //Audio sending removed
    } catch (error) {
      console.error(error);
      reply("Error: " + error.message);
    }
  }
}];
