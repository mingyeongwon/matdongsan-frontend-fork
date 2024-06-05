const routes = [
    {
        path: "/agentList",
        name: "AgentList",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Agent" */ "../views/AgentList"),
      },
      {
        path: "/agentDetail",
        name: "AgentDetail",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Agent" */ "../views/AgentDetail"),
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "About" */ "../views/About"),
      },
      {
        path: "/agentSignup",
        name: "AgentSignup",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Agent" */ "../views/AgentSignup"),
      },
  ];

  export default routes;