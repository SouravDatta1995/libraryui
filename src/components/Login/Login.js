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
        axios.post("https://spoilerlibrarybackend.herokuapp.com/api/login/", credentials)
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

                <Form.Control type="text" placeholder="Enter email" className={"mb-4"}
                              value={credentials.username}
                              onChange={e => setCredentials({...credentials, username: e.target.value})}/>
                <Form.Control type="password" placeholder="Enter password" className={"mb-4"}
                              value={credentials.password}
                              onChange={e => setCredentials({...credentials, password: e.target.value})}/>
                <Button type={"submit"} className={"mb-4"}> Login </Button>
            </Form>
        </div>
    );
}

export default Login;