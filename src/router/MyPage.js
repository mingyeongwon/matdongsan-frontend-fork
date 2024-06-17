const routes = [
  {
    path: '/MyPage/CustomerInquiry',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/Mypage/CustomerInquiry")
  },
  {
    path: '/MyPage/ManageMyProperty',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/Mypage/ManageMyProperty")
  },

  {
    path: '/MyPage/ReportFalseListing',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/Mypage/ReportFalseListing")
  },
  {
    path: '/MyPage/DeleteAccount',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/Mypage/DeleteAccount")
  },
  {
    path: '/MyPage/MyInfomation',
    component: () =>
    import(/* webpackChunkName: "MyPage" */ "@/views/Mypage/MyInfomation")
  },
];

export default routes;
