<template>
  <div class="filter-popup">
    <form action="">
      <div class="d-flex justify-content-end w-100">
        <div class="d-flex">
          <input
            class="form-control me-2 w-auto"
            type="search"
            placeholder="주소 검색"
            aria-label="Search"
            v-model="searchKeyword"
          />
        </div>
        <div class="d-flex">
          <button class="btn btn-outline-success">필터</button>
        </div>
      </div>
      <div class="mt-2">
        <div class="d-flex border-top">
          <div class="filter-box border-start">
            <div>거래유형</div>
            <div>
              <ul class="">
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    전세
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    월세
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-box">
            <div>거래종류</div>
            <div>
              <ul class="">
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    직거래
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    중개
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-box">
            <div>층수</div>
            <div>
              <ul class="">
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    반지하
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    지상
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    옥탑방
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-box">
            <div>가격</div>
            <div>
              <ul class="">
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    낮은순
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    높은순
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-box">
            <div>날짜</div>
            <div>
              <ul class="">
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    최신순
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" name="" id="" />
                    오래된순
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-top p-3 d-flex justify-content-end">
          <button class="btn btn-outline-secondary">초기화</button>
          <button class="btn btn-warning ms-2">조건검색</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchKeyword = ref("");
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  padding-top: 10px;
}

.filter-box {
  padding: 24px 10px 7px 17px;
  width: 20%;
  border-right: 1px solid #e0e0e0;
}
</style>
