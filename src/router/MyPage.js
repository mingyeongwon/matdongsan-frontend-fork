const routes = [
  {
    path: '/MyPage/MyQna',
    component: () =>
    import("@/views/MyPage/MyQna")
  },
  {
    path: '/MyPage/MyComplaint',
    component: () =>
    import("@/views/MyPage/MyComplaint")
  },
  {
    path: '/MyPage/MyInfo',
    component: () =>
    import("@/views/MyPage/MyInfo")
  },
];

export default routes;
