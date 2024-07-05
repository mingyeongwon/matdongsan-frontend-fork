<template>
  <div class="position-relative">
    <table class="table table-borderless m-0">
      <tbody>
        <tr>
          <th scope="row" rowspan="2" class="w-50 ">
            <img
              class="img-fluid"
              v-if="pthumbnail != null" :src="pthumbnail"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </th>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[0] != null" :src="pattaches[0]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </td>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[1] != null" :src="pattaches[1]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </td>
        </tr>
        <tr>
          <th scope="row">
            <img
              class="img-fluid"
              v-if="pattaches[2] != null" :src="pattaches[2]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </th>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[3] != null" :src="pattaches[3]"  width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="">
          </td>
        </tr>
      </tbody>
    </table>
    <span class="btn btn-dark position-absolute bottom-0 end-0 m-3 opacity-75" @click="showDetailPhotoModal">사진 모두 보기</span>
  </div>

  <div class="modal" tabindex="-1" v-if="clickedModal" id="DetailPhotoModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <button
        type="button"
        class="btn-close btn-close-white position-absolute top-0 end-0 pe-auto"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
      <div class="modal-content">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/163100127182748081.jfif?w=960&h=960&c=c"
                class="d-block w-100"
                alt="상세 사진"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/164056794151881348.jpg?w=960&h=960&c=c"
                class="d-block w-100"
                alt="상세 사진"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/164559300681759374.jfif?w=960&h=960&c=c"
                class="d-block w-100"
                alt="상세 사진"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169659778140226716.jpeg?gif=1&w=480&h=480&c=c&q=80"
                class="d-block w-100"
                alt="상세 사진"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { Modal } from "bootstrap";
import { ref } from "vue";

const clickedModal = ref(false); // 모달 버튼 클릭 여부


const props = defineProps([
  'pthumbnail', 'pattaches'
]);

function showDetailPhotoModal() {
  clickedModal.value = true;
}



</script>
<style scoped></style>
