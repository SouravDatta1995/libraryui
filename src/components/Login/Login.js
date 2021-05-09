import React, {useState} from "react";
import {Button, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {useHistory} from "react-router-dom";
import axios from "axios";

function Login() {

    const [credentials, setCredentials] = useState({username: "", password: ""})
    const history = useHistory();
    const loginHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/login/", credentials)
            .then(res => {
                if (res.data === true)
                    history.push("/home")
                else
                    alert("Invalid username or password")
            })
            .catch(err => {
                alert("Login Failed")
            })
    }

    return (
        <div className={"App App-content"}>
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