<template></template>

<script setup lang="ts">
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
</script>
