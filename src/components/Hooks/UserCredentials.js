import {useState} from "react";

export default function UserCredentials(){

    const getCredentials = () => {
        const credentialsString = sessionStorage.getItem("credentials");
        const userCredential  = JSON.parse(credentialsString);
        return userCredential;
    }

    const [credentials, setCredentials] = useState(getCredentials);

    const saveCredentials = userCredential => {
        sessionStorage.setItem("credentials",JSON.stringify(userCredential))
        setCredentials(userCredential)
    }
    const clearCredentials = () => {
        setCredentials(null)
        sessionStorage.removeItem("credentials")
        console.log(credentials)
    }

    return {
        setCredentials : saveCredentials,
        clearCredentials : clearCredentials,
        credentials
    }

}