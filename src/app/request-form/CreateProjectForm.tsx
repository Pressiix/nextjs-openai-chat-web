import {
  Typography,
  TextField,
  Grid,
  Box,
  Paper,
  Button,
  Alert,
} from "@mui/material";
import * as React from "react";
import { AddCircleOutline, CloudUpload } from "@mui/icons-material";
import styled from "@emotion/styled";
import FormEditor from "@/components/FormEditor";

import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateProjectForm = () => {
  const [fileName, setFileName] = useState<string>("");
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]; // Access the first file selected
    console.log("Uploaded file name:", file.name);
    setFileName(file.name);
  };
  return (
    <>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography variant="h6" gutterBottom>
            ใบสมัครโครงการ
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="ชื่อรับผิดชอบโครงการ"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="ที่อยู่ที่ติดต่อได้"
                fullWidth
                autoComplete="shipping address-line1"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="เบอร์ติดต่อ"
                fullWidth
                autoComplete="shipping address-level2"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="อีเมล์"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 3 } }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography variant="h6" gutterBottom>
            ทีมงานคนที่ 1
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="ชื่อที่มงานคนที่ 1"
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="เบอร์ติดต่อ"
                fullWidth
                autoComplete="shipping address-level2"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="อีเมล์"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Box paddingTop={2}>
            <Button variant="outlined" startIcon={<AddCircleOutline />}>
              เพิ่มทีมงาน
            </Button>
          </Box>
        </Box>
      </Paper>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 3 } }}
      >
        <Typography variant="h6">แนะนำตัวท่าน และประสบการณ์ของท่าน</Typography>
        <Typography variant="body2" gutterBottom>
          แนะนำตัวว่าท่าน (และทีมงาน) เป็นใคร
          และแบ่งปันประสบการณ์ทำงานเพื่อสังคมของท่าน
        </Typography>
        <FormEditor />
      </Paper>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 1, md: 3 } }}
      >
        <Typography variant="h6">อัพโหลดเอกสาร</Typography>
        <Typography variant="body2" gutterBottom>
          รองรับไฟล์นามสกุล .pdf, .jpg, .jpeg, .png และขนาดไฟล์ไม่เกิน 1.5MB
        </Typography>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUpload />}
        >
          อัพโหลดเอกสาร
          <VisuallyHiddenInput
            onChange={(e) => handleFileUpload(e)}
            type="file"
          />
        </Button>
        {fileName != "" ? (
          <Typography paddingTop={2} variant="body2" gutterBottom>
            {fileName}
          </Typography>
        ) : (
          <Box paddingTop={2}>
            <Alert variant="outlined" severity="error">
              ยังไม่ได้อัพโหลดเอกสาร
            </Alert>
          </Box>
        )}
      </Paper>
    </>
  );
};

export default CreateProjectForm;
