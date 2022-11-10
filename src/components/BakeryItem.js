// TODO: create a component that displays a single bakery item
export default function BakeryItems(props){
    // specify return
    const item = props.item
    const addFunction = () =>
        {props.setCart([...props.cart, item]) 
        props.setCount(props.count+item.price)}
    // const addCount = () =>
    return (
        <div>
            {/* displaying the items */}
            <div>{item.name}</div>
            <button onClick={addFunction}>Add</button>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <img src={item.image}/>
        </div>
    )
}