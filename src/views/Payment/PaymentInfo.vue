<template>
    <div class="root container w-50">
        <div>
            <h3 style="font-weight: bold; text-align: center; margin-bottom: 30px; margin-top: 60px">매물 등록하기</h3>
        </div>
        <hr>
        <div class="row mt-5 mb-5" style="margin-left: 50px; height: 280px">
            <div class="col-5 mt-5">
                <p style="font-size: 1.7rem; font-weight: bold;">원하는 매물을<br> 등록할 수 있는 상품</p>
                <span style="font-size: 1rem;">원하는 매물을 등록할 수 있습니다.<br>
                월 300만명이 부동산을 검색하는 맛동산에<br> 매물을 노출하세요</span>
            </div>
            <div class="col-6">
                <img src="@/assets/paymentInfo.svg" class="card-img-top img-fluid" alt="..." style="margin-left: 50px; max-width: 100%;" />
            </div>
        </div>
        
    
        <!-- 상품 종류 -->
        <div class="products-box">
            <div>
                <h3>상품 종류</h3>
                <ul class="row" style="padding-right: 32px">
                    <li class="col">
                        <div class="card" style="height: 330px" >
                            <div style="margin-top: 64px; padding-top: 30px" >
                            <img style="width: 22%;" src="@/assets/home.png" alt="" />
                            </div>
    
                            <p class="card-text mt-3 mb-0" style="font-weight: bold; font-size: 1.2rem;">등록 건 1개</p>
                            <hr>
                            <p style="font-weight: bold; font-size: 1.5rem; color: #326CF9;">5,500원</p>
                            <RouterLink class="btn btn-warning w-50 container" style="margin-bottom: 20px; font-size: 0.9rem" to="/Payment">구매하기</RouterLink>
                        </div>
                    </li>
                    <li class="col">
                        <div class="card"  style="height: 330px">
                            <div style="margin-top: 65px; padding-top: 30px;">
                                <img style="width: 22%;" src="@/assets/home.png" alt="" />
                                <img style="width: 22%;" src="@/assets/home.png" alt="" />
                                <img style="width: 22%;" src="@/assets/home.png" alt="" />
                            </div>
    
                            <p class="card-text mt-3 mb-0" style="font-weight: bold; font-size: 1.2rem;">등록 건 3개</p>
                            <hr>
                            <p style="font-weight: bold; font-size: 1.5rem; color: #326CF9;">15,000원</p>
                            <RouterLink class="btn btn-warning w-50 container" style="margin-bottom: 20px; font-size: 0.9rem" to="/Payment">구매하기</RouterLink>
                        </div> 
                    </li>
                    <li class="col">
                        <div class="card"  style="height: 330px">
                            <div style="margin-top: 40px;">
                                <img style="width: 22%;" src="@/assets/home.png" alt="" />
                                <img style="width: 22%;" src="@/assets/home.png" alt="" /><br>
                                <img style="width: 22%;" src="@/assets/home.png" alt="" />
                                <img style="width: 22%;" src="@/assets/home.png" alt="" />
                                <img style="width: 22%;" src="@/assets/home.png" alt="" />
                            </div>
    
                            <p class="card-text mt-3 mb-0" style="font-weight: bold; font-size: 1.2rem;">등록 건 5개</p>
                            <hr>
                            <p style="font-weight: bold; font-size: 1.5rem; color: #326CF9;">25,000원</p>
                            <RouterLink class="btn btn-warning w-50 container" style="margin-bottom: 20px; font-size: 0.9rem;" to="/Payment">구매하기</RouterLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row mt-5 mb-5" style="margin-left: 50px; height: 260px">
            <div class="col-5 mt-5">
                <p style="font-size: 1.7rem; font-weight: bold">맛동산 PC 사이트</p>
                <span style="font-size: 1rem;">맛동산 웹사이트의 모든 검색 결과에 노출됩니다.<br>
                검색되는 모든 결과에 노출되므로<br>등록 수량이 많을 수록 광고 효과가 높아집니다.</span>
            </div>
            <div class="col-6 ms-5">
                <img src="@/assets/paymentInfo2.svg" class="card-img-top img-fluid" alt="..." style=" max-width: 100%;">
            </div>
        </div>
        <div class="info-box">
            <h3 style="font-weight: bold; margin-bottom: 40px">궁금한 부분이 있으신가요?</h3>
            <p style="font-size: small;">광고 상품 및 이용에 대한 문의는 언제든지 고객센터에 문의해 주세요.</p>
            <RouterLink to="/QNA/Notice"><button class="btn  btn-outline-secondary mt-4">고객센터 바로가기</button></RouterLink>
        </div>
    </div>
    </template>
    
    <script setup>
    </script>
    
    <style scoped>
    /* .product-Form-box {
        width: 100%;
        height: 540px;
        border-top: 1px solid rgb(228, 228, 228);
    }
    
    
    .product-Form-box > div {
        background-image: url("https://pro.dabangapp.com/static/media/intro.8e198009.png");
        background-size: 394px 442px;
        background-position: 700px 98px;
        background-repeat: no-repeat;
        width: 1200px;
        height: 100%;
        margin: 0px auto;
    }
    
    .product-advertisement-box {
        width: 100%;
        height: 540px;
    }
    
    .product-advertisement-box > div {
        background-image: url("https://pro.dabangapp.com/static/media/intro.197da0ec.png");
        background-size: 394px 442px;
        background-position: 700px 98px;
        background-repeat: no-repeat;
        width: 1200px;
        height: 100%;
        margin: 0px auto;
    } */
    
    .products-box {
        background-color: rgb(243, 246, 251);
        /* width: 100%; */
    }
    
    .products-box > div {
        padding: 40px 0px 50px;
        /* width: 1200px; */
        height: 500px;
        margin: 0px auto;
        text-align: center;
    }
    
    ul {
        /* display: flex; */
        justify-content: center;
        list-style: none;
    }
    
    li {
        display: flex;
        flex-direction: column;
        width: 336px;
        padding: 40px 25px;
    }
    
    .info-box {
        border-top: 1px solid rgb(237, 237, 237);
        text-align: center;
        padding-top: 60px;
        padding-bottom: 20px;
    }
    
    .service-box > div {
        display: flex;
        width: 1040px;
        height: 520px;
    }
    
    .service-box > div > h1 {
        text-align: center;
    }

   
    
    </style>