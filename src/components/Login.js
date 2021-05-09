import React, {useState} from "react";
import {Button, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {Redirect} from "react-router-dom";
import axios from "axios";

function Login(props) {

    const [credentials, setCredentials] = useState({username: "", password: ""})
    const [loginStatus, setLoginStatus] = useState(false);
    const loginHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/login/", credentials)
            .then(res => {
                console.log(res)
                if (res.data === true)
                    setLoginStatus(true)
                else
                    alert("Invalid username or password")
            })
            .catch(err => {
                alert("Login Failed")
            })
    }

    return (
        loginStatus ? <Redirect to={"/Home"}/> :
            <div>
                <Form onSubmit={loginHandler}>
                    <div className={"mb-4"}>
                        <input type="text" placeholder="Enter email" className={"form-control"}
                               value={credentials.username}
                               onChange={e => setCredentials({...credentials, username: e.target.value})}/>
                    </div>
                    <div className={"mb-4"}>
                        <input type="text" placeholder="Enter password" className={"form-control"}
                               value={credentials.password}
                               onChange={e => setCredentials({...credentials, password: e.target.value})}/>
                    </div>
                    <div className={"mb-4"}>
                        <Button type={"submit"}>Login</Button>
                    </div>
                </Form>
            </div>
    );
}

export default Login;