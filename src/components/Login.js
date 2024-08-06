import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login_status, setLogin_status] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function login() {
        let data = JSON.stringify({
          "username": username,
          "password": password
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
          setLogin_status(" Login Successful!");
          localStorage.setItem('accessToken', response.data.token);
        })
        .catch((error) => {
          console.log(error);
          setLogin_status("Sorry! Username/Password incorrect. Please try again.")
        });

    }
    return (
        <div>
            <h1>Login Page</h1>
            <table className="m-auto">
                <tr>
                    <td className={'text-end'}>Username: </td><td><input id={"username"} type={"text"} onChange={usernameHandler}/></td>
                </tr>
                <tr>
                    <td className={'text-end'}>Password: </td><td><input id={"password"} type={"password"} onChange={passwordHandler}/></td>
                </tr>
            </table>

                <p className={'mt-2'}>
                    <button id={"loginbtn"} onClick={login}>Login</button>
                </p>
                <p id={"login_status"}>{login_status}</p>
        </div>
);
}

export default Login;