<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <h5 class="mt-3 fw-bold" v-if="!totalRate">
        평점 & 리뷰({{ props.reviewData.length }})
      </h5>
      <h5 class="mt-3 fw-bold" v-else>
        평점 & 리뷰 ({{ averageRate }} & {{ props.reviewData.length }})
      </h5>
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
    <div
      class="d-flex mb-4"
      v-if="logedinUser && store.getters.getUserRole !== 'AGENT'"
    >
      <img
        width="60"
        height="60"
        class="rounded-circle"
        :src="memberProfile"
        alt=""
      />
      <div class="ms-3 w-100 align-self-center">
        <div class="d-flex flex-column">
          <div class="star-rating d-flex mb-2">
            <div
              class="star"
              v-for="index in 5"
              :key="index"
              @click="check(index + 1)"
            >
              <span v-if="index < score"
                ><i class="fa-solid fa-star" style="color: #ffd43b"></i
              ></span>
              <span v-if="index >= score"
                ><i class="fa-regular fa-star" style="color: #ffd43b"></i
              ></span>
            </div>
          </div>
        </div>
        <input
          class="w-75 p-2 rounded align-middle me-2"
          v-model="reviewData.arcontent"
          type="text"
          placeholder="댓글을 입력해주세요..."
        />
        <button class="btn py-2 btn-sm btn-secondary" @click="submitComment">
          작성하기
        </button>
      </div>
    </div>
    <div class="d-flex mb-4" v-if="store.getters.getUserRole === 'AGENT'"></div>
    <div
      class="d-flex mb-4"
      v-if="
        store.getters.getUserRole !== 'AGENT' &&
        store.getters.getUserRole !== 'MEMBER'
      "
    >
      <img
        width="60"
        height="50"
        class="rounded-circle"
        src="@/assets/profileImage.png"
        alt=""
      />
      <div class="ms-3 w-100 align-self-center">
        <input
          class="w-75 p-2 rounded align-middle me-2"
          type="text"
          placeholder="로그인후 이용해주세요..."
          readonly
        />
        <button
          class="btn py-2 btn-sm btn-secondary"
          disabled
          @click="submitComment"
        >
          작성하기
        </button>
      </div>
    </div>
    <div v-if="props.reviewData && props.reviewData.length > 0">
      <div v-for="review in props.reviewData" :key="review.arnumber">
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
              <p class="align-self-center fw-bold ms-2 h6 m-0">
                {{ review.membername }}
              </p>
            </div>
            <span class="align-self-center">{{ review.ardate }}</span>
          </div>
          <div class="ms-5 justify-content-between d-flex">
            <div class="align-self-center d-flex">
              <span class="me-1">{{ review.arrate }}</span>
              <div v-for="index in 5" :key="index">
                <span v-if="index > review.arrate"
                  ><i class="fa-regular fa-star" style="color: #ffd43b"></i
                ></span>
                <span v-if="index <= review.arrate"
                  ><i class="fa-solid fa-star" style="color: #ffd43b"></i
                ></span>
              </div>
            </div>
            <div v-if="review.arMnumber == userRoleNumber">
              <div  class="btn btn-sm btn-success me-2" @click="startEditReview(review)">
                수정하기
              </div>
              <div
                class="btn btn-sm btn-danger"
                @click="[openDeleteModal(), getReviewId(review.arnumber)]"
              >
                삭제하기
              </div>
            </div>
          </div>
          <div class="ms-5 mt-1">
            <p v-if="!editingReview || editingReview.arnumber !== review.arnumber" class="fw-bold">
              {{ review.arcontent }}
            </p>
            <div v-else>
              <textarea v-model="editingReview.arcontent" class="form-control mb-2"></textarea>
              <button class="btn btn-sm btn-primary me-2" @click="submitEditReview">
                수정
              </button>
              <button class="btn btn-sm btn-secondary" @click="cancelEditReview">
                취소
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
    <div v-if="props.reviewData.length == 0" class="text-center">
      <img
        src="@/assets/none_comment_icon.png"
        alt=""
        width="100"
        class="mb-3"
      />
      <div class="fw-bold">아직 아무런 댓글이 없어요</div>
    </div>
  </div>

  <!-- 경고 모달 -->
  <div
    class="modal fade"
    id="warningModal"
    tabindex="-1"
    aria-labelledby="warningModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="warningModalLabel">경고</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ warningMessage }}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            닫기
          </button>
        </div>
      </div>
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
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { Modal } from "bootstrap";
const store = useStore();
const logedinUser = store.getters.getUemail; // 수정버튼
const props = defineProps(["reviewData"]);
const emits = defineEmits(["update-agent-data"]);
const comment = ref("");
const warningMessage = ref(""); // 경고 메시지 상태 추가
const showDeleteModal = ref(false);
const memberProfile = ref(null);
const clickedModalId = ref("");
const score = ref(0);
const editingReview = ref(null); // 수정 중인 리뷰 상태 추가
const defaultImg = require("@/assets/profileImage.png");
const router = useRouter();
const route = useRoute();
const userRoleNumber = computed(() => store.getters.getUserRoleNumber);
const reviewData = ref({
  arcontent: "",
  arrate: "",
  arAnumber: route.params.id,
  arMnumber: store.getters.getUserRoleNumber,
});
console.log(userRoleNumber);

