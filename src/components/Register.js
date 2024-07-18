import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Register(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [register_status, setRegister_status] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function password2Handler(e) {
        setPassword2(e.target.value)
    }

    function register() {
        let data = JSON.stringify({
            "username": username,
            "password": password,
            "password_confirm": password2,
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: BaseUrl + 'api/v1/accounts/register/',
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        };
        // console.log(localStorage.getItem('accessToken'));

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setRegister_status("Registration Successful! Please login.");
          // localStorage.setItem('accessToken', response.data.token);
        })
        .catch((error) => {
          console.log(error);

          setRegister_status("Sorry! Registration failed. Please try again.");
        });

    }
    return (
        <div>
            <h1>Register Page</h1>
            <p>Username: <input id={"username"} type={"text"} onChange={usernameHandler}/></p>
            <p>Password: <input id={"password"} type={"password"} onChange={passwordHandler}/></p>
            <p>Confirm Password: <input id={"password2"} type={"password"} onChange={password2Handler}/></p>
            <p>
                <button id={"registerbtn"} onClick={register}>Register</button>
            </p>
            <p id={"login_status"}>{register_status}</p>
        </div>
    );
}

export default Register;