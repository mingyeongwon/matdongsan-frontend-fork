const routes = [
    {
        path: "/Property",
        component: () =>
          import(/* webpackChunkName: "MainService" */ "../views/MainService/Property"),
      },
      {
        path: "/Agent",
        component: () =>
          import(/* webpackChunkName: "MainService" */ "../views/MainService/Agent"),
      },


  ];

  export default routes;