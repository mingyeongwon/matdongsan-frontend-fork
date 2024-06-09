const routes = [
  {
    path: "/Payment/Payment",
    component: () =>
      import(/* webpackChunkName: "Payment" */ "@/views/Payment/Payment"),
  },
  {
    path: "/Payment/PaymentInfo",
    component: () =>
      import(/* webpackChunkName: "Payment" */ "@/views/Payment/PaymentInfo"),
  },
  {
    path: "/Payment/PaymentResult",
    component: () =>
      import(/* webpackChunkName: "Payment" */ "@/views/Payment/PaymentResult"),
  },
];

export default routes;
