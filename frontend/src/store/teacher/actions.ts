import { Dispatch } from "redux";
import {
  deleteChapterById,
  deleteLectureById,
  getAllChaptersByCourseId,
  getCourse,
  getTeacher,
  postNewChapter,
  postNewCourse,
  postNewLecture,
} from "../../api/api";
import {
  SET_ALL_CHAPTERS,
  SET_ALL_LECTURES_OF_COURSE,
  SET_COURSE,
  SET_NEW_CHAPTER,
  SET_TEACHER,
} from "./actionTypes";

export const setTeacher = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await getTeacher(id);

    console.log(data.teacher);

    dispatch({
      type: SET_TEACHER,
      payload: data.teacher[0],
    });
  } catch (error) {}
};

export const setAllCourses = (id: string) => async (dispatch: Dispatch) => {
  try {
    // const { data } =
  } catch (error) {}
};

export const setCourse = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await getCourse(id);
    // console.log(data);
    dispatch({ type: SET_COURSE, payload: data.course });
  } catch (error) {}
};

export const createNewCourse = (payload: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await postNewCourse(payload);
    console.log(data);
    dispatch({ type: SET_COURSE, payload: data.course });

    return true;
  } catch (error) {
    return false;
  }
};

export const setAllChapters = (id: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await getAllChaptersByCourseId(id);
    console.log(data);

    dispatch({ type: SET_ALL_CHAPTERS, payload: data.chapter });
    dispatch({
      type: SET_ALL_LECTURES_OF_COURSE,
      payload: data.videosWithCoursePopulate,
    });
  } catch (error) {}
};

export const startNewChapter = (payload: any) => async (dispatch: Dispatch) => {
  try {
    const { data: chapterData } = await postNewChapter(payload);
    console.log(chapterData, "chapterDAta");

    // const { data: courseData } = await getCourse(payload.courseId);
    // console.log(courseData, "courseData");

    const { data: chapters } = await getAllChaptersByCourseId(payload.courseId);
    console.log(chapters, "chapters");

    dispatch({ type: SET_NEW_CHAPTER, payload: chapterData });
    // dispatch({ type: SET_COURSE, payload: courseData.course });
    // dispatch({
    //   type: SET_ALL_CHAPTERS,
    //   payload: chapters.chapter ? chapters.chapter : [],
    // });
    dispatch({
      type: SET_ALL_LECTURES_OF_COURSE,
      payload: chapterData.videosWithCoursePopulate,
    });

    return true;
  } catch (error) {
    return false;
  }
};

export const uploadNewLecture =
  (payload: any) => async (dispatch: Dispatch) => {
    try {
      const { data } = await postNewLecture(payload);

      const { data: videoData } = await getAllChaptersByCourseId(
        data.newLecture.courseId
      );

      dispatch({
        type: SET_ALL_CHAPTERS,
        payload: videoData.chapter ? videoData.chapter : [],
      });
      dispatch({
        type: SET_ALL_LECTURES_OF_COURSE,
        payload: videoData.videosWithCoursePopulate,
      });

      return true;
    } catch (error) {
      return false;
    }
  };

export const deleteChapter = (chapter: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await deleteChapterById(chapter._id);

    console.log(data);

    const { data: chapterData } = await getAllChaptersByCourseId(
      chapter.courseId
    );

    dispatch({
      type: SET_ALL_CHAPTERS,
      payload: chapterData.chapter ? chapterData.chapter : [],
    });
    dispatch({
      type: SET_ALL_LECTURES_OF_COURSE,
      payload: chapterData.videosWithCoursePopulate,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteLecture = (payload: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await deleteLectureById(payload._id);
    console.log(data);

    const { data: chapterData } = await getAllChaptersByCourseId(
      payload.courseId._id
    );

    dispatch({
      type: SET_ALL_CHAPTERS,
      payload: chapterData.chapter ? chapterData.chapter : [],
    });
    dispatch({
      type: SET_ALL_LECTURES_OF_COURSE,
      payload: chapterData.videosWithCoursePopulate,
    });
  } catch (error) {}
};
