import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
    return (
      <div>
        <img
          className="cartIcon"
          src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"
        />
        <h3>Total: $ {totalPrice}</h3>
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>
    );
}
export default Cart;
