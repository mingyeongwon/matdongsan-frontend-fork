<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <h5 class="mt-3 fw-bold">평점 & 리뷰 ({{props.reviewData.length}})</h5>
      <div class="align-self-center">
        <select
          class="form-select"
          aria-label="Default select example"
          @change="sortComment"
        >
          <option selected value="최신순">최신순</option>
          <option value="오래된순">오래된순</option>
        </select>
      </div>
    </div>
    <div class="d-flex mb-4" v-if="logedinUser">
      <img
        width="60"
        height="60"
        class="rounded-circle"
        :src="memberProfile"
        alt=""
      />
      <div class="ms-3 w-100 align-self-center" >
        <input
          class="w-75 p-2 rounded align-middle me-2"
          v-model="comment"
          type="text"
          placeholder="댓글을 입력해주세요..."
      
        />
        <button class="btn py-2 btn-sm btn-secondary" @click="submitComment">
          작성하기
        </button>
      </div>
    </div>
    <div class="d-flex mb-4" v-else>
      <img
        width="60"
        height="50"
        class="rounded-circle"
        src="@/assets/profileImage.png"
        alt=""
      />
      <div class="ms-3 w-100 align-self-center" >
        <input
          class="w-75 p-2 rounded align-middle me-2"
          v-model="comment"
          type="text"
          placeholder="로그인후 이용해주세요..."
          readonly
        />
        <button class="btn py-2 btn-sm btn-secondary" disabled @click="submitComment">
          작성하기
        </button>
      </div>
    </div>
    <div v-if="props.reviewData" >
      <div v-for="review in props.reviewData" :key="review.arnumber" >
        <div>
          <hr />
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <img       
                width="40"
                height="40"
                class="align-self-center rounded-circle"
               :src="review.profile"
                alt=""
              />
              <p class="align-self-center fw-bold ms-2 h6 m-0">{{ review.membername }}</p>
            </div>
            <span class="align-self-center">{{review.ardate}}</span>
          </div>
          <div class="ms-5 justify-content-between d-flex">
            <div class="align-self-center">
              <span class="me-1">{{ review.arrate }}</span
              ><i class="fa-solid fa-star" style="color: #ffd43b"></i
              ><i
                class="fa-solid fa-star-half-stroke"
                style="color: #ffd43b"
              ></i
              ><i class="fa-regular fa-star" style="color: #ffd43b"></i>
            </div>
            <div>
              <div class="btn btn-sm btn-success me-2" @click="editCommnet">
                수정하기
              </div>
              <div class="btn btn-sm btn-danger" @click="openDeleteModal">
                삭제하기
              </div>
            </div>
          </div>
          <div class="ms-5 mt-1">
            <p class="fw-bold">
            {{review.arcontent
            }}
            </p>
          </div>
          <div v-if="showReplyForm" class="ms-5 mt-3">
            <input v-if="logedinUser!==''"
              class="w-75 p-2 rounded align-middle me-2"
              v-model="reply"
              type="text"
              placeholder="대댓글을 입력해주세요..."
            />
            <input v-else
              class="w-75 p-2 rounded align-middle me-2"
              v-model="reply"
              type="text"
              placeholder="로그인후 이용할수 있습니다."
            />
            <button
              class="btn py-2 btn-sm btn-secondary"
              @click="submitReply(data)"
            >
              작성하기
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- 삭제 확인 모달 -->
  <div
    v-if="showDeleteModal"
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">삭제 확인</h5>
        </div>
        <div class="modal-body">
          <p>정말 삭제하시겠습니까?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeDeleteModal"
          >
            취소
          </button>
          <button type="button" class="btn btn-danger" @click="confirmDelete">
            삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import memberAPI from "@/apis/memberAPI";
import agentAPI from "@/apis/agentAPI";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const logedinUser =store.getters.getUemail; // 수정버튼 
// console.log("로그인 유저입니다"+logedinUser);
const props = defineProps(["reviewData"]);
const data = 1;
const comment = ref("");
const reply = ref("");
const showReplyForm = ref(false);
const showDeleteModal = ref(false);
const memberProfile = ref(null);

const router = useRouter();
const route = useRoute();

//댓글 작성
function submitComment() {
  console.log(comment.value);
  comment.value = "";
}

//삭제 모달 열기
function openDeleteModal() {
  showDeleteModal.value = true;
}
//삭제 모달 닫기
function closeDeleteModal() {
  showDeleteModal.value = false;
}
//삭제 확인 버튼
function confirmDelete() {
  console.log("삭제되었습니다.");
  closeDeleteModal();
}
//댓글 정렬 기능
function sortComment(event) {
  const sortBy = event.target.value;
  router.push({
    path: route.path,
    query: { ...route.query, sort: sortBy },
  });
}

const getUattach = async (argAnumber) => {
  try {
if(store.getUserRole ==='MEMBER'){
  const response = await memberAPI.memberAttachDownload(argAnumber);
  const blob = response.data;
  memberProfile.value = URL.createObjectURL(blob);
} else{
  const response = await agentAPI.agentAttachDownload(argAnumber);
  const blob = response.data;
  memberProfile.value = URL.createObjectURL(blob);
}

  } catch (error) {
    console.log(error);
  }
};
if(store.getters.getUserRoleNumber){
  getUattach(store.getters.getUserRoleNumber);
}

</script>

<style scoped>
.modal {
  display: none;
}
.modal.show {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  margin: 10% auto;
}
</style>
