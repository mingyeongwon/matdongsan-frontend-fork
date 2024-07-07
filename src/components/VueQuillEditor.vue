<template>
  <quill-editor
    v-model:value="content"
    :options="state.editorOption"
    @change="onEditorChange"
  />
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const state = reactive({
  content: props.modelValue,
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
});

function onEditorChange({ quill, html, text }) {
  emit('update:modelValue', text);
}

watch(() => props.modelValue, (newValue) => {
  state.content = newValue;
});
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
