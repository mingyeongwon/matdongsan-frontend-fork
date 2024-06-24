const routes = [
    {
        path: "/QNA/CustomerInquiryForm",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/CustomerInquiryForm')
    },
    {
        path: "/QNA/FAQ",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/Faq')
    },
    {
        path: "/QNA/Notice",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/Notice')
    },
    {
        path: "/QNA/noticeform",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/NoticeForm')
    },
    {
        path: "/QNA/temp",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/CustomerInquiryForm/temp.vue')
    },
    
   
    
];

export default routes;