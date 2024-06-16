<template>
  <div>
    <div>메인서비스 - 매물</div>
    <div class="d-flex p-3 ">
        <div
          class="property-list-box w-25 border border-1 border-dark h-100 p-3 row row-cols-2"
        >
        <div class="col w-50 mt-3">
            <PropertyItem/>
        </div>
        <div class="col w-50 mt-3">
            <PropertyItem/>
        </div>
        <div class="col w-50 mt-3">
            <PropertyItem/>
        </div>
        <div class="col w-50 mt-3">
            <PropertyItem/>
        </div>
        </div>
      <div class="right-box ms-4 col border border-1 border-dark h-100 p-3">
        <DetailInfos class="h-100"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import PropertyItem from "@/components/PropertyItem.vue";
import DetailInfos from "./DetailInfos.vue";
</script>

<style scoped>
/* .property-list-box {
  width: 400px;
} */
.right-box{
    width:800px;
}
</style>
