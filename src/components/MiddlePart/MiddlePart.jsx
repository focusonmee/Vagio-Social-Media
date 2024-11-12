import { Avatar } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
const story = [11, 1, 1, 1, 1];
const MiddlePart = () => {
  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "4rem", height: "4rem" }}
            // src="https://static.vecteezy.com/system/resources/previews/029/796/026/non_2x/asian-girl-anime-avatar-ai-art-photo.jpg"
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item, index) => (
          <StoryCircle key={index} />
        ))}
      </section>

      <section>
        <div></div>
      </section>
    </div>
  );
};

export default MiddlePart;
