import React, { useState, useEffect } from "react";
import QuestionAns from "./QuestionAns";

export default function Test() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    //url
  }, []);
  return (
    <div>
      {/* {comments.length &&
        comments.map((comment) => (
          <QuestionAns key={comment._id} data={data} />
        ))} */}
    </div>
  );
}
