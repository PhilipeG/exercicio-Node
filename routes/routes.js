const express = require('express');
const router = express();
const connectToDatabase = require('../infrastructure/database/db');



router.get('/', async (req, res, next) => {
    try {
        const docs = await connectToDatabase.findAll();
        res.render('index', { titulo: "Pessoas", docs });
    } catch (err) {
        next(err);
    }
})


router.get('/new', (req, res, next) => {
    res.render('new', { titulo: "Cadastro pessoa" });
});

router.post('/new', async (req, res, next) => {
    const nome = req.body.nome;
    const dataNasc = req.body.dataNasc;

    try {
        const result = await connectToDatabase.insert({ nome, dataNasc });
        console.log(result);
        res.redirect('/');
    } catch (err) {
        next(err);
    }
})

router.get('/new', (req, res, next) => {
    res.render('new', { titulo: "Novo cadastro", doc: {"nome":"","datanasc":""}, action: '/new' });
  });

router.get('/edit/:id', async (req, res, next) => {
    const id = req.params.id;
  
    try {
      const doc = await connectToDatabase.findOne(id);
      res.render('new', { titulo: "Edição de pessoa", doc, action: '/edit/' + doc._id });
    } catch (err) {
      next(err);
    }
  });

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const datanasc = req.body.datanasc;
  
    try {
      const result = await connectToDatabase.update(id, { nome, datanasc });
      console.log(result);
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  });





module.exports = router;