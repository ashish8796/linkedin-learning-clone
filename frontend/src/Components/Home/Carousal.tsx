import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { SingleCourse, singleCourseProps } from "./SingleCourse";

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 72rem;
  margin: auto;
  margin-top: 50px;
`;

const useStyles = makeStyles((theme) => ({
  trending: {
    fontWeight: 600,
    fontSize: "1rem",

    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  head: {
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    position: "relative",
    display: "flex",
    height: "auto",
    overflow: "hidden",
  },
}));

interface carousalProps {
  data: singleCourseProps[];
  trending: string;
}

export const Carousal = ({ data, trending }: carousalProps) => {
  const classes = useStyles();

  const [active, setActive] = React.useState<number>(0);

  const handleNext: React.MouseEventHandler<HTMLButtonElement> = () => {
    setActive((prev: number) => prev + 1);
  };

  const handleBack: React.MouseEventHandler<HTMLButtonElement> = () => {
    setActive((prev: number) => prev - 1);
  };

  let newData = [
    data[0 + active],
    data[1 + active],
    data[2 + active],
    data[3 + active],
    data[4 + active],
  ];

  return (
    <Container>
      <Box className={classes.head}>
        <Typography className={classes.trending}>{trending}</Typography>
        <Box>
          <IconButton onClick={handleBack} disabled={active <= 0}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton onClick={handleNext} disabled={active >= data.length - 5}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.content}>
        {newData.map((item) => (
          <SingleCourse {...item} />
        ))}
      </Box>
    </Container>
  );
};
