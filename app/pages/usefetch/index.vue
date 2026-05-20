<template>
  <div>
    <h1>버튼을 클릭하여 포스트 API 호출하기 - 테스트 (useFetch)</h1>
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

const {
  data: post,
  pending,
  error,
  refresh,
} = await useFetch<Post>("https://jsonplaceholder.typicode.com/posts/1", {
  key: "", // Ooptional. 문자열만 가능
  immediate: false, // default: true - 처음 렌더링 시 자동으로 API 요청 실행
  // onRequest, onRequestError, onResponseError 등 런타임에 실행되는 인터셉터가 있음.
  onResponse({ response }) {
    console.log("서버에서 응답 받음:", response); // 서버 터미널에 출력
  },
  /**
  쿼리를 옵션에 추가하는 경우 watch 옵션을 통해서 변경사항 발생시 자동 refetch 가능
  이때 searchQuery는 reactive, ref, computed 모두 가능
  query: {
  q: searchQuery
  }
   */
});
</script>
