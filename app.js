const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API de tarefas no ar')
});

app.listen(3000)