import { useState } from 'react';
import { 
    makeStyles, 
    AppBar, 
    Toolbar, 
    Typography, 
    InputBase, 
    Box
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import Dropdown from './Dropdown';

export const AuthNavbar = () => {
    
    const classes = useStyles();

    const [ showMeOpt, setShowMeOpt ] = useState<boolean>(false);

    const handleShowMeOpt = ()=>{
        setShowMeOpt(prev => !prev);
    }

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
                    <Box className={classes.afterLoginIcons} style={{marginLeft:'1rem'}}>
                        <LanguageOutlinedIcon />
                        <Box className={classes.title}>
                            EN
                            <ArrowDropDownIcon />
                        </Box>
                    </Box>
                    <Box className={classes.afterLoginIcons} onClick={handleShowMeOpt} style={{marginLeft:'1rem'}}>
                        <Box className={classes.userImgBox}>
                            <Image src="https://via.placeholder.com/25" />
                        </Box>
                        <Box className={classes.title}>
                            Me
                            <ArrowDropDownIcon />
                        </Box>
                    </Box>
                    <Box className={classes.afterLoginIcons}>
                        <ImportContactsOutlinedIcon />
                        My Learning
                    </Box>
                    <NavLink exact activeClassName={classes.active} className={classes.navContents} to="/">
                        <Box className={classes.afterLoginIcons}>
                            <HomeOutlinedIcon />
                            Home
                        </Box>
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
        {
            showMeOpt && <Dropdown setShowMeOpt={setShowMeOpt} />
        }
    </div>
  );
}

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 11px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        height: theme.spacing(6.5),
        background: '#fff',
        width: '100%',
        boxShadow: '0px 0px 0px 0px',
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
        margin: theme.spacing(0, 1),
        lineHeight: '20px',

        '&:hover': {
            cursor: 'pointer'
        }
    },
    userImgBox: {
        height: '22px',
        width: '22px',
        borderRadius: '11px'
    },
    title: {
        position: 'absolute',
        top: theme.spacing(3.7)
    },
    active: {
        height: '40px',
        borderBottom: '2px solid black',
    },    
    navContents: {
        width: 'auto',
        height: theme.spacing(6.5),
        alignItems: 'center',
        margin: '0 10px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        paddingTop: theme.spacing(1)
    }
}));