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

  const bizConfig = {
    // your biz config
  };

  return {
    ...config as {},
    ...bizConfig,
  };
}
