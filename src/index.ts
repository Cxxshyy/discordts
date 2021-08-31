import {Client} from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv } from "./utils/validateEnv";
import { onMessage } from "./events/onMessage";

(async () => {
  if (!validateEnv()) return;
  const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
  client.on("ready", () =>(
      console.log("Connected succesfully")
  ));
  client.on("message", (message) =>(
    onMessage(message)
  ));
  await connectDatabase();
  await client.login(process.env.BOT_TOKEN);
})();