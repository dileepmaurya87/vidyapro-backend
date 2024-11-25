const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./models');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const schoolRoutes = require('./routes/school');
const roleRoutes = require('./routes/role');

app.use('/auth', authRoutes);
app.use('/school', schoolRoutes);
app.use('/role', roleRoutes);

// Start the server without syncing the database
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
