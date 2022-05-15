/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "Rias Gremory",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/j_oNsBf9Iw8AAAPo/high-school-dxd-rias-gremory.mp4 ";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🌟 *Rias Gremory* 🌟\n\n🍀 *Description: A WhatsApp Bot With Rich Anime Features.*\n\n🌐 *URL: https://github.com/VaseemStarkJr3000/Rias-Gremory* \n\n 📒 *Guide: https://github.com/ShineiIchijo/Chitoge-Guides* \n`,
			}
		);
	};
}
