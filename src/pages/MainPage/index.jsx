import BtnCart from "../../components/BtnCart";
import ProductsList from "../../components/ProductsList";

import "./index.scss"

export default function MainPage() {
  return (
    <>
      <div className="container-main-page">
        <div className="content-main-page">
          <ProductsList />
        </div>
      </div>
      <BtnCart />
    </>
  )
}