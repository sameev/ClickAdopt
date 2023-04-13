const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})


app.listen(PORT, () => {
  (process.env.NODE_ENV !== 'production') && console.log(`Express server running at:\n   http://localhost:${PORT}`)
})
