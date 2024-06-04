<template>
  <div class="infoContentStyle">
    <div>
      
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
    <div>
      <button class="btn">회원탈퇴</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
}

.infoContentStyle {
  width: 476px;
  margin: 0px auto;
  padding: 68px;
  border: 1px solid rgb(245, 245, 245);
}

h1, p {
  font-size: 14px;
}
</style>
