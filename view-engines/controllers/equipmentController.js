const Equipment = require('../models/equipment');
// blogController.js, etc => camelCase

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete: naming convention for controller functions



const equipment_index = (req, res) => {
    Equipment.find()
        .sort({createdAt: -1}) // descending order: newest first
        .then(result => res.render('equipment/index', {
            title: 'All Equipment',
            equipment: result
        }))
        .catch(err => console.log(err));
}

const equipment_details = (req, res) => {
    const id = req.params.id;
    Equipment.findById(id)
        .then(result => res.render('equipment/details', {title: 'Equipment Details', equipment: result}))
        .catch(err => {
            console.log(err);
            res.status(404).render('404', {title: 'Equipment not found'})
        });
}

const equipment_create_get = (req, res) => {
    res.render('equipment/create', {
        title: 'Create'
    });
}

const equipment_create_post = (req, res) => {
    const equipment = new Equipment(req.body);
    equipment.save()
        .then(result => res.redirect('/equipment'))
        .catch(err => console.log(err));
}

const equipment_delete = (req, res) => {
    const id = req.params.id;
    Equipment.findByIdAndDelete(id)
        .then(result => {
            // We can't use redirect because we're using/making AJAX request / Fetch API on the frontend. Instead, send some kind of JSON data
            res.json({redirect: '/equipment'}) // this JSON, once back from server, can be received in frontend from where fetch was made
        })
        .catch(err => console.log(err))
}

module.exports = {
    equipment_index,
    equipment_details,
    equipment_create_get,
    equipment_create_post,
    equipment_delete
}