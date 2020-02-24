'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function(appInfo: EggAppConfig) {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '123123';

  config.sequelize = {
    database: 'dinner',
    username: "root",
    password: "root123456",
    host: "127.0.0.1",
    dialect: "mysql"
  };
  config.security = {
    csrf: false
    // csrf: {
    //   queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    //   bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    // },
  }
  config. onerror= {
    // all(err, ctx) {
    //   console.log('err: ', err);
    //   // 在此处定义针对所有响应类型的错误处理方法
    //   // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
    //   ctx.body = 'error';
    //   ctx.status = 500;
    // },
    // html(err, ctx) {
    //   console.log('err: ', err);
    //   // html hander
    //   ctx.body = '<h3>error</h3>';
    //   ctx.status = 500;
    // },
    // json(err, ctx) {
    //   console.log('err: ', err);
    //   // json hander
    //   ctx.body = { message: 'error' };
    //   ctx.status = 500;
    // },
    // jsonp(err, ctx) {
    //   console.log('ctx: ', ctx);
    //   console.log('err: ', err);
    //   // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    // },
  }
  const bizConfig = {
    // your biz config
    timestamps: false
  };

  return {
    ...config as {},
    ...bizConfig,
  };
}
