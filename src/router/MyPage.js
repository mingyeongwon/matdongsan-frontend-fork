const routes = [
  {
    path: '/MyPage/MyQna',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/MyPage/MyQna")
  },
  {
    path: '/MyPage/MyComplaint',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/MyPage/MyComplaint")
  },
  {
    path: '/MyPage/MyInfo',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/MyPage/MyInfo")
  },
];

export default routes;
