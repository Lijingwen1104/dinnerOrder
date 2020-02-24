'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { DOUBLE, INTEGER } = app.Sequelize;
  const Traffic = app.model.define('traffic', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: INTEGER
    },
    overtimeId: {
        type: INTEGER
    },
    price: DOUBLE
  });
  Traffic.sync({
    alter: true
  })
  return Traffic
}