import React, {useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function Register(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirm, setPassword_confirm] = useState("")
    const [register_status, setRegister_status] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function password_confirmHandler(e) {
        setPassword_confirm(e.target.value)
    }

    function register() {
        let data = JSON.stringify({
            "username": username,
            "password": password,
            "password_confirm": password_confirm,
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
          setRegister_status("Success!");
          // localStorage.setItem('accessToken', response.data.token);
        })
        .catch((error) => {
          console.log(error);

          setRegister_status("Error!");
        });

    }
    return (
        <div>
            <h1>Register Page</h1>
            <table className="m-auto">
                <tr>
                    <td className={'text-end'}>Username: </td><td><input id={"username"} type={"text"} onChange={usernameHandler}/></td>
                </tr>
                <tr>
                    <td className={'text-end'}>Password: </td><td><input id={"password"} type={"password"} onChange={passwordHandler}/></td>
                </tr>
                <tr>
                    <td className={'text-end'}>Confirm Password: </td><td><input id={"password_confirm"} type={"password"} onChange={password_confirmHandler}/>
                    </td>
                </tr>

            </table>
            <p className={'mt-2'}>
                <button id={"register_btn"} onClick={register}>Register</button>
            </p>
            <p id={"registration_status"}>{register_status}</p>
        </div>
    );
}

export default Register;