import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.items.users);

  return (
    <ul>
      {users.map((user) => (
        <li>
          {user.name} / {user.email} / {user.password}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
