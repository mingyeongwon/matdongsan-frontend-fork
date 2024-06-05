const routes = [
    {
        path: "/QnA",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/')
    },
    {
        path: "/QnA/ask",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/Ask/ask.vue')
    },
    {
        path: "/QnA/FAQ",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/FAQ/FAQ.vue')
    },
    {
        path: "/QnA/notice",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/Notice/notice.vue')
    },
    
   
    
];

export default routes;