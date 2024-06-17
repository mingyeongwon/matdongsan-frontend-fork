<template>
    <div class="mt-5 container mb-5">
        <h4 class="fw-bold">인기매물</h4>
        <div class="d-flex justify-content-evenly">
            <div v-for="item in dataList" :key="item.title">
                <CardItem :propertyData="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import CardItem from "@/components/PropertyItem.vue";

// 임시 데이터 배열
let dataList = [
    { title: "2000/ 월세 20", floor: 3, size: 20.97, maintenance: 8, detailInfo: "너무 넓음" },
    { title: "1500/ 월세 15", floor: 2, size: 15.75, maintenance: 5, detailInfo: "적당히 넓음" },
    { title: "1000/ 월세 10", floor: 1, size: 10.50, maintenance: 3, detailInfo: "좁음" },
    { title: "500/ 월세 5", floor: 4, size: 5.25, maintenance: 2, detailInfo: "매우 좁음" }
];
</script>

<style scoped>
</style>
