const express = require('express');
const app = express();
const port = 5001;

app.get('/api/food', (req, res) => {
    res.json([
        { id: 1, name: 'Kottu', price: 1200 },
        { id: 2, name: 'Rice & Curry', price: 800 }
    ]);
});

app.listen(port, () => console.log(`Server running on port ${port}`));