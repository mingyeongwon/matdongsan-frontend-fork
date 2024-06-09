const routes = [
  {
    path: '/Payment/Payment',
    component: () =>
    import(/* webpackChunkName: "Payment" */ "@/views/Payment/Payment")
  },
  {
    path: '/Payment/OrderConfirmation',
    component: () =>
    import(/* webpackChunkName: "Payment" */ "@/views/Payment/OrderConfirmation")
  },
    {
    path: '/Payment/PaymentInfo',
    component: () =>
    import(/* webpackChunkName: "Payment" */ "@/views/Payment/PaymentInfo")
  },
];

export default routes;
