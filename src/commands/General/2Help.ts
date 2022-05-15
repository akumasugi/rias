import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'

import { MessageType, Mimetype } from '@adiwajshing/baileys'

import request from '../../lib/request'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: '2help',
l
