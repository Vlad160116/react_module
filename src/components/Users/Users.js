import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";

const Users = () => {
    const [users, getUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Users;