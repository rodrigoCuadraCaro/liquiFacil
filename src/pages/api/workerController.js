const express = require('express');
const mongoose = require('mongoose');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const Worker = require('./models/worker.model');

app.prepare().then(() => {
    const server = express();

    // Connect to the MongoDB database
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

    // Define the routes for the workers API
    server.get('/api/workers', (req, res) => {
        Worker.find((error, workers) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(workers);
            }
        });
    });

    server.get('/api/workers/:id', (req, res) => {
        Worker.findById(req.params.id, (error, worker) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(worker);
            }
        });
    });

    server.post('/api/workers', (req, res) => {
        const worker = new Worker(req.body);
        worker.save((error) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(worker);
            }
        });
    });

    server.put('/api/workers/:id', (req, res) => {
        Worker.findByIdAndUpdate(req.params.id, req.body, (error, worker) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(worker);
            }
        });
    });
})