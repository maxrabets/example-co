import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import SignupButton from "../shared/components/SignupButton"
import LoginButton from "../shared/components/LoginButton"
import LogoutButton from "../shared/components/LogoutButton"

const AuthenticationMenu = () => {
    const { isAuthenticated } = useAuth0();
    if(isAuthenticated)
        return <LogoutButton/>
    else
        return (
            <>
                <LoginButton/>
                <SignupButton/>
            </>
        )
}

export default AuthenticationMenu