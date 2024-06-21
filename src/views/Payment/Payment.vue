<template>
  <form action="">
    <div class="text-center mt-5 w-50 container">
      <h3 style="font-weight: bold; margin-bottom: 30px">상품 서비스 구매</h3>

      <div class="row w-75 mb-5">
        <div class="col" @click="getProductPrice(5500, '1')">
          <div
            :class="{ 'option-box': true, selected: productPrice === 5500 }"
            class="me-2 h-75"
            style="height: 200px"
          >
            <div style="margin-top: 90px">
              <img class="w-25" src="@/assets/home.png" alt="" />
            </div>
            <div class="mt-3 fw-bold mb-3">매물 등록권 X 1</div>
          </div>
          <p class="mt-3 fw-bold h5">
            가격<br />
            5,500원
          </p>
        </div>
        <div class="col" @click="getProductPrice(15500, '3')">
          <div
            :class="{ 'option-box': true, selected: productPrice === 15500 }"
            class="me-2 h-75"
          >
            <div class="pt-5" style="margin-top: 40px">
              <img class="w-25" src="@/assets/home.png" alt="" />
              <img class="w-25" src="@/assets/home.png" alt="" />
              <img class="w-25" src="@/assets/home.png" alt="" />
            </div>
            <div class="mt-3 fw-bold mb-3">매물 등록권 X 3</div>
          </div>
          <p class="mt-3 h5 fw-bold">
            가격<br />
            15,500원
          </p>
        </div>
        <div class="col" @click="getProductPrice(25000, '5')">
          <div
            :class="{ 'option-box': true, selected: productPrice === 25000 }"
            class="me-2 h-75"
          >
            <div class="h-100 mt-4 pt-3">
              <div class="">
                <img class="w-25" src="@/assets/home.png" width="70" alt="" />
                <img
                  class="w-25"
                  src="@/assets/home.png"
                  width="70"
                  alt=""
                /><br />
                <img class="w-25" src="@/assets/home.png" width="70" alt="" />
                <img class="w-25" src="@/assets/home.png" width="70" alt="" />
                <img class="w-25" src="@/assets/home.png" width="70" alt="" />
              </div>
              <div class="mt-3 fw-bold mb-3">매물 등록권 X 5</div>
            </div>
          </div>
          <p class="mt-3 fw-bold h5">
            가격<br />
            25,000원
          </p>
        </div>
      </div>
      <hr class="border-2" />

      <div class="mt-5 section2 ms-5">
        <table class="table w-75 mb-5 table-borderless">
          <thead>
            <tr>
              <th scope="col">가격</th>
              <th></th>
              <th scope="col">할인</th>
              <th></th>
              <th scope="col">총 결제금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="w-25" scope="row">
                {{ productPrice.toLocaleString() }}원
              </th>
              <th scope="row">-</th>
              <td class="text-danger fw-bold">0원</td>
              <td>=</td>
              <td class="fw-bold">{{ productPrice.toLocaleString() }}원</td>
            </tr>
          </tbody>
        </table>
        <div class="ms-5 me-5">
          <RouterLink
            :to="{ path: `/Payment/PaymentResult/${product}` }"
            class="btn btn-warning text-center me-4"
            style="height: 40px; width: 30%; font-weight: bold"
            >결제하기</RouterLink
          >
          <RouterLink
            to="/"
            class="fw-bold btn text-center align-self-center"
            style="
              border: 2px solid grey;
              height: 40px;
              width: 30%;
              font-weight: bold;
            "
            >취소</RouterLink
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const productPrice = ref(0);
const cardStyle = ref("option-box");
const product = ref("");
function getProductPrice(price, productName) {
  productPrice.value = price;
  product.value = productName;
  cardStyle.value = "option-box-clicked";
}
</script>

<style scoped>
.w-75 {
  margin-left: auto;
  margin-right: auto;
}
.option-box {
  cursor: pointer;
  border-radius: 20px;
}
.option-box {
  border: 2px solid black;
}
.selected {
  border: 2px solid #fec83f;
}
.option-box:hover {
  border: 2px solid #fec83f;
}

table * {
  font-size: 0.9rem;
}
</style>
