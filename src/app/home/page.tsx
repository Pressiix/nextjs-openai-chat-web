"use client";

import React from "react";
import CardHome from "./CardHome";
import SlideImages from "./SlideImages";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <SlideImages />
      <CardHome />
    </Container>
  );
};

export default HomePage;
