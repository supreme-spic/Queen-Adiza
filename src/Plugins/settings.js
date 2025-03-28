function hi() {
  console.log("Hello World!");
}
hi();
const fs = require("fs");
const fsp = fs.promises;
module.exports = [{
  command: ["addbadword"],
  operate: async ({
    Cypher: _0x151b8c,
    m: _0x5f0392,
    isCreator: _0xfd6f11,
    mess: _0xde214d,
    prefix: _0x278e2d,
    args: _0x3aac32,
    q: _0x54730d,
    bad: _0xd243dc,
    reply: _0xfa3b63
  }) => {
    if (!_0xfd6f11) {
      return _0xfa3b63(_0xde214d.owner);
    }
    if (_0x3aac32.length < 1) {
      return _0xfa3b63("Use " + _0x278e2d + "addbadword [harsh word].");
    }
    if (_0xd243dc.includes(_0x54730d)) {
      return _0xfa3b63("This word is already in the list!");
    }
    _0xd243dc.push(_0x54730d);
    try {
      await fsp.writeFile("./src/badwords.json", JSON.stringify(_0xd243dc, null, 2));
      _0xfa3b63("Successfully added bad word!");
    } catch (_0x16c480) {
      console.error("Error writing to badwords.json:", _0x16c480);
      _0xfa3b63("An error occurred while adding the bad word.");
    }
  }
}, {
  command: ["addignorelist", "ban", "banchat"],
  operate: async ({
    m: _0x5a24a4,
    args: _0x40be0a,
    isCreator: _0x286ae9,
    loadBlacklist: _0xe54639,
    mess: _0x8eee8,
    reply: _0x3f6af2
  }) => {
    if (!_0x286ae9) {
      return _0x3f6af2(_0x8eee8.owner);
    }
    let _0x48a650 = _0x5a24a4.mentionedJid && _0x5a24a4.mentionedJid[0];
    let _0x1b0f95 = _0x5a24a4.quoted && _0x5a24a4.quoted.sender;
    let _0x341448 = _0x48a650 || _0x1b0f95 || _0x5a24a4.chat;
    if (!_0x341448) {
      return _0x3f6af2("Mention a user, reply to their message, or provide a phone number to ignore.");
    }
    let _0x3d0920 = _0xe54639();
    if (!_0x3d0920.blacklisted_numbers.includes(_0x341448)) {
      _0x3d0920.blacklisted_numbers.push(_0x341448);
      if (global.dbToken) {
        await global.writeDB();
      }
      await _0x3f6af2("+" + _0x341448.split("@")[0] + " added to the ignore list.");
    } else {
      await _0x3f6af2("+" + _0x341448.split("@")[0] + " is already ignored.");
    }
  }
}, {
  command: ["addsudo", "addowner"],
  operate: async ({
    m: _0x59ae94,
    args: _0x40e56e,
    isCreator: _0x40f3f7,
    reply: _0x5dc7f4
  }) => {
    if (!_0x40f3f7) {
      return _0x5dc7f4(mess.owner);
    }
    if (_0x59ae94.chat.endsWith("@g.us") && (!_0x59ae94.mentionedJid || !_0x59ae94.mentionedJid[0]) && (!_0x59ae94.quoted || !_0x59ae94.quoted.sender)) {
      return _0x5dc7f4("Reply to or tag a person!");
    }
    const _0x534265 = _0x59ae94.mentionedJid && _0x59ae94.mentionedJid[0] || _0x59ae94.quoted && _0x59ae94.quoted.sender || _0x59ae94.chat;
    if (!_0x534265) {
      return _0x5dc7f4("Mention a user or reply to their message to add them to the sudo list.");
    }
    const _0x5ea062 = global.db.data.sudo;
    if (!_0x5ea062.includes(_0x534265)) {
      _0x5ea062.push(_0x534265);
      if (global.dbToken) {
        await global.writeDB();
      }
      await _0x5dc7f4("+" + _0x534265.split("@")[0] + " added to the sudo list and are be able to use any function of the bot even in private mode.");
    } else {
      await _0x5dc7f4("+" + _0x534265.split("@")[0] + " is already a sudo user.");
    }
  }
}, {
  command: ["alwaysonline"],
  operate: async ({
    Cypher: _0x42e279,
    m: _0x13a2cf,
    reply: _0x3c0573,
    args: _0x3db465,
    prefix: _0x396b29,
    command: _0x44597b,
    isCreator: _0x320b9d,
    mess: _0x348ce3,
    db: _0x2b318d,
    botNumber: _0x3ad0b8
  }) => {
    if (!_0x320b9d) {
      return _0x3c0573(_0x348ce3.owner);
    }
    if (_0x3db465.length < 1) {
      return _0x3c0573("Example: " + (_0x396b29 + _0x44597b) + " on/off");
    }
    const _0x27e93f = ["on", "off"];
    const _0x50fcaa = _0x3db465[0].toLowerCase();
    if (!_0x27e93f.includes(_0x50fcaa)) {
      return _0x3c0573("Invalid option");
    }
    _0x2b318d.data.settings.alwaysonline = _0x50fcaa === "on";
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x3c0573("Always-online " + (_0x50fcaa === "on" ? "enabled" : "disabled") + " successfully");
  }
}, {
  command: ["anticall"],
  operate: async ({
    reply: _0x1a9c7c,
    args: _0x1c3116,
    prefix: _0x333a6c,
    command: _0x4039cc,
    isCreator: _0x23bc25,
    mess: _0x4f61d7,
    db: _0x415f54
  }) => {
    if (!_0x23bc25) {
      return _0x1a9c7c(_0x4f61d7.owner);
    }
    if (_0x1c3116.length < 1) {
      return _0x1a9c7c("Example: " + (_0x333a6c + _0x4039cc) + " block/decline/off\n\nblock - Declines and blocks callers\ndecline - Declines incoming calls\noff - disables anticall");
    }
    const _0xd64e68 = ["block", "decline", "off"];
    const _0x7f3b0 = _0x1c3116[0].toLowerCase();
    if (!_0xd64e68.includes(_0x7f3b0)) {
      return _0x1a9c7c("Invalid option; type *" + _0x333a6c + "anticall* to see available options!");
    }
    _0x415f54.data.settings.anticall = _0x7f3b0 === "off" ? false : _0x7f3b0;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x1a9c7c("Anti-call set to *" + _0x7f3b0 + "* successfully.");
  }
}, {
  command: ["antidelete"],
  operate: async ({
    Cypher: _0x202d1f,
    m: _0xe2305c,
    reply: _0x46b4ed,
    args: _0x528db0,
    prefix: _0x282e3c,
    command: _0x58553d,
    isCreator: _0x196871,
    mess: _0x5830af,
    db: _0x35d3fb,
    botNumber: _0x2ee56
  }) => {
    if (!_0x196871) {
      return _0x46b4ed(_0x5830af.owner);
    }
    if (_0x528db0.length < 1) {
      return _0x46b4ed("Example: " + (_0x282e3c + _0x58553d) + " private/chat/off\n\nprivate - sends deleted messages to message yourself\nchat - sends to current chat\noff - disables antidelete");
    }
    const _0x10f8fb = ["private", "chat", "off"];
    const _0x29a004 = _0x528db0[0].toLowerCase();
    if (!_0x10f8fb.includes(_0x29a004)) {
      return _0x46b4ed("Invalid option. Use: private, chat, or off");
    }
    _0x35d3fb.data.settings.antidelete = _0x29a004;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x46b4ed("Anti-delete mode set to: *" + _0x29a004 + "*");
  }
}, {
  command: ["antiedit"],
  operate: async ({
    Cypher: _0x1653bd,
    m: _0x3b5484,
    reply: _0x4b983c,
    args: _0x262f01,
    prefix: _0x2f06b0,
    command: _0x2bdc1d,
    isCreator: _0x5c4809,
    mess: _0x3bd4ee,
    db: _0x241046,
    botNumber: _0x12ff42
  }) => {
    if (!_0x5c4809) {
      return _0x4b983c(_0x3bd4ee.owner);
    }
    if (_0x262f01.length < 1) {
      return _0x4b983c("Example: " + (_0x2f06b0 + _0x2bdc1d) + " private/chat/off\n\n private - sends edited messages to message yourself\nchat - sends to current chat\noff - disables antiedit");
    }
    const _0x3624c0 = ["private", "chat", "off"];
    const _0x464ca8 = _0x262f01[0].toLowerCase();
    if (!_0x3624c0.includes(_0x464ca8)) {
      return _0x4b983c("Invalid option. Use: private, chat, or off");
    }
    _0x241046.data.settings.antiedit = _0x464ca8;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x4b983c("Anti-edit mode set to: *" + _0x464ca8 + "*");
  }
}, {
  command: ["autobio"],
  operate: async ({
    Cypher: _0x129501,
    m: _0x524eb3,
    reply: _0x37a79b,
    args: _0x5421a1,
    prefix: _0x18c6a6,
    command: _0x2c7c00,
    isCreator: _0x1db494,
    mess: _0x460ef4,
    db: _0xf01904,
    botNumber: _0x8166b2
  }) => {
    if (!_0x1db494) {
      return _0x37a79b(_0x460ef4.owner);
    }
    if (_0x5421a1.length < 1) {
      return _0x37a79b("Example: " + (_0x18c6a6 + _0x2c7c00) + " on/off");
    }
    const _0x292cfe = ["on", "off"];
    const _0x32089c = _0x5421a1[0].toLowerCase();
    if (!_0x292cfe.includes(_0x32089c)) {
      return _0x37a79b("Invalid option");
    }
    _0xf01904.data.settings.autobio = _0x32089c === "on";
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x37a79b("Auto-bio " + (_0x32089c === "on" ? "enabled" : "disabled") + " successfully");
  }
}, {
  command: ["autoreactstatus", "autostatusreact"],
  operate: async ({
    Cypher: _0x3391f7,
    m: _0x4047cb,
    reply: _0x5b1e04,
    args: _0x430bda,
    prefix: _0x3965a4,
    command: _0x5eb21e,
    isCreator: _0x5bcc03,
    mess: _0xe19196,
    db: _0xa0062b,
    botNumber: _0x20d9cd
  }) => {
    if (!_0x5bcc03) {
      return _0x5b1e04(_0xe19196.owner);
    }
    if (_0x430bda.length < 1) {
      return _0x5b1e04("Example: " + (_0x3965a4 + _0x5eb21e) + " on/off");
    }
    const _0x447b22 = ["on", "off"];
    const _0x493954 = _0x430bda[0].toLowerCase();
    if (!_0x447b22.includes(_0x493954)) {
      return _0x5b1e04("Invalid option");
    }
    _0xa0062b.data.settings.autoreactstatus = _0x493954 === "on";
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x5b1e04("Auto status reaction " + (_0x493954 === "on" ? "enabled" : "disabled") + " successfully.");
  }
}, {
  command: ["autoviewstatus", "autostatusview"],
  operate: async ({
    Cypher: _0x45c779,
    m: _0x323fe2,
    reply: _0xf4835e,
    args: _0x41e226,
    prefix: _0x4fb4b6,
    command: _0xd08b52,
    isCreator: _0x7779f9,
    mess: _0x371ffe,
    db: _0x120702,
    botNumber: _0x406a4a
  }) => {
    if (!_0x7779f9) {
      return _0xf4835e(_0x371ffe.owner);
    }
    if (_0x41e226.length < 1) {
      return _0xf4835e("Example: " + (_0x4fb4b6 + _0xd08b52) + " on/off");
    }
    const _0x257ece = ["on", "off"];
    const _0x435b7d = _0x41e226[0].toLowerCase();
    if (!_0x257ece.includes(_0x435b7d)) {
      return _0xf4835e("Invalid option");
    }
    _0x120702.data.settings.autoviewstatus = _0x435b7d === "on";
    if (global.dbToken) {
      await global.writeDB();
    }
    _0xf4835e("Auto status view " + (_0x435b7d === "on" ? "enabled" : "disabled") + " successfully");
  }
}, {
  command: ["autoreact", "autoreacting"],
  operate: async ({
    reply: _0x50dacd,
    args: _0x4f4155,
    prefix: _0x1e9866,
    command: _0x505446,
    isCreator: _0x46b443,
    mess: _0x435deb,
    db: _0x18dd43
  }) => {
    if (!_0x46b443) {
      return _0x50dacd(_0x435deb.owner);
    }
    if (_0x4f4155.length < 1) {
      return _0x50dacd("Example: " + (_0x1e9866 + _0x505446) + " all/group/pm/command/off\n\nall - reacts to all messages\ngroup - reacts to messages in groups\npm - reacts to private messages\ncommand - reacts when a command is used\noff - disables auto-reaction");
    }
    const _0x5682d0 = ["all", "group", "pm", "command", "off"];
    const _0x18556c = _0x4f4155[0].toLowerCase();
    if (!_0x5682d0.includes(_0x18556c)) {
      return _0x50dacd("Invalid option; type *" + _0x1e9866 + "autoreact* to see available options!");
    }
    _0x18dd43.data.settings.autoreact = _0x18556c === "off" ? false : _0x18556c;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x50dacd("Auto-reaction set to *" + _0x18556c + "* successfully.");
  }
}, {
  command: ["autoread"],
  operate: async ({
    reply: _0x1e7c46,
    args: _0x4b0632,
    prefix: _0x30e105,
    command: _0x46269d,
    isCreator: _0x507943,
    mess: _0x300a14,
    db: _0x3f2e2e
  }) => {
    if (!_0x507943) {
      return _0x1e7c46(_0x300a14.owner);
    }
    if (_0x4b0632.length < 1) {
      return _0x1e7c46("Example: " + (_0x30e105 + _0x46269d) + " all/group/pm/command/off\n\nall - reads all messages\ngroup - reads group messages alone\npm - reads private messages alone\ncommand - reads bot commands only\noff disables autoread");
    }
    const _0x43828d = ["all", "group", "pm", "command", "off"];
    const _0x3cf98f = _0x4b0632[0].toLowerCase();
    if (!_0x43828d.includes(_0x3cf98f)) {
      return _0x1e7c46("Invalid option; type *" + _0x30e105 + "autoread* to see available options!");
    }
    _0x3f2e2e.data.settings.autoread = _0x3cf98f === "off" ? false : _0x3cf98f;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x1e7c46("Auto-read set to *" + _0x3cf98f + "* successfully.");
  }
}, {
  command: ["autotype", "autotyping"],
  operate: async ({
    reply: _0x1c714f,
    args: _0x3e56d2,
    prefix: _0x2a09c6,
    command: _0x5512f2,
    isCreator: _0x282c2c,
    mess: _0x5f094b,
    db: _0x7ee98d
  }) => {
    if (!_0x282c2c) {
      return _0x1c714f(_0x5f094b.owner);
    }
    if (_0x3e56d2.length < 1) {
      return _0x1c714f("Example: " + (_0x2a09c6 + _0x5512f2) + " all/group/pm/command/off\n\ngroup - typing in groups\npm - typing in private chats\ncommand - typing when a command is used\noff - disables autotyping");
    }
    const _0x100ccc = ["all", "group", "pm", "command", "off"];
    const _0x2745f7 = _0x3e56d2[0].toLowerCase();
    if (!_0x100ccc.includes(_0x2745f7)) {
      return _0x1c714f("Invalid option; type *" + _0x2a09c6 + "autotype* to see available options!");
    }
    _0x7ee98d.data.settings.autotype = _0x2745f7 === "off" ? false : _0x2745f7;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x1c714f("Auto-typing set to *" + _0x2745f7 + "* successfully.");
  }
}, {
  command: ["autorecord", "autorecording"],
  operate: async ({
    reply: _0x4b8381,
    args: _0x5aeed1,
    prefix: _0x785fd2,
    command: _0x26c9f2,
    isCreator: _0x2b9e17,
    mess: _0xdaec55,
    db: _0x19d0e4
  }) => {
    if (!_0x2b9e17) {
      return _0x4b8381(_0xdaec55.owner);
    }
    if (_0x5aeed1.length < 1) {
      return _0x4b8381("Example: " + (_0x785fd2 + _0x26c9f2) + " all/group/pm/command/off\n\ngroup - recording in groups\npm - recording in private chats\ncommand - recording when a command is used\noff - disables auto-recording");
    }
    const _0x4dd177 = ["all", "group", "pm", "command", "off"];
    const _0x452d5b = _0x5aeed1[0].toLowerCase();
    if (!_0x4dd177.includes(_0x452d5b)) {
      return _0x4b8381("Invalid option; type *" + _0x785fd2 + "autorecord* to see available options!");
    }
    _0x19d0e4.data.settings.autorecord = _0x452d5b === "off" ? false : _0x452d5b;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x4b8381("Auto-record set to *" + _0x452d5b + "* successfully.");
  }
}, {
  command: ["autorecordtyping", "autorecordtype"],
  operate: async ({
    reply: _0x530371,
    args: _0x4a11fb,
    prefix: _0x1633c4,
    command: _0x451ecd,
    isCreator: _0x2a9731,
    mess: _0xa444f4,
    db: _0x87d3b9
  }) => {
    if (!_0x2a9731) {
      return _0x530371(_0xa444f4.owner);
    }
    if (_0x4a11fb.length < 1) {
      return _0x530371("Example: " + (_0x1633c4 + _0x451ecd) + " all/group/pm/command/off\n\ngroup - random typing/recording in groups\npm - random typing/recording in private chats\ncommand - random typing/recording when a command is used\noff - disables auto-record typing");
    }
    const _0x6aa86f = ["all", "group", "pm", "command", "off"];
    const _0x21c487 = _0x4a11fb[0].toLowerCase();
    if (!_0x6aa86f.includes(_0x21c487)) {
      return _0x530371("Invalid option; type *" + _0x1633c4 + "autorecordtype* to see available options!");
    }
    _0x87d3b9.data.settings.autorecordtype = _0x21c487 === "off" ? false : _0x21c487;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x530371("Auto-record typing set to *" + _0x21c487 + "* successfully.");
  }
}, {
  command: ["chatbot"],
  operate: async ({
    Cypher: _0x45437a,
    m: _0x26c207,
    reply: _0x1a260f,
    args: _0x47c145,
    prefix: _0x2e4118,
    command: _0x584335,
    isCreator: _0x49c5ea,
    mess: _0xa37b98,
    db: _0x2d4c03,
    botNumber: _0x15c928
  }) => {
    if (!_0x49c5ea) {
      return _0x1a260f(_0xa37b98.owner);
    }
    if (_0x47c145.length < 1) {
      return _0x1a260f("Example: " + (_0x2e4118 + _0x584335) + " on/off");
    }
    const _0x39be3c = ["on", "off"];
    const _0x290cb7 = _0x47c145[0].toLowerCase();
    if (!_0x39be3c.includes(_0x290cb7)) {
      return _0x1a260f("Invalid option");
    }
    _0x2d4c03.data.settings.chatbot = _0x290cb7 === "on";
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x1a260f("Chatbot " + (_0x290cb7 === "on" ? "enabled" : "disabled") + " successfully");
  }
}, {
  command: ["deletebadword"],
  operate: async ({
    Cypher: _0x43930b,
    m: _0x3657e6,
    isCreator: _0x3582bd,
    mess: _0x11256a,
    prefix: _0x39a824,
    args: _0x1c85d6,
    q: _0x3a8160,
    bad: _0x18a480,
    reply: _0xd238a4
  }) => {
    if (!_0x3582bd) {
      return _0xd238a4(_0x11256a.owner);
    }
    if (_0x1c85d6.length < 1) {
      return _0xd238a4("Use " + _0x39a824 + "deletebadword [harsh word].");
    }
    const _0x701cc4 = _0x18a480.indexOf(_0x3a8160);
    if (_0x701cc4 === -1) {
      return _0xd238a4("This word is not in the list!");
    }
    _0x18a480.splice(_0x701cc4, 1);
    try {
      await fsp.writeFile("./src/badwords.json", JSON.stringify(_0x18a480, null, 2));
      _0xd238a4("Successfully deleted bad word!");
    } catch (_0x241fc5) {
      console.error("Error writing to badwords.json:", _0x241fc5);
      _0xd238a4("An error occurred while deleting the bad word.");
    }
  }
}, {
  command: ["delignorelist"],
  operate: async ({
    m: _0x431539,
    args: _0x32a6a0,
    isCreator: _0x2bf0e0,
    loadBlacklist: _0x22120c,
    mess: _0x5f1e60,
    reply: _0x52b302
  }) => {
    if (!_0x2bf0e0) {
      return _0x52b302(_0x5f1e60.owner);
    }
    let _0xcee88a = _0x431539.mentionedJid && _0x431539.mentionedJid[0];
    let _0x20fc6f = _0x431539.quoted && _0x431539.quoted.sender;
    let _0x450b8f = _0xcee88a || _0x20fc6f || _0x431539.chat;
    if (!_0x450b8f) {
      return _0x52b302("Mention a user, reply to their message, or provide a phone number to remove from the ignore list.");
    }
    let _0x13aee4 = _0x22120c();
    let _0x35b6dc = _0x13aee4.blacklisted_numbers.indexOf(_0x450b8f);
    if (_0x35b6dc !== -1) {
      _0x13aee4.blacklisted_numbers.splice(_0x35b6dc, 1);
      if (global.dbToken) {
        await global.writeDB();
      }
      await _0x52b302("+" + _0x450b8f.split("@")[0] + " removed from the ignore list.");
    } else {
      await _0x52b302("+" + _0x450b8f.split("@")[0] + " is not in the ignore list.");
    }
  }
}, {
  command: ["delsudo"],
  operate: async ({
    m: _0x118705,
    args: _0x3f2fc7,
    isCreator: _0x202b71,
    reply: _0x556a7d
  }) => {
    if (!_0x202b71) {
      return _0x556a7d(mess.owner);
    }
    if (_0x118705.chat.endsWith("@g.us") && (!_0x118705.mentionedJid || !_0x118705.mentionedJid[0]) && (!_0x118705.quoted || !_0x118705.quoted.sender)) {
      return _0x556a7d("Reply to or tag a person!");
    }
    const _0x188c79 = _0x118705.mentionedJid && _0x118705.mentionedJid[0] || _0x118705.quoted && _0x118705.quoted.sender || _0x118705.chat;
    if (!_0x188c79) {
      return _0x556a7d("Mention a user or reply to their message to remove them from the sudo list.");
    }
    const _0x73e995 = global.db.data.sudo;
    const _0x2639ab = _0x73e995.indexOf(_0x188c79);
    if (_0x2639ab !== -1) {
      _0x73e995.splice(_0x2639ab, 1);
      if (global.dbToken) {
        await global.writeDB();
      }
      await _0x556a7d("+" + _0x188c79.split("@")[0] + " removed from the sudo list.");
    } else {
      await _0x556a7d("+" + _0x188c79.split("@")[0] + " is not in the sudo list.");
    }
  }
}, {
  command: ["mode"],
  operate: async ({
    Cypher: _0x38d8d8,
    m: _0x253b01,
    reply: _0x2cbe69,
    args: _0x3603d6,
    prefix: _0x32ea5d,
    command: _0x198618,
    isCreator: _0x55d933,
    mess: _0x36f08d,
    db: _0x2d7621,
    botNumber: _0x29f0a8
  }) => {
    if (!_0x55d933) {
      return _0x2cbe69(_0x36f08d.owner);
    }
    if (_0x3603d6.length < 1) {
      return _0x2cbe69("Example: " + (_0x32ea5d + _0x198618) + " public/private/group/pm\n\nprivate - sets the bot to private mode\npublic - sets the bot to public mode\ngroup - sets the bot to be public on groups alone\npm - sets the bot to be public on personal chats alone.");
    }
    const _0x13bfe3 = ["private", "public", "group", "pm"];
    const _0x98c89 = _0x3603d6[0].toLowerCase();
    if (!_0x13bfe3.includes(_0x98c89)) {
      return _0x2cbe69("Invalid option. Use: private, public, group or pm");
    }
    _0x2d7621.data.settings.mode = _0x98c89;
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x2cbe69("Bot mode set to: *" + _0x98c89 + "*");
  }
}, {
  command: ["setmenu", "menustyle"],
  operate: async ({
    reply: _0x13c4b7,
    args: _0x55cec7,
    prefix: _0x4fb11f,
    command: _0xd851e0,
    db: _0x1c1af5,
    isCreator: _0x726509,
    mess: _0x34999c
  }) => {
    if (!_0x726509) {
      return _0x13c4b7(_0x34999c.owner);
    }
    if (_0x55cec7.length < 1) {
      return _0x13c4b7("Example: " + (_0x4fb11f + _0xd851e0) + " 2\n\nOptions:\n1 = Document menu (Android only)\n2 = Text only menu (Android & iOS)\n3 = Image menu with context (Android & iOS)\n4 = Image menu (Android & iOS)\n5 = Footer/faded menu\n6 = Payment menu");
    }
    const _0x18e348 = ["1", "2", "3", "4", "5", "6"];
    const _0xe71240 = _0x55cec7[0];
    if (!_0x18e348.includes(_0xe71240)) {
      return _0x13c4b7("⚠️ Invalid menu style. Use a number between *1-6*.");
    }
    _0x1c1af5.data.settings.menustyle = _0xe71240;
    _0x13c4b7("✅ Menu style changed to *" + _0xe71240 + "* successfully.");
    if (global.dbToken) {
      await global.writeDB();
    }
  }
}, {
  command: ["setprefix"],
  operate: async ({
    reply: _0x33c083,
    args: _0xf80e76,
    prefix: _0x2aeeff,
    command: _0xad0a13,
    db: _0x375de1,
    isCreator: _0x372c1e,
    mess: _0x2e1fc4
  }) => {
    if (!_0x372c1e) {
      return _0x33c083(_0x2e1fc4.owner);
    }
    if (_0xf80e76.length < 1) {
      return _0x33c083("Example: " + (_0x2aeeff + _0xad0a13) + " !\n\n- This will change the bot prefix to *!*");
    }
    const _0x341a2c = _0xf80e76[0];
    if (!_0x341a2c || _0x341a2c.length > 3) {
      return _0x33c083("⚠️ Prefix should be 1-3 characters long.");
    }
    _0x375de1.data.settings.prefix = _0x341a2c;
    _0x33c083("✅ Prefix changed to *" + _0x341a2c + "* successfully.");
    if (global.dbToken) {
      await global.writeDB();
    }
  }
}, {
  command: ["setstatusemoji", "statusemoji"],
  operate: async ({
    reply: _0x51970a,
    args: _0x159e5b,
    prefix: _0x10ad06,
    command: _0x2ea710,
    db: _0x2f0139,
    isCreator: _0x45abbd,
    mess: _0x56c56f
  }) => {
    if (!_0x45abbd) {
      return _0x51970a(_0x56c56f.owner);
    }
    if (_0x159e5b.length < 1) {
      return _0x51970a("Example: " + (_0x10ad06 + _0x2ea710) + " 🧡\n\n- This will change the bot's status reaction emoji to *🧡*");
    }
    const _0x5446e0 = _0x159e5b[0];
    if (!/^\p{Emoji}$/u.test(_0x5446e0)) {
      return _0x51970a("⚠️ Please provide a single valid emoji.");
    }
    _0x2f0139.data.settings.statusemoji = _0x5446e0;
    _0x51970a("✅ Status reaction emoji changed to *" + _0x5446e0 + "* successfully.");
    if (global.dbToken) {
      await global.writeDB();
    }
  }
}, {
  command: ["welcome"],
  operate: async ({
    Cypher: _0x1aefb9,
    m: _0x5bd995,
    reply: _0x4c1ab0,
    args: _0x31f4f0,
    prefix: _0x34fe16,
    command: _0x443ec7,
    isCreator: _0x497082,
    mess: _0x2ab31c,
    db: _0x40ffc5,
    botNumber: _0xa7ebad
  }) => {
    if (!_0x497082) {
      return _0x4c1ab0(_0x2ab31c.owner);
    }
    if (_0x31f4f0.length < 1) {
      return _0x4c1ab0("Example: " + (_0x34fe16 + _0x443ec7) + " on/off");
    }
    const _0xf2ccdd = ["on", "off"];
    const _0x488f80 = _0x31f4f0[0].toLowerCase();
    if (!_0xf2ccdd.includes(_0x488f80)) {
      return _0x4c1ab0("Invalid option");
    }
    _0x40ffc5.data.settings.welcome = _0x488f80 === "on";
    if (global.dbToken) {
      await global.writeDB();
    }
    _0x4c1ab0("Group welcome/left messages " + (_0x488f80 === "on" ? "enabled" : "disabled") + " successfully");
  }
}, {
  command: ["getsettings"],
  operate: async ({
    reply: _0x38c780,
    db: _0x36a32f
  }) => {
    const _0x5bec65 = _0x36a32f.data.settings;
    let _0x559e48 = "⚙️ *Current Bot Settings:*\n\n";
    for (const [_0x55c2b4, _0x3b0c72] of Object.entries(_0x5bec65)) {
      _0x559e48 += "❄️ *" + _0x55c2b4 + "*: " + (typeof _0x3b0c72 === "boolean" ? _0x3b0c72 ? "ON" : "OFF" : _0x3b0c72) + "\n";
    }
    _0x38c780(_0x559e48);
  }
}, {
  command: ["resetsetting"],
  operate: async ({
    reply: _0x4ae94d,
    args: _0x1b8bf7,
    prefix: _0x19ca85,
    command: _0x2861fe,
    db: _0x2cb077,
    isCreator: _0x361155
  }) => {
    if (!_0x361155) {
      return _0x4ae94d("Only the owner can reset settings.");
    }
    if (_0x1b8bf7.length < 1) {
      return _0x4ae94d("Example: " + (_0x19ca85 + _0x2861fe) + " <setting/all>\n\n- Use *all* to reset all settings.\n- Use a specific setting name to reset only that.");
    }
    const _0x54461f = _0x1b8bf7[0].toLowerCase();
    const _0x52f137 = {
      prefix: ".",
      mode: "public",
      autobio: false,
      anticall: false,
      chatbot: false,
      autotype: false,
      autoread: false,
      welcome: false,
      antiedit: "private",
      menustyle: "3",
      autoreact: false,
      statusemoji: "🧡",
      autorecord: false,
      antidelete: "private",
      alwaysonline: true,
      autoviewstatus: true,
      autoreactstatus: false,
      autorecordtype: false
    };
    if (_0x54461f === "all") {
      _0x2cb077.data.settings = {
        ..._0x52f137
      };
      _0x4ae94d("✅ All settings have been reset to default.");
    } else if (_0x54461f in _0x52f137) {
      _0x2cb077.data.settings[_0x54461f] = _0x52f137[_0x54461f];
      _0x4ae94d("✅ *" + _0x54461f + "* has been reset to *" + _0x52f137[_0x54461f] + "*.");
    } else {
      _0x4ae94d("⚠️ Invalid setting name. Use *" + (_0x19ca85 + _0x2861fe) + " all* to reset everything or provide a valid setting name.");
    }
    if (global.dbToken) {
      await global.writeDB();
    }
  }
}];