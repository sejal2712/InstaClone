import "./index.css";

const Profile = ({ user }) => {
  const photoLinks = [
    "https://picsum.photos/id/1/800/1600",
    "https://picsum.photos/id/10/800/1600",
    "https://picsum.photos/id/20/800/1600",
    "https://picsum.photos/id/30/800/1600",
    "https://picsum.photos/id/40/800/1600",

  ];

  return (
    <div className="Profile">
      <div className="Profile__Top">
        <div className="Profile__Top__Details">
          <img
            src={user.userImage}
            alt="user profile image"
            className="Profile__image"
          />
          <div className="Profile__Stats">
            <div className="Profile__posts">
              <p className="Profile__top">{user.stats.posts}</p>
              <p className="Profile__bottom">Posts</p>
            </div>
            <div className="Profile__followers">
              <p className="Profile__top">{user.stats.followers}</p>
              <p className="Profile__bottom">Followers</p>
            </div>
            <div className="Profile__following">
              <p className="Profile__top">{user.stats.following}</p>
              <p className="Profile__bottom">Following</p>
            </div>
          </div>
        </div>

        <div className="Profile__Details">
          <p className="Profile__Details__Name">{user.userNameAll}</p>
          <p className="Profile__Details__Description">{user.description}</p>
        </div>

        <div className="Profile__Edit">
          <button className="Profile__Edit__btn">Edit Profile</button>
        </div>

        <div className="Profile__Edit">
          <button className="Profile__Edit__btn">Post</button>
        </div>
      </div>

      <div className="Profile__Feed">
        {photoLinks.map((element) => {
          return (
            <div className="Profile__Feed__Item">
              <img src={element}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
