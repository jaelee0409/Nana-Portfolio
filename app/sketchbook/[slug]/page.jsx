import React from "react";

const page = ({ params, data }) => {
  return (
    <div>
      {params.slug}
      {data}
    </div>
  );
};

export default page;
