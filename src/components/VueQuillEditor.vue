<template>
  <quill-editor
    v-model:value="state.content"
    :options="state.editorOption"
    @change="onEditorChange($event)"
  />
  <div>
    <button
      type="button"
      style="
        border: none;
        border-radius: 7px;
        width: 100px;
        height: 35px;
        font-size: 23px;
        margin-top: 30px;
        background-color: rgb(209, 209, 209);
        color: #2c3e50;
      "
      @click="submit(state)"
    >
      버튼
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  content: "",
  _content: "",
  editorOption: {
    placeholder: "내용을 입력해주세요...", // placeholder 설정
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
      ],
    },
    // more options
  },
  disabled: false,
});

// const onEditorBlur = (quill) => {
//   console.log("editor blur!", quill);
// };
// const onEditorFocus = (quill) => {
//   console.log("editor focus!", quill);
// };
// const onEditorReady = (quill) => {
//   console.log("editor ready!", quill);
// };
// const onEditorChange = ({ quill, html, text }) => {
//   console.log("editor change!", quill, html, text);
//   state._content = html;
// };

setTimeout(() => {
  state.disabled = true;
}, 2000);

const props = defineProps({ title: { type: String } });

function submit(state) {
  console.log("content는 ",state._content);
}
</script>
<style scoped>
.ql-container {
  height: 400px;
}
.ql-editor {
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
}
</style>
