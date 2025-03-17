import CreateUserInfo from "./CreateUserInfo";
import { Container } from "@mui/material";
import RoomChatOpenAI from "../chat-open-ai/RoomChatOpenAI";
import { useState } from "react";
import ChatModal from "@/components/ChatModal";

const Profile = () => {
  const [value, setValue] = useState("");
  const handleValueChange = (value: any) => {
    setValue(value);
  };

  console.log(value);
  return (
    <Container>
      <CreateUserInfo onValueChange={value} />
      <ChatModal>
        <RoomChatOpenAI onValueChange={handleValueChange} />
      </ChatModal>
    </Container>
  );
};
export default Profile;
