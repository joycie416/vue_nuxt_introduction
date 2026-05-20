<template>
  <div>
    <h1>버튼을 클릭하여 포스트 API 호출하기 - 테스트 (useAsyncData)</h1>

    <button @click="() => refresh()" :disabled="pending">
      포스트 정보 로드
    </button>

    <div v-if="pending">로딩 중...</div>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <div v-if="error">에러: {{ error.message }}</div>
  </div>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

/**
 * useFetch와 비슷하지만 더 세밀한 기능 제공
 * 전략, 데이터 변경 시 자동 리페치 수행 등 지원
 *
 * 비동기 데이터를 서버,클라이언트 사이드 모두에서 쉽게 가져오고 관리할 수 있도록 도와줌
 * 주로 페이지 컴포넌트에서 API 호출 또는
 * 데이터를 가져올 때 서버에서 미리 데이터를 받아 렌더링하고 클라이언트에서도 상태를 유지하면서 갱신 가능
 */

const {
  data: post,
  pending,
  error,
  refresh,
} = await useAsyncData<Post>(
  // key
  "posts",
  // handler
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log("서버에서 응답 받음:", response);

    if (!response.ok) {
      throw new Error("API 요청 실패");
    }
    return response.json();
  },
  // options
  {
    immediate: false, // 자동 호출 방지
  },
);
</script>
