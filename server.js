const express = require('express');

const app = express();
app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/boats').get((req, res) => {
    res.send({
        boats: [{ name: 'Ole Faithful' }, 
                { name: 'Santa Maria' }, 
                {name: 'The Explorer'}]
    });
});

app.route('/api/boats/:name').get((req, res) => {
    const requestedBoatName = req.params['name']
    res.send({ name: requestedBoatName });
});