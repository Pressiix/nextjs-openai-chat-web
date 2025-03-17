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
import { OpenAIAssistantRunnable } from "langchain/experimental/openai_assistant";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { IconButton } from "@mui/material";

export interface MessageProps {
  id: number;
  role: string;
  parts: string;
}

export enum FillInTopic {
  DESCRIPTION = "description",
}

interface RoomChatProps {
  onMessageListChange: (messageList: MessageProps[]) => void;
  onAutoGenClick: (topic: FillInTopic, messageIndex: number) => void;
}

const ProjectAssistantChat = ({
  onMessageListChange,
  onAutoGenClick,
}: RoomChatProps) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [chatHistory, setChatHistory] = useState<[string, string][]>([]);
  const [projectTitle, setProjectTitle] = useState<string>("");

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

  const onAutoFillClick = (topic: FillInTopic, messageIndex: number) => {
    switch (topic) {
      case FillInTopic.DESCRIPTION:
        break;
      default:
        break;
    }

    onAutoGenClick(topic, messageIndex);
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const lastMessageItem = messages[messages.length - 1];
    if (lastMessageItem?.parts && lastMessageItem?.role === "user") {
      sendMessageToAI(lastMessageItem.parts);
    }

    onMessageListChange(messages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  const assistant = new OpenAIAssistantRunnable({
    clientOptions: {
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    },
    assistantId: process.env.PROJECT_ASSISTANT_ID ?? "",
    asAgent: true,
  });

  const sendMessageToAI = async (msg: string, topic?: FillInTopic) => {
    const result: any = await assistant.invoke({
      content: msg,
    });

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
    <Box
      className="chat-room"
      sx={{ height: "46vh", display: "flex", flexDirection: "column" }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message, index) => (
          <Message
            messageIndex={index}
            key={message.id}
            message={message}
            onAutoFillClick={onAutoFillClick}
          />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className="chat-input-container"
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
  messageIndex,
  message,
  onAutoFillClick,
}: {
  messageIndex: number;
  message: MessageProps;
  onAutoFillClick: (topic: FillInTopic, messageIndex: number) => void;
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
            src="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg"
          />
        </Box>
      )}
      <Paper
        variant="outlined"
        sx={{
          p: 1,
        }}
      >
        <Typography variant="body1" sx={{ width: "100%", fontSize: "12px" }}>
          {message.parts}
        </Typography>
      </Paper>
      {isAI && (
        <IconButton
          onClick={() => onAutoFillClick(FillInTopic.DESCRIPTION, messageIndex)}
          color="primary"
        >
          <PlayCircleFilledIcon style={{ width: "20px", height: "20px" }} />
        </IconButton>
      )}
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

export default ProjectAssistantChat;
