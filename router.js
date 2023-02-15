// Importar o express
const express = require('express');
const PaginasController = require('./controllers/PaginasController');
const PizzasController = require('./controllers/PizzasController');

// Criar o roteador
const router = express.Router();

// Definir as rotas para o roteador
router.get('/', PaginasController.showIndex)
router.get('/carrinho', PaginasController.showCarrinho)
router.get('/perfil', PaginasController.showPerfil);
router.get('/cadastro', PaginasController.showCadastro);
router.get('/pizzas/:idDaPizza', PaginasController.showPizza);
router.get('/api/pizzas', PizzasController.index);

router.get('/adm/pizzas',(req,res)=>{}); //lista de pizzas cadastradas
router.get('/adm/pizzas/create',(req,res)=>{});//Mostrar formulario para add pizza
router.get ('adm/pizzas/edit',(req,res)=>{}) //Mostrar form para alterar pizza
router.post('/adm/pizzas/store',(req,res)=>{})//receber informações digitadas para criação de uma pizza
router.post('/adm/pizzas/update',(req,res)=>{})//receber inf digitadas para alteração de uma pizza
router.post('/adm/pizzas/delete',(req,res)=>{})//receber o id da pizza e deletar uma pizza
// Exportar o roteador
module.exports = router;