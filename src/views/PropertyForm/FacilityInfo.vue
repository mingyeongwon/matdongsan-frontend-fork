<template>
    <div class="mt-5">
      <h4>시설 정보</h4>
      <hr />
      <div class="mt-3">
        <span class="me-5">난방시설</span>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border border-1 border-secondary"
            type="radio"
            name="heating-Options"
            id="heating-Option1"
            value="Yes"
            v-model="propertyInfo.heating"
          />
          <label class="form-check-label me-3" for="heating-Option1">없음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border border-1 border-secondary"
            type="radio"
            name="heating-Options"
            id="heating-Option2"
            value="No"
            v-model="propertyInfo.heating"
          />
          <label class="form-check-label me-3" for="heating-Option2">있음</label>
        </div>
      </div>
      <div class="mt-3 mb-3">
        <span class="me-5">냉방시설</span>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border border-1 border-secondary"
            type="radio"
            name="cooling-Options"
            id="cooling-Option1"
            value="No"
            v-model="propertyInfo.cooling"
          />
          <label class="form-check-label me-3" for="cooling-Option1">없음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border border-1 border-secondary"
            type="radio"
            name="cooling-Options"
            id="cooling-Option2"
            value="Yes"
            v-model="propertyInfo.cooling"
          />
          <label class="form-check-label me-3" for="cooling-Option2">있음</label>
        </div>
      </div>
      <span class="col-1 me-3">생활시설</span>
      <div class="mt-3 d-flex flex-wrap justify-content-start">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border border-1 border-secondary"
            type="checkbox"
            name="util-Options"
            id="util-Option"
            value="전체선택"
            @change="toggleSelectAll"
            :checked="allSelected"
          />
          <label class="form-check-label me-3" for="util-Option">전체선택</label>
        </div>
        <div class="form-check form-check-inline" v-for="util in utilities" :key="util">
          <input
            class="form-check-input border border-1 border-secondary"
            type="checkbox"
            name="util-Options"
            :id="'util-Option' + util"
            :value="util"
            v-model="propertyInfo.utility"
          />
          <label class="form-check-label me-3" :for="'util-Option' + util">{{ util }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, toRefs } from 'vue';
  
  const props = defineProps({
    propertyInfo: Object
  });
  
  const { propertyInfo } = toRefs(props);
  
  const utilities = [
    "침대",
    "책상",
    "옷장",
    "신발장",
    "냉장고",
    "세탁기",
    "가스레인지",
    "인덕션",
    "전자레인지",
    "TV"
  ];
  
  const allSelected = ref(false);
  
  function toggleSelectAll() {
    if (allSelected.value) {
      propertyInfo.utility = [];
    } else {
      propertyInfo.utility = utilities.slice();
    }
    allSelected.value = !allSelected.value;
  }
  </script>
  