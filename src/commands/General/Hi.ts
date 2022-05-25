import { MessageType, Mimetype } from "@adiwajshing/baileys";

import MessageHandler from "../../Handlers/MessageHandler";

import BaseCommand from "../../lib/BaseCommand";

import WAClient from "../../lib/WAClient";

import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {

	constructor(client: WAClient, handler: MessageHandler) {		super(client, handler, {

			command: "hi",

			description: "Generally used to check if bot is Up",

			category: "general",

			usage: `${client.config.prefix}hi`,

			baseXp: 10,

		});

	}

	run = async (M: ISimplifiedMessage): Promise<void> => {

		const zerotwo =

			"https://c.tenor.com/w_vsQrD460kAAAPo/rias.mp4";

		return void this.client.sendMessage(

			M.from,

			{ url: zerotwo },

			MessageType.video,

			{

				quoted: M.WAMessage,

				mimetype: Mimetype.gif,

				caption: `*_yamete kudasai 🍒_*`,

		    }

		);

	};

}
