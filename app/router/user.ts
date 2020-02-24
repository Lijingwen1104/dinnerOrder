module.exports = app => {
    app.router.get('/user/:id',app.controller.user.show)
    app.router.post('/aaa/login', app.controller.user.login)
};