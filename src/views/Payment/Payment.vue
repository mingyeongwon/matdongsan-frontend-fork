<template>
  <form action="">
    <div class="text-center mt-5 w-50 container">
  <h3 style="font-weight: bold; margin-bottom: 30px;">상품 서비스 구매</h3>

      <div class="row w-75">
        <div class="col">
        <div class="option-box me-2" style="height: 200px">
          <div style="margin-top: 90px" >
          <img class="w-25" src="@/assets/home.png" alt="" />
          </div>
          <div class="mt-3 fw-bold mb-3">매물 등록권 X 1</div>
        </div>
        <p class="mt-3" style="font-size: 0.9rem">가격<br> 5,500원</p>
      </div>
      <div class="col">
        <div class="option-box me-2" style="height: 200px">
          <div class="pt-5" style="margin-top: 40px;">
          <img class="w-25" src="@/assets/home.png" alt="" />
          <img class="w-25" src="@/assets/home.png" alt="" />
          <img class="w-25" src="@/assets/home.png" alt="" />
          </div>
          <div class="mt-3 fw-bold mb-3">매물 등록권 X 3</div>
        </div>
        <p class="mt-3" style="font-size: 0.9rem">가격<br> 15,500원</p>
        </div>        
        <div class="col">
        <div class="option-box me-2" style="height: 200px; padding-top: 29px;">
          <div class="" style="padding-top: 10px;">
          <img class="w-25" src="@/assets/home.png" width="70" alt="" />
          <img class="w-25" src="@/assets/home.png" width="70" alt="" /><br>
          <img class="w-25" src="@/assets/home.png" width="70" alt="" />
          <img class="w-25" src="@/assets/home.png" width="70" alt="" />
          <img class="w-25" src="@/assets/home.png" width="70" alt="" />
          </div>
          <div class="mt-3 fw-bold mb-3">매물 등록권 X 5</div>
        </div>
        <p class="mt-3" style="font-size: 0.9rem">가격<br> 25,000원</p>
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
              <th scope="row">0원</th>
              <th scope="row" >-</th>
              <td class="text-danger fw-bold">0원</td>
              <td>=</td>
              <td  class="fw-bold">0원</td>
            </tr>
          </tbody>
        </table>
        <div class="ms-5 me-5">
        <RouterLink to="/Payment/PaymentResult" class="btn btn-warning text-center me-5 pt-1" style="height: 40px; width: 30%; font-weight: bold;">결제하기</RouterLink>
        <RouterLink to="/" class="btn text-center" style="border: 2px solid grey; height: 40px; width: 30%; font-weight: bold;" >취소</RouterLink>
      </div>
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
  border-radius: 20px; border: 2px solid black;
}
.option-box:hover{
  border: 4px solid #FEC83F;
}

table *{
  font-size: 0.9rem;;
}

</style>
