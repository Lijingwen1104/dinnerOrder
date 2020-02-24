'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { DATE, INTEGER } = app.Sequelize;
  const OverTimeRecords = app.model.define('overTimeRecords', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dinnerId: INTEGER,
    userid: INTEGER,
    getOffDate: DATE(6),
    getOffTime: DATE(6)
  }, {
    timestamps: false
  });
  OverTimeRecords.sync({
    alter: true
  })
  return OverTimeRecords
}