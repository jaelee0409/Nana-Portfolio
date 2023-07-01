import { client } from "../../../sanity/lib/client";
import { getArtProjectDetails, getArtProjects } from "../../api/data";

const page = async ({ params }) => {
  const result = await getArtProjectDetails(params.slug);

  //console.log(result);

  return <div></div>;
};

export default page;
