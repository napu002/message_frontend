import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../constants";

function CreateChatroom(props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseUrl + 'users/',
            headers: {
                'Authorization': 'token 5c34bf8fc5027b1c2bb3d210aabb57525921319d'
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function createChatroom() {
        let name = document.getElementById("name").value;
        let created_by = document.getElementById("created_by").value;
        let options = document.getElementById("members");
        var members = [];
        for (var i = 0 ; i < options.length; i++) {
            if (options[i].selected) {
                members.push(options[i].value);
            }
        }
        console.log(members);
        let data = JSON.stringify({
            "name": name,
            "created_by": Number.parseInt(created_by),
            "members": members
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + 'chat/chatroom/',
            headers: {
                'Authorization': 'token 5c34bf8fc5027b1c2bb3d210aabb57525921319d',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Create Chatroom</h1>
            <p>Name: <input id={'name'} type={'text'}/></p>
            <p>Created By: <select id={'created_by'}>
                {users.map((user) =>
                    <option key={user.id} value={user.id}>{user.username}</option>
                )}
            </select></p>
            <p>Members: <select id={'members'} multiple={'multiple'}>
                {users.map((user) =>
                    <option key={user.id} value={user.id}>{user.username}</option>
                )}
            </select></p>
            <button id={'createBtn'} onClick={createChatroom}>Create Chatroom</button>
        </div>
    );
}

export default CreateChatroom;