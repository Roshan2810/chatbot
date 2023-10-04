import { useEffect, useState } from "react";
import "./App.css";
import {
  Container,
  TextField,
  Grid,
  Paper,
  Button,
  Typography,
  Card,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = io("http://localhost:4000");

  useEffect(() => {
    socket.on("botresponse", (botresponse) => {
      setTimeout(
        () =>
          setMessages((prev) => [
            ...prev,
            { text: botresponse, user: false, bot: true },
          ]),
        2000
      );
    });
  }, [socket]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === "") return;
    socket.emit("message", input);
    setMessages((prev) => [...prev, { text: input, user: true, bot: false }]);
    setInput("");
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} className="chatbot-window-paper">
        <div className="chat-window">
          {messages.map((message, index) => (
            <Typography
              variant="inherit"
              key={index}
              className={`message ${message.user ? "user" : "bot"}`}
            >
              <Card className={`card ${message.user ? "user" : "bot"}`}>
                {message.text}
              </Card>
            </Typography>
          ))}
        </div>
      </Paper>

      <Grid container spacing={2} className="chatbot-footer">
        <Grid item xs={10}>
          <TextField
            fullWidth
            variant="outlined"
            label="Type a message..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.keyCode === 13) handleSubmit();
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
