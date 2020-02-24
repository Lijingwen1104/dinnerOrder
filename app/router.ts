'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  require('./router/user')(app);
  // app.resources('users', '/users', app.controller.user);
  // app.resources('posts', '/posts', app.controller.post);
}
