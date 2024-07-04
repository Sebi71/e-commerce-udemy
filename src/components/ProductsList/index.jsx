import { useSelector, useDispatch } from "react-redux";
import { getproductsList } from "../../services/asyncActions";
import "./index.scss";

export default function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  if (!products.item) {
    dispatch(getproductsList());
  }
  console.log(products);

  return (
    <div className="container-products">
      <h1 className="title-products">Retrouvez nos produits :</h1>
      <ul className="grid-products">
        {products.item &&
          products.item.map((product) => (
            <li className="card-product" key={product.id}>
              <img
                className="img-product"
                src={`/images/${product.img}.png`}
                alt={product.title}
              />
              <div className="info-product">
                <p className="title-product">{product.title}</p>
                <p className="price-product">{product.price} €</p>
              </div>
              <button
                className={`${
                  product.picked ? "picked" : "no-picked"
                } btn-product`}
              >
                {product.picked ? "Dans votre panier ✅" : "Ajouter au panier"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
