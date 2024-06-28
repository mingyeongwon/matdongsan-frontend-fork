const routes = [
    {
      path: "/Adminpage/CusomerInquiry",
      component: () =>
        import(/* webpackChunkName: "MainService" */ "@/views/Adminpage/CustomerInquiry"),
    },
    {
      path: "/Adminpage/ReportFalse",
      component: () =>
        import(/* webpackChunkName: "MainService" */ "@/views/Adminpage/ReportFalse"),
    },
    {
      path: "/Adminpage/ReportFalseDetail",
      component: () =>
        import(/* webpackChunkName: "MainService" */ "@/views/Adminpage/ReportFalseDetail"),
    },
    {
      path: "/Adminpage/CustomerInquiryDetail",
      component: () =>
        import(/* webpackChunkName: "MainService" */ "@/views/Adminpage/CustomerInquiryDetail"),
    },

      


  ];

  export default routes;