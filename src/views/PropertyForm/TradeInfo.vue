<template>
    <div class="mt-5">
      <h4>거래 정보</h4>
      <hr />
      <span class="me-5">거래 종류 *</span>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input border bodrer-1 border-secondary"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          v-model="propertyInfo.paymentType"
          value="전세"
          @change="handlePaymentTypeChange"
        />
        <label class="form-check-label me-3" for="inlineRadio1">전세</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input border bodrer-1 border-secondary"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          v-model="propertyInfo.paymentType"
          value="월세"
          @change="handlePaymentTypeChange"
        />
        <label class="form-check-label" for="inlineRadio2">월세</label>
      </div>
  
      <div class="mt-3">
        <span class="me-5">가격 정보 *</span>
        <input type="text" v-model="propertyInfo.deposite" placeholder="보증금"/> 만원 /
        <input type="text" v-model="propertyInfo.price" placeholder="월세" :disabled="propertyInfo.paymentType !== '월세'" /> 만원
      </div>
  
      <div class="mt-3">
        <span class="me-4">공용관리비 * </span>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="mainteneceOptions"
            id="maintenece1"
            value="No"
            v-model="propertyInfo.maintenance"
            @change="handleMaintenanceChange"
          />
          <label class="form-check-label me-3" for="maintenece1">없음</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="mainteneceOptions"
            id="maintenece2"
            value="Yes"
            v-model="propertyInfo.maintenance"
            @change="handleMaintenanceChange"
          />
          <label class="form-check-label me-3" for="maintenece2">있음</label>
          <input
            type="text"
            placeholder="관리비"
            v-model="propertyInfo.maintenanceCost"
            :disabled="propertyInfo.maintenance !== 'Yes'"
          />
          원
        </div>
      </div>
  
      <div class="mt-3">
        <span class="me-4">입주 가능 일자 *</span>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="move-in-date-Options"
            id="move-in1"
            value="today"
            v-model="propertyInfo.moveIn"
            @change="handleMoveInChange"
          />
          <label class="form-check-label me-3" for="move-in1">즉시입주</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input border bodrer-1 border-secondary"
            type="radio"
            name="move-in-date-Options"
            id="move-in2"
            value="notToday"
            v-model="propertyInfo.moveIn"
          />
          <label class="form-check-label me-3" for="move-in2">일자 선택</label>
          <input
            type="date"
            :disabled="propertyInfo.moveIn !== 'notToday'"
            v-model="propertyInfo.moveInDate"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { toRefs } from 'vue';
  
  const props = defineProps({
    propertyInfo: Object
  });
  
  const { propertyInfo } = toRefs(props);
  
  const emit = defineEmits(['maintenanceChange', 'paymentTypeChange','moveInChange']);
  
  function handleMaintenanceChange() {
    emit('maintenanceChange');
  }

  function handlePaymentTypeChange(){
    emit('paymentTypeChange');
  }

  function handleMoveInChange(){
    emit('moveInChange');
  }
  </script>
  