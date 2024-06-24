<template>
  <div class="mt-5">
    <h4 class="fw-bold">추가 정보</h4>
    <hr />
    <div class="d-flex">
      <span class="me-5">층수 *</span>
      <div class="col-2">
        <small class="">전체 층수</small>
        <select
          class="form-select form-select-sm mb-3 border bodrer-1 border-secondary"
          aria-label=".form-select-sm example"
          v-model="propertyInfo.floor"
        >
          <option value="" disabled hidden selected>선택하세요</option>
          <option value="지상" >지상</option>
          <option value="지하">지하</option>
          <option value="옥탑방">옥탑방</option>
        </select>
      </div>
      <div class="col-1 ms-5">
        <small class="">해당 층수</small>
        <input
          type="text"
          v-model="propertyInfo.totalFloor"
          placeholder="층수를 입력해주세요"
        />
      </div>
    </div>
    <div class="d-flex">
      <div class="col">
        <span class="me-5">엘리베이터 *</span>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="lift-Options"
            id="lift1"
            value="No"
            v-model="propertyInfo.elevator"
          />
          <label class="form-check-label me-3" for="lift1">없음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="lift-Options"
            id="lift2"
            value="Yes"
            v-model="propertyInfo.elevator"
          />
          <label class="form-check-label me-3" for="lift2">있음</label>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <span>주차 가능 여부 * </span>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input border border-1 border-secondary"
          type="radio"
          name="parking-Options"
          id="parking-Option1"
          value="No"
          v-model="propertyInfo.parkingLot"
        />
        <label class="form-check-label me-3" for="parking-Option1">없음</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input border border-1 border-secondary"
          type="radio"
          name="parking-Options"
          id="parking-Option2"
          value="Yes"
          v-model="propertyInfo.parkingLot"
        />
        <label class="form-check-label me-3" for="parking-Option2">있음</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  propertyInfo: Object,
});

const { propertyInfo } = toRefs(props);
</script>
