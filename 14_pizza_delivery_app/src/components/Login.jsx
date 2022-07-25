import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userServices';

function Login() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsersData(res.data);
    });
  }, []);

  console.log(usersData);

  return <div>Login</div>;
}

export default Login;
