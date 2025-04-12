const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function checkForUpdates(bot, notifyJIDs = []) {
  const packagePath = path.join(process.cwd(), "package.json");
  const localPkg = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
  const currentCommit = localPkg.commitHash || "initial";

  try {
    const { data } = await axios.get("https://api.github.com/repos/Matri199/Queen-Adiza/commits/main");
    const latestCommit = data.sha;

    if (currentCommit !== latestCommit) {
      // Notify each user via WhatsApp
      for (let jid of notifyJIDs) {
        await bot.sendMessage(jid, {
          text: `🚨 *New Update Available!*\n\nA new version of *Queen-Adiza* is available.\n\nType *.update* to get the latest version.`,
        });
      }
    } else {
      console.log("Bot is already up-to-date.");
    }
  } catch (err) {
    console.error("Error checking for updates:", err.message);
  }
}

module.exports = checkForUpdates;