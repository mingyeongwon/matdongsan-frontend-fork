<template>
    <div>
        <div>
            <div class="photoContainer">
                <div class="first"><img src="https://photos.zillowstatic.com/fp/f95a407a00e51654545dbec4d9a5400f-cc_ft_768.webp" alt=""></div>
                <div><img src="https://photos.zillowstatic.com/fp/17c649bba13d15df3cccf0b91b52d9e0-cc_ft_768.webp" alt=""></div>
                <div><img src="https://photos.zillowstatic.com/fp/a2805e62f01b4be3d99c50f76eaf8cc4-cc_ft_768.webp" alt=""></div>
                <div><img src="https://photos.zillowstatic.com/fp/2ab0729fe00ec391ecb064b786b102eb-cc_ft_768.webp" alt=""></div>
                <div><img src="https://photos.zillowstatic.com/fp/bcd02478396f1bc38c713a0b87e85c9b-cc_ft_768.webp" alt=""></div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  </script>
  
  <style scoped>
  .photoContainer {
    display: grid;
    grid-template-columns: 586px minmax(0px, 1fr) minmax(0px, 1fr);
    grid-template-rows: repeat(2, minmax(0px, 1fr));
    gap: 8px;
    width: 100%;
    height: 440px;
  }

  .first {
    grid-row: 1 / 3;
  }
  </style>