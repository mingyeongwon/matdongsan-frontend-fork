const routes = [
    {
        path: "/agentList",
        name: "AgentList",
        component: () =>
          import(/* webpackChunkName: "Agent" */ "../views/AgentList"),
      },
      {
        path: "/agentList/AgentDetail",
        name: "AgentDetail",
        component: () =>
          import(/* webpackChunkName: "Agent" */ "../views/AgentDetail"),
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "About" */ "../views/About"),
      },
      {
        path: "/agentSignup",
        name: "AgentSignup",
        component: () =>
          import(/* webpackChunkName: "Agent" */ "../views/AgentSignup"),
      },
  ];

  export default routes;