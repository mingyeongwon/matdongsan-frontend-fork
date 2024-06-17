<template>
<!-- 검색 및 정렬 -->
<div class="w-75">
        <div class="d-flex" style="justify-content: end; margin-top: 60px">
          
          <select name="sortType" id="sortType" style="border-radius: 15px; width: 200px; height: 35px; border: 1px solid black; padding-left: 10px; margin-right: 10px; background-color: transparent;">
              <option value="sort1">카테고리</option>
              <option value="sort2">정렬2</option>
              <option value="sort3">정렬3</option>
            </select>
          
          <input type="text" placeholder="검색어를 입력해주세요" style="border-radius: 5px; width: 250px; border: 1.5px solid grey;">
          <div class="ms-2">
          <button style="border-radius: 100%; border:none; background-color: #FEC83F; width: 30px; height:30px; justify-content: center; align-items: center;"  class="d-flex"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>  
      </div>  
</template>

<script setup>
</script>

<style scoped>
</style>
