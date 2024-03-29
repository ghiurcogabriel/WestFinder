import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grow from "@mui/material/Grow";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import "./MUIStyle.css";

export const SelectDropdown = ({ sizes }) => {
  const [size, setSize] = useState("");
  const handleChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel style={{ paddingRight: "38px" }}>Select Size</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={size}
          onChange={handleChange}
          // autoWidth
          label="Size"
          style={{ paddingRight: "38px" }}
        >
          <MenuItem value="" key={2}>
            <em>None</em>
          </MenuItem>
          {sizes?.size?.map((size, i) => (
            <MenuItem key={i} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const MainDesc = ({ maindesc }) => {
  const [checked] = useState(true);
  return (
    <Box sx={{ width: "100%" }}>
      <Grow
        in={checked}
        style={{ transformOrigin: "1 1 0" }}
        {...(checked ? { timeout: 3000 } : {})}
      >
        <Stack spacing={1}>
          {maindesc?.mainDesc?.map((md, i) => (
            <Item key={i} id="mui-md-description">
              {md}
            </Item>
          ))}
        </Stack>
      </Grow>
    </Box>
  );
};

export const Description = ({ description }) => {
  const [checked] = useState(true);
  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "1 1 0" }}
      {...(checked ? { timeout: 4000 } : {})}
    >
      <Container maxWidth="xl" className="mui-desc-container">
        <Box sx={{ bgcolor: "#cfe8fc" }} className="mui-box-description">
          {description?.description}
        </Box>
      </Container>
    </Grow>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TabsData = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomStyle = {
    fontWeight: "bold",
    fontSize: "18px",
  };

  // if(!tabs?.parameters) {
  //   return (
  //     <div>No data found!</div>
  //   )
  // }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Activities" {...a11yProps(3)} style={CustomStyle} />
          <Tab label="Technology" {...a11yProps(1)} style={CustomStyle} />
          <Tab label="Season" {...a11yProps(2)} style={CustomStyle} />
          <Tab label="Parameters" {...a11yProps(0)} style={CustomStyle} />
        </Tabs>
      </Box>

      {tabs?.activities && (
        <TabPanel value={value} index={0}>
          {tabs?.activities}
        </TabPanel>
      )}
      {tabs?.technology && (
        <TabPanel value={value} index={1}>
          {tabs?.technology}
        </TabPanel>
      )}
      {tabs?.season && (
        <TabPanel value={value} index={2}>
          {tabs?.season}
        </TabPanel>
      )}
      {tabs?.parameters && tabs?.parameters.map((param, i) =>(
        <TabPanel value={value} index={3}>
          <p key={i}>{param}</p>
        </TabPanel>
      ))}
    </Box>
  );
};

export const Colors = ({ color }) => {
  return (
    <div className="product-color">
      {color?.colors?.map((color, i) => (
        <div
          value={color}
          key={i}
          style={{
            backgroundColor: `${color}`,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
};
