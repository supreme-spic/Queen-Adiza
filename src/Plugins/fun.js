function hi() {
  console.log("Hello World!");
}
hi();
const {
  getBuffer
} = require("../../lib/myfunc");
const axios = require("axios");
const fetch = require("node-fetch");
module.exports = [{
  command: ["dare"],
  operate: async ({
    Cypher: _0x44d7b2,
    m: _0x247ad9,
    from: _0x5ca2de
  }) => {
    const _0x373272 = ["Eat 2 tablespoons of rice without any side dishes.", "Spill a secret about yourself.", "Call your crush now and send a screenshot.", "Drop only emojis for 1 day in group chats.", "Sing the chorus of your favorite song.", "Change your name to 'I'm a daredevil' for 24 hours.", "Tell a random person 'I was told I'm your twin, separated at birth.'", "Pretend to be possessed by an animal for 30 minutes.", "Record yourself reading a funny quote and send it here.", "Prank chat an ex and say 'I still love you.'", "Change your profile picture to a funny meme for 5 hours.", "Type only in Spanish for 24 hours.", "Use a funny voice note greeting for 3 days.", "Drop a song quote and tag a suitable member.", "Say 'You're beautiful' to someone you admire.", "Act like a chicken in front of your parents.", "Read a page from a random book aloud and send it here.", "Howl like a wolf for 10 seconds outside.", "Make a short dance video and put it on your status.", "Eat a raw piece of garlic.", "Show the last five people you texted and what the messages said.", "Put your full name on status for 5 hours.", "Make a twerk dance video and put it on your status.", "Call your bestie and say 'I love you.'", "Put your photo without filters on your status.", "Say 'I love you' to someone you secretly admire.", "Send a voice note saying 'Can I call you baby?'", "Change your name to 'I'm a daredevil' for 24 hours.", "Use a Bollywood actor's photo as your profile picture.", "Put your crush's photo on status with the caption 'My crush.'", "Write 'I love you' to someone and send a screenshot.", "Slap your butt and send the sound effect.", "Shout 'Bravo!' and send it here.", "Snap your face and send it here.", "Send your photo with the caption 'I'm feeling confident.'", "Kiss your mom or dad and say 'I love you.'", "Put your dad's name on status for 5 hours.", "Make a TikTok dance challenge video.", "Break up with your best friend for 5 hours without telling them.", "Tell a friend you love them and want to marry them."];
    const _0xe7aa6e = _0x373272[Math.floor(Math.random() * _0x373272.length)];
    const _0x12ed25 = await getBuffer("https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg");
    await _0x44d7b2.sendMessage(_0x5ca2de, {
      image: _0x12ed25,
      caption: "*DARE*\n" + _0xe7aa6e
    }, {
      quoted: _0x247ad9
    });
  }
}, {
  command: ["fact"],
  operate: async ({
    m: _0x3ebbf5,
    reply: _0x438fc8
  }) => {
    try {
      const {
        data: _0x11d46b
      } = await axios.get("https://nekos.life/api/v2/fact");
      return _0x438fc8("*FACT:* " + _0x11d46b.fact + "\n");
    } catch (_0x84a289) {
      console.error(_0x84a289);
      return _0x438fc8("*An error occurred while fetching the fact.*");
    }
  }
}, {
  command: ["jokes", "joke"],
  operate: async ({
    Cypher: _0x4c9706,
    m: _0x579102,
    reply: _0xf06a2a
  }) => {
    try {
      let _0x30951f = await fetch("https://api.chucknorris.io/jokes/random");
      let _0x59819e = await _0x30951f.json();
      await _0x4c9706.sendMessage(_0x579102.chat, {
        text: _0x59819e.value
      }, {
        quoted: _0x579102
      });
    } catch (_0x53b84d) {
      console.error("Error fetching joke:", _0x53b84d);
      _0xf06a2a("An error occurred while fetching a joke.");
    }
  }
}, {
  command: ["memes", "meme"],
  operate: async ({
    Cypher: _0x436c0e,
    m: _0x768329,
    reply: _0x68a7d5
  }) => {
    try {
      let _0x4640f7 = await fetch("https://api.imgflip.com/get_memes");
      let _0x46ca23 = await _0x4640f7.json();
      for (let _0x5db33b = 0; _0x5db33b < 5; _0x5db33b++) {
        let _0x5849a9 = _0x46ca23.data.memes[_0x5db33b];
        await _0x436c0e.sendMessage(_0x768329.chat, {
          image: {
            url: _0x5849a9.url
          }
        }, {
          quoted: _0x768329
        });
      }
    } catch (_0x34c949) {
      console.error("Error fetching memes:", _0x34c949);
      _0x68a7d5("An error occurred while fetching memes.");
    }
  }
}, {
  command: ["quotes"],
  operate: async ({
    m: _0x2442dc,
    reply: _0x56dde6
  }) => {
    try {
      const {
        data: _0x457490
      } = await axios.get("https://favqs.com/api/qotd");
      const _0xc578a7 = "*QUOTE:* " + _0x457490.quote.body + "\n\n*AUTHOR:* " + _0x457490.quote.author;
      return _0x56dde6(_0xc578a7);
    } catch (_0x176952) {
      console.error(_0x176952);
      return _0x56dde6("*An error occurred while fetching the quote.*");
    }
  }
}, {
  command: ["quotevoice", "motispeech"],
  operate: async ({ Cypher: David, m, reply }) => {
    try {
      const res = await fetch("https://favqs.com/api/qotd");
      const data = await res.json();

      const quote = data.quote?.body;
      const author = data.quote?.author;
      if (!quote || !author) return reply("Couldn't fetch quote.");

      const fullText = `${quote} — ${author}`;

      // TTSMP3 unofficial API (Google TTS endpoint)
      const ttsRes = await axios({
        method: "POST",
        url: "https://ttsmp3.com/makemp3_new.php",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: new URLSearchParams({
          msg: fullText,
          lang: "Joey", // You can try: Ivy, Brian, Kimberly, etc.
          source: "ttsmp3"
        }).toString()
      });

      const audioUrl = ttsRes.data.URL;
      if (!audioUrl) return reply("TTS failed.");

      const audioData = await axios.get(audioUrl, { responseType: "arraybuffer" });
      const audioBuffer = Buffer.from(audioData.data);

      await David.sendMessage(m.chat, {
        audio: audioBuffer,
        mimetype: "audio/mp4", // WhatsApp plays this format well
        ptt: true
      }, { quoted: m });

    } catch (err) {
      console.error("TTS Error:", err);
      reply("Failed to create voice note.");
    }
  }
}, {
  command: ["trivia"],
  operate: async ({
    Cypher: _0x3f1b56,
    m: _0x2491a6,
    reply: _0x35c6ba
  }) => {
    try {
      let _0x35a4a6 = await fetch("https://opentdb.com/api.php?amount=1");
      let _0x2949bd = await _0x35a4a6.json();
      let _0x4e8e46 = _0x2949bd.results[0].question;
      let _0x5c33a9 = _0x2949bd.results[0].correct_answer;
      await _0x3f1b56.sendMessage(_0x2491a6.chat, {
        text: "Question: " + _0x4e8e46 + "\n\nThink you know the answer? Sending the correct answer after 20 seconds"
      }, {
        quoted: _0x2491a6
      });
      setTimeout(async () => {
        await _0x3f1b56.sendMessage(_0x2491a6.chat, {
          text: "Answer: " + _0x5c33a9
        });
      }, 20000);
    } catch (_0x1ab8c1) {
      console.error("Error fetching trivia question:", _0x1ab8c1);
      _0x35c6ba("An error occurred while fetching the trivia question.");
    }
  }
}, {
  command: ["truth"],
  operate: async ({
    Cypher: _0x486d99,
    m: _0xfc0646,
    from: _0x59295e
  }) => {
    const _0x3dd877 = ["What's your biggest fear?", "Have you ever lied to your best friend?", "What's your deepest secret?", "Who's your secret crush?", "What's the biggest mistake you've ever made?", "Have you ever cheated on a test?", "What's the most embarrassing thing that's ever happened to you?", "Do you have a hidden talent?", "What's the biggest lie you've ever told?", "Have you ever been in love?", "What's the most spontaneous thing you've ever done?", "Who's the person you trust most?", "What's the biggest risk you've ever taken?", "Have you ever regretted something?", "What's the most memorable gift you've received?", "Have you ever had a crush on someone older?", "What's the biggest lesson you've learned?", "Have you ever broken someone's heart?", "What's the most exciting thing you've done?", "Do you believe in soulmates?", "What's the biggest challenge you've faced?", "Have you ever kept a secret from your parents?", "What's the most creative thing you've done?", "Have you ever felt betrayed?", "What's the biggest adventure you've been on?", "Have you ever had a rival?", "What's the most thoughtful thing someone's done for you?", "Have you ever forgiven someone?", "What's the biggest obstacle you've overcome?", "Do you believe in karma?", "What's the most romantic thing someone's done for you?", "Have you ever taken a risk for love?", "What's the biggest surprise you've ever received?", "Have you ever had a paranormal experience?", "What's the most inspiring story you've heard?", "Have you ever helped someone in need?", "What's the biggest accomplishment you're proud of?"];
    const _0x634c60 = _0x3dd877[Math.floor(Math.random() * _0x3dd877.length)];
    const _0x5d1e19 = await getBuffer("https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg");
    await _0x486d99.sendMessage(_0x59295e, {
      image: _0x5d1e19,
      caption: "*TRUTH*\n" + _0x634c60
    }, {
      quoted: _0xfc0646
    });
  }
}, {
  command: ["truthdetector", "liedetector"],
  operate: async ({
    m: _0x5ca71a,
    reply: _0x3582ae
  }) => {
    if (!_0x5ca71a.quoted) {
      return _0x3582ae("Please reply to the message you want to detect!");
    }
    let _0x540cca = ["That's a blatant lie!", "Truth revealed!", "Lie alert!", "Hard to believe, but true!", "Professional liar detected!", "Fact-check: TRUE", "Busted! That's a lie!", "Unbelievable, but FALSE!", "Detecting... TRUTH!", "Lie detector activated: FALSE!", "Surprisingly, TRUE!", "My instincts say... LIE!", "That's partially true!", "Can't verify, try again!", "Most likely, TRUE!", "Don't believe you!", "Surprisingly, FALSE!", "Truth!", "Honest as a saint!", "Deceptive much?", "Absolutely true!", "Completely false!", "Seems truthful.", "Not buying it!", "You're lying through your teeth!", "Hard to believe, but it's true!", "I sense honesty.", "Falsehood detected!", "Totally legit!", "Lies, lies, lies!", "You can't fool me!", "Screams truth!", "Fabrication alert!", "Spot on!", "Fishy story, isn't it?", "Unquestionably true!", "Pure fiction!"];
    let _0x440a78 = _0x540cca[Math.floor(Math.random() * _0x540cca.length)];
    let _0x1264df = "*RESULT*: " + _0x440a78;
    await _0x3582ae(_0x1264df);
  }
}, {
  command: ["xxqc"],
  operate: async ({
    Cypher: _0x503837,
    m: _0x4740be,
    reply: _0x326bd0,
    prefix: _0x4f2801,
    command: _0x1a7caa,
    text: _0x4021b5
  }) => {
    if (!_0x4021b5) {
      return _0x326bd0("Example: " + (_0x4f2801 + _0x1a7caa) + " pink hello\n\nColour list\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver");
    }
    if (_0x4021b5.length > 100) {
      return _0x326bd0("Max 100 characters.");
    }
    let [_0x5dc81c, ..._0x59372e] = _0x4021b5.split(" ");
    _0x59372e = _0x59372e.join(" ");
    const _0x4126e9 = {
      pink: "#f68ac9",
      blue: "#6cace4",
      red: "#f44336",
      green: "#4caf50",
      yellow: "#ffeb3b",
      purple: "#9c27b0",
      darkblue: "#0d47a1",
      lightblue: "#03a9f4",
      ash: "#9e9e9e",
      orange: "#ff9800",
      black: "#000000",
      white: "#ffffff",
      teal: "#008080",
      lightpink: "#FFC0CB",
      chocolate: "#A52A2A",
      salmon: "#FFA07A",
      magenta: "#FF00FF",
      tan: "#D2B48C",
      wheat: "#F5DEB3",
      deeppink: "#FF1493",
      fire: "#B22222",
      skyblue: "#00BFFF",
      brightskyblue: "#1E90FF",
      hotpink: "#FF69B4",
      lightskyblue: "#87CEEB",
      seagreen: "#20B2AA",
      darkred: "#8B0000",
      orangered: "#FF4500",
      cyan: "#48D1CC",
      violet: "#BA55D3",
      mossgreen: "#00FF7F",
      darkgreen: "#008000",
      navyblue: "#191970",
      darkorange: "#FF8C00",
      darkpurple: "#9400D3",
      fuchsia: "#FF00FF",
      darkmagenta: "#8B008B",
      darkgray: "#2F4F4F",
      peachpuff: "#FFDAB9",
      darkishgreen: "#BDB76B",
      darkishred: "#DC143C",
      goldenrod: "#DAA520",
      darkishgray: "#696969",
      darkishpurple: "#483D8B",
      gold: "#FFD700",
      silver: "#C0C0C0"
    };
    const _0x4e4c5b = _0x4126e9[_0x5dc81c.toLowerCase()];
    if (!_0x4e4c5b) {
      return _0x326bd0("The selected color is not available.");
    }
    const _0x32622b = await _0x503837.getName(_0x4740be.sender);
    const _0x1dc383 = await _0x503837.profilePictureUrl(_0x4740be.sender, "image").catch(() => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60");
    let _0x33700f = {
      type: "quote",
      format: "png",
      backgroundColor: _0x4e4c5b,
      width: 512,
      height: 768,
      scale: 2,
      messages: [{
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: _0x32622b,
          photo: {
            url: _0x1dc383
          }
        },
        text: _0x59372e,
        replyMessage: {}
      }]
    };
    try {
      let _0x44fb0b = await axios.post("https://bot.lyo.su/quote/generate", _0x33700f, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      let _0x3fdabe = Buffer.from(_0x44fb0b.data.result.image, "base64");
      _0x503837.sendImageAsSticker(_0x4740be.chat, _0x3fdabe, _0x4740be, {
        packname: "" + global.packname,
        author: "" + global.author
      });
    } catch (_0x3d41c6) {
      console.error("Error generating quote:", _0x3d41c6);
      _0x326bd0("An error occurred while generating the quote.");
    }
  }
}];
