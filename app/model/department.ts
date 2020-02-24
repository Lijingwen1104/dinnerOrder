'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, INTEGER } = app.Sequelize;
  const Department = app.model.define('department', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
  }, {
    timestamps: false
  });
  Department.sync({
    alter: true
  })
  return Department
}