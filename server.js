
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint
const TELEGRAM_BOT_TOKEN = '7175651839:AAFUX9Q3JRlTBI2cNE5lAWCHpI0gtFUgypU';
const TELEGRAM_CHAT_ID = '-1002081607786';

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;
  const text = `Заявка с сайта\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
    });
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    res.sendStatus(500);
  }
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
