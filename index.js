const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const path = require("path");
const homeRouter = require('./src/routers/homeRouter');
const produtosRouter = require("./src/routers/produtosRouter");
const authRouter = require("./src/routers/authRouter");
const carrinhoRouter = require('./src/routers/carrinhoRouter');

app.use(methodOverride('_method'));
app.use(express.static('./src/public'));
app.set('view engine', 'ejs'); 
app.set('views', path.resolve("src", "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }));

app.use(homeRouter);
app.use(authRouter);
app.use(carrinhoRouter);
app.use("/adm/produtos", produtosRouter);

app.use((req, res, next) => {
    return res.status(404).render('home/not-found', { error: 'Página não encontrada' });
})  

app.listen(3000, () => console.log('Rodando...'))