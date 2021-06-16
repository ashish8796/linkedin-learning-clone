import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { setCourse } from "../../store/teacher/actions";
import { State } from "../../store/tsTypes";

type CourseParams = {
  id: string;
};

export default function CourseDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { course } = useSelector((state: State) => state.teacher);
  const { id } = useParams<CourseParams>();

  console.log(course);

  useEffect(() => {
    dispatch(setCourse(id));
  }, []);

  return <div></div>;
}
