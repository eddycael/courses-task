const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.put('/course/:id', (req, res) => {
    console.log('\nRequest received');
    console.log('data = ', req.body, req.params.id);
    return res.send(JSON.stringify({result: "S:" + req.params.id}))
});
app.get('/data', (req, res) => {
    console.log('\nRequest received');
    //console.log('data = ', req.body, req.params.id);
    let result = [
        {
        "id": "123",
        "name": "Introduction to Advertising",
        "description": "Learn about advertising",
        "textbooks": [
            {
            "author": "Joe Smith",
            "title": "Mobile Advertising Fundamentals"
            },
            {
            "author": "Eli Hinnegan",
            "title": "Introduction to Location-Based Advertising"
            },
            {
            "author": "Edward Bernays",
            "title": "Public Relations"
            },
        ]
        },
        {
        "id": "223",
        "name": "Introduction to Advertising2",
        "description": "Learn about advertising2",
        "textbooks": [
            {
            "author": "Joe Smith2",
            "title": "Mobile Advertising Fundamentals2"
            },
            {
            "author": "Eli Hinnegan2",
            "title": "Introduction to Location-Based Advertising2"
            },
            {
            "author": "Edward Bernays2",
            "title": "Public Relations2"
            },
        ]
        }
    ];
    return res.send(JSON.stringify(result));
});

app.listen(8001, () =>
  console.log(`Example app listening on port 8001`),
);