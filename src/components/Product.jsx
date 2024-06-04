import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { myContext } from "../context/ContextComponent";

function Product({ image, title, id, description, price }) {
  const { state, dispatch } = useContext(myContext);

  return (
    <div className="border w-52 p-2">
      <img src={image} alt={title} className="size-40 object-cover m-auto" />
      <div className="mt-3">
        <p className="text-sm text-teal-600 font-semibold mb-1">
          {title.slice(0, 22)}
        </p>
        <p className="text-gray-500 text-sm">{price}€</p>
      </div>
      <button
        className="px-3 py-2 border rounded-md shadow bg-gray-400 text-gray-100 float-right"
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            item: { id, title, image, description, price },
          })
        }
      >
        <Icon icon="mdi:cart-outline" />
      </button>
    </div>
  );
}

export default Product;
