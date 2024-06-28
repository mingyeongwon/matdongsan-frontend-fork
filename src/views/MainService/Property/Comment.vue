<template>
  <div>
    <div class="d-flex justify-content-between mb-3">
      <h5 class="mt-3 fw-bold">평점 & 리뷰 (40)</h5>
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
        src="https://i.pinimg.com/564x/88/62/af/8862af46f4eef3f44b35d446d135dcf4.jpg"
        alt=""
      />
      <div class="ms-3 w-100 align-self-center">
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
    <div>
      <div>
        <div>
          <hr />
          <div class="d-flex justify-content-between">
            <div class="d-flex">
              <img
                width="40"
                height="40"
                class="align-self-center rounded-circle"
                src="https://i.pinimg.com/564x/88/62/af/8862af46f4eef3f44b35d446d135dcf4.jpg"
                alt=""
              />
              <p class="align-self-center fw-bold ms-2 h6 m-0">권성환</p>
            </div>
            <span class="align-self-center">2024/11/07</span>
          </div>
          <div class="ms-5 justify-content-between d-flex">
            <span>5.0</span>
            <div>
              <div
                class="btn btn-sm text-decoration-underline"
                @click="toggleReplyForm"
              >
                댓글달기
              </div>
              <div class="btn btn-sm btn-danger" @click="openDeleteModal">
                삭제하기
              </div>
            </div>
          </div>
          <div class="ms-5 mt-3">
            <p class="mt-3 fw-bold">
              정말 친절하게 다 알려줬어요. 사장님이 친절하고 서비스가 최고예요.
            </p>
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
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router';

const data = 1;
const comment = ref("");
const reply = ref("");
const showReplyForm = ref(false);
const showDeleteModal = ref(false);

const router = useRouter();
const route = useRoute();

//댓글 작성
function submitComment() {
  console.log(comment.value);
  comment.value = "";
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
function sortComment(event){
  const sortBy = event.target.value;
  router.push({ 
    path: route.path,
    query: { ...route.query, sort: sortBy }
  });
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
