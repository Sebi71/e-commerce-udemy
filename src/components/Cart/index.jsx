import "./index.scss";

export default function Cart({ onClose }) {
  return (
    <div 
      onClick={onClose} 
      className="container-modal">
        <div 
          onClick={(e) => e.stopPropagation()} className="cart-modal">
            <button
              onClick={onClose}
              className="btn-close-modal">
                X
            </button>
        </div>
    </div>
  );
}
