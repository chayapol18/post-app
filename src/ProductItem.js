function ProductItem(props) {
    return <div>
        <h4>Title: {props.title}</h4>
        <h4>Description: {props.description}</h4>
        <h4>price: {props.price}</h4>
        </div>
}

export default ProductItem

// return <h1 className="hello-react"> Hello, {props.name} !, <br /> Age: {props.age} </h1>