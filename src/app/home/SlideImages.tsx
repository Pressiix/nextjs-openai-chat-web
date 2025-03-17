import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@mui/material";

const data = [
  {
    url: "https://taejai.com/media/projects/359480053712075481498713308561302534040.jpg.640x380_q85_crop_upscale.jpg",
  },
  {
    url: "https://taejai.com/media/projects/164068343078857872964423509959522940640.jpg.640x380_q85_crop_upscale.jpg",
  },
  {
    url: "https://taejai.com/media/projects/201664197602136828446200843062964190742.jpg.640x380_q85_crop_upscale.jpg",
  },
];

const SlideImages = () => {
  return (
    <>
      <Container style={{ paddingBottom: "30px" }}>
        <Swiper pagination={true} modules={[Pagination]}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.url} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};
export default SlideImages;
