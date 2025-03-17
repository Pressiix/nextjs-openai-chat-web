"use client";

import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Avatar,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { ChatOpenAI } from "langchain/chat_models/openai";

import Typewriter from "typewriter-effect";
import { OpenAIAssistantRunnable } from "langchain/experimental/openai_assistant";

interface MessageProps {
  id: number;
  role: string;
  parts: string;
}

const RoomChatOpenAI = ({
  onValueChange,
}: {
  onValueChange: (msg: string) => void;
}) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [chatHistory, setChatHistory] = useState<[string, string][]>([]);

  const handleGenerate = (message: MessageProps) => {
    onValueChange(message.parts);
    console.log(message);
  };

  const assistant = new OpenAIAssistantRunnable({
    assistantId: "asst_OC5wYahYtJLh4VwzK3frXqv3",
    asAgent: true,
    clientOptions: {
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    },
  });

  const handleSend = () => {
    if (input.trim() !== "") {
      const messageItemFromUser = [
        {
          id: messages.length ? messages[messages.length - 1]?.id + 1 : 0,
          parts: input,
          role: "user",
        },
      ];
      setMessages([...messages, ...messageItemFromUser]);

      setInput("");
    }
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const lastMessageItem = messages[messages.length - 1];
    if (lastMessageItem?.parts && lastMessageItem?.role === "user") {
      sendMessageToAI(lastMessageItem.parts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  // Access your API key (see "Set up your API key" above)
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const sendMessageToAI = async (msg: string) => {
    const result: any = await assistant.invoke({
      content: msg,
    });
    console.log(result);
    const output: string = result.returnValues.output.toString();
    const latestData: any = messages[messages.length - 1];
    const messageItemFromAI: MessageProps[] = [
      {
        id: (latestData?.id ?? 0) + 1,
        parts: output,
        role: "model",
      },
    ];
    setMessages([...messages, ...messageItemFromAI]);
    setChatHistory([...chatHistory, [msg, output]]);
  };

  return (
    <Box sx={{ height: "46vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => {
          return (
            <Message
              handleGenerate={handleGenerate}
              key={message.id}
              message={message}
            />
          );
        })}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="prompt"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              onClick={handleSend}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: "default" }}>
                    <SendIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({
  message,
  handleGenerate,
}: {
  message: MessageProps;
  handleGenerate: (message: MessageProps) => void;
}) => {
  const isAI = message.role === "model";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isAI ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      {isAI && (
        <Box paddingRight={1}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.cloud.scenario.com/assets-transform/KLS3U_ueSTaUrobHl3hf5g?p=100&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2Fzc2V0cy10cmFuc2Zvcm0vS0xTM1VfdWVTVGFVcm9iSGwzaGY1Zz9wPTEwMCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTA0NjA3OTl9fX1dfQ__&Key-Pair-Id=K36FIAB9LE2OLR&Signature=LnUm7GclANeDn9yIQSePcO9c96RdfWOTgeApg-ygrS728MX1cfb9RrU~8S4tW-ffk65cdLJA~zs3ZB4gJV~0IayjBJJq16YPffX7mCLAhtiodrdHtUBDU-eHdnJtx-Ls7JucconoHwMPyfxU-qbxH1cevlMGvAXqArs-KRY2UyZNs1I2wExrpeNpXZ4nrl~bZ42oYA9LxTEM3iu6ZZTJVKQvllv5id2KI0hiQVieO6mkPKbEeqrLeHOvMHgN8lNxPbVx5o-8RRQy0owZr5ZwZUvZckV1TQVpkcwAWUklpgX9UHES4EKG0SKVWGtOYoBY1tsa-Wyji~XdFdeLlOauTg__"
          />
        </Box>
      )}
      <Box sx={{ flexDirection: "column" }}>
        <Paper
          variant="outlined"
          sx={{
            p: 1,
          }}
        >
          {isAI ? (
            <Typewriter
              options={{
                delay: 10,
                strings: message.parts,
                autoStart: true,
                cursor: "",
              }}
            />
          ) : (
            <Typography variant="body1">{message.parts}</Typography>
          )}
        </Paper>
        {isAI && (
          <Box paddingTop={1}>
            <Button
              size="small"
              variant="outlined"
              value={message.parts}
              onClick={() => handleGenerate(message)}
            >
              Generate
            </Button>
          </Box>
        )}
      </Box>

      {!isAI && (
        <Box paddingLeft={1}>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.cloud.scenario.com/assets-transform/CJ0opxtQSe6iPUqUDcIr0Q?p=100&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2Fzc2V0cy10cmFuc2Zvcm0vQ0owb3B4dFFTZTZpUFVxVURjSXIwUT9wPTEwMCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTA0NjA3OTl9fX1dfQ__&Key-Pair-Id=K36FIAB9LE2OLR&Signature=o7KE-WcDzN3omuQ0F99NWLVKoW7k81uV6c~-YZHZWtYje3bUqHlwDMYpLuq9I53a896SPFN1AWE3gHLi7Q5dbH6lyX4P8DhMB92w5JlYf22UGxcoubreReNK6FjdeP4qWkrY0CYoMSNI-xjvJJBTPyZzK23ebnltLHEwqCf3wCneCplu4px1FMSnupGCyvCRagqjyvpkhm4eOcL2Q1fLAo-lJNTVOTAsOamGPEfL7Jct405uOaab0tZt3fysGS5ENdFC7bqhhl5xVcj1WaW~WP8TaIEvtSLGB1viEvByAlG31p98~6OESjy7QSzsD27uf-PENjhi8FGmrvoOSjK5cw__"
          />
        </Box>
      )}
    </Box>
  );
};

export default RoomChatOpenAI;
