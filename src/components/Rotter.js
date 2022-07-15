import React from "react";
import RotterItem from "./RotterItem"

function Rotter({ items, onDeleteItem, onUpdateItem }) {
    
  return (
    <div>
      <h2>Registered Names</h2>
      <ol>
        {items.map((item) => (
          <RotterItem key={item.id} item={item} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />
        ))}
      </ol>
    </div>
  );
}

export default Rotter;