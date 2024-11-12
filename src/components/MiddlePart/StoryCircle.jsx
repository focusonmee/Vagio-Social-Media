import { Avatar } from "@mui/material";
import React from "react";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          sx={{ width: "5rem", height: "5rem" }}
          src="https://static.vecteezy.com/system/resources/previews/029/796/026/non_2x/asian-girl-anime-avatar-ai-art-photo.jpg"
        ></Avatar>
        <p>John Doe</p>
      </div>
    </div>
  );
};

export default StoryCircle;
