const routes = [
  {
    path: "/Signup/AgentSignup",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "@/views/Signup/AgentSignup"),
  },
  {
    path: "/Signup/MemberSignup",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "@/views/Signup/MemberSignup"),
  },
  {
    path: "/Signup/SignupAgreement",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "@/views/Signup/SignupAgreement"),
  },
];

export default routes;
