# 기능 리스트 (Feature List)

> MARSHALL 할일 관리 앱 — 완료된 코드 기준 기능 목록

---

## 1. 인증 (Authentication)

| 번호 | 기능             | 설명                                                   | 구현 위치                    |
| ---- | ---------------- | ------------------------------------------------------ | ---------------------------- |
| 1.1  | Google 로그인    | Google OAuth 2.0 기반 로그인 (JWT 디코딩)              | `Navbar.jsx`, `authSlice.js` |
| 1.2  | 로그아웃         | 세션 해제 및 localStorage 인증 데이터 제거             | `Navbar.jsx`, `authSlice.js` |
| 1.3  | 인증 상태 유지   | localStorage에 authData 저장 후 새로고침 시 복원       | `authSlice.js`               |
| 1.4  | 로그인 필요 안내 | 비로그인 시 "로그인이 필요한 서비스 입니다." 버튼 표시 | `ItemPanel.jsx`              |

---

## 2. 페이지/라우팅

| 번호 | 기능          | 설명                                                                   | 구현 위치                         |
| ---- | ------------- | ---------------------------------------------------------------------- | --------------------------------- |
| 2.1  | Home (전체)   | 모든 할일 목록 표시                                                    | `App.jsx`, `Home/index.jsx`       |
| 2.2  | Completed     | 완료된 할일만 표시                                                     | `App.jsx`, `Completed/index.jsx`  |
| 2.3  | Proceeding    | 진행 중(미완료) 할일만 표시                                            | `App.jsx`, `Proceeding/index.jsx` |
| 2.4  | Important     | 중요 표시된 할일만 표시                                                | `App.jsx`, `Important/index.jsx`  |
| 2.5  | 네비게이션 바 | Home / Completed / Proceeding / Important 메뉴 및 활성 경로 하이라이트 | `Navbar.jsx`, `naviLists.jsx`     |

---

## 3. 할일 CRUD

| 번호 | 기능           | 설명                                                | 구현 위치                                            |
| ---- | -------------- | --------------------------------------------------- | ---------------------------------------------------- |
| 3.1  | 할일 목록 조회 | 사용자별 할일 목록 API 호출 및 표시                 | `ItemPanel.jsx`, `apiSlice.js`, `getControllers.js`  |
| 3.2  | 할일 추가      | 제목, 내용, 날짜, 완료 여부, 중요 여부 입력 후 생성 | `Modal.jsx`, `AddItem.jsx`, `postTaskController.js`  |
| 3.3  | 할일 수정      | 기존 할일 제목/내용/날짜/완료/중요 여부 수정        | `Modal.jsx`, `Item.jsx`, `updateTaskController.js`   |
| 3.4  | 할일 삭제      | 확인 후 해당 할일 삭제                              | `Item.jsx`, `deleteTaskController.js`                |
| 3.5  | 완료 상태 토글 | 완료/미완료 상태 PATCH로 변경                       | `Item.jsx`, `apiSlice.js`, `updateTaskController.js` |

---

## 4. 모달 (Modal)

| 번호 | 기능           | 설명                          | 구현 위치                                   |
| ---- | -------------- | ----------------------------- | ------------------------------------------- |
| 4.1  | 할일 추가 모달 | create 타입 — 폼 입력 후 POST | `Modal.jsx`, `AddItem.jsx`, `modalSlice.js` |
| 4.2  | 할일 상세 모달 | detail 타입 — 읽기 전용 표시  | `Modal.jsx`, `Item.jsx` (자세히 버튼)       |
| 4.3  | 할일 수정 모달 | update 타입 — 폼 수정 후 PUT  | `Modal.jsx`, `Item.jsx` (수정 버튼)         |
| 4.4  | 모달 닫기      | 전역 모달 닫기 액션           | `Modal.jsx`, `modalSlice.js`                |

---

## 5. UI/UX

| 번호 | 기능           | 설명                                                             | 구현 위치                              |
| ---- | -------------- | ---------------------------------------------------------------- | -------------------------------------- |
| 5.1  | 할일 카드      | 제목, 요약 설명(20자 제한), 날짜, 완료/중요 버튼, 수정/삭제 버튼 | `Item.jsx`                             |
| 5.2  | 할일 추가 카드 | "할일 추가하기" 클릭 시 추가 모달 오픈                           | `AddItem.jsx`                          |
| 5.3  | 로딩 스켈레톤  | 목록 로딩 중 스켈레톤 UI 표시                                    | `ItemPanel.jsx`, `LoadingSkeleton.jsx` |
| 5.4  | 토스트 알림    | 성공/실패 메시지 (react-toastify, 하단 중앙, 다크 테마)          | `App.jsx`, `Item.jsx`, `Modal.jsx`     |
| 5.5  | 페이지 제목    | 각 페이지별 제목 + 밑줄 스타일                                   | `PageTitle.jsx`                        |

---

## 6. 상태 관리 (Redux)

| 번호 | 기능            | 설명                                                                             | 구현 위치       |
| ---- | --------------- | -------------------------------------------------------------------------------- | --------------- |
| 6.1  | 인증 상태       | authData (Google JWT 디코딩 결과) 저장/제거                                      | `authSlice.js`  |
| 6.2  | 모달 상태       | isOpen, modalType(create/detail/update), task                                    | `modalSlice.js` |
| 6.3  | API 결과 상태   | getItemData, postItemData, updateCompletedData, deleteItemData, putTaskData      | `apiSlice.js`   |
| 6.4  | 비동기 API 액션 | fetchGetItem, fetchPostItem, fetchUpdateCompleted, fetchDeleteItem, fetchPutTask | `apiSlice.js`   |

---

## 7. 백엔드/인프라

| 번호 | 기능            | 설명                                                                                     | 구현 위치               |
| ---- | --------------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| 7.1  | Express 서버    | CORS, JSON 파싱, 라우트 마운트                                                           | `back/index.js`         |
| 7.2  | PostgreSQL 연동 | Pool 기반 DB 연결 (dotenv 환경 변수)                                                     | `database/database.js`  |
| 7.3  | tasks 테이블    | \_id, title, description, date, isCompleted, isImportant, created_at, updated_at, userId | `database/database.sql` |

---

## 8. 유틸/공통

| 번호 | 기능           | 설명                                                             | 구현 위치                |
| ---- | -------------- | ---------------------------------------------------------------- | ------------------------ |
| 8.1  | API URL 상수   | 도메인 및 엔드포인트 정의                                        | `apiUrls.js`             |
| 8.2  | HTTP 요청 래퍼 | getRequest, postRequest, putRequest, patchRequest, deleteRequest | `requests.js`            |
| 8.3  | 텍스트 말줄임  | 설명 20자 초과 시 "..." 처리                                     | `Item.jsx` (cutOverText) |

---

## 요약

- **프론트**: React + Vite, React Router, Redux Toolkit, Tailwind CSS, Google OAuth, react-toastify, react-loading-skeleton
- **백엔드**: Node.js + Express, PostgreSQL
- **주요 플로우**: Google 로그인 → 사용자별 할일 목록 조회 → 필터(전체/완료/진행중/중요) → 추가/조회/수정/삭제/완료 토글
