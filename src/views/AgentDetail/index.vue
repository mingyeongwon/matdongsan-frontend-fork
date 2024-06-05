<template>
  <div class="">
    <div class="text-start mt-5 w-75 ps-5 test">
        <div class="">
            <img
              src="https://photos.zillowstatic.com/h_l/ISjrsb703kq2pu1000000000.jpg"
              height="150"
              class="rounded-circle me-3"
            />
            <span>희망하는 공인중개사 사무소</span>
        </div>
    </div>

    <InfoDetail />
    <IndividualProductList />
  </div>
</template>

<script setup>
import IndividualProductList from "./IndividualProductList.vue";
import InfoDetail from "./InfoDetail.vue";
</script>

<style scoped>
.test{
    margin-left: auto;
    margin-right:auto;
}
</style>
