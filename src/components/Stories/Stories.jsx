import { useState } from "react";

import "./index.css";

import Story from "../Story";


const Stories = ({ user, stories }) => {
  const [storyStart] = useState(false);


  return (
    <>
      <div className="Stories">
        <ul className="Stories__List">
          <li className="Stories__Item" key={99}>
            <Story story={user} key={99} />
            <p className="Stories__Yours">Your Story</p>
          </li>

          {stories &&
            stories.map((story) => (
              <li
                className="Stories__Item"
                key={story.id}
                >
                <Story story={story} key={story.id} />
              </li>
            ))}
        </ul>
      </div>
      {storyStart !== false && (
        <Modal
          stories={stories}
          index={storyStart}
        />
      )}
    </>
  );
};

export default Stories;
