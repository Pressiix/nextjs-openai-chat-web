"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Divider,
} from "@mui/material";
import {
  Twitter,
  Facebook,
  LinkedIn,
  YouTube,
  Pinterest,
  Instagram,
  GitHub,
  Telegram,
  KeyboardArrowDown,
} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

interface MessageProps {
  id: number;
  role: string;
  parts: string;
}

const location = [
  {
    value: "Aland Islands",
    label: "Aland Islands",
  },
  {
    value: "Thailand",
    label: "Thailand",
  },
];

const onTheWeb = [
  {
    icon: Twitter,
    label: "Twitter",
  },
  {
    icon: Facebook,
    label: "Facebook",
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
  },
  {
    icon: YouTube,
    label: "YouTube",
  },
  {
    icon: Pinterest,
    label: "Pinterest",
  },
  {
    icon: Instagram,
    label: "Instagram",
  },
  {
    icon: GitHub,
    label: "GitHub",
  },
];

const CreateUserInfo = ({ onValueChange }: { onValueChange: any }) => {
  const [limit, setLimit] = useState(5);

  const showMoreDocuments = () => {
    setLimit(limit + 3);
  };

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [aboutME, setAboutME] = useState<MessageProps[]>([]);
  const [experience, setExperience] = useState<MessageProps[]>([]);
  const [skill, setSkill] = useState<MessageProps[]>([]);
  const [model, setModel] = useState<ChatOpenAI<ChatOpenAICallOptions>>();

  const handleSend = (topic: string) => {
    if (input.trim() !== "") {
      const messageItemFromUser = [
        {
          id: messages.length ? messages[messages.length - 1]?.id + 1 : 0,
          parts: input,
          role: "user",
        },
      ];
      setMessages([...messages, ...messageItemFromUser]);

      const messageTemplates: { [key: string]: string } = {
        AboutME: "Please think about my with {topic}",
        Experience: "Please provide a experience with {topic}",
        Skill: "Please provide a skill list that relate to {topic}.",
      };

      sendMessageToAI(input, messageTemplates[topic], topic);
    }
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const openAIModel = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });
    setModel(openAIModel);
  }, []);

  const sendMessageToAI = async (
    msg: string,
    promptMessage: string,
    topic: string
  ) => {
    const prompt = PromptTemplate.fromTemplate(promptMessage);
    if (model) {
      const chain = prompt.pipe(model);
      const result = await chain.invoke({ topic: msg });

      const messageItemFromUser = [
        {
          id: messages.length ? messages[messages.length - 1]?.id + 1 : 0,
          parts: result.content.toString(),
          role: "model",
        },
      ];
      switch (topic) {
        case "AboutME":
          setAboutME([...messages, ...messageItemFromUser]);
          break;
        case "Experience":
          setExperience([...messages, ...messageItemFromUser]);
          break;
        case "Skill":
          setSkill([...messages, ...messageItemFromUser]);
          break;

        default:
          break;
      }
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                container
                paddingTop={3}
                xs={12}
                sm={4}
                direction="column"
                alignItems="center"
                justifyContent="start"
              >
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  BASIC INFORMATION
                </Typography>
                <Box paddingTop={3}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn.cloud.scenario.com/assets-transform/AFxPiZFvTvKCAez7SgN8qg?p=100&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uY2xvdWQuc2NlbmFyaW8uY29tL2Fzc2V0cy10cmFuc2Zvcm0vQUZ4UGlaRnZUdktDQWV6N1NnTjhxZz9wPTEwMCoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTA0NjA3OTl9fX1dfQ__&Key-Pair-Id=K36FIAB9LE2OLR&Signature=c3PYIzG7sq69ZGYOPHUGEqZoc4srw5PeZKExGRcsmcngjNc1LHV3yITFAhMUdbjmZGTmoMuJ~UiC3qU4nIJ-Q4Wg1x3yy129eJ61hoELDF6aU27jVRrfT3w3B4Ti-AvHlQLt3e7IndAhKPpWy0C1rKT40xa4fFD2ocmJy9mBTFIVWzkKsD4nBzwJ3J~aEyGDtTePNu8fjRzCG-8IVyiUgJrSr82UB-KSd3DIcm68yNc8zD-0DIadZTemElFtZ3x-5n60INQ5ktx3MvfM3RC3J4FCMhX-EpDsIRi8S3DtADCc2lwmS3d-cgMy6ZNruiZIOysDuNWyhlfID-pPtaL~2A__"
                    sx={{
                      width: 164,
                      height: 164,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="occupation"
                      placeholder="Ex: Senior Design, Art Director, Student"
                      name="occupation"
                      label="Occupation"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                      value={input}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="company"
                      name="company"
                      label="Company"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="location"
                      select
                      label="Location"
                      defaultValue="Thailand"
                      fullWidth
                      variant="outlined"
                    >
                      {location.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="websiteURL"
                      name="websiteURL"
                      label="Website URL"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      {/* <Box paddingTop={5}>
        <Card>
          <CardContent>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Skills
                  </Typography>
                  <TextField
                    id="SkillDes"
                    name="SkillDes"
                    multiline
                    fullWidth
                    variant="outlined"
                    defaultValue={skill[skill.length - 1]?.parts ?? ""}
                  />
                </Grid>
              </Grid>
              <Box paddingTop={2}>
                <Button
                  onClick={() => handleSend("Skill")}
                  variant="outlined"
                  endIcon={<SendIcon />}
                  value={input}
                >
                  Generate
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box paddingTop={5}>
        <Card>
          <CardContent>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Experience
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="experienceDes"
                    name="experienceDes"
                    multiline
                    fullWidth
                    variant="outlined"
                    defaultValue={
                      experience[experience.length - 1]?.parts ?? ""
                    }
                  />
                </Grid>
              </Grid>
              <Box paddingTop={2}>
                <Button
                  onClick={() => handleSend("Experience")}
                  variant="outlined"
                  endIcon={<SendIcon />}
                  value={input}
                >
                  Generate
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box> */}
      <Box paddingTop={5}>
        <Card>
          <CardContent>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                ABOUT ME
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="aboutDes"
                    name="aboutDes"
                    multiline
                    fullWidth
                    variant="outlined"
                    defaultValue={onValueChange}
                  />
                </Grid>
              </Grid>
              {/* <Box paddingTop={2}>
                <Button
                  onClick={() => handleSend("AboutME")}
                  variant="outlined"
                  endIcon={<SendIcon />}
                  value={input}
                >
                  Generate
                </Button>
              </Box> */}
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box paddingTop={5}>
        <Card>
          <CardContent>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                ON THE WEB
              </Typography>
              <List
                sx={{
                  width: "100%",
                  paddingX: 2,
                }}
              >
                {onTheWeb.slice(0, limit).map((value, index) => (
                  <>
                    <ListItem
                      key={`ListItem-${index}`}
                      disableGutters
                      secondaryAction={
                        <Button key={`Button-${index}`}>Link</Button>
                      }
                    >
                      <ListItemIcon key={`ListItemIcon-${index}`}>
                        <value.icon key={`icon-${index}`} />
                      </ListItemIcon>
                      <ListItemText
                        key={`ListItemText-${index}`}
                        primary={value.label}
                      />
                    </ListItem>
                    <Divider
                      key={`Divider-${index}`}
                      variant="fullWidth"
                      component="li"
                    />
                  </>
                ))}
              </List>
              <Grid container item xs={12}>
                <Button
                  endIcon={<KeyboardArrowDown />}
                  onClick={showMoreDocuments}
                >
                  View More
                </Button>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CreateUserInfo;
