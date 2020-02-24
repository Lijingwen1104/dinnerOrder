'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, INTEGER } = app.Sequelize;
  const Role = app.model.define('role', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
  }, {
    timestamps: false
  });
  Role.sync({
    alter: true
  })
  return Role
}