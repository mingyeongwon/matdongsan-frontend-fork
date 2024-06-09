<template>
  <form action="">
    <div class="w-75 text-center mt-5">
      <div class="d-flex">
        <div
          class="option-box col border border-dark border-2 border-end-0 p-5"
        >
          <img class="" src="@/assets/ad_icon.jpg" width="100" alt="" />
          <div class="mt-3 fw-bold">집 등록하기</div>
        </div>
        <div class="option-box col border border-dark border-2 p-5">
          <img class="" src="@/assets/house_icon.jpg" width="100" alt="" />
          <div class="mt-3 fw-bold">광고 구매하기</div>
        </div>
      </div>
      <div class="mt-5 section2">
        <table class="table w-50 table-borderless">
          <tbody>
            <tr>
              <th scope="row">주소</th>
              <td>경기도 용인시 처인구 역삼동(처인구)</td>
            </tr>
            <tr>
              <th scope="row">가격</th>
              <td>198,000</td>
            </tr>
            <tr v-if="option === 'ad'">
              <th scope="row">광고수량</th>
              <td colspan="2">3건</td>
            </tr>
            <tr v-if="option !== 'ad'">
              <th scope="row">등록개수</th>
              <td colspan="2">3건</td>
            </tr>
            <tr v-if="option === 'ad'">
              <th scope="row">광고기간</th>
              <td colspan="2">
                <select
                  class="form-select-sm mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>3개월(90일)</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <hr class="border-2" />
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
              <th scope="row">594,000원</th>
              <th scope="row" >-</th>
              <td class="text-danger fw-bold">237,600원</td>
              <td>=</td>
              <td  class="fw-bold">237,600원</td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-warning btn-lg w-50 text-center">구매하기</button>
      </div>
    </div>
  </form>
</template>

<script setup>
let option = "ad";
</script>

<style scoped>
.w-75 {
  margin-left: auto;
  margin-right: auto;
}
.option-box {
  cursor: pointer;
}
table {
  margin-left: auto;
  margin-right: auto;
}
</style>
