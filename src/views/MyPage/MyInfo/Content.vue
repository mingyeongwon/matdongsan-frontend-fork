<template>
  <div class="container">
    <div class="ContentStyle">
    <div>
      <div class="imageStyle">
        <img class="myImage" src="https://developers.kakao.com/static/images/pc/product/homeicon/friend.png" alt="">
      </div>
    </div>
    <div>
      <ul>
        <li>
          <div><h1>연결된 소셜계정</h1></div>
          <div></div>
        </li>
        <li>
          <div><h1>이름</h1></div>
          <div>
            <p>원민경</p>
          </div>
        </li>
        <li>
          <div><h1>휴대폰번호</h1></div>
          <div>
            <p>010-7350-0615</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="buttonStyle">
      <div class="btn" @click="showDeleteModal">회원탈퇴</div>
    </div>
  </div>
  </div>
  <DeleteModal id="DeleteModal" @close="hideDeleteModal" />

</template>

<script setup>
import {onMounted} from "vue";
import {Modal} from "bootstrap";
import DeleteModal from "./DeleteModal.vue";

let deleteModal = null;

onMounted(() => {
  deleteModal = new Modal(document.querySelector("#DeleteModal"));
});

function showDeleteModal() {
  deleteModal.show();
}

function hideDeleteModal() {
  deleteModal.hide();
}

</script>

<style scoped>
.container {
  padding: 80px 0px 120px;
} 
.buttonStyle {
  padding-top: 40px;
  text-align: center;
}

ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
}

.ContentStyle {
  width: 476px;
  margin: 0px auto;
  padding: 68px;
  border: 1px solid #ddd;
}

h1, p {
  font-size: 14px;
}

.myImage {
  width: 96px;
  height: 96px;
}

.imageStyle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 68px;

}

h1 {
  font-weight: 700;
}
</style>
