import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";
export const fetchProducts = () => async (dispatch) => {
  const data=[
    {
      "id": 1,
      "name": "paracitamol",
      "price": 10,
      "detail": "You can have it in mild fever without prescription",
      "img": "",
      "generic": "",
      "composition": "salt .5g, sugar .5g"
  },
  {
      "id": 2,
      "name": "baby powder",
      "price": 100,
      "detail": "This is for baby under 5 years.",
      "img": "",
      "generic": "",
      "composition": "green leafs"
  },
  {
      "id": 3,
      "name": "sanitary pad",
      "price": 150,
      "detail": "This is for woman",
      "img": "",
      "generic": "",
      "composition": "fur, babana peel"
  },
  {
      "id": 4,
      "name": "face wash",
      "price": 200,
      "detail": "It makes your skin glow",
      "img": "",
      "generic": "",
      "composition": "ginger .5g, onion .4g"
  },
  {
      "id": 5,
      "name": "jomsom powder",
      "price": 250,
      "detail": "It is used for baby under 2 years",
      "img": "",
      "generic": "",
      "composition": "powder .5g, gel .5g"
  },
  {
      "id": 6,
      "name": "DSM Gel",
      "price": 250,
      "detail": "Pain relief",
      "img": "",
      "generic": "",
      "composition": "salt .5g, oil .5g"
  }
  ]
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
