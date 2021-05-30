import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const ImgBox = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 15px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

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
        border-
    }
`;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        height: theme.spacing(8),
        background: '#fff',
        width: '100%'
    },
    toolBar: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 23)
    },
    logo: {
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        minWidth: '200px',
    },
    learnTxt: {
        fontSize: '1rem',
        fontWeight: 500,
        marginTop: '5px'
    },
    search: {
        borderRadius: '5px',
        backgroundColor: '#ebeff1',
        width: '57%',
        height: '40px',
        display: 'flex',
        cursor: 'pointer'
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        position: 'relative',
        color: '#94a2ac',
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: '1px solid #94a2ac'
    },
    TSBtns: {
        display: 'flex'
    }
}));

export const Navbar = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar variant="dense" className={classes.toolBar}>
                <Box className={classes.logo}>
                    <ImgBox>
                        <Image src='https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1622137765~hmac=ba6f199a1f7f6a4d7b381b5f6be8e09d' />
                    </ImgBox>
                    <Typography className={classes.learnTxt}>
                        L E A R N I N G
                    </Typography>
                </Box>
                <Box className={classes.search}>
                    <LearnBtn>Learning <ArrowDropDownIcon /></LearnBtn>
                    <InputBase
                        placeholder="Search skills, subjects or software"
                        fullWidth
                    />
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                </Box>
                <Box className= {classes.TSBtns}>
                    <TrialBtn>Start free trial</TrialBtn>
                    <SignInBtn>Sign in</SignInBtn>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  );
}
