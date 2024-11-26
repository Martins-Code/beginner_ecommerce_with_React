const importImages = require.context(
  "./assets/products",
  false,
  /\.(avif|webp|png|jpe?g|svg)$/
);

export const PRODUCTS = [
  {
    id: 1,
    productName: "iPhone",
    price: 674.45,
    productImage: importImages("./iphone.png"),
  },
  {
    id: 2,
    productName: "MacBook",
    price: 1200.99,
    productImage: importImages("./macbook.webp"),
  },
  {
    id: 3,
    productName: "Air Conditioner",
    price: 499.99,
    productImage: importImages("./aircon.webp"),
  },
  {
    id: 4,
    productName: "Camera",
    price: 320.0,
    productImage: importImages("./camera.webp"),
  },
  {
    id: 5,
    productName: "PlayStation 5",
    price: 599.99,
    productImage: importImages("./ps5.avif"),
  },
  {
    id: 6,
    productName: "Router",
    price: 79.99,
    productImage: importImages("./router.png"),
  },
  {
    id: 7,
    productName: "Television",
    price: 899.0,
    productImage: importImages("./tv.jpg"),
  },
  {
    id: 8,
    productName: "Xbox",
    price: 549.99,
    productImage: importImages("./xbox.png"),
  },
];
