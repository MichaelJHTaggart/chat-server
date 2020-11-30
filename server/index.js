const express = require('express');
const { createPost, readAll } = require('./controllers/messages_controller');

const app = express();

app.use(express.json());

app.post('/api/messages', createPost)
app.get('/api/messages', readAll)
// app.put('', )
// app.delete('', )




const port = 3001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

