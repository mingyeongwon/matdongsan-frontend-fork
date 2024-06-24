<template>
    <div>
      <div class="main-container">
        <div class="room-deal-information-container">
          <div class="room-file-upload-wrapper">
            <div v-if="!files.length" class="room-file-upload-example-container">
              <div class="room-file-upload-example">
                <div class="room-file-image-example-wrapper">이미지</div>
                <div class="room-file-notice-item">
                  실사진 최소 3장 이상 등록하셔야 하며, 가로사진을 권장합니다.
                </div>
                <div class="room-file-notice-item room-file-notice-item-red">
                  로고를 제외한 불필요한 정보(워터마크,상호,전화번호 등)가 있는 매물은 비공개처리됩니다
                </div>
                <div class="room-file-notice-item room-file-upload-button">
                  <div class="image-box">
                    <label for="file">일반 사진 등록</label>
                    <input type="file" id="file" ref="fileInputRef" @change="imageUpload" multiple />
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="file-preview-content-container">
              <div class="file-preview-container">
                <div v-for="(file, index) in files" :key="index" class="file-preview-wrapper">
                  <div class="file-close-button" @click="fileDeleteButton" :name="file.number">
                    x
                  </div>
                  <img :src="file.preview" />
                </div>
                <div class="file-preview-wrapper-upload">
                  <div class="image-box">
                    <label for="file">추가 사진 등록</label>
                    <input type="file" id="file" ref="fileInputRef" @change="imageAddUpload" multiple />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref, onMounted } from 'vue';
  
  const files = ref([]);
  const uploadImageIndex = ref(0);
  const fileInputRef = ref(null);
  
  const imageUpload = () => {
    if (!fileInputRef.value) return; // 사진이 없으면 imageUpload 실행하지 않기
    console.log("FileList 객체 반환",fileInputRef.value.files);
    const newFiles = fileInputRef.value.files; // 여러장이 들어가는 파일들이 객체속의 객체로 저장되어 length를 반환하면 사진의 갯수가 나온다.
    let num = -1;
    for (let i = 0; i < newFiles.length; i++) { // 사진의 갯수만큼 반복
      files.value.push({ // files.value에 객체 넣기 
        file: newFiles[i],
        preview: URL.createObjectURL(newFiles[i]), // 미리보기를 할 임시 URL 생성
        number: i,
      });
      console.log("files 리스트 출력",files.value[i]);
      num = i;
    }
    uploadImageIndex.value = num + 1; // 사진의 갯수 저장
  };
  
  const imageAddUpload = () => {
    if (!fileInputRef.value) return; // 사진이 없으면 imageAddUpload 실행하지 않기
    const newFiles = fileInputRef.value.files;
    let num = -1;
    for (let i = 0; i < newFiles.length; i++) {
      files.value.push({
        file: newFiles[i],
        preview: URL.createObjectURL(newFiles[i]),
        number: i + uploadImageIndex.value,
      });
      num = i;
    }
    uploadImageIndex.value += num + 1;
    console.log(files.value);
  };
  
  const fileDeleteButton = (e) => {
    const name = Number(e.target.getAttribute('name'));
    files.value = files.value.filter(file => file.number !== name);
  };
  
  onMounted(() => {
    fileInputRef.value = document.getElementById('file');
  });
  </script>
  

