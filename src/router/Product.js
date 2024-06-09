const routes = [
  {
    path: "/Product/ProductDetail",
    component: () => import(/* webpackChunkName: "Product" */"@/views/Product/ProductDetail"),
  },
  {
    path: "/Product/ProductForm",
    component: () => import(/* webpackChunkName: "Product" */"@/views/Product/ProductForm"),
  },
];

export default routes;
