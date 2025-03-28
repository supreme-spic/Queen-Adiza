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
const processAudio = async ({
  Cypher: _0x5716d7,
  m: _0x28f47a,
  reply: _0x651888,
  prefix: _0x3b2f22,
  command: _0x4f6667,
  filter: _0x814227
}) => {
  try {
    const _0x5048ac = _0x28f47a.quoted ? _0x28f47a.quoted : null;
    const _0x3177ab = _0x5048ac?.mimetype || "";
    if (!_0x5048ac || !/audio/.test(_0x3177ab)) {
      return _0x651888("Reply to an *audio file* with *" + (_0x3b2f22 + _0x4f6667) + "* to modify it.");
    }
    const _0x58a221 = await _0x5716d7.downloadAndSaveMediaMessage(_0x5048ac);
    const _0x23eef5 = getRandom(".mp3");
    exec("ffmpeg -i " + _0x58a221 + " " + _0x814227 + " " + _0x23eef5, _0x523c7a => {
      fs.unlinkSync(_0x58a221);
      if (_0x523c7a) {
        return _0x651888(_0x523c7a.toString());
      }
      const _0xf86b38 = fs.readFileSync(_0x23eef5);
      _0x5716d7.sendMessage(_0x28f47a.chat, {
        audio: _0xf86b38,
        mimetype: "audio/mpeg"
      }, {
        quoted: _0x28f47a
      });
      fs.unlinkSync(_0x23eef5);
    });
  } catch (_0x2d9a48) {
    _0x651888(_0x2d9a48.toString());
  }
};
module.exports = [{
  command: ["bass"],
  operate: async ({
    Cypher: _0x112b96,
    m: _0x20adc8,
    reply: _0x13fdcc,
    prefix: _0x50e8f6,
    command: _0x1cfc74
  }) => {
    await processAudio({
      Cypher: _0x112b96,
      m: _0x20adc8,
      reply: _0x13fdcc,
      prefix: _0x50e8f6,
      command: _0x1cfc74,
      filter: "-af equalizer=f=54:width_type=o:width=2:g=20"
    });
  }
}, {
  command: ["blown"],
  operate: async ({
    Cypher: _0x1c8312,
    m: _0x59fb1f,
    reply: _0x3d676d,
    prefix: _0x230f34,
    command: _0x3e41a7
  }) => {
    await processAudio({
      Cypher: _0x1c8312,
      m: _0x59fb1f,
      reply: _0x3d676d,
      prefix: _0x230f34,
      command: _0x3e41a7,
      filter: "-af acrusher=.1:1:64:0:log"
    });
  }
}, {
  command: ["deep"],
  operate: async ({
    Cypher: _0x551aa6,
    m: _0x43f588,
    reply: _0x133048,
    prefix: _0x35b557,
    command: _0x5ee68a
  }) => {
    await processAudio({
      Cypher: _0x551aa6,
      m: _0x43f588,
      reply: _0x133048,
      prefix: _0x35b557,
      command: _0x5ee68a,
      filter: "-af atempo=4/4,asetrate=44500*2/3"
    });
  }
}, {
  command: ["earrape"],
  operate: async ({
    Cypher: _0x13cc25,
    m: _0x3d7406,
    reply: _0x4312a0,
    prefix: _0x176fc9,
    command: _0x5ab7eb
  }) => {
    await processAudio({
      Cypher: _0x13cc25,
      m: _0x3d7406,
      reply: _0x4312a0,
      prefix: _0x176fc9,
      command: _0x5ab7eb,
      filter: "-af volume=12"
    });
  }
}, {
  command: ["reverse"],
  operate: async ({
    Cypher: _0x1d8f7e,
    m: _0x49ff96,
    reply: _0x3b9282,
    prefix: _0x2d282f,
    command: _0x578a28
  }) => {
    await processAudio({
      Cypher: _0x1d8f7e,
      m: _0x49ff96,
      reply: _0x3b9282,
      prefix: _0x2d282f,
      command: _0x578a28,
      filter: "-filter_complex \"areverse\""
    });
  }
}, {
  command: ["robot"],
  operate: async ({
    Cypher: _0x2d82f1,
    m: _0x977edd,
    reply: _0x1491d6,
    prefix: _0x3b9ba2,
    command: _0x371dc1
  }) => {
    await processAudio({
      Cypher: _0x2d82f1,
      m: _0x977edd,
      reply: _0x1491d6,
      prefix: _0x3b9ba2,
      command: _0x371dc1,
      filter: "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\""
    });
  }
}, {
  command: ["volaudio"],
  operate: async ({
    Cypher: _0xf9be6d,
    m: _0x98bead,
    reply: _0xd4c5af,
    args: _0x46daba,
    prefix: _0x6660a0,
    command: _0x517bae
  }) => {
    const _0x18851c = _0x98bead.quoted ? _0x98bead.quoted : null;
    const _0x50aecc = _0x18851c?.mimetype || "";
    if (!_0x46daba.length) {
      return _0xd4c5af("*Example: " + (_0x6660a0 + _0x517bae) + " 10*");
    }
    if (!_0x18851c || !/audio/.test(_0x50aecc)) {
      return _0xd4c5af("Reply to an *audio file* with *" + (_0x6660a0 + _0x517bae) + "* to adjust volume.");
    }
    const _0x2760e9 = await _0xf9be6d.downloadAndSaveMediaMessage(_0x18851c);
    const _0x1ed490 = getRandom(".mp3");
    exec("ffmpeg -i " + _0x2760e9 + " -filter:a volume=" + _0x46daba[0] + " " + _0x1ed490, _0x5d7617 => {
      fs.unlinkSync(_0x2760e9);
      if (_0x5d7617) {
        return _0xd4c5af("*Error!*");
      }
      const _0x446ae5 = fs.readFileSync(_0x1ed490);
      _0xf9be6d.sendMessage(_0x98bead.chat, {
        audio: _0x446ae5,
        mimetype: "audio/mp4",
        ptt: true
      }, {
        quoted: _0x98bead
      });
      fs.unlinkSync(_0x1ed490);
    });
  }
}];