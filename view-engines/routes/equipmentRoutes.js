const express = require("express");
// const Equipment = require('../models/equipment');
const equipmentController = require('../controllers/equipmentController');

const router = express.Router();

router.get('/equipment', equipmentController.equipment_index
// (req, res) => {
    // Equipment.find()
    //     .sort({createdAt: -1}) // descending order: newest first
    //     .then(result => res.render('index', {
    //         title: 'All Equipment',
    //         equipment: result
    //     }))
    //     .catch(err => console.log(err));
// }
)

router.post('/equipment', equipmentController.equipment_create_post
// (req, res) => {
//     // console.log(req.body);
//     const equipment = new Equipment(req.body);
//     equipment.save()
//         .then(result => res.redirect('/equipment'))
//         .catch(err => console.log(err));
// }
)

router.get('/create', equipmentController.equipment_create_get
// (req, res) => {
//     res.render('create', {
//         title: 'Create'
//     });
// }
);


router.get('/:id', equipmentController.equipment_details
// (req, res) => {
//     const id = req.params.id;
//     Equipment.findById(id)
//         .then(result => res.render('details', {title: 'Equipment Details', equipment: result}))
//         .catch(err => console.log(err));
// }
)

router.delete('/:id', equipmentController.equipment_delete 
// (req, res) => {
//     const id = req.params.id;
//     Equipment.findByIdAndDelete(id)
//         .then(result => {
//             // We can't use redirect because we're using/making AJAX request / Fetch API on the frontend. Instead, send some kind of JSON data
//             res.json({redirect: '/equipment'}) // this JSON, once back from server, can be received in frontend from where fetch was made
//         })
//         .catch(err => console.log(err))
// }
)


module.exports = router;
