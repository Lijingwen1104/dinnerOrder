'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { INTEGER, DATE, DOUBLE } = app.Sequelize;
  const Dinner = app.model.define('dinner', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    getOffDate: DATE(6),
    price: DOUBLE,
    status: {
      type: INTEGER
    }
  }, {
    timestamps: false
  });
  Dinner.sync({
    alter: true
  })
  return Dinner
}