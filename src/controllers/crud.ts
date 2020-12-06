// import axios from 'axios'
import { Context } from 'koa'
// import { getOrCreateUser } from '@/models/user'
import { Controller, Ctx, Post, Get } from 'koa-ts-controllers'
// import { verifyTelegramPayload } from '@/helpers/verifyTelegramPayload'
// import { resolve } from 'path'


@Controller('/ping')
export default class {
    @Get('/')
    async singup (@Ctx() ctx: Context) {
        try {
            console.log("pong")
            ctx.body = {
                status: 'success',
                data: 'pong'
            }
        } catch (err) {
            console.error(err)
        }
    }
}