import React from "react";

import Post from "./Post/Post";
import useStlyes from "./styles";

const Posts = () => {
  const classes = useStlyes();
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
