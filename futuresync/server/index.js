const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');

const projectRoutes = require('./Route/ProjectRoutes');

dotenv.config();

console.log('Environment Variables:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => {
      console.error("Could not connect to MongoDB Atlas:", err);
      process.exit(1); 
  });


app.use('/api', projectRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'API endpoint not found' });
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
