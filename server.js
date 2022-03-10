const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// environment setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// running server
app.listen(port, error => {
  if (error) throw error;
  console.log('Server is running on port' + port);
});

// create payment charges
app.post('/payment', async (req, res) => {
  let status;
  let error;
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };
  try {
    const charge = await stripe.charges.create(body);
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'failure';
  }
  res.json({ error, status });
});
