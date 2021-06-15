import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Container = styled.div`
  position: relative;
  background: #faf9f7;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Body = styled.div`
  width: 72rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Tabs = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 20px;
  font-weight: 600;
  margin-top: -10px;

  &:hover {
    color: #0a66c2;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 23px;
  height: 23px;
`;

const useStyles = makeStyles((theme) => ({
  tabs: {
    width: "17.5%",
    maxWidth: "210px",
  },
  logoBox: {
    width: "30%",
    display: "flex",
  },
  tabHead: {
    fontWeight: 600,
    fontSize: "0.9rem",
    color: "rgba(0,0,0,0.9)",
    marginBottom: "15px",
  },
  title: {
    color: "#0a66c2",
    fontWeight: 600,
    fontSize: "1.3rem",
    position: "relative",
    top: "-3px",
  },
  logo: {
    color: "#0a66c2",
    width: "25px",
    height: "25px",
    fontWeight: 600,
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <Container>
      <Body>
        <Box className={classes.logoBox}>
          <Typography className={classes.title}>Linked</Typography>
          <LinkedInIcon className={classes.logo} />
        </Box>
        <Box className={classes.tabs}>
          <Typography className={classes.tabHead}>General</Typography>
          <Tabs>Sign Up</Tabs>
          <Tabs>Help Center</Tabs>
          <Tabs>About</Tabs>
          <Tabs>Press</Tabs>
          <Tabs>Blog</Tabs>
          <Tabs>Careers</Tabs>
          <Tabs>Developers</Tabs>
        </Box>
        <Box className={classes.tabs}>
          <Typography className={classes.tabHead}>Browse linkedIn</Typography>
          <Tabs>Learning</Tabs>
          <Tabs>Jobs</Tabs>
          <Tabs>Salary</Tabs>
          <Tabs>Mobile</Tabs>
          <Tabs>Services</Tabs>
        </Box>
        <Box className={classes.tabs}>
          <Typography className={classes.tabHead}>
            Business Solutions
          </Typography>
          <Tabs>Talent</Tabs>
          <Tabs>Marketing</Tabs>
          <Tabs>Sales</Tabs>
          <Tabs>Learning</Tabs>
        </Box>
        <Box className={classes.tabs}>
          <Typography className={classes.tabHead}>Directories</Typography>
          <Tabs>Members</Tabs>
          <Tabs>Jobs</Tabs>
          <Tabs>Companies</Tabs>
          <Tabs>Salaries</Tabs>
          <Tabs>Featured</Tabs>
          <Tabs>Learning</Tabs>
          <Tabs>Schools</Tabs>
          <Tabs>News</Tabs>
          <Tabs>News Letters</Tabs>
          <Tabs>Services</Tabs>
          <Tabs>Interview Prep</Tabs>
        </Box>
      </Body>
    </Container>
  );
};
