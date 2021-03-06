import React, { ReactElement } from "react";
import "./Product.css";
import CurrencyFormat from "../Subtotal/CurrencyFormat";
import { useAppDispatch } from "../../store/hooks";
import { addToBasket, removeFromBasket } from "../../store/basket/basketSlice";

interface Props {
  data: product;
}

export interface product {
  id: number;
  info: string;
  price: number;
  rating: number;
}

function Product({ data }: Props): ReactElement {
  const dispatch = useAppDispatch();
  const buttonText = "Add to Cart";
  
  const addToCart = () => {
    dispatch(addToBasket(data));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{data.info}</p>
        <p className="product__price">
          <CurrencyFormat
            renderText={(value: number) => <>{value}</>}
            decimalScale={1}
            value={data.price}
            displayType=""
            prefix="$"
            suffix="/-"
            thousandSeperator={2}
          />
        </p>
        <p className="product__rating">{Array(data.rating).fill("*", 0, data.rating)}</p>
      </div>
      <img className="product__images" src="" alt="product" />
      <button className="product__button" onClick={addToCart}>
        {buttonText}
      </button>
    </div>
  );
}

export default Product;
