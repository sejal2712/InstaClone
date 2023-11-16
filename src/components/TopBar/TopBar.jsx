import "./index.css";
import { CameraIcon, LogoIcon, MessangerIcon, IGTVIcon } from "../../icons";

const TopBar = ({ setSection }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);

  return (
    <div className="TopBar">

      <div className="TopBar__Camera" onClick={() => onHandleClick("camera")}>
        <CameraIcon />
      </div>

      <div className="TopBar__Logo" onClick={() => onHandleClick("home")}>
        <LogoIcon />
      </div>

      <div className="TopBar__Actions">
        
        <div
          className="TopBar__Actions__TV"
          >
          <IGTVIcon />
        </div>

        <div
          className="TopBar__Actions__Messanger"
          >
          <MessangerIcon />
        </div>

      </div>
      
    </div>
  );
};

export default TopBar;
