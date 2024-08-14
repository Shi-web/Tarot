const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors({
    origin: 'http://127.0.0.1:8080', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/getTarotReading', async (req, res) => {
    const cardName = req.body.cardName;
    console.log('Received request for card:', cardName);

    try {
        // Make request to OpenAI API
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'gpt-3.5-turbo', // Use a valid model name
            prompt: `Provide a general tarot reading for the ${cardName} card.`,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json'
            }
        });

        // Validate response
        if (response.headers['content-type'].includes('application/json')) {
            const reading = response.data.choices[0].text;
            console.log('Generated reading:', reading);
            res.json({ reading });
        } else {
            res.status(500).send('Unexpected response format');
        }
    } catch (error) {
        // Detailed error handling
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);

            res.status(error.response.status || 500).send(error.response.data || 'An unexpected error occurred');
        } else {
            console.error('Error message:', error.message);
            res.status(500).send('An unexpected error occurred');
        }
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
