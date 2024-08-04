import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Login(props) {
    const [username, setUsername] = useState("")
    const [pwd, setPwd] = useState("")
    const [login_status, setLogin_status] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }
    function passwordHandler(e) {
        setPwd(e.target.value)
    }

    function login() {
        let data = JSON.stringify({
          "username": username,
          "password": pwd
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: BaseUrl + 'auth/',
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        };
        console.log(localStorage.getItem('accessToken'));

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setLogin_status(" Successful!");
          localStorage.setItem('accessToken', response.data.token);
        })
        .catch((error) => {
          console.log(error);
          setLogin_status("Error!")
        });

    }
    return (
        <div>
            <h1>Login Page</h1>
            <p>Username: <input id={"username"} type={"text"} onChange={usernameHandler}/></p>
            <p>Password: <input id={"password"} type={"password"} onChange={passwordHandler}/></p>
            <p>
                <button id={"loginbtn"} onClick={login}>Login</button>
            </p>
            <p id={"login_status"}>{login_status}</p>
        </div>
    );
}

export default Login;