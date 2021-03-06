const express = require('express');
const router = express.Router();
//item model
const Item = require('../../models/Item');
//route get 
router.get('/', (req, res) => {
    Item.find().sort({date : -1}).then( items => {
        console.log(items);
        res.json(items)
    }).catch(err => console.log(err))
})

// route post
router.post('/', (req, res) => {

    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
            .then(item => res.json(item)).catch(err => console.log(err));
});
// route delete 
router.delete('/:id', (req,res) => {
    Item.findById(req.params.id).then(item => item.remove().then(() => res.json({ success : true})))
    .catch(err => res.status(404).json({success : false}))
})


module.exports = router;