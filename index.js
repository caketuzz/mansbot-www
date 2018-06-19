const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars');

const app = express();
const publicRoot = path.join(__dirname);

app.use(express.static(publicRoot));

app.engine('handlebars', exphbs({ defaultLayout: null }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: publicRoot });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));