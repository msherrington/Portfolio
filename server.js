const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./config/routes');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

app.use('/', router);

app.listen(port, () => console.log(`Express is listening to port ${port}`));
