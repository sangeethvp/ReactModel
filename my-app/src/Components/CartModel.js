const CartModel = ({cartItems,removeFromCart,closeCart}) => {
return(
    <div className="fixed inset-1 bg-blue-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-green p-6 rounded-lg">
            <h2 className="font-bold text-black">Your Cart</h2>
            {cartItems.length === 0 ?(
                <p>Your Cart is empty</p>
            ) :(
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id}className="flex justify-between mb-4">
                            <span>{item.title}</span>
                            <button 
                            onClick={() => removeFromCart(item.id)}
                            className="bg-orange-700 text-white px-4 py-2">Remove</button>
                            </div>
                    ))}
                </div>
            )}
            <button onClick={closeCart} className="bg-orange-700 text-white px-4 py-2">Close</button>
        </div>
    </div>
)

}
export default CartModel