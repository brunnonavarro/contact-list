var express = require('express');
var router = express.Router();
var model = require('../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  model.Contacts.findAll({})
  .then( contacts => res.json({
    error: false,
    data:contacts
  }))
  .catch( error => res.json({
    error: true,
    data: [],
    error: error
  }))
  
});

router.post('/', function(req,res,next) {
    const {
        name,
        lastName,
        phone,
        phone2
    } = req.body

    model.Contacts.create({
        name: name,
        lastName: lastName,
        phone: phone,
        phone2: phone2
    })
    .then(contact => res.status(201).json({
        error: false,
        data:contact,
        message: 'New contact has been created'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error:error
    }))
})

router.put('/:id', function(req, res, next) {
    const userId = req.params.id
    const { name, lastName, phone, phone2 } = req.body

    model.Contacts.update ({
        name: name,
        lastName: lastName,
        phone: phone,
        phone2: phone2
    }, { where: {
        id: userId
    }})
    .then (contact => res.status(201).json ({
        error: false,
        message: 'User has been updated'
    }))
    .catch ( error => res.json ({
        error: true,
        error: error
    }))
})

router.delete('/:id', function(req, res, next) {
    const userID = req.params.id
    model.Contacts.destroy({
        where: {
            id: userID
        }
    })
    .then (status => res.status(201).json({
        error: false,
        message: 'User has been deleted'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }))
}

)
module.exports = router;
