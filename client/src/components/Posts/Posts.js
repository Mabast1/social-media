import React from "react";

import Post from "./Post/Post";
import useStlyes from "./styles";

const Posts = () => {
  const classes = useStlyes();
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
