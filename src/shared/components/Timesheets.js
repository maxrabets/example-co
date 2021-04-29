import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Timesheets = () => {
    const { getAccessTokenSilently } = useAuth0();
    const serverUrl = process.env.REACT_APP_SERVER_URL
    
    async function createTimesheet() {
        const token = await getAccessTokenSilently();
        const time = JSON.stringify({date: Date.now()});
        console.log(time)
        const response = await fetch(            
          `${serverUrl}/timesheets`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: time
          }
        )
        if(response.ok)
          console.log("saved");
        
    }

    async function getTimesheets() {
        const token = await getAccessTokenSilently();

        const response = await fetch(
          `${serverUrl}/timesheets`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        )
        if(response.ok)
          console.log(response.json());        
    }

    async function test() {
      const response = await fetch(
        `${serverUrl}/test`,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({time: "ttyty"})
        }
      )
      if(response.ok)
        console.log(response.json());        
    }

    return (
        <>
            <button onClick={createTimesheet}>create timesheet</button>
            <button onClick={getTimesheets}>GET timesheet</button>
            <button onClick={test}>TEST</button>
        </>        
    )
}

export default Timesheets