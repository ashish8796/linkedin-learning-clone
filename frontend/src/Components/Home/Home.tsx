import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BottomImage } from './BottomImage';
import { Carousal } from './Carousal';
import { ExploreCourses } from './ExploreCourses';
import { FindRightCourse } from './FindRightCourse';
import { Headline } from './Headline';
import { SkillsTime } from './SkillsTime';
import { CoursesList } from './CoursesList'
import { Footer } from './Footer';
import { State } from '../../store/tsTypes';
import { AfterLoginImageSlider } from './AfterLoginImageSlider';
import ProgressPoint from '../ProgressHomePage/ProgressPoint';

const Container = styled.div`
    position: relative;
    margin-top: 70px;
    width: 100%;
`;


export default function Home() {

   const [newData, setNewData] = React.useState([])

   const isAuth = useSelector((state: State) => state.user.isAuth);

   const axios = Axios.create({
      baseURL: "https://serene-glacier-19642.herokuapp.com/",

      headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      },
   });
   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
   React.useEffect(() => {
      axios.get('https://serene-glacier-19642.herokuapp.com/courses').then(({ data }) => { console.log(data.courses); setNewData(data.courses) })
   }, [])

   return (
      <Container>
         {
            !isAuth ? <Headline /> : <AfterLoginImageSlider />
         }
         {
            !isAuth && <ExploreCourses />
         }
         {/* <ProgressPoint  value={40} size={80} /> */}
         <Carousal data={newData} trending="TRENDING COURSES" />
         {
            !isAuth && <FindRightCourse />
         }
         <Carousal data={newData} trending="TRENDING PERSONAL EFFECTIVENESS COURSES" />
         <Carousal data={newData} trending="TRENDING SPREADSHEET COURSES" />
         {
            !isAuth && <SkillsTime />
         }
         <Carousal data={newData} trending="TRENDING ILLUSTRATION COURSES" />
         <Carousal data={newData} trending="TRENDING SHORT VIDEO TUTORIALS" />
         <Carousal data={newData} trending="TRENDING PERSONAL BRANDING COURSES" />
         {
            !isAuth && <BottomImage />
         }
         {
            !isAuth && <CoursesList />
         }
         <Footer />
      </Container>
   )
}
