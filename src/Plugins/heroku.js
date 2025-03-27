function hi() {
  console.log("Hello World!");
}
hi();
const updateHerokuVar = async ({
  Cypher: _0x11a5b4,
  m: _0x5ea7d9,
  reply: _0x3cd332,
  isCreator: _0x58cdfe,
  key: _0x256c1e,
  value: _0x18f335,
  setHerokuEnvVar: _0x5502b4
}) => {
  if (!_0x58cdfe) {
    return _0x3cd332("❌ *Only the bot owner can modify this setting.*");
  }
  try {
    await _0x5502b4(_0x256c1e, _0x18f335);
    _0x3cd332("✅ *" + _0x256c1e.replace(/_/g, " ") + " updated:*\n```" + _0x256c1e + " = " + _0x18f335.toUpperCase() + "```");
    _0x3cd332("🔄 *𝗤𝗨𝗘𝗘𝗡 𝗔𝗗𝗭𝗜𝗔 Bot will restart to apply changes!*");
  } catch (_0x4487dd) {
    _0x3cd332("❌ *Error updating " + _0x256c1e.replace(/_/g, " ") + "*\n" + _0x4487dd.message);
  }
};
module.exports = [{
  command: ["addvar"],
  operate: async ({
    Cypher: _0x241158,
    m: _0x40a0d9,
    reply: _0x3a0bf7,
    isCreator: _0x46926a,
    full_args: _0x72f4c,
    setHerokuEnvVar: _0xaa6392
  }) => {
    if (!_0x46926a) {
      return;
    }
    const [_0xd746e1, _0x31b77c] = _0x72f4c.split("=").map(_0x16191c => _0x16191c.trim());
    if (!_0xd746e1 || !_0x31b77c) {
      return _0x3a0bf7("*Provide a variable name and value*\n\nExample: .addvar NEW_VAR = value");
    }
    await updateHerokuVar({
      Cypher: _0x241158,
      m: _0x40a0d9,
      reply: _0x3a0bf7,
      isCreator: _0x46926a,
      key: _0xd746e1,
      value: _0x31b77c,
      setHerokuEnvVar: _0xaa6392
    });
  }
}, {
  command: ["delvar"],
  operate: async ({
    Cypher: _0x52bbdd,
    m: _0x175a7d,
    reply: _0x17c405,
    isCreator: _0x5625f5,
    full_args: _0x30cdff,
    deleteHerokuEnvVar: _0x4b49f5
  }) => {
    if (!_0x5625f5) {
      return;
    }
    const _0x13e3b0 = _0x30cdff.trim();
    if (!_0x13e3b0) {
      return _0x17c405("*Provide a variable name to delete*");
    }
    try {
      await _0x4b49f5(_0x13e3b0);
      _0x17c405("✅ *Environment variable deleted:*\n```" + _0x13e3b0 + "```");
      _0x17c405("🔄 *𝗤𝗨𝗘𝗘𝗡 𝗔𝗗𝗜𝗭𝗔 Bot will restart to apply changes!*");
    } catch (_0x36d924) {
      _0x17c405("❌ *Error deleting environment variable*\n" + _0x36d924.message);
    }
  }
}, {
  command: ["getvar", "getvars"],
  operate: async _0x8117a3 => {
    const {
      m: _0x3276c2,
      isCreator: _0x42ce7e,
      reply: _0x3dbfc4,
      getHerokuEnvVars: _0x30ea91
    } = _0x8117a3;
    if (!_0x42ce7e) {
      return;
    }
    try {
      const _0x366e9d = await _0x30ea91();
      const _0x334a96 = Object.entries(_0x366e9d).map(([_0x4cc975, _0x441262]) => _0x4cc975 + " = " + _0x441262).join("\n");
      await _0x3dbfc4("*Current Environment Variables:*\n```" + _0x334a96 + "```");
    } catch (_0x1d1919) {
      await _0x3dbfc4("*Error getting environment variables*\n" + _0x1d1919.message);
    }
  }
}, {
  command: ["setbotname"],
  operate: async ({
    Cypher: _0x1c9227,
    m: _0x1c9560,
    reply: _0x57327e,
    isCreator: _0x40d531,
    text: _0x590684,
    setHerokuEnvVar: _0x5778f6
  }) => {
    if (!_0x590684) {
      return _0x57327e("*Provide a bot name*\n\nExample: .setbotname Queen Adiza");
    }
    await updateHerokuVar({
      Cypher: _0x1c9227,
      m: _0x1c9560,
      reply: _0x57327e,
      isCreator: _0x40d531,
      key: "BOT_NAME",
      value: _0x590684.trim(),
      setHerokuEnvVar: _0x5778f6
    });
  }
}, {
  command: ["setname"],
  operate: async ({
    Cypher: _0x25d1da,
    m: _0x4edb32,
    reply: _0x4c6c77,
    isCreator: _0x52d60f,
    text: _0x15e6bc,
    setHerokuEnvVar: _0x25fff4
  }) => {
    if (!_0x15e6bc) {
      return _0x4c6c77("*Provide your name*\n\nExample: .setname Matrix");
    }
    await updateHerokuVar({
      Cypher: _0x25d1da,
      m: _0x4edb32,
      reply: _0x4c6c77,
      isCreator: _0x52d60f,
      key: "OWNER_NAME",
      value: _0x15e6bc.trim(),
      setHerokuEnvVar: _0x25fff4
    });
  }
}, {
  command: ["setownernumber"],
  operate: async ({
    Cypher: _0x2b764b,
    m: _0x4400a6,
    reply: _0x29a04a,
    isCreator: _0x2d8c35,
    text: _0x295f1f,
    setHerokuEnvVar: _0xc125cf
  }) => {
    if (!_0x295f1f) {
      return _0x29a04a("*Provide your name*\n\nExample: .setownernumber 1234567890");
    }
    await updateHerokuVar({
      Cypher: _0x2b764b,
      m: _0x4400a6,
      reply: _0x29a04a,
      isCreator: _0x2d8c35,
      key: "OWNER_NUMBER",
      value: _0x295f1f.trim(),
      setHerokuEnvVar: _0xc125cf
    });
  }
}, {
  command: ["setvar"],
  operate: async _0x4d1232 => {
    const {
      m: _0x28adf5,
      full_args: _0x485beb,
      reply: _0x434674,
      isCreator: _0x3d16ed,
      setHerokuEnvVar: _0x2203cb
    } = _0x4d1232;
    if (!_0x3d16ed) {
      return;
    }
    const [_0x59b0b6, _0x24d70e] = _0x485beb.split("=");
    if (!_0x59b0b6 || !_0x24d70e) {
      return _0x434674("*Please provide a variable name and value*\n\nExample: .setvar ANTI_CALL = false");
    }
    try {
      const _0x454ba5 = await _0x2203cb(_0x59b0b6.trim(), _0x24d70e.trim());
      await _0x434674("*Environment variable set successfully*\n```" + _0x59b0b6 + " = " + _0x24d70e + "```");
      await _0x434674("*𝗔𝗗𝗜𝗭𝗔 Bot will restart to apply the new environment variable. Please wait a moment!*");
    } catch (_0x3fb325) {
      await _0x434674("*Error setting environment variable*\n" + _0x3fb325.message);
    }
  }
}];
