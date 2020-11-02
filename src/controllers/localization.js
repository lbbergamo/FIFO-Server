 module.exports = app => {
     const {
         existsOrError
     } = app.src.models.validation
     const save = async (req, res) => {
         const localization = {
             ...req.body
         }
         if (req.params.id) localization.id = req.localization.id

         try {
             existsOrError(localization.name, "Nome da localização não informado");
             existsOrError(localization.description, "Descrição não informado");
         } catch (msg) {
             return res.status(400).send(msg)
         }

         if (localization.id) {
             app.db('localizations')
                 .update(localization)
                 .where({
                     id: localization.id
                 })
                 .then(_ => res.status(200).send())
                 .catch(err => res.status(500).send(err))
         } else {
             app.db('localizations')
                 .insert(localization)
                 .then(localizations => res.status(200).json(localizations).send())
                 .catch(err => res.status(500).send(err))
         }
     }

     const get = (req, res) => {
         app.db('localizations')
             .select('id', 'name', 'cover', "description", "notes")
             .then(localization => res.json(localization))
             .catch(err => res.status(500).send(err))
     }
     const find = (req, res) => {
         const id = req.params.id
         app.db('localizations')
             .select('id', 'name', 'cover', "description", "notes")
             .where({                id: req.params.id             })
             .first()
             .then(localization => res.json(localization))
             .catch(err => res.status(500).send(err))
     }
     return {
         save,
         get,
         find
     }
 }