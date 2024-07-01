const routes = [
  {
    path: "/Product/ProductDetail",
    component: () => import(/* webpackChunkName: "Product" */"@/views/Product/ProductDetail"),
  },
];

export default routes;
