<template>
  <div class="position-relative">
    <table class="table table-borderless m-0">
      <tbody>
        <tr>
          <th scope="row" rowspan="2" class="w-50">
            <img
              class="img-fluid"
              v-if="pthumbnail != null"
              :src="pthumbnail"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="" />
          </th>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[0] != null"
              :src="pattaches[0]"
              width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="" />
          </td>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[1] != null"
              :src="pattaches[1]"
              width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="" />
          </td>
        </tr>
        <tr>
          <th scope="row">
            <img
              class="img-fluid"
              v-if="pattaches[2] != null"
              :src="pattaches[2]"
              width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="" />
          </th>
          <td>
            <img
              class="img-fluid"
              v-if="pattaches[3] != null"
              :src="pattaches[3]"
              width="200"
            />
            <img v-else src="../../../assets/no_image.jpg" width="200" alt="" />
          </td>
        </tr>
      </tbody>
    </table>
    <span
      class="btn btn-dark position-absolute bottom-0 end-0 m-3 opacity-75"
      @click="showDetailPhotoModal"
      >사진 모두 보기</span
    >
  </div>

  <div class="modal" tabindex="-1" id="DetailPhotoModal">
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
            <button v-for="n in pattaches.length" :key="n"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="{n}"
              aria-label="'Slide ' + ({n} + 1)"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                v-if="pthumbnail != null" :src="pthumbnail"
                class="d-block w-100" 
                alt="상세 사진"
              />
            </div>
            <div class="carousel-item" v-for="pattach in pattaches" :key="pattach">
              <img
                v-if="pattach != null" :src="pattach"
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

const props = defineProps(["pthumbnail", "pattaches"]);

console.log("props.pattaches.length : " + props.pattaches.length);

// 모달 열기
function showDetailPhotoModal() {
  const detailPhotoModal = new Modal(document.getElementById("DetailPhotoModal"));
  detailPhotoModal.show();
}
</script>
<style scoped></style>
