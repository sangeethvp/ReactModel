const ProductCard = ({product,addToCart,cartItems}) => {
    const isInCart = cartItems.some((item)=> item.id === product.id);

    const handleAddToCart = () => {
        if(isInCart){
            alert('item already exist')
        }else{
            addToCart(product)
        }
    }
    return(
        <div className="border p-4 rounded" >
            <img src={product.image} alt={product.title} className="mx-auto h-40"/>
            <h2 className="font-bold" >{product.title}</h2>
            <p className="font-semibold text-white-300">${product.price}</p>
            <button 
            onClick={handleAddToCart}
            className={`mt-2 px-4 py-2 ${isInCart ? 'bg-orange-500' : 'bg-green-500'} text-blue`}
            disabled = {isInCart}>
                {isInCart ? 'In cart' : 'Add To cart'}</button>
        </div>

    )
}
export default ProductCard