"use client";

import * as React from "react";
import {
  Paper,
  Container,
  Grid,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ec8b27",
  },
  margin: "18px 0px 18px 0px",
}));

interface SidebarProps {
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
  amount: number;
  currency: string;
}

export default function Sidebar(props: SidebarProps) {
  const { social, title, amount, currency } = props;

  return (
    <Grid className="funding-amount-box" item xs={12} md={4}>
      <Paper
        className="current-funding-card"
        elevation={0}
        sx={{
          p: 2,
        }}
      >
        <Box
          component="header"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
          }}
        >
          <Typography style={{ color: "grey" }}>{title}</Typography>
          <Typography variant="h4" gutterBottom style={{ color: "#ec8b27" }}>
            {`${amount.toLocaleString()} ${currency}`}
          </Typography>
          <Typography style={{ color: "grey" }}>Target</Typography>
          <Grid container xs={12}>
            <Grid item xs={10}>
              <Typography variant="h5" gutterBottom>
                171,600 THB
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" gutterBottom>
                15%
              </Typography>
            </Grid>
          </Grid>
          <BorderLinearProgress variant="determinate" value={30} />
          <Grid container>
            <Grid
              item
              xs={12}
              className="button-group-item"
              style={{ textAlign: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                className="donate-btn"
                startIcon={<FavoriteBorderIcon />}
              >
                Donate
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              className="button-group-item"
              style={{ textAlign: "center" }}
            >
              <Button
                variant="contained"
                color="success"
                size="large"
                className="add-to-cart-btn"
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mt: 3 }}
            style={{ textAlign: "center" }}
          >
            Share to friends
          </Typography>
          <Grid container>
            {social.map((network) => (
              <Grid
                item
                xs={6}
                key={network.name}
                className="button-group-item"
                style={{ textAlign: "center" }}
              >
                <Button key={network.name} style={{ border: 0, width: "70px" }}>
                  <network.icon />
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
}
