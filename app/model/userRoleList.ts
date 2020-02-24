'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { INTEGER } = app.Sequelize;
  const UserRoleList = app.model.define('userRoleList', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rid: INTEGER,
    userid: INTEGER
  }, {
    timestamps: false
  });
  UserRoleList.sync({
    alter: true
  })
  return UserRoleList
}