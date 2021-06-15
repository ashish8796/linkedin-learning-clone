import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory, useLocation } from "react-router-dom";

const Cont = styled.div`
  position: relative;
  width: 100%;
  min-height: 50px;
  background: #fff;
`;

const Container = styled.div`
  position: relative;
  min-height: 50px;
  width: 72rem;
  margin: auto;
  display: flex;
  align-items: center;
  padding-top: 10px;
  justify-content: space-between;
`;

const Details = styled.p`
  color: #666;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  alignitems: center;

  &:hover {
    color: #0a66c2;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const useStyles = makeStyles((theme) => ({
  linkedIn: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    top: "-5px",
  },
  liText: {
    fontWeight: 600,
    fontSize: "0.8rem",
  },
  logo: {
    fontSize: "1rem",
  },
  copy: {
    marginLeft: "10px",
    fontSize: "0.8rem",
    position: "relative",
    top: "5px",
  },
  expIcon: {
    fontSize: "1rem",
    marginLeft: "2px",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const handleClickNewInstructor = (): void => {
    history.push("/instructor/new");
  };

  return (
    <Cont>
      <Container>
        <Box className={classes.linkedIn}>
          <Typography className={classes.liText}>Linked</Typography>
          <LinkedInIcon className={classes.logo} />
          <p className={classes.copy}>© 2021</p>
        </Box>
        <Details>About</Details>
        {location.pathname !== "/instructor/new" && (
          <Details onClick={handleClickNewInstructor}>
            Become an Instructor
          </Details>
        )}

        <Details>Accessibility</Details>
        <Details>User Agreement</Details>
        <Details>Privacy Policy</Details>
        <Details>Cookie Policy</Details>
        <Details>Copyright Policy</Details>
        <Details>Brand Policy</Details>
        <Details>Guest Controls</Details>
        <Details>Community Guidelines</Details>
        <Details>
          Language <ExpandMoreIcon className={classes.expIcon} />
        </Details>
      </Container>
    </Cont>
  );
};
