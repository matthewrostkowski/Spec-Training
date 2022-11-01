
const itemList = [{name: "Firework", email: "Katyperry@columbia.edu"}, 
                    {name: "Hamilton", email: "hamilton@columbia.edu"}, 
                    {name: "Kyle", email: "kyle@columbia.edu"}]

function List(){
    return(
        <div class="List">
            {itemList.map((info, index) => (
            <ListItem index={index+1} name={info.name} email={info.email} />
            ))}
            
        </div>
        
    );
}
export default List;
function ListItem({index, name, email}){
    return(
        <div class="list-item">
          <div class="item item-number">{index}</div>
          <div class="item">{name}</div>
          <div class="item-email">{email}</div>
          <button class="delete-button">DELETE</button>
        </div>            
    )

}
