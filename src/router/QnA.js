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
        path: "/QNA/Noticeform",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/NoticeForm')
    },

    // 임시 파일 나중에 삭제 예정
    {
        path: "/QNA/temp",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/CustomerInquiryForm/temp.vue')
    },
    {
        path: "/QNA/NoticeDetail",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/NoticeDetail')
    },

    
   
    
];

export default routes;