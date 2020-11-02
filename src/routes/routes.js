module.exports = app => {
   app.route('/localization')
       .post(app.src.controllers.localization.save)
       .get(app.src.controllers.localization.get)

   app.route('/localization/:id')
       .put(app.src.controllers.localization.save)
       .get(app.src.controllers.localization.find)

}