"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";
import blogMainImg from "@assets/images/blog-main-img.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom style={{ color: "grey" }}>
        project เด็กและเยาวชน อื่นๆ
      </Typography>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${blogMainImg.src})`,
          paddingBottom: "46%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="h6" gutterBottom>
        แรงงานหญิงข้ามชาติที่อยู่ใน อ.แม่สอด
        ได้รับผลกระทบจากความรุนแรงในครอบครัวไม่แตกต่างจากผู้หญิงชาติอื่นๆ
        ทั่วโลก แต่การเข้าถึงบริการต่างๆ จากภาครัฐยังเป็นสิ่งที่ท้าทาย
        โครงการนี้จึงขอสนับสนุนค่าเช่าบ้านพักชั่วคราวสำหรับแรงงานหญิงข้ามชาติและเด็ก
        8 ครอบครัวที่ถูกกระทำด้วยความรุนแรงนี้เป็นเวลา 1 ปี
        เพื่อเป็นที่พักที่ปลอดภัย เยียวยาอารมณ์ จิตใจและความมั่นคงทางการเงิน
        จนผู้หญิงและเด็กสามารถกลับคืนสู่ชุมชนได้อย่างปลอดภัย
      </Typography>
      <Divider />
      <Typography variant="h5" gutterBottom>
        Overview
      </Typography>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${blogMainImg.src})`,
          paddingBottom: "46%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}
