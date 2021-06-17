import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button, Box, AppBar, Tabs, Tab } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import { AfterLoginSliderComp } from './AfterLoginSliderComp';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const steps = [
    {
        imgPath: '/afterLoginSliderImages/img1.jpg',
        title: 'Succeeding as an LGBT Professional',
        by: 'Dorie Clark',
        authorDetails: 'Professor of Busisness Adminidtration and Published Author',
        createdAt: '1 week',
        tag: 'new'
    },
    {
        imgPath: '/afterLoginSliderImages/img2.jpg',
        title: 'Hiring and Supporting Neurodiversity in the workplace',
        by: 'Tiffany Jameson',
        authorDetails: 'Workplace InclusionStrategic Consultant',
        createdAt: '4 weeks',
        tag: 'new'
    },
    {
        imgPath: '/afterLoginSliderImages/img3.jpg',
        title: 'Out and Proud: Approaching LGBT issues in the Workplace',
        by: 'Careercake',
        authorDetails: 'Careers content platform',
        createdAt: 'June 2020'
    },
]

export const AfterLoginImageSlider = () => {
    const classes = useStyles();
    
    const theme = useTheme();
    
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue:any) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleStepChange = (step: any) => {
        setActiveStep(step);
    };

    return (
        <Container>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {
                    steps.map((step, index) => (
                        <>
                            <Box key={step.imgPath}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <>
                                        <AfterLoginSliderComp {...step} />
                                    </>
                                ) : null}
                            </Box>
                        </>
                    ))
                }
            </AutoPlaySwipeableViews>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    overflow: hidden;
    margin-top: -18px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    }
}));