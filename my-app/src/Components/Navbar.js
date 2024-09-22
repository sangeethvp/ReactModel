const Navbar =({cartCount,openCart}) => {
    return(
        <div className="flex justify-evenly bg-blue-500 p-10">
        <h1 className="text-2xl font-bold">Shop Store</h1>
        <button onClick={openCart} className="text-xl font-bold">Cart{cartCount}</button>
        </div>
    )
}
export default Navbar