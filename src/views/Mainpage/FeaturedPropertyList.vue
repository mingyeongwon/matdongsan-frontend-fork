<template>
    <div class="mt-5 container mb-5">
        <h4 class="fw-bold">인기 매물</h4>
        <div class="d-flex w-100">
            
                <div v-for="(item) in dataList" :key="item.detailInfo" class="w-25 m-2">
                    <router-link to="/Property" class="text-decoration-none text-dark">
                        <div>
                            <img class="" width="230" height="230" :src="item.imgSrc" alt="">
                        </div>
                        <div class="featuredlistInfo-box">
                            <p class="featuredlist-title mb-2 mt-2"><b>{{ item.title }}</b></p>
                            <p class="featuredlist-info">{{ item.floor }}층, {{ item.size }}m<sup>2</sup>, 관리비 {{ item.maintenance }}만</p>
                            <p class="featuredlist-info">{{ item.detailInfo }}</p>
                        </div>
                    </router-link>
                </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// 임시 데이터 배열
let dataList = ref([
    { imgSrc: "https://cdn.ggumim.co.kr/cache/star/600/4f88ed25-b172-4ed7-b1cc-8e959c33d786.jpg", title: "월세 2000/20", floor: 3, size: 20.97, maintenance: 8, detailInfo: "작은 테라스 있는 9호선 양천향교역 도보 3분 풀옵션 넓음" },
    { imgSrc: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/164559300681759374.jfif?w=960&h=960&c=c", title: "전세 5000", floor: 2, size: 15.75, maintenance: 5, detailInfo: "9호선 양천향교역 도보 3분" },
    { imgSrc: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/164056794151881348.jpg?w=960&h=960&c=c", title: "월세 1000/10", floor: 1, size: 10.50, maintenance: 3, detailInfo: "풀옵션 넓음" },
    { imgSrc: "https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/165041153592779923.jpeg?w=960&h=960&c=c", title: "월세 500/5", floor: 4, size: 5.25, maintenance: 2, detailInfo: "9,5호선 역세권 풀옵션 오피스텔" }
]);
</script>

<style scoped>
.featuredlistInfo-box {
    width: 230px;
}
p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
}

.featuredlist-info {
    font-size: 14px;
}

.featuredlist-title {
    font-size: 18px;
}


</style>
