const routes = [
    {
        path: "/QNA/CustomerInquiryForm",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/CustomerInquiryForm')
    },
    {
        path: "/QNA/CustomerInquiryUpdateForm",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/CustomerInquiryUpdateForm')
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
    {
        path: "/QNA/NoticeUpdateForm",
        component: () =>  import(/* webpackChunkName: "Qna" */ '@/views/Qna/NoticeUpdateForm')
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