import React from 'react'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SubjectIcon from '@material-ui/icons/Subject';
import BallotIcon from '@material-ui/icons/Ballot';
import { AppBar, Tabs, Tab , Box, Typography, makeStyles, Theme } from '@material-ui/core';
import  styled from "styled-components";
import OverView from "./OverView";
import QuestionAnswer from "./QuestionAnswer";
import Transcript from "./Transcript";
import NoteBook from "./NoteBook";


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
  function TabPanel(props: TabPanelProps) {
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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
    //   backgroundColor: theme.palette.background.paper,
      opacity: 1
        },
        app:{
          boxShadow: "0px 0px 0px 0px",
          // height: "2.5rem"  
        }
        ,
        tabs:{
            background: "#ffffff",
            boxShadow:"none",
            height:"4rem"
        },
        tab:{
          display: "flex",
          flexDirection:"column"
        }
  }));
export default function CourseDescription({id}:any) {

    const classes = useStyles();
  const [value, setValue] = React.useState(0);
    // console.log(value)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
      };
    return (
        <Section className={classes.root} >
            <TopBar>

            <AppBar className={classes.app} position="static">
  <Tabs  value={value}
    onChange={handleChange}
    variant="fullWidth"
    className={classes.tabs}
    indicatorColor="primary"
    textColor="primary"
    aria-label="icon label tabs example">
    <Tab className={classes.tab}  icon={<BallotIcon />} label="OverView"  {...a11yProps(0)} />
    <Tab icon={<QuestionAnswerIcon />}label="Q&A"  {...a11yProps(1)} />
    <Tab icon={<MenuBookIcon />}label="Notebook" {...a11yProps(2)} />
    <Tab icon={<SubjectIcon />} label="Transcript" {...a11yProps(2)} />
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
  <OverView  id={id}/>
</TabPanel>
<TabPanel value={value} index={1}>
  <QuestionAnswer id={id} />
</TabPanel>
<TabPanel value={value} index={2}>
  <NoteBook />
</TabPanel>
<TabPanel value={value} index={3}>
  <Transcript />
</TabPanel>
    </TopBar>
    
        </Section>
    )
}



const Section = styled.section`
    display: grid;
    width:73rem;
    grid-template-rows: auto auto ;
    margin:auto;
    /* height: 100vh; */
`;

const TopBar = styled.div`
    width: 100%;
    /* border:1px solid black ; */
    /* height: 50px; */
`

const Content = styled.section`
    display: grid;
    grid-template-columns: 65% 35%;
    margin-top: 5px;
    height:70rem;
`

const SideBar = styled.aside`
    border-left:0.2px solid black;
`

