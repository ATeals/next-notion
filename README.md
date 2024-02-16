# 기술 블로그

Next.js 풀스택 기술 블로그

[🔗 블로그 링크](https://ateals.vercel.app/)

<p>
<img src="https://img.shields.io/badge/Notion-000000?&style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-000?&style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?&style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwindcss-06B6D4?&style=for-the-badge&logo=Tailwindcss&logoColor=white">
</p>

### 기능

- 노션 워크스페이스에 연결된 글들을 Notion API를 이용해 블로그에 발행합니다.
- 태그 별로 포스트를 분리합니다.

### 폴더 구조

```
src
├── app
├── config
├── feature
├── service
├── styles
└── types
```

- app : Next.js의 page 라우팅을 담고 있습니다.
- config : 블로그의 config를 담고 있습니다.
- feature : 리액트와 관련된 기능들을 도메인 별로 담고 있습니다.
- service : 서버 컴포넌트나 Route Handler에서 사용하는 서비스 로직을 도메인 별로 가지고 있습니다.
- styles : 전역 스타일을 가지고 있습니다.
- types : 전역 타입을 가지고 있습니다. 추가로 feature와 service에서 함께 다루는 타입을 담을 예정입니다.