//평점 총합 계산
const totalRate = computed(() => {
  return props.reviewData.reduce((sum, review) => sum + review.arrate, 0);
});

//평점 평균 계산 (소수점 1자리)
const averageRate = computed(() => {
  const count = props.reviewData.length;
  return count > 0 ? (totalRate.value / count).toFixed(1) : 0;
});

//평점
function check(index) {
  score.value = +index;
  reviewData.value.arrate = score.value - 1;
}

function getReviewId(reviewId) {
  clickedModalId.value = reviewId;
}

// 댓글 작성
function submitComment() {
  if (reviewData.value.arcontent === "" && score.value === 0) {
    warningMessage.value = "댓글과 평점을 모두 작성하셔야 합니다.";
    const warningModal = new Modal(document.getElementById("warningModal"));
    warningModal.show();
    return;
  } else if (reviewData.value.arcontent === "") {
    warningMessage.value = "댓글을 작성하셔야 합니다.";
    const warningModal = new Modal(document.getElementById("warningModal"));
    warningModal.show();
    return;
  } else if (score.value === 0) {
    warningMessage.value = "평점을 매기셔야 합니다.";
    const warningModal = new Modal(document.getElementById("warningModal"));
    warningModal.show();
    return;
  } else {
    postReviewData(reviewData);
  }
}

// 리뷰 데이터 전송
const postReviewData = async (reviewData) => {
  try {
    const data = JSON.parse(JSON.stringify(reviewData.value));
    await agentAPI.postAgentReview(data);
    emits("update-agent-data"); // 댓글 작성 후 에이전트 데이터 다시 가져오기
    reviewData.value.arcontent = "";
    score.value = 0;
  } catch (error) {
    console.log("에러 발생");
  }
};

// 리뷰 수정 시작
function startEditReview(review) {
  editingReview.value = { ...review };
}

// 리뷰 수정 취소
function cancelEditReview() {
  editingReview.value = null;
}

// 리뷰 수정 제출
async function submitEditReview() {
  try {
    await agentAPI.updateAgentReview(editingReview.value);
    emits("update-agent-data"); // 댓글 수정 후 에이전트 데이터 다시 가져오기
    editingReview.value = null;
  } catch (error) {
    console.log("에러 발생");
  }
}

// 리뷰 데이터 삭제
const deleteReviewData = async (pageId, reviewId) => {
  try {
    await agentAPI.deleteAgentReview(pageId, reviewId);

    emits("update-agent-data"); // 댓글 작성 후 에이전트 데이터 다시 가져오기
  } catch (error) {
    console.log("에러 발생");
  }
};

// 리뷰 댓글 정렬
const sortReviewData = async (pageId, sort) => {
  try {
    await agentAPI.sortAgentReview(pageId, sort);

    emits("update-agent-data"); // 댓글 작성 후 에이전트 데이터 다시 가져오기
  } catch (error) {
    console.log("에러 발생");
  }
};

// 삭제 모달 열기
function openDeleteModal() {
  showDeleteModal.value = true;
}

// 삭제 모달 닫기
function closeDeleteModal() {
  showDeleteModal.value = false;
}

// 삭제 확인 버튼
function confirmDelete() {
  console.log(clickedModalId.value + "가 삭제되었습니다.");
  deleteReviewData(route.params.id, clickedModalId.value);
  closeDeleteModal();
}


// 유저 프로필 사진
const getUattach = async (argAnumber) => {
  try {
    if (store.getters.getUserRole === "MEMBER") {
      const response = await memberAPI.memberAttachDownload(argAnumber);
      const blob = response.data;
      memberProfile.value = URL.createObjectURL(blob);
    } else {
      const response = await agentAPI.agentAttachDownload(argAnumber);
      const blob = response.data;
      memberProfile.value = URL.createObjectURL(blob);
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  if (store.getters.getUserRoleNumber) {
    getUattach(store.getters.getUserRoleNumber);
  }
});
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
