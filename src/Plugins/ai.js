function hi() {
  console.log("Welcome To The MatrixWorld!");
}
hi();
const fetch = require("node-fetch");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const {
  fromBuffer
} = require("file-type");
const path = require("path");
module.exports = [{
  command: ["jarvis"],
  operate: async ({
    Cypher: _0x56a354, // Assuming 'Cypher' is the object for sending messages
    m: _0x4d6bf5,
    reply: _0x2fb246,
    text: _0x6224bb
  }) => {
    // React with a futuristic or AI-related emoji when command is received
    await _0x56a354.sendMessage(_0x4d6bf5.chat, {
      react: {
        text: "🤖", // Or perhaps "⚙️" or "🧠"
        key: _0x4d6bf5.key
      }
    });

    if (!_0x6224bb) {
      await _0x56a354.sendMessage(_0x4d6bf5.chat, {
        react: {
          text: "❌",
          key: _0x4d6bf5.key
        }
      });
      return _0x2fb246("*I'm a fountain of knowledge (or at least a leaky faucet 💧). Ask away! 😄*");
    }
    try {
      const apiUrl = `https://bk9.fun/ai/jeeves-chat?q=${encodeURIComponent(_0x6224bb)}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        await _0x56a354.sendMessage(_0x4d6bf5.chat, {
          react: {
            text: "⚠️", // Warning emoji for API errors
            key: _0x4d6bf5.key
          }
        });
        const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
        return _0x2fb246(`API request failed with status ${response.status}: ${errorData.message || response.statusText}`);
      }
      const data = await response.json();

      // Handle the BK9.fun API response structure
      if (data.status) {
        const apiResponse = data.BK9 || "*No answer found in API response*";
        await _0x56a354.sendMessage(_0x4d6bf5.chat, {
          react: {
            text: "✅", // Success emoji for a valid response
            key: _0x4d6bf5.key
          }
        });
        _0x2fb246(apiResponse);
      } else {
        await _0x56a354.sendMessage(_0x4d6bf5.chat, {
          react: {
            text: "❓", // Question mark for unexpected API response
            key: _0x4d6bf5.key
          }
        });
        _0x2fb246(data.message || "API request failed."); //This part might need adjustment depending on error handling in bk9.fun API.  It might not have a 'message' field.
      }
    } catch (error) {
      console.error("Error fetching response from BK9 API:", error);
      await _0x56a354.sendMessage(_0x4d6bf5.chat, {
        react: {
          text: "❌", // Error emoji for fetch errors
          key: _0x4d6bf5.key
        }
      });
      _0x2fb246("An error occurred while fetching the response from BK9 API.");
    }
  }
}, {
  command: ["gemini"],
  operate: async ({
    Cypher: _0x56a354, // Assuming 'Cypher' is the object used for sending messages
    m: _0xc45293,
    reply: _0x1bf876,
    text: _0x2c2b5f
  }) => {
    // React with a question mark emoji when command is received
    await _0x56a354.sendMessage(_0xc45293.chat, {
      react: {
        text: "❓",
        key: _0xc45293.key
      }
    });

    if (!_0x2c2b5f) {
      await _0x56a354.sendMessage(_0xc45293.chat, {
        react: {
          text: "❌",
          key: _0xc45293.key
        }
      });
      return _0x1bf876("*Alright, question time! 🎤  What's on your mind sweety🥰?*");
    }
    try {
      let _0x357f0c = await fetch("https://bk9.fun/ai/gemini?q=" + encodeURIComponent(_0x2c2b5f));
      let _0xfb82b = await _0x357f0c.json();
      if (_0x357f0c.status !== 200 || !_0xfb82b.status || !_0xfb82b.BK9) {
        await _0x56a354.sendMessage(_0xc45293.chat, {
          react: {
            text: "⚠️", // Using a warning emoji for API issues
            key: _0xc45293.key
          }
        });
        return _0x1bf876("*Please try again later or try another command!*");
      } else {
        await _0x56a354.sendMessage(_0xc45293.chat, {
          react: {
            text: "✅", // React with a success emoji after getting the response
            key: _0xc45293.key
          }
        });
        _0x1bf876(_0xfb82b.BK9);
      }
    } catch (_0x33f4ab) {
      console.error("Error fetching response from MALVIN AI API:", _0x33f4ab);
      await _0x56a354.sendMessage(_0xc45293.chat, {
        react: {
          text: "❌", // React with an error emoji on catch
          key: _0xc45293.key
        }
      });
      _0x1bf876("An error occurred while fetching the response from MALVIN AI API.");
    }
  }
}, {
  command: ["generate"],
  operate: async ({
    Cypher: _0x412c91,
    m: _0x18b8a6,
    reply: _0x334518,
    text: _0x230dc3,
    prefix: _0x6fd4b9,
    command: _0x3ee3c6
  }) => {
    if (!_0x230dc3) {
      return _0x334518("*Please provide a query to generate an image!*");
    }
    const _0x3793fd = "https://api.gurusensei.workers.dev/dream?prompt=" + encodeURIComponent(_0x230dc3);
    try {
      await _0x412c91.sendMessage(_0x18b8a6.chat, {
        image: {
          url: _0x3793fd
        }
      }, {
        quoted: _0x18b8a6
      });
    } catch (_0xc10ce6) {
      console.error("Error generating image:", _0xc10ce6);
      _0x334518("*An error occurred while generating the image.*");
    }
  }
}, {
  command: ["dbrx"],
  operate: async ({
    m: _0x32242b,
    reply: _0x39feca,
    text: _0x3d3d07
  }) => {
    if (!_0x3d3d07) {
      return _0x39feca("*Fire away! 🔥  I'm ready for anything. (almost anything 😉)*");
    }
    try {
      const _0x2a527d = "https://api.siputzx.my.id/api/ai/dbrx-instruct?content=" + encodeURIComponent(_0x3d3d07);
      const _0x65c77 = await fetch(_0x2a527d);
      const _0x17ddbc = await _0x65c77.json();
      if (!_0x17ddbc.status || !_0x17ddbc.data) {
        return _0x39feca("*Please try again later or try another command!*");
      } else {
        _0x39feca(_0x17ddbc.data);
      }
    } catch (_0x2f587b) {
      console.error("Error fetching response from DBRX API:", _0x2f587b);
      _0x39feca("An error occurred while fetching the response from DBRX API.");
    }
  }
}, {
  command: ["chatgpt"],
  operate: async ({
    m: _0x32242b, // unused in this example
    reply: _0x39feca, // function to send the reply
    text: _0x3d3d07  // user's question
  }) => {
    if (!_0x3d3d07) {
      return _0x39feca("*Spill the tea! ☕ What burning question do you have?*");
    }

    const apiKey = "08da4ef3bedbb2a90a"; // Your API key
    const apiUrl = `https://api.nexoracle.com/ai/chatgpt?apikey=${apiKey}&prompt=${encodeURIComponent(_0x3d3d07)}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json(); // Attempt to get error details
        const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
        return _0x39feca(`*An error occurred: ${errorMessage}*`);
      }

      const data = await response.json();

      if (data.status !== 200) {
        return _0x39feca(`*API error: ${data.status} - ${data.message || "Unknown error"}*`);
      }

      //Handle different response structures.  NexOracle's response seems inconsistent based on your example.
      const result = data.result || data.message || "No response from API"; //Fallback if result is missing

      _0x39feca(result);

    } catch (error) {
      console.error("Error fetching response from ChatGPT API:", error);
      _0x39feca("*An error occurred while fetching the response from ChatGPT API.*");
    }
  }
}, {
  command: ["matrix"],
  operate: async ({
    Cypher: _0x56a354, // Assuming 'Cypher' is the object used for sending messages
    m: _0x32242b, // unused in the original, but kept for consistency
    reply: _0x39feca, // function to send the reply
    text: _0x3d3d07  // user's question
  }) => {
    // React with a green code emoji when command is received
    await _0x56a354.sendMessage(_0x32242b.chat, {
      react: {
        text: "⏳", // Or another matrix-related emoji if you prefer
        key: _0x32242b.key
      }
    });

    if (!_0x3d3d07) {
      await _0x56a354.sendMessage(_0x32242b.chat, {
        react: {
          text: "❌",
          key: _0x32242b.key
        }
      });
      return _0x39feca("*My brain is tingling with anticipation! 🧠⚡ Ask me, ask me!*");
    }

    const apiKey = "MatrixZatKing"; // Your API key
    const apiUrl = `https://api.nexoracle.com/ai/gemini?apikey=${apiKey}&prompt=${encodeURIComponent(_0x3d3d07)}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        await _0x56a354.sendMessage(_0x32242b.chat, {
          react: {
            text: "⚠️", // Using a warning emoji for API errors
            key: _0x32242b.key
          }
        });
        const errorData = await response.json(); // Attempt to get error details
        const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
        return _0x39feca(`*An error occurred: ${errorMessage}*`);
      }

      const data = await response.json();

      if (data.status !== 200) {
        await _0x56a354.sendMessage(_0x32242b.chat, {
          react: {
            text: "⚠️", // Using a warning emoji for API errors
            key: _0x32242b.key
          }
        });
        return _0x39feca(`*API error: ${data.status} - ${data.message || "Unknown error"}*`);
      }

      //Handle different response structures.  NexOracle's response seems inconsistent based on your example.
      const result = data.result || data.message || "No response from API"; //Fallback if result is missing

      await _0x56a354.sendMessage(_0x32242b.chat, {
        react: {
          text: "✅", // React with a success emoji after getting the response
          key: _0x32242b.key
        }
      });
      _0x39feca(result);

    } catch (error) {
      console.error("Error fetching response from matrix API:", error);
      await _0x56a354.sendMessage(_0x32242b.chat, {
        react: {
          text: "❌", // React with an error emoji on catch
          key: _0x32242b.key
        }
      });
      _0x39feca("*An error occurred while fetching the response from gemini API.*");
    }
  }
}, {
  command: ["openai"], // Changed command to "openai"
  operate: async ({
    m: _0x3db143,
    reply: _0xeb9056,
    text: _0x3ad335
  }) => {
    if (!_0x3ad335) {
      return _0xeb9056("*Don't leave me hanging! 🐒  What's the big question?*");
    }
    try {
      const newApiUrl = `https://vapis.my.id/api/openai?q=${encodeURIComponent(_0x3ad335)}`; // Updated API URL
      const response = await fetch(newApiUrl);

      if (!response.ok) {
        let errorMessage = "API request failed. ";
        if (response.status === 429) { // Rate limit
          errorMessage += "Rate limit exceeded. Please try again later.";
        } else if (response.status === 500 || response.status === 503) { // Server errors
          errorMessage += "The API server is experiencing issues. Please try again later.";
        } else {
          const errorData = await response.json().catch(() => ({ message: "Unable to parse error response" }));
          errorMessage += `HTTP error ${response.status}: ${errorData.message || response.statusText}`;
        }
        return _0xeb9056(errorMessage);
      }

      const data = await response.json();

      if (data.status) { // Check for 'status' field instead of 'success'
        if (data.result) {
          _0xeb9056(data.result); // Access the result from the 'result' field
        } else {
          _0xeb9056("*API response missing 'result' field. Please try again later.*");
        }
      } else {
        _0xeb9056(data.message || "API request failed."); // Handle API failure
      }

    } catch (error) {
      console.error("Error querying OpenAI API:", error);
      _0xeb9056("An error occurred while fetching the response from OpenAI API.");
    }
  }
}, {
  command: ["deepseekllm"],
  operate: async ({
    m: _0x34da6a,
    reply: _0x130888,
    text: _0x39c85f
  }) => {
    if (!_0x39c85f) {
      return _0x130888("*Please ask a question*");
    }
    try {
      const _0x243197 = "https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=" + encodeURIComponent(_0x39c85f);
      const _0x45ffac = await fetch(_0x243197);
      const _0x292eaf = await _0x45ffac.json();
      if (!_0x292eaf.status || !_0x292eaf.data) {
        return _0x130888("*Please try again later or try another command!*");
      } else {
        _0x130888(_0x292eaf.data);
      }
    } catch (_0x78b4a1) {
      console.error("Error fetching response from DeepSeek-LLM API:", _0x78b4a1);
      _0x130888("An error occurred while fetching the response from DeepSeek-LLM API.");
    }
  }
}, {
  command: ["doppleai"],
  operate: async ({
    reply: _0x2f2cc9,
    m: _0x384945,
    text: _0x3127e9
  }) => {
    async function _0x54d791(_0x7891cd) {
      const _0x2551e1 = await axios.get("https://xploader-api.vercel.app/doppleai?prompt=" + encodeURIComponent(_0x7891cd));
      return _0x2551e1.data;
    }
    try {
      if (!_0x3127e9) {
        return _0x2f2cc9("*Please ask a question*");
      }
      const _0x1b33f6 = await _0x54d791(_0x3127e9);
      _0x2f2cc9(_0x1b33f6.response);
    } catch (_0x4da6f7) {
      console.error("Error in DoppleAI plugin:", _0x4da6f7);
      _0x2f2cc9("An error occurred!");
    }
  }
}, {
  command: ["gpt"],
  operate: async ({
    m: _0x10773c,
    reply: _0x37bf4b,
    text: _0x458a02
  }) => {
    if (!_0x458a02) {
      return _0x37bf4b("*Unleash your inner Sherlock! 🕵️‍♀️ What mysteries need solving?*");
    }
    try {
      const _0x52701b = "https://api.siputzx.my.id/api/ai/gpt3?prompt=you%20are%20an%20helpful%20assistant%20providing%20detailed%20and%20friendly%20responses&content=" + encodeURIComponent(_0x458a02);
      const _0x34b038 = await fetch(_0x52701b);
      const _0xdfc7be = await _0x34b038.json();
      if (!_0xdfc7be.status || !_0xdfc7be.data) {
        return _0x37bf4b("*Please try again later or try another command!*");
      } else {
        _0x37bf4b(_0xdfc7be.data);
      }
    } catch (_0x389b0d) {
      console.error("Error fetching response from GPT API:", _0x389b0d);
      _0x37bf4b("An error occurred while fetching the response from GPT API.");
    }
  }
}, {
  command: ["gpt2"],
  operate: async ({
    m: _0x15f90d,
    reply: _0x4b42ec,
    text: _0x269044
  }) => {
    if (!_0x269044) {
      return _0x4b42ec("*Please ask a question*");
    }
    try {
      let _0x16778f = await fetch("https://bk9.fun/ai/jeeves-chat?q=" + encodeURIComponent(_0x269044));
      let _0x198631 = await _0x16778f.json();
      if (!_0x198631.BK9) {
        return _0x4b42ec("*Please try again later or try another command!*");
      } else {
        _0x4b42ec(_0x198631.BK9);
      }
    } catch (_0x220f64) {
      console.error("Error fetching response from GPT-2 API:", _0x220f64);
      _0x4b42ec("An error occurred while fetching the response from GPT-2 API.");
    }
  }
}, {
  command: ["imagen"],
  operate: async ({
    Cypher: _0x2c23fe,
    m: _0x20b23a,
    reply: _0x53cc70,
    text: _0xb7156,
    prefix: _0x1ee080,
    command: _0x128c98
  }) => {
    if (!_0xb7156) {
      return _0x53cc70("*Please provide a query to generate an image!*");
    }
    const _0x576f78 = "https://bk9.fun/ai/magicstudio?prompt=" + encodeURIComponent(_0xb7156);
    try {
      await _0x2c23fe.sendMessage(_0x20b23a.chat, {
        image: {
          url: _0x576f78
        }
      }, {
        quoted: _0x20b23a
      });
    } catch (_0x480916) {
      console.error("Error generating image:", _0x480916);
      _0x53cc70("*An error occurred while generating the image.*");
    }
  }
}, {
  command: ["imagine"],
  operate: async ({
    Cypher: _0x1e909c,
    m: _0x2e8bac,
    reply: _0x472a60,
    text: _0x7586b4,
    prefix: _0x5326ea,
    command: _0x4a70dc
  }) => {
    if (!_0x7586b4) {
      return _0x472a60("*Please provide a query to generate an image!*");
    }
    const _0x26add0 = "https://api.siputzx.my.id/api/ai/flux?prompt=" + encodeURIComponent(_0x7586b4);
    try {
      await _0x1e909c.sendMessage(_0x2e8bac.chat, {
        image: {
          url: _0x26add0
        }
      }, {
        quoted: _0x2e8bac
      });
    } catch (_0x1fbaab) {
      console.error("Error generating image:", _0x1fbaab);
      _0x472a60("An error occurred while generating the image.");
    }
  }
}, {
  command: ["letterai"],
  operate: async ({
    m: _0x47f4d7,
    reply: _0x241ab0,
    text: _0xc80ccb
  }) => {
    if (!_0xc80ccb) {
      return _0x241ab0("*Please provide an input for the letter.*");
    }
    try {
      const _0x2c78cb = "https://api.siputzx.my.id/api/ai/moshiai?input=" + encodeURIComponent(_0xc80ccb);
      const _0x523f9f = await fetch(_0x2c78cb);
      const _0x386fdb = await _0x523f9f.json();
      if (!_0x386fdb.status || !_0x386fdb.data) {
        return _0x241ab0("*Please try again later or try another command!*");
      } else {
        _0x241ab0(_0x386fdb.data);
      }
    } catch (_0x4883b6) {
      console.error("Error fetching response from LetterAI API:", _0x4883b6);
      _0x241ab0("An error occurred while fetching the response from LetterAI API.");
    }
  }
}, {
  command: ["llama"],
  operate: async ({
    m: _0x372c29,
    reply: _0x38911a,
    text: _0x3ba6b6
  }) => {
    if (!_0x3ba6b6) {
      return _0x38911a("*Please ask a question*");
    }
    try {
      let _0x4af9b3 = await fetch("https://bk9.fun/ai/llama?q=" + encodeURIComponent(_0x3ba6b6));
      let _0x18872e = await _0x4af9b3.json();
      if (!_0x18872e.BK9) {
        return _0x38911a("*Please try again later or try another command!*");
      } else {
        _0x38911a(_0x18872e.BK9);
      }
    } catch (_0x2aeff9) {
      console.error("Error fetching response from Llama API:", _0x2aeff9);
      _0x38911a("An error occurred while fetching the response from Llama API.");
    }
  }
}, {
  command: ["metaai"],
  operate: async ({
    m: _0x5544c5,
    reply: _0x320105,
    text: _0x67776b
  }) => {
    if (!_0x67776b) {
      return _0x320105("*Please ask a question*");
    }
    try {
      const _0x1eee67 = "https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=" + encodeURIComponent(_0x67776b);
      const _0x207375 = await fetch(_0x1eee67);
      const _0x3362c1 = await _0x207375.json();
      if (!_0x3362c1.status || !_0x3362c1.data) {
        return _0x320105("*Please try again later or try another command!*");
      } else {
        _0x320105(_0x3362c1.data);
      }
    } catch (_0x43904c) {
      console.error("Error fetching response from MetaAI API:", _0x43904c);
      _0x320105("An error occurred while fetching the response from MetaAI API.");
    }
  }
}, {
  command: ["mistral"],
  operate: async ({
    m: _0x5a9601,
    reply: _0x141b90,
    text: _0x2d4da5
  }) => {
    if (!_0x2d4da5) {
      return _0x141b90("*Please ask a question*");
    }
    try {
      const _0x4a8bbb = "https://api.siputzx.my.id/api/ai/mistral-7b-instruct-v0.2?content=" + encodeURIComponent(_0x2d4da5);
      const _0x4207d6 = await fetch(_0x4a8bbb);
      const _0x432306 = await _0x4207d6.json();
      if (!_0x432306.status || !_0x432306.data) {
        return _0x141b90("*Please try again later or try another command!*");
      } else {
        _0x141b90(_0x432306.data);
      }
    } catch (_0xabb096) {
      console.error("Error fetching response from Mistral API:", _0xabb096);
      _0x141b90("An error occurred while fetching the response from Mistral API.");
    }
  }
}, {
  command: ["photoai"],
  operate: async ({
    Cypher: _0x5896a1,
    m: _0x504d7e,
    reply: _0x3268a8,
    text: _0x4c87c0,
    prefix: _0x26abc7,
    command: _0x110e2e
  }) => {
    if (!_0x4c87c0) {
      return _0x3268a8("*Please provide a query to generate an image!*");
    }
    const _0x58848b = "https://api.siputzx.my.id/api/ai/dreamshaper?prompt=" + encodeURIComponent(_0x4c87c0);
    try {
      await _0x5896a1.sendMessage(_0x504d7e.chat, {
        image: {
          url: _0x58848b
        }
      }, {
        quoted: _0x504d7e
      });
    } catch (_0x6782c5) {
      console.error("Error generating image:", _0x6782c5);
      _0x3268a8("An error occurred while generating the image.");
    }
  }
}];