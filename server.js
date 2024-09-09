const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (grievance.html, CSS, etc.)
app.use(express.static('public'));

// Handle form submission and save grievance
app.post('/submit-grievance', (req, res) => {
    const { name, dept, year, email, grievance } = req.body;

    const newGrievance = {
        name,
        dept,
        year,
        email,
        grievance,
        timestamp: new Date().toISOString()
    };

    // Read and append the grievance to grievances.json
    fs.readFile('grievances.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading grievances:', err);
            return res.status(500).send('Server error');
        }

        let grievances = [];

        if (data.trim()) {
            grievances = JSON.parse('[' + data.trim().split('\n').join(',') + ']');
        }

        grievances.push(newGrievance);

        fs.writeFile('grievances.json', grievances.map(g => JSON.stringify(g)).join('\n') + '\n', (err) => {
            if (err) {
                console.error('Error saving grievance:', err);
                return res.status(500).send('Error saving grievance');
            }

            res.send('Grievance submitted successfully');
        });
    });
});

// Serve grievances to admin dashboard
app.get('/grievances', (req, res) => {
    fs.readFile('grievances.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read grievances data' });
        }

        const grievances = data.trim() ? JSON.parse('[' + data.trim().split('\n').join(',') + ']') : [];
        res.json(grievances);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


