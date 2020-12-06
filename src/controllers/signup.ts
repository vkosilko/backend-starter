// import axios from 'axios'
import { Context } from 'koa'
// import { getOrCreateUser } from '@/models/user'
import { Controller, Ctx, Post, Get } from 'koa-ts-controllers'
import Facebook = require('facebook-node-sdk')
// import { verifyTelegramPayload } from '@/helpers/verifyTelegramPayload'
// import { resolve } from 'path'


@Controller('/signup')
export default class {
    @Get('/')
    async singup (@Ctx() ctx: Context) {
        try {
            console.log("zalogintes pozhalusta")
            ctx.body = {
                status: 'success',
                data: 'pong'
            }
            }
        } catch (err) {
            console.error(err)
        }
    }
}