<style scoped>
 /* 이미지 예제 */
  /* https://loy124.tistory.com/203        */
  .main-container {
            width: 1200px;
            height: 400px;
            margin: 0 auto;
        }
        
        .room-deal-information-container {
            margin-top: 50px;
            color: #222222;
            border: 1px solid #dddddd;
        }
        
        .room-deal-information-title {
            text-align: center;
            font-size: 18px;
            line-height: 60px;
            border-bottom: 1px solid #dddddd;
        }
        
        .room-deal-information-content-wrapper {
            min-height: 50px;
            display: flex;
        }
        
        .room-deal-informtaion-content-title {
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            background-color: #f9f9f9;
        }
        
        .room-deal-information-content {
            width: 100%;
            font-size: 14px;
        }
        
        .room-deal-option-selector {
            display: flex;
            align-items: center;
            padding: 15px;
        }
        
        .room-deal-option-item {
            width: 100px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #cccccc;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .room-deal-option-item:last-child {
            margin-left: 10px;
        }
        
        .room-deal-option-notice {
            margin-left: auto;
            font-size: 14px;
            color: #888888;
        }
        
        .room-deal-option-item-deposit {
            margin-left: 10px;
        }
        
        .room-deal-information-wrapper {
            display: flex;
            flex-direction: column;
        }
        
        .room-deal-information-option {
            padding: 10px;
            display: flex;
            align-items: center;
        }
        
        .room-deal-information-option:last-child {
            border-bottom: 1px solid #dddddd;
        }
        
        .room-deal-information-item-type {
            font-size: 13px;
            color: #fff;
            background-color: #61b6e5;
            min-width: 50px;
            height: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
        }
        
        .room-deal-information-item-wrapper {
            display: flex;
            align-items: center;
            margin-left: 10px;
            height: 46px;
            width: 100%;
        }
        
        .room-deal-information-item-wrapper>input {
            border: 1px solid #dddddd;
            width: 140px;
            height: 100%;
            padding: 0 15px;
            font-size: 15px;
        }
        
        .room-deal-inforamtion-won {
            margin: 0 10px;
        }
        
        .room-deal-information-example {
            color: #888888;
        }
        
        .room-deal-information-option:not(:first-child) {
            margin-top: 10px;
        }
        
        .room-deal-inforamtion-divide {
            font-size: 22px;
            margin: 0 8px;
            color: #222222;
            font-weight: 100;
        }
        
        .room-deal-close-button-wrapper {
            margin-left: auto;
            cursor: pointer;
        }
        
        .room-deal-close-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            background-color: #666666;
            color: rgb(220, 220, 220);
        }
        
        .room-deal-cliked {
            background-color: rgb(235, 235, 235);
            color: rgb(170, 170, 170);
        }
        
        .room-file-upload-example {
            height: 100%;
        }
        
        .room-write-content-container {
            border-top: 1px solid #dddddd;
            min-height: 260px;
        }
        
        .room-picture-notice {
            margin: 20px;
            padding: 20px 40px;
            border: 1px solid #dddddd;
        }
        
        .file-preview-content-container {
            height: 100%;
        }
        
        .room-file-upload-wrapper {
            margin: 20px;
            border: 1px solid #dddddd;
            background-color: #f4f4f4;
            min-height: 350px;
            font-size: 15px;
            color: #888888;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        
        .room-file-upload-example-container {
            display: flex;
            align-items: center;
            justify-content: center;
            /* height: 100%;
  width: 100%; */
        }
        
        .room-file-image-example-wrapper {
            text-align: center;
        }
        
        .room-file-notice-item {
            margin-top: 5px;
            text-align: center;
        }
        
        .room-file-notice-item-red {
            color: #ef4351;
        }
        
        .image-box {
            margin-top: 30px;
            padding-bottom: 20px;
            text-align: center;
        }
        
        .image-box input[type='file'] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
        }
        
        .image-box label {
            display: inline-block;
            padding: 10px 20px;
            background-color: #232d4a;
            color: #fff;
            vertical-align: middle;
            font-size: 15px;
            cursor: pointer;
            border-radius: 5px;
        }
        
        .file-preview-wrapper {
            padding: 10px;
            position: relative;
        }
        
        .file-preview-wrapper>img {
            position: relative;
            width: 190px;
            height: 130px;
            z-index: 10;
        }
        
        .file-close-button {
            position: absolute;
            /* align-items: center; */
            line-height: 18px;
            z-index: 99;
            font-size: 18px;
            right: 5px;
            top: 10px;
            color: #fff;
            font-weight: bold;
            background-color: #666666;
            width: 20px;
            height: 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .file-preview-container {
            height: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        
        .file-preview-wrapper-upload {
            margin: 10px;
            padding-top: 20px;
            background-color: #888888;
            width: 190px;
            height: 130px;
        }
        
        .room-write-button-wrapper {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #222222;
        }
        
        .room-write-button-wrapper>div {
            width: 160px;
            height: 50px;
            border: 1px solid #dddddd;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            cursor: pointer;
        }
        
        .room-write-button {
            margin-left: 15px;
            color: #fff;
            background-color: #1564f9;
        }
        
        .room-write-button:hover {
            opacity: 0.8;
        }

</style>
