import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import ItemList from "./components/ItemList";
import UserList from "./components/UserList";
import { useDispatch } from "react-redux";
import { setItems, setUsers } from "./slices/itemsSlice";

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      price
    }
    users {
      name
      email
      password
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setItems(data.items));
      dispatch(setUsers(data.users));
    }
  }, [data, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Items List</h1>
      <ItemList />
      <hr />
      <UserList />
    </div>
  );
};

export default App;
