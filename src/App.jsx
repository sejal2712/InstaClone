import { useState, useEffect } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";


function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);
  

  useEffect(() => {
    fetch("https://api.npoint.io/d92d246c972bb8b31ce7")
      .then((res) => res.json())
      .then((data) => setUser(data));

    /* posts */
    fetch("https://api.npoint.io/79c365b5c6af193c95e6")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    /* stories */
    fetch("https://api.npoint.io/b994bff8b2ddc40175e9")
      .then((res) => res.json())
      .then((data) => setStories(data));

   }, []);

  const homeBySection = () => {
    switch (section) {
      case "home":
        return (
          <>
            <TopBar setSection={setSection} />
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
            <BottomBar setSection={setSection} />
          </>
        );
      case "profile":
        return (
          <>
            <Profile user={user} />
            <BottomBar setSection={setSection} />
          </>
        );
      default:
        return (
          <>
            <TopBar setSection={setSection} />
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
            <BottomBar setSection={setSection} />
          </>
        );
    }
  };

  return <>{homeBySection()}</>;
}

export default App;