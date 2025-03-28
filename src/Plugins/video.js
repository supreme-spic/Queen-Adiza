function hi() {
  console.log("Hello World!");
}
hi();
const fs = require("fs");
const {
  exec
} = require("child_process");
const {
  getRandom
} = require("../../lib/myfunc");
module.exports = [{
  command: ["volvideo"],
  operate: async ({
    Cypher: _0xe2b01b,
    m: _0x130321,
    reply: _0x25fe0a,
    args: _0x2d669e
  }) => {
    const _0x155e66 = _0x130321.quoted ? _0x130321.quoted : null;
    const _0x1b0022 = _0x155e66?.mimetype || "";
    if (!_0x2d669e.join(" ")) {
      return _0x25fe0a("*Example: " + (global.prefixz + command) + " 10*");
    }
    if (!_0x155e66 || !/video/.test(_0x1b0022)) {
      return _0x25fe0a("Reply to an *video file* with *" + (prefix + command) + "* to adjust volume.");
    }
    try {
      const _0x27b861 = await _0xe2b01b.downloadAndSaveMediaMessage(_0x155e66, "volume");
      const _0x26359c = getRandom(".mp4");
      exec("ffmpeg -i " + _0x27b861 + " -filter:a volume=" + _0x2d669e[0] + " " + _0x26359c, (_0x2e0ed5, _0x69a7aa, _0x3dba33) => {
        fs.unlinkSync(_0x27b861);
        if (_0x2e0ed5) {
          return _0x25fe0a("*Error!*");
        }
        const _0x14b2d4 = fs.readFileSync(_0x26359c);
        _0xe2b01b.sendMessage(_0x130321.chat, {
          video: _0x14b2d4,
          mimetype: "video/mp4"
        }, {
          quoted: _0x130321
        });
        fs.unlinkSync(_0x26359c);
      });
    } catch (_0x26780a) {
      console.error("Error processing video:", _0x26780a);
      _0x25fe0a("An error occurred while processing the video.");
    }
  }
}];