import React from 'react';

function List(props) {

    const {data, onClick, selectedUser} = props;

    const handleClick = (obj) => {
        onClick(obj);
    }

    return (
        <ul className="user_list">
            {data.map(o => <li key={o.id} className={`${((selectedUser.id === o.id) ? 'selected' : '')} 'list_item'`} onClick={() => handleClick(o)}>{o.name}</li>)}
        </ul>
    );
}

export default List;
