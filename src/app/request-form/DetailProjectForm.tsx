import {
  Typography,
  TextField,
  Grid,
  Box,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import { CloudUpload } from "@mui/icons-material";
import TextFiledDatePicker from "@/components/TextFiledDateRangePicker";
import { MessageProps } from "@/components/ProjectAssistantChat";

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

interface DetailProjectFormProps {
  descriptionMsg?: string;
}

const DetailProjectForm = ({ descriptionMsg = "" }: DetailProjectFormProps) => {
  const [fileName, setFileName] = useState<string>("");
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]; // Access the first file selected
    console.log("Uploaded file name:", file.name);
    setFileName(file.name);
  };
  const [value, setValue] = useState("country");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Your project title
              </Typography>
              <TextField
                required
                id="firstName"
                name="firstName"
                label=""
                fullWidth
                autoComplete="given-name"
                variant="outlined"
              />
              <Box paddingTop={2}>
                <Typography variant="h6" gutterBottom>
                  Project Type
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Art" />
                      <FormControlLabel control={<Checkbox />} label="Comics" />
                      <FormControlLabel control={<Checkbox />} label="Crafts" />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Film & Video"
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Dance
                        "
                      />
                      <FormControlLabel control={<Checkbox />} label="สัตว์" />
                      <FormControlLabel control={<Checkbox />} label="Design" />
                    </FormGroup>
                  </Grid>
                </Grid>
              </Box>
              <Box paddingTop={2}>
                <Typography variant="h6" gutterBottom>
                  Uload Image
                </Typography>
                <Typography variant="body2" gutterBottom>
                  file supported jpg, png, gif size maximum 1 MB , size 1200x630
                  px
                </Typography>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUpload />}
                >
                  Upload Document
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
                      No uploaded image
                    </Alert>
                  </Box>
                )}
              </Box>
              <Box paddingTop={2}>
                <Typography variant="h6" gutterBottom>
                  Project Description
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Describe about your project
                </Typography>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label=""
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  multiline
                  value={descriptionMsg}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography variant="h6" gutterBottom>
            Time Period
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Start At and End At
              </Typography>
              <TextFiledDatePicker />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography variant="h6" gutterBottom>
            Location
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="country"
                    control={<Radio />}
                    label="ทั่วประเทศ"
                  />
                  <FormControlLabel
                    value="specifyArea"
                    control={<Radio />}
                    label="ระบุพื้นที่"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};
export default DetailProjectForm;
