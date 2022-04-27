import './item.style.scss'
const AddItems = ({todo}) =>{
    return(
        <>
        <div className="add-items">
            <input type='checkbox' />
            <h3>{todo}</h3>
        </div>
            
        </>
    )
}

export default AddItems

