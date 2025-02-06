import React from "react";
import { useLocation, useParams } from "react-router-dom";

const MentorProfilePage = () => {
  const params = useParams();

  const id = params.id;
  console.log("id", id);

  return <div>
    Mentor id is {id}
  </div>
};

export default MentorProfilePage;
