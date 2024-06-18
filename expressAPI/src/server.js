const app = require('./app');
const cors = require('cors'); 

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true, 
  }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
