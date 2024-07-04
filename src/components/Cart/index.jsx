import { useSelector, useDispatch } from "react-redux";
import "./index.scss";

export default function Cart({ onClose }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div onClick={onClose} className="container-modal">
      <div onClick={(e) => e.stopPropagation()} className="cart-modal">
        <button onClick={onClose} className="btn-close-modal">
          X
        </button>
        <ul>
          {cart.cartItems.length > 0 ? (
            cart.cartItems.map((product) => (
              <li key={product.id} className="cart-product">
                <img
                  className="cart-img"
                  src={`/images/${product.img}.png`}
                  alt={product.title}
                />
                <p className="cart-title">{product.title}</p>
                <select
                  name="quantity"
                  className="cart-quantity"
                  // onChange={(e) => dispatch()}
                  value={product.quantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <button className="btn-delete">Supprimer du panier</button>
              </li>
            ))
          ) : (
            <li className="cart-empty">Ajouter un produit à votre panier...</li>
          )}
        </ul>
        <p className="cart-total">
          Votre total : {"  "}
          <span className="cart-total-price">
            {cart.cartItems
              .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
              .toFixed(2)}
            €
          </span>
        </p>
        <button className="btn-cmd">Commander</button>
      </div>
    </div>
  );
}
