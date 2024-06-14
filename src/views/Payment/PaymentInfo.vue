<template>
<div>
    <div><h1>상품 소개</h1></div>
    <div class="product-Form-box">
        <div>
            <h1>
                <p>원하는 매물을</p>
                <p>등록할 수 있는 일반 상품</p>
            </h1>
            <p>원룸, 투룸, 오피스텔 등 원하는 매물을 등록할 수 있습니다.</p>
            <p>월 300만명이 부동산을 검색하는 집이지에 매물을 노출하세요.</p>
        </div>
    </div>
    <div class="product-advertisement-box">
        <div>
            <h1>
                <p>검색 시 등록 매물을</p>
                <p>최상단에 노출할 수 있는 광고 상품</p>
            </h1>
            <p>집이지 검색결과 가장 상단에 보유 매물이 노출되는 상품입니다.</p>
            <p>부동산 정보와 함께 노출됩니다.</p>
        </div>
    </div>
    <div class="products-box">
        <div>
            <h1>상품 종류</h1>
            <p>VAT 포함</p>
            <ul>
                <li>
                    <div class="card">
                        <h1 class="card-title">일반 상품</h1>
                        <p class="card-text">매물 3개 등록 가능</p>
                        <p class="card-text">30,000</p>
                        <RouterLink class="btn btn-warning" to="/Payment">구매하기</RouterLink>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <h1 class="card-title">광고 상품</h1>
                        <p class="card-text">3개월 광고 가능</p>
                        <p class="card-text">90,000</p>
                        <RouterLink class="btn btn-warning" to="/Payment">구매하기</RouterLink>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- <div class="service-box">
        <div>
            <h1>주요 기능</h1>
            <div>
                <div class="img-container">
                    <img src="https://pro.dabangapp.com/static/media/agent.5b9183a9.png">
                </div>
                <div>

                </div>
            </div>
        </div>
    </div> -->
    <div class="info-box">
        <h1>궁금한 부분이 있으신가요?</h1>
        <p>광고 상품 및 이용에 대한 문의는 언제든지 고객센터에 문의해 주세요.</p>
        <button class="btn  btn-outline-secondary">고객센터 바로가기</button>
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.product-Form-box {
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
}

.products-box {
    background-color: rgb(243, 246, 251);
    width: 100%;
}

.products-box > div {
    padding: 100px 0px 100px;
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    text-align: center;
}

ul {
    display: flex;
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
    padding-top: 80px;
    padding-bottom: 80px;
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
