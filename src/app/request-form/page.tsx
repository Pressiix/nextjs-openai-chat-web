"use client";
import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
} from "@mui/material";
import CreateProjectForm from "./CreateProjectForm";
import { useState } from "react";
import DetailProjectForm from "./DetailProjectForm";
import ChatModal from "@/components/ChatModal";
import Page from "@/components/Page";
import ProjectAssistantChat, {
  MessageProps,
  FillInTopic,
} from "@/components/ProjectAssistantChat";

const steps = [
  "ข้อมูลโครงการ",
  "รายละเอียดโครงการ",
  "รายละเอียดการเงิน",
  "สุรปโครงการ",
];

const RequestForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [projectDescription, setProjectDescription] = useState<
    string | undefined
  >();

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CreateProjectForm />;
      case 1:
        return <DetailProjectForm descriptionMsg={projectDescription} />;
      case 2:
        return;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onMessageListChange = (list: MessageProps[]) => {
    setMessages(list);
  };

  const onAutoGenClick = (topic: FillInTopic, msgIndex: number) => {
    setProjectDescription(messages[msgIndex]?.parts);
  };

  return (
    <Page className="form-page">
      <Container component="main" style={{ maxWidth: "unset" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
        {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
          บันทึก
        </Button>
      </Box> */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {activeStep === steps.length - 1 ? "Place order" : "Next"}
          </Button>
        </Box>
        <ChatModal>
          <ProjectAssistantChat
            onMessageListChange={onMessageListChange}
            onAutoGenClick={onAutoGenClick}
          />
        </ChatModal>
      </Container>
    </Page>
  );
};
export default RequestForm;
