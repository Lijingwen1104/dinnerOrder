'use strict';

import { Controller } from 'egg';
// import { app } from 'egg-mock/bootstrap';

export default class UserController extends Controller {
  // async detail() { // get
  //   const ctx = this.ctx;
  //   const query = {
  //     limit: ctx.helper.parseInt(ctx.query.limit),
  //     offset: ctx.helper.parseInt(ctx.query.offset),
  //   };
  //   ctx.body = await ctx.service.user.list(query);
  // }

  async show() { 
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
  }
  async login() {
    const ctx = this.ctx;
    const body = ctx.request.body
    const requestBody: any = {status: 1}
    const user = await ctx.service.user.login(body.um, body.password);
    console.log('user: ', user);
    if (user.length) {
      requestBody.data = user[0]
    } else {
      requestBody.status = 0 
      requestBody.message = "用户名或密码错误"
    }
    
    // try {
    //   const user = await ctx.service.user.login(body.um, body.password);
    //   console.log('user: ', user);
    //   requestBody.message = requestBody
      
    //   // ctx.body = ctx.request.body;
    //   // console.log('ctx: ', ctx);
    // } catch (error) {
    //   ctx.body = error
    // }
    ctx.body = requestBody;
  }
//   async create() {
//     const ctx = this.ctx;
//     const user = await ctx.service.user.create(ctx.request.body);
//     ctx.status = 201;
//     ctx.body = user;
//   }

//   async update() {
//     const ctx = this.ctx;
//     const id = ctx.helper.parseInt(ctx.params.id);
//     const body = ctx.request.body;
//     ctx.body = await ctx.service.user.update({ id, updates: body });
//   }

//   async destroy() {
//     const ctx = this.ctx;
//     const id = ctx.helper.parseInt(ctx.params.id);
//     await ctx.service.user.del(id);
//     ctx.status = 200;
//   }
// }
}
