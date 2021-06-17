import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllData } from "../store/app/action";

export const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [ searchInp, setSerchInp ] = useState<string>("");

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>{
    const value = e.target.value;
    setSerchInp(value);
  }

  const handleSearch: React.KeyboardEventHandler<HTMLDivElement> = (e) =>{
    if(e.key === 'Enter'){
      dispatch(getAllData(searchInp));
      history.push(`/learnings/${searchInp}`)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolBar}>
          <Box className={classes.logo} onClick={handleLogoClick}>
            <LinkedInIcon className={classes.icon} />
            <Typography className={classes.learnTxt}>
              L E A R N I N G
            </Typography>
          </Box>
          <Box className={classes.search}>
            <LearnBtn>
              Learning <ArrowDropDownIcon />
            </LearnBtn>
            <InputBase
              placeholder="Search skills, subjects or software"
              fullWidth
              onChange= {handleChange}
              onKeyPress={handleSearch}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </Box>
          <Box className={classes.TSBtns}>
            <TrialBtn>Start free trial</TrialBtn>
            <Link to="/learning-login">
              <SignInBtn>Sign in</SignInBtn>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const LearnBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 6px 0 12px;
  cursor: pointer;
  font-size: 1rem;
  color: #686b6b;
  border: none;
  outline: none;
  border-right: 1px solid #94a2ac;
  margin-right: 10px;
  border-radius: 5px 0 0 5px;
  background: inherit;
`;

const TrialBtn = styled.button`
  position: relative;
  width: 121px;
  height: 40px;
  font-size: 1rem;
  border: none;
  outline: none;
  margin-left: 30px;
  background: none;
  padding: 0 12px;
  color: #766684;

  &:hover {
    broder-radius: 5px;
    background: #ebebeb;
    cursor: pointer;
    color: black;
  }
`;

const SignInBtn = styled.button`
  position: relative;
  height: 40px;
  min-width: 100px;
  font-size: 1rem;
  color: #0073b1;
  border: 1px solid #0073b1;
  outline: none;
  background: #fff;
  border-radius: 20px;
  font-weight: 600;
  padding: 0 24px;
  margin-left: 30px;

  &:hover {
    border: 3px solid #0073b1;
    cursor: pointer;
    background: #eaf4fe;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: theme.spacing(8),
    background: "#fff",
    width: "100%",
    boxShadow: "0px 0px 0px 0px",
  },
  toolBar: {
    width: "74rem",
    height: "100%",
    display: "flex",
    alignItems: "center",
    margin: "auto",
  },
  logo: {
    color: "black",
    display: "flex",
    alignItems: "center",
    minWidth: "200px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  icon: {
    color: "#0a66c2",
    height: "2rem",
    width: "2rem",
  },
  learnTxt: {
    fontSize: "1rem",
    fontWeight: 500,
    marginTop: "5px",
  },
  search: {
    borderRadius: "5px",
    backgroundColor: "#ebeff1",
    width: "57%",
    height: "40px",
    display: "flex",
    cursor: "pointer",
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    position: "relative",
    color: "#94a2ac",
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "1px solid #94a2ac",
  },
  TSBtns: {
    display: "flex",
  },
}));