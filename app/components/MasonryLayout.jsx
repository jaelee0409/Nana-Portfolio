"use client";

import React from "react";
import Masonry from "react-masonry-css";

import Art from "../components/Art";

const breakpointColumnsObj = {
  default: 3,
  3840: 3,
  640: 2,
};

const MasonryLayout = ({ projects }) => {
  return (
    <Masonry
      className="masonry-grid break-inside-avoid gap-3 md:gap-5"
      breakpointCols={breakpointColumnsObj}
    >
      {projects?.map((project) => {
        return <Art key={project._id} data={project} />;
      })}
    </Masonry>
  );
};

export default MasonryLayout;
