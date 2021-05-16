import React, {useState} from "react";
import {Button, ButtonGroup, Form, InputGroup} from "react-bootstrap"
import axios from "axios";

function Login(props) {

    const [credentials, setCredentials] = useState({username: "", password: ""})
    const loginHandler = e => {
        e.preventDefault()
        axios.post("https://spoilerlibrarybackend.herokuapp.com/api/login/", credentials)
            .then(res => {
                if (res.data === true)
                    props.setCredentials(credentials)
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
                <Form.Row>
                    <Button type={"submit"}> Login </Button>  or  <Button> Signup </Button>
                </Form.Row>


            </Form>
        </div>
    );
}

export default Login;