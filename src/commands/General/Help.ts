/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";

import MessageHandler from "../../Handlers/MessageHandler";

import BaseCommand from "../../lib/BaseCommand";

import WAClient from "../../lib/WAClient";

import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {

	constructor(client: WAClient, handler: MessageHandler) {		super(client, handler, {

			command: "help",

			description: "Displays the info",

			category: "general",

			usage: `${client.config.prefix}zerotwo`,

		        dm: true,

                        aliases: ['h','?','well','menu']

		});

	}

	run = async (M: ISimplifiedMessage): Promise<void> => {

		const well = 

			"https://telegra.ph/file/016fed1081ffe48ca8ca8.mp4";

		return void this.client.sendMessage(

			M.from,

			{ url: well },

			MessageType.video,

			{

				quoted: M.WAMessage,

				mimetype: Mimetype.gif,

				caption: `🪆𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚!

🍒ɪ'ᴍ ʀɪᴀꜱ-ɢʀᴇᴍᴏʀʏ.

❄ᴍʏ ᴘʀᴇꜰɪx ɪꜱ - " ${this.client.config.prefix} "

───────────

- 𝐇𝐞𝐫𝐞 𝐚𝐫𝐞 𝐭𝐡𝐞 𝐋𝐢𝐬𝐭𝐞𝐝 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬

━━❰•𝔑𝔰𝔣𝔴•❱━━

✥ ᴜꜱᴀɢᴇ: ${this.client.config.prefix}ʀɪꜱᴀ [${this.client.config.prefix}300]

━━❰•𝔚𝔢𝔢𝔟•❱━━

✥ 𝔞𝔫𝔦𝔪𝔢 

✥ 𝔞𝔫𝔦𝔪𝔢𝔭𝔞𝔭𝔢𝔯 

✥ 𝔞𝔫𝔦𝔪𝔢𝔮𝔲𝔬𝔱𝔢 

✥ 𝔞𝔪𝔢𝔪𝔢 

✥ 𝔠𝔬𝔰𝔭𝔩𝔞𝔶 

✥ 𝔨𝔦𝔱𝔰𝔲𝔫𝔢 

✥ 𝔩𝔬𝔩𝔦 

✥ 𝔪𝔞𝔫𝔤𝔞 

✥ 𝔫𝔢𝔨𝔬 

✥ 𝔯𝔢𝔠𝔬𝔪𝔪𝔢𝔫𝔡 

✥ 𝔯𝔭𝔞𝔭𝔢𝔯 

✥ 𝔴𝔞𝔦𝔣𝔲

━━❰•𝔉𝔲𝔫•❱━━

✥ 𝔞𝔡𝔳𝔦𝔠𝔢 

✥ 𝔣𝔞𝔠𝔱 

✥ 𝔧𝔬𝔨𝔢 

✥ 𝔮𝔲𝔬𝔱𝔢 

✥ 𝔯𝔢𝔞𝔠𝔱 

✥ 𝔰𝔥𝔦𝔭 

✥ 𝔱𝔯𝔦𝔤𝔤𝔢𝔯 

✥ 𝔪𝔢𝔪𝔢 

✥ 𝔠𝔥𝔞𝔱

✥ 𝔠𝔥𝔢𝔰𝔰

━━❰•𝔊𝔢𝔫𝔢𝔯𝔞𝔩•❱━━

✥ 2𝔥𝔢𝔩𝔭 

✥ 𝔞𝔡𝔪𝔦𝔫𝔰 

✥ 𝔢𝔵𝔭 

✥ 𝔥𝔦 

✥ 𝔤𝔯𝔬𝔲𝔭𝔩𝔦𝔫𝔨 

✥ 𝔪𝔬𝔡𝔰 

✥ 𝔭𝔯𝔬𝔣𝔦𝔩𝔢 

✥ 𝔯𝔞𝔫𝔨

✥ 𝔤𝔦𝔱𝔥𝔲𝔟

━━❰• 𝔐𝔢𝔡𝔦𝔞•❱━━

✥ 𝔨𝔞𝔯𝔞𝔬𝔨𝔢 

✥ 𝔩𝔶𝔯𝔦𝔠𝔰 

✥ 𝔭𝔩𝔞𝔶 

✥ 𝔰𝔭𝔬𝔱𝔦𝔣𝔶 

✥ 𝔶𝔱𝔞𝔲𝔡𝔦𝔬 

✥ 𝔶𝔱𝔰𝔢𝔞𝔯𝔠𝔥 

✥ 𝔶𝔱𝔳𝔦𝔡𝔢𝔬

━━❰•𝔘𝔱𝔦𝔩𝔰•❱━━

✥ 𝔟𝔩𝔲𝔯 

✥ 𝔤𝔢𝔱𝔤𝔦𝔣 

✥ 𝔤𝔬𝔬𝔤𝔩𝔢 

✥ 𝔯𝔢𝔱𝔯𝔦𝔢𝔳𝔢 

✥ 𝔰𝔠𝔯𝔢𝔢𝔫𝔰𝔥𝔬𝔱 

✥ 𝔰𝔱𝔢𝔞𝔩 

✥ 𝔰𝔱𝔦𝔠𝔨𝔢𝔯 

✥ 𝔰𝔲𝔟𝔯𝔢𝔡 

✥ 𝔴𝔦𝔨𝔦𝔭𝔢𝔡𝔦𝔞

━━❰•𝔐𝔬𝔡𝔢𝔯𝔞𝔱𝔦𝔬𝔫•❱━━

✥ 𝔞𝔠𝔱𝔦𝔳𝔞𝔱𝔢 

✥ 𝔞𝔡𝔡 

✥ 𝔠𝔩𝔬𝔰𝔢 

✥ 𝔡𝔢𝔞𝔠𝔱𝔦𝔳𝔞𝔱𝔢 

✥ 𝔡𝔢𝔩𝔢𝔱𝔢 

✥ 𝔡𝔢𝔪𝔬𝔱𝔢 

✥ 𝔢𝔳𝔢𝔯𝔶𝔬𝔫𝔢 

✥ 𝔤𝔯𝔬𝔲𝔭𝔠𝔥𝔞𝔫𝔤𝔢 

✥ 𝔬𝔭𝔢𝔫 

✥ 𝔭𝔯𝔬𝔪𝔬𝔱𝔢 

✥ 𝔭𝔲𝔯𝔤𝔢 

✥ 𝔯𝔢𝔪𝔬𝔳𝔢 

✥ 𝔯𝔢𝔳𝔬𝔨𝔢

━━❰•𝔈𝔡𝔲𝔠𝔞𝔱𝔦𝔳𝔢•❱━━

✥ 𝔠𝔬𝔳𝔦𝔡 

✥ 𝔠𝔯𝔶𝔭𝔱𝔬 

✥ 𝔢𝔩𝔢𝔪𝔢𝔫𝔱 

✥ 𝔱𝔯𝔦𝔳𝔦𝔞 

✥ 𝔲𝔯𝔟𝔞𝔫𝔡𝔦𝔠𝔱𝔦𝔬𝔫𝔞𝔯𝔶

•━━━ ✽ • ✽ ━━━•`,

			}

		);

	};

}  
