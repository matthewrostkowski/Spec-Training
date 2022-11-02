function List({itemList, handleDelete}) {
    return (
    <div class="List">
        {itemList.map((item, index) => (
            <ListItem index={index} name={item.name} email={item.email} handleDelete={handleDelete}></ListItem>
        ))}    
    </div>
    );
}
export default List;

function ListItem({index, name, email, handleDelete}) {
    return (
        <div class="list-item">
            <div class="item item-number">{index+1}</div>
            <div class="item">{name}</div>
            <div class="item-email">{email}</div>
          <button class="delete-button" onClick={() => handleDelete(index)}>DELETE</button>
        </div>
    );
}