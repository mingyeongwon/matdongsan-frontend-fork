const routes = [
    {
        path: "/QnA",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA')
    },
    {
        path: "/QnA/ask",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/Ask.vue')
    },
    {
        path: "/QnA/FAQ",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/FAQ.vue')
    },
    {
        path: "/QnA/notice",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/Notice.vue')
    },
    
   
    
];

export default routes;