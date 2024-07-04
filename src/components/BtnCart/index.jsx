import { useState } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Cart from "../Cart";
import ShoppingCart from "../../assets/shopping-cart.svg";
import "./index.scss";

export default function BtnCart() {
  const [showModal, setShowModal] = useState(false);

  const cart = useSelector((state) => state.cart);

  return (
    <>
      <button
        className="container-cart"
        onClick={() => setShowModal(!showModal)}
      >
        <img className="icon-cart" src={ShoppingCart} alt="" />
        <span className="text-cart">
          Contenu du panier : {cart.cartItems.length}
        </span>
      </button>
      {showModal &&
        createPortal(
          <Cart onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
