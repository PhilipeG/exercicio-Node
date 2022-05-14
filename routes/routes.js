const express = require('express');
const router = express();
const connectToDatabase = require('../infrastructure/db/db');



router.get('/', async (req, res, next) => {
    try {
        const docs = await connectToDatabase.findAll();
        res.render('index', { title: 'Lista de Pessoas', docs });
    } catch (err) {
        next(err);
    }
})


router.get('/new', (req, res, next) => {
    res.render('new', { title: 'Novo Cadastro de Pessoa' });
});

router.post('/new', async (req, res, next) => {
    const name = req.body.name;
    const dateOfBithday = req.body.dateOfBithday;

    try {
        const result = await connectToDatabase.insert({ name, dateOfBithday });
        console.log(result);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
})

router.get('/new', (req, res, next) => {
    res.render('new', { title: 'Novo Cadastro', doc: {"name":"","dateOfBithday":""}, action: '/new' });
  });

router.get('/edit/:id', async (req, res, next) => {
    const id = req.params.id;
  
    try {
      const doc = await connectToDatabase.findOne(id);
      res.render('new', { title: 'Edição de Pessoa', doc, action: '/edit/' + doc._id });
    } catch (err) {
      next(err);
    }
  });

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const dateOfBithday = req.body.dateOfBithday;
  
    try {
      const result = await connectToDatabase.update(id, { name, dateOfBithday });
      console.log(result);
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  });





module.exports = router;