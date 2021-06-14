import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

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

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        height: theme.spacing(8),
        background: '#fff',
        width: '100%',
        boxShadow: '0px 0px 0px 0px'
    },
    toolBar: {
        width: '74rem',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
    },
    logo: {
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        minWidth: '200px',
    },
    icon: {
        color: '#0a66c2',
        height: '2rem',
        width: '2rem'
    },
    learnTxt: {
        fontSize: '1rem',
        fontWeight: 600,
        marginTop: '5px'
    },
    search: {
        borderRadius: '5px',
        backgroundColor: '#ebeff1',
        width: '30%',
        height: '35px',
        display: 'flex',
        cursor: 'pointer',
        padding: theme.spacing(0, 1)
    },
    searchIcon: {
        position: 'relative',
        color: '#94a2ac',
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: theme.spacing(1)
    },
    TSBtns: {
        display: 'flex',
        color: '#000',
        fontWeight: 400,
        flexGrow: 2,
        flexDirection: 'row-reverse',
        fontSize: '0.7rem',
        alignItems: 'center'
    },
    afterLoginIcons: {
        display: 'flex',
        height: '2.5rem',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: theme.spacing(0, 1),
        lineHeight: '12px'
    }
}));

export const AuthNavbar = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar variant="dense" className={classes.toolBar}>
                <Box className={classes.logo}>
                    <LinkedInIcon className={classes.icon} />
                    <Typography className={classes.learnTxt}>
                        L E A R N I N G
                    </Typography>
                </Box>
                <Box className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search skills, subjects or software"
                        fullWidth
                    />
                </Box>
                <Box className= {classes.TSBtns}>
                    <Box className={classes.afterLoginIcons}>
                        <LanguageOutlinedIcon />
                        <Box>
                            EN
                            <ArrowDropDownIcon />
                        </Box>
                    </Box>
                    <Box className={classes.afterLoginIcons}>
                        <Box>

                        </Box>
                        <Box>
                            Me
                            <ArrowDropDownIcon />
                        </Box>
                    </Box>
                    <Box className={classes.afterLoginIcons}>
                        <ImportContactsOutlinedIcon />
                        My Learning
                    </Box>
                    <NavLink to="/">
                        <Box className={classes.afterLoginIcons}>
                            <HomeOutlinedIcon />
                            Home
                        </Box>
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  );
}