"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Main from "./Main";
import Sidebar from "./Sidebar";
import post1 from "./blog-post-1.md";
import Page from "@/components/Page";
import { Card, CardContent, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const posts = [post1];

const sidebar = {
  title: "Current donation amount",
  amount: 24929,
  currency: "THB",
  social: [
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Blog() {
  return (
    <Page>
      <Container maxWidth="lg" className="blog-content-container">
        <Grid container spacing={4}></Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main
            title="บ้านพิงใจสำหรับแม่และลูกที่ถูกกระทำด้วยความรุนแรง"
            posts={posts}
          />
          <Sidebar
            title={sidebar.title}
            amount={sidebar.amount}
            social={sidebar.social}
            currency={sidebar.currency}
          />
        </Grid>
        <div style={{ backgroundColor: "#ffffff", padding: "20px" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h5"
                color="text.primary"
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                }}
              >
                บริจาคให้
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                  paddingBottom: "40px",
                }}
              >
                บ้านพิงใจสำหรับแม่และลูกที่ถูกกระทำด้วยความรุนแรง
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={4}>
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h5"
                        color="text.primary"
                      >
                        2,000
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        บาท
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
                <Button
                  variant="contained"
                  size="large"
                  className="donate-btn"
                  startIcon={<FavoriteBorderIcon />}
                >
                  Donate
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  className="add-to-cart-btn"
                  startIcon={<ShoppingCartOutlinedIcon />}
                >
                  Add to Cart
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
            <Grid item xs={12}>
              <Typography component="h2" variant="h6" color="text.primary">
                ช่องทางการชำระเงิน
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={4}>
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      {tier.title}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              backgroundColor: "#f4f4f4",
            }}
          >
            <Grid item xs={12}>
              <Typography style={{ padding: "20px" }}>
                ชำระผ่านการ สแกน/อัพโหลด QR code ด้วย mobile banking application
                ของ ธนาคารไทยพานิชย์ ธนาคารทหารไทยธนชาต ธนาคารกรุงไทย
                ธนาคารกรุงเทพ ธนาคารกรุงศรี ธนาคารกสิกร ธนาคารออมสิน
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Page>
  );
}
