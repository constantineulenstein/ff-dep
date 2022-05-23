import React from "react";
import "./CommentSection.css";

function CommentSection({ reviews }) {
  return (
    <div className="commentSec">
      <ul>
        {reviews.map(function (object, i) {
          return <Review review={object} number={i} key={i} />;
        })}
      </ul>
    </div>
  );
}

function Review({ review, number }) {
  let left = number % 2 == 0;

  return (
    <li>
      <div
        className={
          "Comment-Outer " +
          (left ? "Comment-Outer-Left" : "Comment-Outer-Right")
        }
      >
        <div
          className={
            "Comment-Inner " +
            (left ? "Comment-Inner-Left" : "Comment-Inner-Right")
          }
        >
          {/* <div className="Comment-Text"> */}
          <p className="UserName">
            {review.author_name} --- rating: {review.rating}/5
          </p>
          <p className="ReviewText">{review.text}</p>
          {/* </div> */}
        </div>
      </div>
    </li>
  );
}

export default CommentSection;
