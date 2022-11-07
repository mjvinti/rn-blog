import React, { createContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => (
  <BlogContext.Provider value={[1, 2, 3]}>{children}</BlogContext.Provider>
);

export default BlogContext;
