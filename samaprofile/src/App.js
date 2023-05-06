import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import './App.css';

const App = () => {
  <>
    <div className="Profile">
      <div className="ProfilePhoto">
        <ProfilePhoto/>
      </div>
    </div>

    <div className="FullName-Box">
      <div className="FullName">
        <FullName/>
      </div>
    </div>

    <div className="Address">
      <Address/>
    </div>

  </>
};

export default App;
