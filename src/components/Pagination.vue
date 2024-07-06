<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <a class="page-link" href="#" @click.prevent="goToPage(1)" tabindex="-1" :aria-disabled="currentPage === 1">처음</a>
      </li>
      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <a class="page-link" href="#" @click.prevent="prevPage" tabindex="-1" :aria-disabled="currentPage === 1">이전</a>
      </li>
      <li v-for="page in visiblePages" :key="page" :class="['page-item', { active: page === currentPage }]">
        <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
      </li>
      <li :class="['page-item', { disabled: currentPage === totalPages }]">
        <a class="page-link" href="#" @click.prevent="nextPage" :aria-disabled="currentPage === totalPages">다음</a>
      </li>
      <li :class="['page-item', { disabled: currentPage === totalPages }]">
        <a class="page-link" href="#" @click.prevent="goToPage(totalPages)" :aria-disabled="currentPage === totalPages">끝</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
    default: 1
  },
  totalPages: {
    type: Number,
    required: true,
    default: 1
  },
  maxVisiblePages: {
    type: Number,
    default: 5
  }
});

const emit = defineEmits(['update:currentPage']);

const goToPage = (page) => {
  if (page < 1 || page > props.totalPages) return;
  emit('update:currentPage', page);
};

const prevPage = () => {
  if (props.currentPage > 1) {
    goToPage(props.currentPage - 1);
  }
};

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    goToPage(props.currentPage + 1);
  }
};

const visiblePages = computed(() => {
  const half = Math.floor(props.maxVisiblePages / 2);
  let start = props.currentPage - half;
  let end = props.currentPage + half;

  if (start < 1) {
    start = 1;
    end = Math.min(props.maxVisiblePages, props.totalPages);
  }

  if (end > props.totalPages) {
    end = props.totalPages;
    start = Math.max(1, props.totalPages - props.maxVisiblePages + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});
</script>

<style scoped>
.page-item.disabled .page-link {
  pointer-events: none;
  cursor: not-allowed;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
</style>
