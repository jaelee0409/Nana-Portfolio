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
      className="flex w-auto break-inside-avoid gap-4 md:gap-6 lg:gap-8"
      breakpointCols={breakpointColumnsObj}
    >
      {projects?.map((project) => {
        return <Art key={project._id} data={project} />;
      })}
    </Masonry>
  );
};

export default MasonryLayout;
