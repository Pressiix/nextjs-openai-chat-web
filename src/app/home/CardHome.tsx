"use client";

import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  Stack,
  Chip,
  IconButton,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const data = [
  {
    title: "บ้านพิงใจสำหรับแม่และลูกที่ถูกกระทำด้วยความรุนแรง",
    date: "Nov 12",
    description:
      "แรงงานหญิงข้ามชาติที่อยู่ใน อ.แม่สอด ได้รับผลกระทบจากความรุนแรงในครอบครัวไม่แตกต่างจากผู้หญิงชาติอื่นๆ ทั่วโลก แต่การเข้าถึงบริการต่างๆ จากภาครัฐยังเป็นสิ่งที่ท้าทาย โครงการนี้จึงขอสนับสนุนค่าเช่าบ้านพักชั่วคราวสำหรับแรงงานหญิงข้ามชาติและเด็ก 8 ครอบครัวที่ถูกกระทำด้วยความรุนแรงนี้เป็นเวลา 1 ปี เพื่อเป็นที่พักที่ปลอดภัย เยียวยาอารมณ์ จิตใจและความมั่นคงทางการเงิน จนผู้หญิงและเด็กสามารถกลับคืนสู่ชุมชนได้อย่างปลอดภัย",
    image:
      "https://taejai.com/media/projects/440054812681754265139872364155825256272.jpg.640x380_q85_crop_upscale.jpg",
  },
  {
    title:
      "อุปกรณ์การเรียนให้ศูนย์การเรียนรู้ลูกแรงงานข้ามชาติ มูลนิธิรักษ์ไทย สมุทรสาคร",
    date: "Nov 11",
    description:
      "ร่วมบริจาคเพื่อแก้ไขปัญหาสื่อการเรียนรู้และอุปกรณ์การเรียนการสอนไม่เพียงพอต่อความต้องการของนักเรียนภายในศูนย์การเรียนรู้ฯ ที่มีเด็กในความดูแลถึง 246 คน ตั้งแต่อายุ 4 - 15 ปี ให้สามารถเข้าถึงสื่อการเรียนรู้และอุปกรณ์การเรียนการสอนที่มีคุณภาพได้อย่างเท่าเทียม",
    image:
      "https://taejai.com/media/projects/164068343078857872964423509959522940640.jpg.640x380_q85_crop_upscale.jpg",
  },
  {
    title: "สอนเด็กผู้หญิงให้รู้ทันภัยและวางแผนอนาคตได้",
    date: "Nov 11",
    description:
      "กองทุนช่วยผู้เหลือผู้ป่วยมะเร็งโลหิตวิทยา เพื่อให้ได้รับการรักษาอย่างต่อเนื่อง ซึ่งสิทธิการรักษาบางกรณีจะไม่ครอบคลุมทั้งหมดกระบวนการรักษา รวมถึงผลิตสื่อเพื่อประชาสัมพันธ์และรณรงค์การบริจาคโลหิต เกล็ดเลือด และสเต็มเซลล์ จัดกิจกรรมส่งเสริมกำลังใจ ให้กับผู้ป่วยมะเร็งโลหิตวิทยา",
    image:
      "https://taejai.com/media/projects/201664197602136828446200843062964190742.jpg.640x380_q85_crop_upscale.jpg",
  },
  {
    title:
      "Fight to Alive กองระดมทุนช่วยเหลือผู้ป่วยมะเร็งโลหิตวิทยาที่ขาดทุนทรัพย์ในการรักษา",
    date: "Nov 12",
    description:
      "แรงงานหญิงข้ามชาติที่อยู่ใน อ.แม่สอด ได้รับผลกระทบจากความรุนแรงในครอบครัวไม่แตกต่างจากผู้หญิงชาติอื่นๆ ทั่วโลก แต่การเข้าถึงบริการต่างๆ จากภาครัฐยังเป็นสิ่งที่ท้าทาย โครงการนี้จึงขอสนับสนุนค่าเช่าบ้านพักชั่วคราวสำหรับแรงงานหญิงข้ามชาติและเด็ก 8 ครอบครัวที่ถูกกระทำด้วยความรุนแรงนี้เป็นเวลา 1 ปี เพื่อเป็นที่พักที่ปลอดภัย เยียวยาอารมณ์ จิตใจและความมั่นคงทางการเงิน จนผู้หญิงและเด็กสามารถกลับคืนสู่ชุมชนได้อย่างปลอดภัย",
    image:
      "https://taejai.com/media/projects/440054812681754265139872364155825256272.jpg.640x380_q85_crop_upscale.jpg",
  },
  {
    title:
      "รักษาฟันฟรีให้เด็กในพื้นที่ห่างไกลด้วยโครงการหน่วยรถทันตกรรมเคลื่อนที่ฯ",
    date: "Nov 11",
    description:
      "ร่วมสมทบทุนการออกหน่วยรถทันตกรรมเคลื่อนที่ เพื่อตรวจและรักษาฟันฟรี ให้เด็กด้อยโอกาส 1,200 คน ที่อยู่ในพื้นที่ห่างไกลทั่วประเทศ",
    image:
      "https://taejai.com/media/projects/252943039325998152246041345334474142322.jpg.640x380_q85_crop_upscale.jpg",
  },
  {
    title: "เทใจ ปันอาหารให้น้องหมา-แมว ที่มูลนิธิอนุรักษ์ช้างและสิ่งแวดล้อม",
    date: "Nov 11",
    description:
      "เชิญชวนทุกท่านมาร่วมกับเทใจ ปันอาหารเพื่อเลี้ยงดูน้องหมา-แมว กว่า 3,000 ชีวิต ซึ่งทางมูลนิธิอนุรักษ์ช้างและสิ่งแวดล้อมได้ให้การช่วยเหลือ จากการที่พวกเขาถูกทอดทิ้ง ทารุณกรรม จากฟาร์มเถื่อน รวมถึงสัตว์ที่เจ้าของเสียชีวิต ให้น้องได้กินอิ่ม มีสุขภาพและสวัสดิภาพชีวิตที่ดี เพราะหัวใจสำคัญในการดูแลสุขภาพ น้องหมาน้องแมว นอกจากการดูแลป้องกันโรค อาหารที่มีโภชนาการครบถ้วนก็เป็นสิ่งสำคัญทำให้ในแต่ละเดือนมูลนิธิ ฯ ต้องแบกรับภาระค่าใช้จ่ายเป็นค่าอาหารจำนวนมหาศาล กว่าเดือนละ 600,000 บาท",
    image:
      "https://taejai.com/media/projects/359480053712075481498713308561302534040.jpg.640x380_q85_crop_upscale.jpg",
  },
];

const CardHome = () => {
  return (
    <Grid container justifyContent="center" spacing={2} direction="row">
      {data.map((item, index) => (
        <>
          <Box padding={1} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 170 }} image={item.image} />
              <Stack direction="row" paddingTop={1} paddingLeft={2} spacing={1}>
                <Chip label="รายเดือน" color="primary" variant="outlined" />
                <Chip label="เด็กและเยาวชน" variant="outlined" />
              </Stack>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  variant="h5"
                  component="div"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  alignSelf: "stretch",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <Button variant="contained" color="secondary">
                  ร่วมบริจาค
                </Button>
                <IconButton color="success" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </>
      ))}
    </Grid>
  );
};

export default CardHome;
