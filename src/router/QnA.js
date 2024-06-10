const routes = [
    {
        path: "/QnA/ask",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/AskForm.vue')
    },
    {
        path: "/QnA/FAQ",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/FAQ.vue')
    },
    {
        path: "/QnA/notice",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/Notice.vue')
    },
    {
        path: "/QnA/noticeform",
        component: () =>  import(/* webpackChunkName: "QnA" */ '@/views/QnA/NoticeForm.vue')
    },
    
   
    
];

export default routes;