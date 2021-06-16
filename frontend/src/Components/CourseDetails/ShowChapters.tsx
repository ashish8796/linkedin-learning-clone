import React from "react";
import styled from "styled-components";
import { IChapter } from "../../store/teacher/teacherReducer";

interface IShowChapterProps {
  chapter: IChapter;
}

export default function ShowChapters({ chapter }: IShowChapterProps) {
  return <ChapterBox></ChapterBox>;
}

const ChapterBox = styled.div``;
