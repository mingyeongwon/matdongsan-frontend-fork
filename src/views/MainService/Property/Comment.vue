<template>
  
  <div>
    <div class="d-flex justify-content-between mb-3">
      <h4 class="mt-3 fw-bold">문의하기 ({{ props.userComment.length }})</h4>
      <div class="align-self-center">
        <select class="form-select" aria-label="Default select example" @change="sortComment">
          <option selected value="최신순">최신순</option>
          <option value="오래된순">오래된순</option>
        </select>
      </div>
    </div>
    <div class="d-flex mb-4">
      <img
        width="60"
        height="60"
        class="rounded-circle"
        :src="memberProfile"
        alt=""
      />
      <div class="ms-3 w-100 align-self-center">
        <input
          class="w-75 p-2 rounded align-middle me-2"
          v-model="userComment.uccomment"
          type="text"
          placeholder="댓글을 입력해주세요..."
        />
        <button class="btn py-2 btn-sm btn-secondary" @click="submitComment">
          작성하기
        </button>
      </div>
    </div>

    <!-- 댓글 -->
    <div v-for="comment in props.userComment" :key="comment.ucnumber">
      <div>
        <div>
          <hr />
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <img
                v-if="comment.ucremoved !== true"
                width="40"
                height="40"
                class="align-self-center rounded-circle"
                :src="comment.profile"
                alt=""
              />
              <p class="align-self-center fw-bold ms-2 h6 m-0">
                <span v-if="comment.ucremoved !== true">권성환</span>
              </p>
            </div>
            <span class="align-self-center">{{comment.ucdate}}</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="ms-5">
              <p class="mt-2 fw-bold">
                <span v-if="comment.ucremoved === true">삭제된 댓글입니다.</span>
                <span v-else>{{comment.uccomment}}</span>
              </p>
            </div>

            <div v-if="comment.ucremoved !== true" class="ms-5 justify-content-end d-flex">
              <div class="d-flex">
                <div
                  class="btn btn-sm text-decoration-underline"
                  @click="toggleReplyForm"
                >
                  댓글달기
                </div>

                <div v-if="comment.ucUnumber == userRoleNumber">
                  <div class="btn btn-sm btn-success me-2" @click="startEditReview(review)">
                    수정하기
                  </div>
                  <div class="btn btn-sm btn-danger" @click="[openDeleteModal(), getCommentId(comment.ucnumber)]">
                    삭제하기
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div v-if="showReplyForm" class="ms-5 mt-3">
            <input
              class="w-75 p-2 rounded align-middle me-2"
              v-model="reply"
              type="text"
              placeholder="대댓글을 입력해주세요..."
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
    role="dialog">
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
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { useStore } from "vuex";
import propertyAPI from "@/apis/propertyAPI";
import memberAPI from "@/apis/memberAPI";
import agentAPI from "@/apis/agentAPI";
const router = useRouter();
const route = useRoute();
const store = useStore();
const props = defineProps([
  'userComment',
]);
const emits = defineEmits(['update-property-data'])

const data = 1;
const memberProfile = ref(null);
const comment = ref("");
const reply = ref("");
const showReplyForm = ref(false);
const showDeleteModal = ref(false);
const clickedModalId = ref("");
const userComment = ref({
  uccomment: "",
  ucPnumber: route.params.id,
  ucUnumber: store.getters.getUserRoleNumber,
});
const userRoleNumber = computed(() => store.getters.getUserRoleNumber);

// ucnumber 얻기
function getCommentId(ucnumber) {
  clickedModalId.value = ucnumber;
}


//댓글 작성
function submitComment() {
  postPropertyComment(userComment);
}

const postPropertyComment = async (userComment) => {
  try {
    const data = JSON.parse(JSON.stringify(userComment.value));
    console.log("userComment.value.uccomment : " + userComment.value.uccomment);
    await propertyAPI.postPropertyComment(data);
    emits("update-property-data"); // 데이터 다시 가져오기
    userComment.value.uccomment = "";
  } catch(error) {
    console.log(error);
  }
}

//대댓글 작성 토글
function toggleReplyForm() {
  showReplyForm.value = !showReplyForm.value;
}
//대댓글 제출
function submitReply(id) {
  console.log(reply.value, "댓글의 아이디: ", id);
  reply.value = "";
  showReplyForm.value = false;
}
//댓글 정렬 기능
function sortComment(event){
  const sortBy = event.target.value;
  router.push({ 
    path: route.path,
    query: { ...route.query, sort: sortBy }
  });
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
  deletePropertyComment(route.params.id, clickedModalId.value);
  closeDeleteModal();
}
// 댓글 삭제
const deletePropertyComment = async (pnumber, ucnumber) => {
  try {
    await propertyAPI.deletePropertyComment(pnumber, ucnumber);
    // emits("update-agent-data"); // 데이터 다시 가져오기
  } catch (error) {
    console.log(error);
  }
};

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
