function hi() {
  console.log("Hello World!");
}
hi();
const fs = require("fs");
const {
  sleep
} = require("../../lib/myfunc");
const {
  generateProfilePicture
} = require("@whiskeysockets/baileys");
module.exports = [{
  command: ["add"],
  operate: async _0x1248a => {
    const {
      m: _0x35ab12,
      mess: _0x31bdff,
      text: _0x567655,
      isCreator: _0x1da156,
      reply: _0x51b94d,
      Cypher: _0xc890a6
    } = _0x1248a;
    if (!_0x35ab12.isGroup) {
      return _0x35ab12.reply(_0x31bdff.group);
    }
    if (!_0x1da156) {
      return _0x35ab12.reply(_0x31bdff.owner);
    }
    let _0x552857 = _0x35ab12.quoted ? _0x35ab12.quoted.sender : _0x567655.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await _0xc890a6.groupParticipantsUpdate(_0x35ab12.chat, [_0x552857], "add");
    _0x51b94d(_0x31bdff.done);
  }
}, {
  command: ["antibadword", "antitoxic"],
  operate: async _0x4f52d2 => {
    const {
      m: _0x1e4c9c,
      db: _0xf3c5eb,
      from: _0x4dcdfa,
      isBotAdmins: _0x31a7c3,
      isAdmins: _0x3589d7,
      isCreator: _0x2f238c,
      args: _0x43c381,
      mess: _0x5c046a,
      command: _0x412c5f,
      reply: _0x3607da
    } = _0x4f52d2;
    if (!_0x1e4c9c.isGroup) {
      return _0x3607da(_0x5c046a.group);
    }
    if (!_0x31a7c3) {
      return _0x3607da(_0x5c046a.admin);
    }
    if (!_0x3589d7 && !_0x2f238c) {
      return _0x3607da(_0x5c046a.notadmin);
    }
    if (_0x43c381.length < 2) {
      return _0x3607da("*Usage: .antibadword <delete/kick> <on/off>*");
    }
    const _0x9e0ace = _0x43c381[0].toLowerCase();
    const _0x259eda = _0x43c381[1].toLowerCase();
    if (!["delete", "kick"].includes(_0x9e0ace)) {
      return _0x3607da("*Invalid mode! Use either 'delete' or 'kick'.*");
    }
    if (!["on", "off"].includes(_0x259eda)) {
      return _0x3607da("*Invalid state! Use either 'on' or 'off'.*");
    }
    if (_0x259eda === "on") {
      if (_0x9e0ace === "delete") {
        _0xf3c5eb.data.chats[_0x4dcdfa].badword = true;
        _0xf3c5eb.data.chats[_0x4dcdfa].badwordkick = false;
      } else if (_0x9e0ace === "kick") {
        _0xf3c5eb.data.chats[_0x4dcdfa].badwordkick = true;
        _0xf3c5eb.data.chats[_0x4dcdfa].badword = false;
      }
      _0x3607da("*Successfully enabled antibadword " + _0x9e0ace + " mode!*");
    } else if (_0x259eda === "off") {
      if (_0x9e0ace === "delete") {
        _0xf3c5eb.data.chats[_0x4dcdfa].badword = false;
      } else if (_0x9e0ace === "kick") {
        _0xf3c5eb.data.chats[_0x4dcdfa].badwordkick = false;
      }
      _0x3607da("*Successfully disabled antibadword " + _0x9e0ace + " mode!*");
    }
  }
}, {
  command: ["antibot"],
  operate: async _0x12fb5f => {
    const {
      m: _0x581463,
      db: _0x20d4d0,
      from: _0x598ba5,
      isBotAdmins: _0x5bf0b5,
      isAdmins: _0x42744c,
      isCreator: _0x5607b5,
      args: _0x4e3902,
      mess: _0x35e75e,
      command: _0x24a58a,
      reply: _0x53950b
    } = _0x12fb5f;
    if (!_0x581463.isGroup) {
      return _0x53950b(_0x35e75e.group);
    }
    if (!_0x5bf0b5) {
      return _0x53950b(_0x35e75e.admin);
    }
    if (!_0x42744c && !_0x5607b5) {
      return _0x53950b(_0x35e75e.notadmin);
    }
    if (_0x4e3902.length < 1) {
      return _0x53950b("*on or off?*");
    }
    if (_0x4e3902[0] === "on") {
      _0x20d4d0.data.chats[_0x598ba5].antibot = true;
      _0x53950b("*Successfully enabled " + _0x24a58a + "*");
    } else if (_0x4e3902[0] === "off") {
      _0x20d4d0.data.chats[_0x598ba5].antibot = false;
      _0x53950b("*Successfully disabled " + _0x24a58a + "*");
    }
  }
}, {
  command: ["antilink"],
  operate: async _0x52c02b => {
    const {
      m: _0x22d8e1,
      db: _0x359f66,
      from: _0x2d6127,
      isBotAdmins: _0x4cbc26,
      isAdmins: _0xf391b3,
      isCreator: _0x372c6a,
      args: _0x1f6ca0,
      mess: _0x16f3d0,
      command: _0x447b74,
      reply: _0x505538
    } = _0x52c02b;
    if (!_0x22d8e1.isGroup) {
      return _0x505538(_0x16f3d0.group);
    }
    if (!_0x4cbc26) {
      return _0x505538(_0x16f3d0.admin);
    }
    if (!_0xf391b3 && !_0x372c6a) {
      return _0x505538(_0x16f3d0.notadmin);
    }
    if (_0x1f6ca0.length < 2) {
      return _0x505538("*Usage: .antilink <delete/kick> <on/off>*");
    }
    const _0x4bd3ae = _0x1f6ca0[0].toLowerCase();
    const _0x4a279a = _0x1f6ca0[1].toLowerCase();
    if (!["delete", "kick"].includes(_0x4bd3ae)) {
      return _0x505538("*Invalid mode! Use either 'delete' or 'kick'.*");
    }
    if (!["on", "off"].includes(_0x4a279a)) {
      return _0x505538("*Invalid state! Use either 'on' or 'off'.*");
    }
    if (_0x4a279a === "on") {
      if (_0x4bd3ae === "delete") {
        _0x359f66.data.chats[_0x2d6127].antilinkkick = false;
        _0x359f66.data.chats[_0x2d6127].antilink = true;
      } else if (_0x4bd3ae === "kick") {
        _0x359f66.data.chats[_0x2d6127].antilink = false;
        _0x359f66.data.chats[_0x2d6127].antilinkkick = true;
      }
      _0x505538("*Successfully enabled antilink " + _0x4bd3ae + " mode!*");
    } else if (_0x4a279a === "off") {
      if (_0x4bd3ae === "delete") {
        _0x359f66.data.chats[_0x2d6127].antilinkkick = false;
        _0x359f66.data.chats[_0x2d6127].antilink = false;
      } else if (_0x4bd3ae === "kick") {
        _0x359f66.data.chats[_0x2d6127].antilink = false;
        _0x359f66.data.chats[_0x2d6127].antilinkkick = false;
      }
      _0x505538("*Successfully disabled antilink " + _0x4bd3ae + " mode!*");
    }
  }
}, {
  command: ["antilinkgc"],
  operate: async _0x2f78b6 => {
    const {
      m: _0x3692bd,
      db: _0x2e9e09,
      from: _0x3ea54d,
      isBotAdmins: _0x4fe3b7,
      isAdmins: _0x4eb580,
      isCreator: _0x301bd6,
      args: _0xa9a99e,
      mess: _0x1f8152,
      command: _0x7e58a1,
      reply: _0x5ec047
    } = _0x2f78b6;
    if (!_0x3692bd.isGroup) {
      return _0x5ec047(_0x1f8152.group);
    }
    if (!_0x4fe3b7) {
      return _0x5ec047(_0x1f8152.admin);
    }
    if (!_0x4eb580 && !_0x301bd6) {
      return _0x5ec047(_0x1f8152.notadmin);
    }
    if (_0xa9a99e.length < 2) {
      return _0x5ec047("*Usage: .antilinkgc <delete/kick> <on/off>*");
    }
    const _0x38912b = _0xa9a99e[0].toLowerCase();
    const _0x4146df = _0xa9a99e[1].toLowerCase();
    if (!["delete", "kick"].includes(_0x38912b)) {
      return _0x5ec047("*Invalid mode! Use either 'delete' or 'kick'.*");
    }
    if (!["on", "off"].includes(_0x4146df)) {
      return _0x5ec047("*Invalid state! Use either 'on' or 'off'.*");
    }
    if (_0x4146df === "on") {
      if (_0x38912b === "delete") {
        _0x2e9e09.data.chats[_0x3ea54d].antilinkgc = true;
        _0x2e9e09.data.chats[_0x3ea54d].antilinkgckick = false;
      } else if (_0x38912b === "kick") {
        _0x2e9e09.data.chats[_0x3ea54d].antilinkgckick = true;
        _0x2e9e09.data.chats[_0x3ea54d].antilinkgc = false;
      }
      _0x5ec047("*Successfully enabled antilinkgc " + _0x38912b + " mode!*");
    } else if (_0x4146df === "off") {
      if (_0x38912b === "delete") {
        _0x2e9e09.data.chats[_0x3ea54d].antilinkgc = false;
      } else if (_0x38912b === "kick") {
        _0x2e9e09.data.chats[_0x3ea54d].antilinkgckick = false;
      }
      _0x5ec047("*Successfully disabled antilinkgc " + _0x38912b + " mode!*");
    }
  }
}, {
  command: ["approveall", "acceptall"],
  operate: async ({
    m: _0x3bcfc1,
    args: _0x578032,
    isCreator: _0x34fed4,
    reply: _0x4f2549,
    approveAllRequests: _0x5831df,
    mess: _0x3455dd,
    isGroupAdmins: _0x3a4edd,
    isBotAdmins: _0x3e4165
  }) => {
    if (!_0x3bcfc1.isGroup) {
      return _0x4f2549(_0x3455dd.group);
    }
    if (!_0x3a4edd) {
      return _0x4f2549(_0x3455dd.admin);
    }
    if (!_0x3e4165) {
      return _0x4f2549(_0x3455dd.admin);
    }
    const _0x550268 = _0x3bcfc1.chat;
    await _0x5831df(_0x3bcfc1, _0x550268);
  }
}, {
  command: ["close"],
  operate: async _0x25a564 => {
    const {
      m: _0x12cd6d,
      mess: _0x54b9c3,
      isAdmins: _0xab2cb3,
      isCreator: _0x121587,
      isBotAdmins: _0x16a1a4,
      Cypher: _0x4da94d,
      reply: _0x132800
    } = _0x25a564;
    if (!_0x12cd6d.isGroup) {
      return _0x132800(_0x54b9c3.group);
    }
    if (!_0xab2cb3 && !_0x121587) {
      return _0x132800(_0x54b9c3.notadmin);
    }
    if (!_0x16a1a4) {
      return _0x132800(_0x54b9c3.admin);
    }
    _0x4da94d.groupSettingUpdate(_0x12cd6d.chat, "announcement");
    _0x132800("Group closed by admin. Only admins can send messages.");
  }
}, {
  command: ["closetime"],
  operate: async _0x66a44a => {
    const {
      m: _0x1732c3,
      mess: _0x45c8b1,
      args: _0x3780ac,
      isAdmins: _0x4c6fda,
      isCreator: _0x47f46f,
      isBotAdmins: _0x3b9267,
      Cypher: _0xe0220e,
      reply: _0xb497b4
    } = _0x66a44a;
    if (!_0x1732c3.isGroup) {
      return _0xb497b4(_0x45c8b1.group);
    }
    if (!_0x4c6fda && !_0x47f46f) {
      return _0xb497b4(_0x45c8b1.notadmin);
    }
    if (!_0x3b9267) {
      return _0xb497b4(_0x45c8b1.admin);
    }
    const _0x29fdab = _0x3780ac[0];
    const _0x670dfe = _0x3780ac[1].toLowerCase();
    let _0x5c67b7;
    switch (_0x670dfe) {
      case "seconds":
        _0x5c67b7 = _0x29fdab * 1000;
        break;
      case "minutes":
        _0x5c67b7 = _0x29fdab * 60000;
        break;
      case "hours":
        _0x5c67b7 = _0x29fdab * 3600000;
        break;
      case "days":
        _0x5c67b7 = _0x29fdab * 86400000;
        break;
      default:
        return _0xb497b4("*Select unit:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
    }
    _0xb497b4("*Closing group after " + _0x29fdab + " " + _0x670dfe + "*");
    setTimeout(() => {
      _0xe0220e.groupSettingUpdate(_0x1732c3.chat, "announcement");
      _0xb497b4("Group closed by admin. Only admins can send messages.");
    }, _0x5c67b7);
  }
}, {
  command: ["delppgroup"],
  operate: async _0x16cde5 => {
    const {
      m: _0x5e2931,
      mess: _0x1911ff,
      isAdmins: _0x551618,
      isCreator: _0x5eafbc,
      isBotAdmins: _0x343a27,
      Cypher: _0x321579,
      reply: _0x4aa403,
      from: _0x56f336
    } = _0x16cde5;
    if (!_0x5e2931.isGroup) {
      return _0x4aa403(_0x1911ff.group);
    }
    if (!_0x551618 && !_0x5eafbc) {
      return _0x4aa403(_0x1911ff.notadmin);
    }
    if (!_0x343a27) {
      return _0x4aa403(_0x1911ff.admin);
    }
    await _0x321579.removeProfilePicture(_0x56f336);
    _0x4aa403("Group profile picture has been successfully removed.");
  }
}, {
  command: ["demote"],
  operate: async _0x4da847 => {
    const {
      m: _0x7f9fc1,
      mess: _0x488426,
      text: _0x57c675,
      isAdmins: _0x4eaf22,
      isGroupOwner: _0x16b017,
      isCreator: _0x5e6234,
      isBotAdmins: _0x1e10d2,
      Cypher: _0x3baf49,
      reply: _0x2df5e5
    } = _0x4da847;
    if (!_0x7f9fc1.isGroup) {
      return _0x2df5e5(_0x488426.group);
    }
    if (!_0x4eaf22 && !_0x16b017 && !_0x5e6234) {
      return _0x2df5e5(_0x488426.admin);
    }
    if (!_0x1e10d2) {
      return _0x2df5e5(_0x488426.admin);
    }
    let _0x1f1380 = _0x7f9fc1.mentionedJid[0] ? _0x7f9fc1.mentionedJid[0] : _0x7f9fc1.quoted ? _0x7f9fc1.quoted.sender : _0x57c675.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await _0x3baf49.groupParticipantsUpdate(_0x7f9fc1.chat, [_0x1f1380], "demote");
    _0x2df5e5(_0x488426.done);
  }
}, {
  command: ["disapproveall", "rejectall"],
  operate: async ({
    m: _0x329848,
    args: _0x39a4d7,
    isCreator: _0x129b6c,
    reply: _0x549817,
    disapproveAllRequests: _0x54aff5,
    mess: _0x548205,
    isBotAdmins: _0x13a58e,
    isGroupAdmins: _0x32035d
  }) => {
    if (!_0x329848.isGroup) {
      return _0x549817(_0x548205.group);
    }
    if (!_0x32035d) {
      return _0x549817(_0x548205.admin);
    }
    if (!_0x13a58e) {
      return _0x549817(_0x548205.admin);
    }
    const _0x11342f = _0x329848.chat;
    await _0x54aff5(_0x329848, _0x11342f);
  }
}, {
  command: ["editsettings", "editinfo"],
  operate: async _0x391ca8 => {
    const {
      m: _0x4d07e1,
      mess: _0xd02639,
      args: _0xdbd3e3,
      isAdmins: _0x5bdcbd,
      isGroupOwner: _0x2e862f,
      isCreator: _0x727c8b,
      isBotAdmins: _0xbf0969,
      Cypher: _0x1dcdb4,
      prefix: _0x1c8d1b,
      command: _0x4d65b7,
      reply: _0x4ee386
    } = _0x391ca8;
    if (!_0x4d07e1.isGroup) {
      return _0x4ee386(_0xd02639.group);
    }
    if (!_0x5bdcbd && !_0x2e862f && !_0x727c8b) {
      return _0x4ee386(_0xd02639.admin);
    }
    if (!_0xbf0969) {
      return _0x4ee386(_0xd02639.admin);
    }
    if (_0xdbd3e3[0] === "on") {
      await _0x1dcdb4.groupSettingUpdate(_0x4d07e1.chat, "unlocked").then(_0x42ea67 => _0x4ee386("*Successful, members can edit group info*"));
    } else if (_0xdbd3e3[0] === "off") {
      await _0x1dcdb4.groupSettingUpdate(_0x4d07e1.chat, "locked").then(_0x379911 => _0x4ee386("*Successful, members cannot edit group info*"));
    } else {
      _0x4ee386("Example " + (_0x1c8d1b + _0x4d65b7) + " on/off");
    }
  }
}, {
  command: ["link", "linkgc", "gclink", "grouplink"],
  operate: async ({
    Cypher: _0x3a1e98,
    m: _0x3afe78,
    reply: _0x3b14bc,
    isAdmins: _0x18675f,
    isGroupOwner: _0x37225e,
    isCreator: _0x2a5775,
    mess: _0x4e6b08,
    isBotAdmins: _0x23b437,
    groupMetadata: _0x3de36c
  }) => {
    if (!_0x3afe78.isGroup) {
      return _0x3b14bc(_0x4e6b08.group);
    }
    if (!_0x18675f && !_0x37225e && !_0x2a5775) {
      return _0x3b14bc(_0x4e6b08.admin);
    }
    if (!_0x23b437) {
      return _0x3b14bc(_0x4e6b08.admin);
    }
    let _0x4b5d9a = await _0x3a1e98.groupInviteCode(_0x3afe78.chat);
    _0x3a1e98.sendText(_0x3afe78.chat, "*GROUP LINK*\n\n*NAME:* " + _0x3de36c.subject + "\n\n*OWNER:* " + (_0x3de36c.owner !== undefined ? "+" + _0x3de36c.owner.split`@`[0] : "Unknown") + "\n\n*ID:* " + _0x3de36c.id + "\n\n*LINK:* https://chat.whatsapp.com/" + _0x4b5d9a + "\n\n*MEMBERS:* " + _0x3de36c.participants.length, _0x3afe78, {
      detectLink: true
    });
  }
}, {
  command: ["hidetag", "tag"],
  operate: async _0xdc3e74 => {
    const {
      m: _0x2525e4,
      isAdmins: _0x54b183,
      isGroupOwner: _0x56121c,
      isCreator: _0x380726,
      mess: _0x303b07,
      participants: _0x2e7a2e,
      Cypher: _0x18bec6,
      isBotAdmins: _0x4a6fea,
      reply: _0xa42b5b
    } = _0xdc3e74;
    if (!_0x2525e4.isGroup) {
      return _0xa42b5b(_0x303b07.group);
    }
    if (!_0x54b183 && !_0x56121c && !_0x380726) {
      return _0xa42b5b(_0x303b07.admin);
    }
    if (!_0x4a6fea) {
      return _0xa42b5b(_0x303b07.admin);
    }
    const _0x151c5e = _0x2525e4.quoted ? _0x2525e4.quoted.text : null;
    const _0x17878d = _0x2525e4.text?.split(" ").slice(1).join(" ") || null;
    const _0x5ad20a = _0x151c5e || _0x17878d || "No message provided";
    await _0x18bec6.sendMessage(_0x2525e4.chat, {
      text: _0x5ad20a,
      mentions: _0x2e7a2e.map(_0x3c1c53 => _0x3c1c53.id)
    }, {
      quoted: _0x2525e4
    });
  }
}, {
  command: ["invite"],
  operate: async _0x29d15c => {
    const {
      m: _0x12ec5e,
      mess: _0x5347f8,
      text: _0x3b53fd,
      prefix: _0x24d2d5,
      Cypher: _0x5d53ff,
      isBotAdmins: _0x2b0362,
      reply: _0xc638bb
    } = _0x29d15c;
    if (!_0x12ec5e.isGroup) {
      return _0xc638bb(_0x5347f8.group);
    }
    if (!_0x2b0362) {
      return _0xc638bb(_0x5347f8.admin);
    }
    if (!_0x3b53fd) {
      return _0xc638bb("*Enter the number you want to invite to this group*\n\nExample :\n" + (_0x24d2d5 + command) + " 233593734312");
    }
    if (_0x3b53fd.includes("+")) {
      return _0xc638bb("*Enter the number together without* *+*");
    }
    if (isNaN(_0x3b53fd)) {
      return _0xc638bb("*Enter only the numbers with your country code without spaces*");
    }
    let _0x3e3829 = _0x12ec5e.chat;
    let _0x2ae3c5 = "https://chat.whatsapp.com/" + (await _0x5d53ff.groupInviteCode(_0x3e3829));
    await _0x5d53ff.sendMessage(_0x3b53fd + "@s.whatsapp.net", {
      text: "*GROUP INVITATION*\n\n🚀Matrix invites you to join his group🪀: \n\n" + _0x2ae3c5,
      mentions: [_0x12ec5e.sender]
    });
    _0xc638bb("*Successfully sent invite link*");
  }
}, {
  command: ["kick", "remove"],
  operate: async _0x31b67b => {
    const {
      m: _0x48b992,
      mess: _0x2ac4c1,
      text: _0x532310,
      isAdmins: _0x44101e,
      isGroupOwner: _0x3c47e1,
      isCreator: _0x323fb0,
      isBotAdmins: _0x3d556f,
      Cypher: _0x108c6c,
      reply: _0x2d7835
    } = _0x31b67b;
    if (!_0x48b992.isGroup) {
      return _0x2d7835(_0x2ac4c1.group);
    }
    if (!_0x44101e && !_0x3c47e1 && !_0x323fb0) {
      return _0x2d7835(_0x2ac4c1.admin);
    }
    if (!_0x3d556f) {
      return _0x2d7835(_0x2ac4c1.admin);
    }
    let _0x457f06 = _0x48b992.mentionedJid[0] ? _0x48b992.mentionedJid[0] : _0x48b992.quoted ? _0x48b992.quoted.sender : _0x532310.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await _0x108c6c.groupParticipantsUpdate(_0x48b992.chat, [_0x457f06], "remove");
    _0x2d7835(_0x2ac4c1.done);
  }
}, {
  command: ["listonline", "onlinemembers"],
  operate: async _0xfb8f11 => {
    const {
      m: _0x11d35f,
      mess: _0x56da1f,
      args: _0xef2212,
      store: _0x35f704,
      botNumber: _0x2b2a19,
      Cypher: _0x4c432c,
      reply: _0x200bd6
    } = _0xfb8f11;
    if (!_0x11d35f.isGroup) {
      return _0x200bd6(_0x56da1f.group);
    }
    let _0x309ba2 = _0xef2212 && /\d+\-\d+@g.us/.test(_0xef2212[0]) ? _0xef2212[0] : _0x11d35f.chat;
    let _0x281fdb = _0x35f704.presences[_0x309ba2];
    if (!_0x281fdb) {
      return _0x200bd6("*No online members detected in this group.*");
    }
    let _0x2927f7 = [...Object.keys(_0x281fdb), _0x2b2a19];
    let _0xa95b76 = 1;
    _0x4c432c.sendText(_0x11d35f.chat, "*ONLINE MEMBERS IN THIS GROUP*\n\n" + _0x2927f7.map(_0x108554 => _0xa95b76++ + " . @" + _0x108554.replace(/@.+/, "")).join`\n`, _0x11d35f, {
      mentions: _0x2927f7
    });
  }
}, {
  command: ["listrequests", "pendingrequests"],
  operate: async ({
    m: _0xb15067,
    args: _0x327681,
    isCreator: _0x314f88,
    reply: _0x3f3db2,
    listGroupRequests: _0x36df43,
    mess: _0xcf39fe,
    isBotAdmins: _0x4eb137,
    isGroupAdmins: _0x135a75
  }) => {
    if (!_0xb15067.isGroup) {
      return _0x3f3db2(_0xcf39fe.group);
    }
    if (!_0x135a75) {
      return _0x3f3db2(_0xcf39fe.admin);
    }
    if (!_0x4eb137) {
      return _0x3f3db2(_0xcf39fe.admin);
    }
    const _0x428704 = _0xb15067.chat;
    await _0x36df43(_0xb15067, _0x428704);
  }
}, {
  command: ["mediatag"],
  operate: async _0x2dd7 => {
    const {
      m: _0x4fc480,
      isAdmins: _0x8fd94d,
      mess: _0x43eba6,
      participants: _0x2dedbb,
      Cypher: _0x4b3d30,
      isBotAdmins: _0x29b135,
      reply: _0x1c8b20
    } = _0x2dd7;
    if (!_0x4fc480.isGroup) {
      return _0x1c8b20(_0x43eba6.group);
    }
    if (!_0x29b135) {
      return _0x1c8b20(_0x43eba6.admin);
    }
    if (!_0x8fd94d) {
      return _0x1c8b20(_0x43eba6.admin);
    }
    if (!_0x4fc480.quoted) {
      return _0x1c8b20("Reply to any media with caption " + (prefix + command));
    }
    _0x4b3d30.sendMessage(_0x4fc480.chat, {
      forward: _0x4fc480.quoted.fakeObj,
      mentions: _0x2dedbb.map(_0x580f3f => _0x580f3f.id)
    });
  }
}, {
  command: ["open"],
  operate: async _0x4d6769 => {
    const {
      m: _0x293e19,
      mess: _0x58e9b5,
      isAdmins: _0x5331f7,
      isCreator: _0x3d4c76,
      isBotAdmins: _0x6d859b,
      Cypher: _0x3e94c2,
      reply: _0x14fd83
    } = _0x4d6769;
    if (!_0x293e19.isGroup) {
      return _0x14fd83(_0x58e9b5.group);
    }
    if (!_0x5331f7 && !_0x3d4c76) {
      return _0x14fd83(_0x58e9b5.notadmin);
    }
    if (!_0x6d859b) {
      return _0x14fd83(_0x58e9b5.admin);
    }
    _0x3e94c2.groupSettingUpdate(_0x293e19.chat, "not_announcement");
    _0x14fd83("Group opened by admin. Members can now send messages.");
  }
}, {
  command: ["opentime"],
  operate: async _0x3bdb86 => {
    const {
      m: _0x321c7c,
      mess: _0x4718f9,
      args: _0x4e06e1,
      isAdmins: _0x3569e0,
      isCreator: _0x383f79,
      isBotAdmins: _0x1ea96b,
      Cypher: _0xd8aded,
      reply: _0x3bf332
    } = _0x3bdb86;
    if (!_0x321c7c.isGroup) {
      return _0x3bf332(_0x4718f9.group);
    }
    if (!_0x3569e0 && !_0x383f79) {
      return _0x3bf332(_0x4718f9.notadmin);
    }
    if (!_0x1ea96b) {
      return _0x3bf332(_0x4718f9.admin);
    }
    const _0x3bd766 = _0x4e06e1[0];
    const _0x28c6b2 = _0x4e06e1[1].toLowerCase();
    let _0x14d5b2;
    switch (_0x28c6b2) {
      case "seconds":
        _0x14d5b2 = _0x3bd766 * 1000;
        break;
      case "minutes":
        _0x14d5b2 = _0x3bd766 * 60000;
        break;
      case "hours":
        _0x14d5b2 = _0x3bd766 * 3600000;
        break;
      case "days":
        _0x14d5b2 = _0x3bd766 * 86400000;
        break;
      default:
        return _0x3bf332("*Select unit:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
    }
    _0x3bf332("*Opening group after " + _0x3bd766 + " " + _0x28c6b2 + "*");
    setTimeout(() => {
      _0xd8aded.groupSettingUpdate(_0x321c7c.chat, "not_announcement");
      _0x3bf332("Group opened by admin. Members can now send messages.");
    }, _0x14d5b2);
  }
}, {
  command: ["poll"],
  operate: async _0x51c64b => {
    const {
      m: _0x21e8c5,
      mess: _0x42ca13,
      text: _0x1b3b73,
      isCreator: _0x24f9aa,
      prefix: _0x40635e,
      Cypher: _0x5665b7,
      isGroup: _0x22f925,
      reply: _0x5d43ba
    } = _0x51c64b;
    if (!_0x24f9aa) {
      return _0x5d43ba(_0x42ca13.owner);
    }
    if (!_0x21e8c5.isGroup) {
      return _0x5d43ba(_0x42ca13.group);
    }
    let [_0x490fe8, _0x1436c4] = _0x1b3b73.split("|");
    if (_0x1b3b73.split("|") < 2) {
      return await _0x5d43ba("Enter a question and at least 2 options\nExample: " + _0x40635e + "poll Who is best player?|Messi,Ronaldo,None...");
    }
    let _0x229786 = [];
    for (let _0x1cde27 of _0x1436c4.split(",")) {
      _0x229786.push(_0x1cde27);
    }
    await _0x5665b7.sendMessage(_0x21e8c5.chat, {
      poll: {
        name: _0x490fe8,
        values: _0x229786
      }
    });
  }
}, {
  command: ["promote"],
  operate: async _0x4e73ae => {
    const {
      m: _0x3de2dc,
      mess: _0x489ac5,
      text: _0x6e2915,
      isAdmins: _0x1aebd8,
      isGroupOwner: _0x251228,
      isCreator: _0x4b9ee6,
      isBotAdmins: _0x4b0d73,
      quoted: _0x273642,
      Cypher: _0x221bef,
      reply: _0x35cfe7
    } = _0x4e73ae;
    if (!_0x3de2dc.isGroup) {
      return _0x35cfe7(_0x489ac5.group);
    }
    if (!_0x1aebd8 && !_0x251228 && !_0x4b9ee6) {
      return _0x35cfe7(_0x489ac5.admin);
    }
    if (!_0x4b0d73) {
      return _0x35cfe7(_0x489ac5.admin);
    }
    let _0x48a447 = _0x3de2dc.mentionedJid[0] ? _0x3de2dc.mentionedJid[0] : _0x3de2dc.quoted ? _0x3de2dc.quoted.sender : _0x6e2915.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await _0x221bef.groupParticipantsUpdate(_0x3de2dc.chat, [_0x48a447], "promote");
    _0x35cfe7(_0x489ac5.done);
  }
}, {
  command: ["resetlink"],
  operate: async _0xe18595 => {
    const {
      m: _0x7860bb,
      isAdmins: _0x4ce698,
      isGroupOwner: _0x57f5fe,
      isCreator: _0x35e733,
      mess: _0x2033a8,
      Cypher: _0x890e26,
      isBotAdmins: _0x8a69aa,
      reply: _0x1d7a8e
    } = _0xe18595;
    if (!_0x7860bb.isGroup) {
      return _0x1d7a8e(_0x2033a8.group);
    }
    if (!_0x4ce698 && !_0x57f5fe && !_0x35e733) {
      return _0x1d7a8e(_0x2033a8.admin);
    }
    if (!_0x8a69aa) {
      return _0x1d7a8e(_0x2033a8.admin);
    }
    await _0x890e26.groupRevokeInvite(_0x7860bb.chat).then(_0x1fe9de => {
      _0x1d7a8e(_0x2033a8.done);
    });
  }
}, {
  command: ["setdesc", "setdescription"],
  operate: async _0x574c35 => {
    const {
      m: _0x49b0e2,
      mess: _0x3c8728,
      text: _0x5784fa,
      isAdmins: _0x45882f,
      isGroupOwner: _0x4ad829,
      isCreator: _0x2911c1,
      isBotAdmins: _0x4279ee,
      Cypher: _0x3d7288,
      reply: _0x59e508
    } = _0x574c35;
    if (!_0x49b0e2.isGroup) {
      return _0x59e508(_0x3c8728.group);
    }
    if (!_0x45882f && !_0x4ad829 && !_0x2911c1) {
      return _0x59e508(_0x3c8728.notadmin);
    }
    if (!_0x4279ee) {
      return _0x59e508(_0x3c8728.admin);
    }
    if (!_0x5784fa) {
      return _0x59e508("*Please enter a text*");
    }
    await _0x3d7288.groupUpdateDescription(_0x49b0e2.chat, _0x5784fa);
    _0x59e508(_0x3c8728.done);
  }
}, {
  command: ["setgroupname", "setgcname"],
  operate: async _0x155b9f => {
    const {
      m: _0x22e17f,
      mess: _0x487c31,
      text: _0x1a4e4d,
      isAdmins: _0x406533,
      isGroupOwner: _0x4ceed2,
      isCreator: _0x4209eb,
      isBotAdmins: _0x1c92bd,
      Cypher: _0x37f635,
      reply: _0x2b78f1
    } = _0x155b9f;
    if (!_0x22e17f.isGroup) {
      return _0x2b78f1(_0x487c31.group);
    }
    if (!_0x406533 && !_0x4ceed2 && !_0x4209eb) {
      return _0x2b78f1(_0x487c31.admin);
    }
    if (!_0x1c92bd) {
      return _0x2b78f1(_0x487c31.admin);
    }
    if (!_0x1a4e4d) {
      return _0x2b78f1("*Desired groupname?*");
    }
    await _0x37f635.groupUpdateSubject(_0x22e17f.chat, _0x1a4e4d);
    _0x2b78f1(_0x487c31.done);
  }
}, {
  command: ["setppgroup"],
  operate: async ({
    m: _0x488fab,
    reply: _0x4ed4d7,
    mess: _0x5137bb,
    isAdmins: _0x3de278,
    isCreator: _0xc01dbd,
    isBotAdmins: _0x249425,
    Cypher: _0x54b0e5,
    quoted: _0x5a6ab4,
    mime: _0x34b2c1,
    prefix: _0x5b703f,
    command: _0x42f388,
    args: _0x1beb07
  }) => {
    if (!_0x488fab.isGroup) {
      return _0x4ed4d7(_0x5137bb.group);
    }
    if (!_0x3de278 && !_0xc01dbd) {
      return _0x4ed4d7(_0x5137bb.notadmin);
    }
    if (!_0x249425) {
      return _0x4ed4d7(_0x5137bb.admin);
    }
    if (!_0x5a6ab4) {
      return _0x4ed4d7("*Send or reply to an image with the caption " + (_0x5b703f + _0x42f388) + "*");
    }
    if (!/image/.test(_0x34b2c1)) {
      return _0x4ed4d7("*Send or reply to an image with the caption " + (_0x5b703f + _0x42f388) + "*");
    }
    if (/webp/.test(_0x34b2c1)) {
      return _0x4ed4d7("*Send or reply to an image with the caption " + (_0x5b703f + _0x42f388) + "*");
    }
    const _0x131d57 = await _0x54b0e5.downloadAndSaveMediaMessage(_0x5a6ab4, "ppbot.jpeg");
    if (_0x1beb07[0] === "full") {
      const {
        img: _0x5863bc
      } = await generateProfilePicture(_0x131d57);
      await _0x54b0e5.query({
        tag: "iq",
        attrs: {
          to: _0x488fab.chat,
          type: "set",
          xmlns: "w:profile:picture"
        },
        content: [{
          tag: "picture",
          attrs: {
            type: "image"
          },
          content: _0x5863bc
        }]
      });
      fs.unlinkSync(_0x131d57);
      _0x4ed4d7("Group profile picture has been successfully set.");
    } else {
      await _0x54b0e5.updateProfilePicture(_0x488fab.chat, {
        url: _0x131d57
      });
      fs.unlinkSync(_0x131d57);
      _0x4ed4d7("Group profile picture has been successfully updated.");
    }
  }
}, {
  command: ["tagadmin", "listadmin", "admin"],
  operate: async ({
    Cypher: _0x243a87,
    m: _0x390511,
    reply: _0xbd197c,
    mess: _0x1c657c,
    participants: _0x3404f7,
    groupMetadata: _0x15706c
  }) => {
    if (!_0x390511.isGroup) {
      return _0xbd197c(_0x1c657c.group);
    }
    const _0x36c0f1 = _0x3404f7.filter(_0x254620 => _0x254620.admin);
    const _0x2446b8 = _0x36c0f1.map((_0x49677c, _0x46057c) => _0x46057c + 1 + ". @" + _0x49677c.id.split("@")[0]).join("\n");
    const _0x26497e = _0x15706c.owner || _0x36c0f1.find(_0x5b0faa => _0x5b0faa.admin === "superadmin")?.id || _0x390511.chat.split`-`[0] + "@s.whatsapp.net";
    let _0x112854 = ("*Group Admins Here:*\n" + _0x2446b8).trim();
    _0x243a87.sendMessage(_0x390511.chat, {
      text: _0x112854,
      mentions: [..._0x36c0f1.map(_0x50d64f => _0x50d64f.id), _0x26497e]
    }, {
      quoted: _0x390511
    });
  }
}, {
  command: ["tagall"],
  operate: async _0x3b016f => {
    const {
      m: _0x3d0973,
      isAdmins: _0x21819e,
      isGroupOwner: _0x4dc94c,
      isCreator: _0x133f71,
      mess: _0x497e45,
      q: _0x2416d4,
      participants: _0x272d9a,
      Cypher: _0x3e269a,
      isBotAdmins: _0xb7d44b,
      reply: _0x149c81
    } = _0x3b016f;
    if (!_0x3d0973.isGroup) {
      return _0x149c81(_0x497e45.group);
    }
    if (!_0x21819e && !_0x4dc94c && !_0x133f71) {
      return _0x149c81(_0x497e45.admin);
    }
    if (!_0xb7d44b) {
      return _0x149c81(_0x497e45.admin);
    }
    let _0x5d0999 = _0x3d0973.sender;
    let _0x53453b = "*TAGGED BY:*  @" + _0x5d0999.split("@")[0] + "\n\n*MESSAGE:* " + (_0x2416d4 ? _0x2416d4 : "No message") + "\n\n";
    for (let _0x269648 of _0x272d9a) {
      _0x53453b += "@" + _0x269648.id.split("@")[0] + "\n";
    }
    _0x3e269a.sendMessage(_0x3d0973.chat, {
      text: _0x53453b,
      mentions: _0x272d9a.map(_0x3d471f => _0x3d471f.id)
    }, {
      quoted: _0x3d0973
    });
  }
}, {
  command: ["totalmembers"],
  operate: async ({
    Cypher: _0x2278ce,
    m: _0x5c88d2,
    reply: _0x14c9af,
    mess: _0x417fcc,
    participants: _0x28bfd4,
    isGroupAdmins: _0x45a656,
    isCreator: _0x2c6a66,
    sleep: _0x539983,
    groupMetadata: _0x1fa3ce
  }) => {
    if (!_0x5c88d2.isGroup) {
      return _0x14c9af(_0x417fcc.group);
    }
    if (!_0x45a656 && !_0x2c6a66) {
      return _0x14c9af(_0x417fcc.admin);
    }
    await _0x2278ce.sendMessage(_0x5c88d2.chat, {
      text: "*GROUP*: " + _0x1fa3ce.subject + "\n*MEMBERS*: " + _0x28bfd4.length
    }, {
      quoted: _0x5c88d2,
      ephemeralExpiration: 86400
    });
  }
}, {
  command: ["userid", "userjid"],
  operate: async _0x3e414a => {
    const {
      m: _0x12febf,
      mess: _0x250b9f,
      isCreator: _0x441419,
      Cypher: _0x50fd07,
      reply: _0xdf04cf
    } = _0x3e414a;
    if (!_0x441419) {
      return _0xdf04cf(_0x250b9f.owner);
    }
    if (!_0x12febf.isGroup) {
      return _0xdf04cf(_0x250b9f.group);
    }
    const _0xec1cd5 = _0x12febf.isGroup ? await _0x50fd07.groupMetadata(_0x12febf.chat).catch(_0x3547f5 => {}) : "";
    const _0x53c3cb = _0x12febf.isGroup ? await _0xec1cd5.participants : "";
    let _0x22b105 = "Here is jid address of all users of\n *" + _0xec1cd5.subject + "*\n\n";
    for (let _0x2fdb1c of _0x53c3cb) {
      _0x22b105 += "□ " + _0x2fdb1c.id + "\n";
    }
    _0xdf04cf(_0x22b105);
  }
}, {
  command: ["vcf"],
  operate: async ({
    Cypher: _0x33c27c,
    m: _0x48c655,
    reply: _0x323692,
    mess: _0x437aac,
    participants: _0x424317,
    isGroupAdmins: _0x53854f,
    isCreator: _0x4bf13c,
    groupMetadata: _0x12bbe5
  }) => {
    if (!_0x48c655.isGroup) {
      return _0x323692(_0x437aac.group);
    }
    if (!_0x53854f) {
      return _0x323692(_0x437aac.admin);
    }
    let _0x135978 = await _0x33c27c.groupMetadata(_0x48c655.chat);
    let _0x392d29 = "";
    let _0x2ab591 = 0;
    for (let _0x31127a of _0x135978.participants) {
      _0x392d29 += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x2ab591++ + "] +" + _0x31127a.id.split("@")[0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x31127a.id.split("@")[0] + ":+" + _0x31127a.id.split("@")[0] + "\nEND:VCARD\n";
    }
    let _0x4f2db2 = "./contacts.vcf";
    _0x323692("\nPlease wait, saving " + _0x135978.participants.length + " contacts");
    fs.writeFileSync(_0x4f2db2, _0x392d29.trim());
    await sleep(2000);
    _0x33c27c.sendMessage(_0x48c655.chat, {
      document: fs.readFileSync(_0x4f2db2),
      mimetype: "text/vcard",
      fileName: "Contact.vcf",
      caption: "Successful\n\nGroup: *" + _0x135978.subject + "*\nContacts: *" + _0x135978.participants.length + "*"
    }, {
      ephemeralExpiration: 86400,
      quoted: _0x48c655
    });
    fs.unlinkSync(_0x4f2db2);
  }
}];
