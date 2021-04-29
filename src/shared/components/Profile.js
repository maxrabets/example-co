import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Timesheets from "./Timesheets"

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();  

if(isAuthenticated) {
    const { name, picture, email } = user;
    return (
        <>
            <img
                src={picture}
                alt="Profile"
            />
            <h2>{name}</h2>
            <p >{email}</p>
            <pre>
            {JSON.stringify(user, null, 2)}
            </pre>
            <Timesheets></Timesheets>
        </>
    );
  }
  return <></>
};

export default Profile;
