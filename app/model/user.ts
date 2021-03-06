'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    um: STRING(30),
    name: STRING(30),
    password: STRING(30),
    did: {
      type: INTEGER
    }
  }, {
    timestamps: false
  });
  User.sync({
    alter: true
  })
  return class extends User {
    static associate() {
      app.model.User.hasMany(app.model.Post, { as: 'posts' });
    }
  }
}