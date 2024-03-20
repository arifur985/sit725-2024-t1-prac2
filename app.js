let express = require('express');
let app = express();

app.get('/add/:num1/:num2', (req, res) => {

    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers' });
    }

    let sum = num1 + num2;

    res.json({ result: sum });
});

app.get('/', (req, res) => {
    res.send('Welcome! Use /add/:num1/:num2 to add two numbers.');
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
