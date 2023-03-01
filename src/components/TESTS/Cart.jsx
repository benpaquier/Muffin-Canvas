import React from "react";

import { useMutation, useQuery } from "@apollo/client";

import {
  CART_CREATE,
  CART_ADD_LINES,
  CART_UPDATE_LINE,
} from "../../api/graphql/cart/mutations";
import { GET_CART } from "../../api/graphql/cart/queries";

const Cart = () => {
  // GET A CART
  //   const { loading, error, data } = useQuery(GET_CART, {
  //     variables: {
  //       id: "gid://shopify/Cart/c1-a3668fad7c381ba3ae66ef00e082f209",
  //     },
  //   });
  // CREATE A CART
  //   const [cartCreate, { loading, error, data }] = useMutation(CART_CREATE);
  //   const handleClick = () => {
  //     cartCreate({
  //       variables: {
  //         input: {
  //           buyerIdentity: {
  //             customerAccessToken: "eaa4c8720814751ca96389a35ab10871",
  //           },
  //           email: "kiwilud@gmail.com",
  //         },
  //       },
  //     });
  //   };
  // ADD A LINE TO A CART
  //   const [cartAddLines, { loading, error, data }] = useMutation(CART_ADD_LINES);
  //   const handleClick = () => {
  //     cartAddLines({
  //       variables: {
  //         cartId: "gid://shopify/Cart/c1-a3668fad7c381ba3ae66ef00e082f209",
  //         lines: [
  //           {
  //             merchandiseId: "gid://shopify/ProductVariant/44545518698772",
  //             quantity: 1,
  //           },
  //         ],
  //       },
  //     });
  //   };
  //   UPDATE A LINE IN A CART
  //   const [cartLinesUpdate, { loading, error, data }] =
  //     useMutation(CART_UPDATE_LINE);
  //   const handleClick = () => {
  //     cartLinesUpdate({
  //       variables: {
  //         cartId: "gid://shopify/Cart/c1-a3668fad7c381ba3ae66ef00e082f209",
  //         lines: [
  //           {
  //             id: "gid://shopify/CartLine/618cd8fb-7d48-4375-9210-a0090bf53071?cart=c1-a3668fad7c381ba3ae66ef00e082f209",
  //             merchandiseId: "gid://shopify/ProductVariant/44545518698772",
  //             quantity: 55,
  //           },
  //         ],
  //       },
  //     });
  //   };
  //   if (loading) {
  //     return <p>"Loading"</p>;
  //   }
  //   if (error) {
  //     return <p>{JSON.stringify(error)}</p>;
  //   }
  //   if (data) {
  //     return <p>{JSON.stringify(data)}</p>;
  //   }
  //   return <button onClick={handleClick}>Test</button>;
};

export default Cart;
