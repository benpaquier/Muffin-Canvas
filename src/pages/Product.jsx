import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_INFOS } from "../api/graphql/products/queries";
import Navbar from "../components/Navbar/Navbar";

import { useState, useEffect } from "react";

const Product = () => {
  const { productId } = useParams();
  const [variant, setVariant] = useState({
    title: "",
    id: "",
    price: {
      amount: "",
      currencyCode: "",
    },
  });
  const [quantity, setQuantity] = useState(1);

  const { loading, error, data } = useQuery(GET_PRODUCT_INFOS, {
    variables: {
      id: `gid://shopify/Product/${productId}`,
    },
  });

  const handleChangeVariantSelection = (variant) => {
    if (data) {
      const variantResult = data?.product?.variants.edges.find(
        (v) => v.node.title === "Moyen"
      ).node;
      setVariant({
        title: variantResult.title,
        id: variantResult.id,
        price: variantResult.price,
      });
    }
  };

  useEffect(() => {
    handleChangeVariantSelection(variant);
  }, [data]);

  console.log(variant);
  console.log(quantity);

  return (
    <>
      <Navbar />
      <div>
        {" "}
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h2 className="text-2xl font-bold lg:text-3xl">
              {data?.product?.title}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt="Tee"
                  src={data?.product?.images.edges[0].node.originalSrc}
                  className="h-72 rounded-xl lg:h -[540px]"
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-0 flex flex-col gap-4">
              <div>
                <p className="text-xl font-bold">{`${variant?.price?.amount}€`}</p>
              </div>
              <div className=" flex gap-3 align-center">
                {data?.product?.variants?.edges?.map((v) => (
                  <label for="size_xs h-1" className="cursor-pointer">
                    <button
                      onClick={() =>
                        setVariant({
                          title: v.node.title,
                          id: v.node.id,
                          price: v.node.price,
                        })
                      }
                      className={`${
                        v.node.title === variant.title
                          ? "group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium bg-black text-white"
                          : "group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium bg-white text-black"
                      }`}
                    >
                      {v.node.title}
                    </button>
                  </label>
                ))}
              </div>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                id="quantity"
                min="1"
                max="99"
                defaultValue={quantity}
                class="w-12 rounded border-black-700 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                type="submit"
                className="w-full rounded bg-teal-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Add to cart
              </button>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p>{data?.product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

{
  /* <label for="size_xs h-1" className="cursor-pointer">
<button
  onClick={() =>
    setVariant({
      title: v.node.title,
      id: v.node.id,
      price: v.node.price,
    })
  }
  className={`${
    v.node.title === variant.title
      ? "bg-teal-700 text-white border-teal-700"
      : "bg-white text-gray-700"
  } w-12 h-12 rounded-full flex items-center justify-center`}
>
  {v?.node?.title}
</button>
</label> */
}
