<template>
  <div>
    <h1>버튼을 클릭하여 포스트 API 호출하기 - 테스트 ($fetch)</h1>
    <button @click="fetchPost" :disabled="loading">
      포스트 정보 로드 Load
    </button>

    <div v-if="loading">로딩 중...</div>

    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 동적 메타 태그 관리
useHead({
  // 페이지 제목
  // <head> 내 <title> 요소에 반영됨됨
  title: "do it! vue + nuxt 4",
  // 검색 엔진이 페이지 내용을 이해하는 데 도움을 주는 내용 포함
  meta: [
    {
      name: "description",
      content: "nuxt 기초기초링",
    },
  ],
  // <body>에 속성 추가할 때 사용
  bodyAttrs: { class: "nuxt-app" },
  // <head>또는 페이지에 <script> 태그를 삽입하기 위해 사용됨
  script: [{ innerHTML: `console.log('안녕하세요옹~~')` }],
});
// seo 정보 설정
useSeoMeta({
  title: "요거슨 타이틀",
  description: "seo description",
  // 링크 공유시 보여지는 타이틀, 내용, 미리보기 이미지
  ogTitle: "og 타이틀",
  ogDescription: "og 디스크립션",
  ogImage: "https://do-it-example.com/og-image.png",
});

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const post = ref<Post | null>(null);
const loading = ref<boolean>(false);

// $fetch
// Nuxt 애플리케이션 전역 사용 가능
// 주로 클라이언트 측 이벤트 기반 데이터 페칭에 적합
// 서버 측 렌더링 시에는 데이터 중복 요청(서버, 클라이언트에서 모두 호출 됨)이 발생할 수 있어 useFetch, useAsyncData 사용 권장
// (Next.js의 fetch의 축소판 느낌)

async function fetchPost() {
  loading.value = true;

  try {
    post.value = await $fetch("https://jsonplaceholder.typicode.com/posts/1");
  } catch (error) {
    console.log(error);
    throw new Error(`POST API FETCH ERROR: ${error}`);
  } finally {
    loading.value = false;
  }
}
</script>
