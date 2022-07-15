import React from "react"

function RotterItem({ item, onUpdateItem, onDeleteItem }) {
    const { firstName, secondName, id, gender, newsletter } = item
    
    function handleNewsLetter(newsletter) {
        console.log(newsletter)
        // persist changes on server
    fetch(`/todos/${id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ item: { newsletter: newsletter } })
})
    .then(r => r.json())
    .then(data => onUpdateItem(data.todo.id, data.todo.newsletter))
        // then use onUpdateItem to update item in state
    }
    
    function handleDelete() {
        // persist changes on server
        fetch(`/items/${id}`, {
            method: "DELETE"
        })
        // then use onDeleteItem to remove item from state
        onDeleteItem(id)
    }
    
    return (
        <li>
            {/* <strong>{firstName}{secondName}</strong> */}
            <p>${firstName}</p>
            <label>
                Newsletter?
                <input
                    style={{ width: '100px'}}
                    type="option"
                    onChange={e => handleNewsLetter(e.target.value)}
                    value={newsletter}
                />
            </label>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}


export default RotterItem