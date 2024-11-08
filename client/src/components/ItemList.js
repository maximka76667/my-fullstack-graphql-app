import React from "react";
import { useSelector } from "react-redux";

const ItemList = () => {
  const items = useSelector((state) => state.items.items);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} / {item.price}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
