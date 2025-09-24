import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server is healthy");
});

export default app;  