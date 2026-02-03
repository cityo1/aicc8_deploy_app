# API 명세서 (API Specification)

> MARSHALL 할일 관리 앱 — 백엔드 REST API 명세

---

## 기본 정보

| 항목         | 내용                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| Base URL     | `http://localhost:8000` (환경에 따라 변경)                               |
| Content-Type | `application/json`                                                       |
| 인증         | URL/body의 `userId`로 사용자 구분 (Google 로그인 후 클라이언트에서 전달) |

---

## 1. 할일 목록 조회

사용자별 할일 목록을 조회합니다.

| 항목               | 내용                              |
| ------------------ | --------------------------------- |
| **Method**         | `GET`                             |
| **URL**            | `/get_tasks/:userId`              |
| **Path Parameter** | `userId` (string) — 사용자 식별자 |

### Response

**성공 (200 OK)**

- **Content-Type**: `application/json`
- **Body**: 할일 객체 배열

```json
[
  {
    "_id": "uuid-string",
    "title": "할일 제목",
    "description": "할일 설명",
    "date": "2025-08-01",
    "iscompleted": false,
    "isimportant": false,
    "created_at": "2025-01-01T00:00:00.000Z",
    "updated_at": "2025-01-01T00:00:00.000Z",
    "userid": "marshall"
  }
]
```

**실패 (500)**

```json
{
  "message": "Get tasks Error: <error detail>"
}
```

---

## 2. 할일 추가

새 할일을 생성합니다.

| 항목       | 내용             |
| ---------- | ---------------- |
| **Method** | `POST`           |
| **URL**    | `/post_task`     |
| **Body**   | JSON (see below) |

### Request Body

| 필드        | 타입    | 필수 | 설명                      |
| ----------- | ------- | ---- | ------------------------- |
| title       | string  | O    | 제목                      |
| description | string  | O    | 설명                      |
| date        | string  | O    | 날짜 (예: YYYY-MM-DD)     |
| isCompleted | boolean | O    | 완료 여부 (기본값: false) |
| isImportant | boolean | O    | 중요 여부 (기본값: false) |
| userId      | string  | O    | 사용자 식별자             |

**예시**

```json
{
  "title": "할일 제목",
  "description": "할일 설명",
  "date": "2025-08-01",
  "isCompleted": false,
  "isImportant": false,
  "userId": "marshall"
}
```

- 서버에서 `_id`는 UUID(v4)로 자동 생성됩니다.

### Response

**성공 (201 Created)**

```json
{
  "msg": "Task Create Sucessfully"
}
```

**실패 (500)**

```json
{
  "msg": "Post Task FAil: <error detail>"
}
```

---

## 3. 할일 수정 (전체)

할일의 제목, 설명, 날짜, 완료/중요 여부를 수정합니다.

| 항목       | 내용             |
| ---------- | ---------------- |
| **Method** | `PUT`            |
| **URL**    | `/update_task`   |
| **Body**   | JSON (see below) |

### Request Body

| 필드        | 타입    | 필수 | 설명             |
| ----------- | ------- | ---- | ---------------- |
| \_Id        | string  | O    | 수정할 할일의 ID |
| title       | string  | O    | 제목             |
| description | string  | O    | 설명             |
| date        | string  | O    | 날짜             |
| isCompleted | boolean | O    | 완료 여부        |
| isImportant | boolean | O    | 중요 여부        |

**예시**

```json
{
  "_Id": "existing-task-uuid",
  "title": "수정된 제목",
  "description": "수정된 설명",
  "date": "2025-09-01",
  "isCompleted": false,
  "isImportant": true
}
```

### Response

**성공 (200 OK)**

```json
{
  "msg": "Task Updated Successfully"
}
```

**실패 (500)**

```json
{
  "msg": "Update Task Failed: <error detail>"
}
```

---

## 4. 완료 상태만 수정

할일의 완료 여부만 변경합니다.

| 항목       | 내용                     |
| ---------- | ------------------------ |
| **Method** | `PATCH`                  |
| **URL**    | `/update_completed_task` |
| **Body**   | JSON (see below)         |

### Request Body

| 필드        | 타입    | 필수 | 설명      |
| ----------- | ------- | ---- | --------- |
| itemId      | string  | O    | 할일 ID   |
| isCompleted | boolean | O    | 완료 여부 |

**예시**

```json
{
  "itemId": "existing-task-uuid",
  "isCompleted": true
}
```

### Response

**성공 (200 OK)**

```json
{
  "msg": "Task Updated Successfully"
}
```

**실패 (500)**

```json
{
  "msg": "Update Complete Failed: <error detail>"
}
```

---

## 5. 할일 삭제

할일을 삭제합니다.

| 항목               | 내용                               |
| ------------------ | ---------------------------------- |
| **Method**         | `DELETE`                           |
| **URL**            | `/delete_task/:itemId`             |
| **Path Parameter** | `itemId` (string) — 삭제할 할일 ID |

### Response

**성공 (200 OK)**

```json
{
  "msg": "Task Deleted Successfully"
}
```

**실패 (500)**

```json
{
  "msg": "Delete Task Error: <error detail>"
}
```

---

## 6. 루트 (헬스 체크)

| 항목       | 내용  |
| ---------- | ----- |
| **Method** | `GET` |
| **URL**    | `/`   |

### Response

**성공 (200 OK)**

- **Body**: `"This is the Main App for Deployment"` (text)

---

## 엔드포인트 요약

| Method | URL                      | 설명             |
| ------ | ------------------------ | ---------------- |
| GET    | `/`                      | 루트/헬스 체크   |
| GET    | `/get_tasks/:userId`     | 할일 목록 조회   |
| POST   | `/post_task`             | 할일 추가        |
| PUT    | `/update_task`           | 할일 전체 수정   |
| PATCH  | `/update_completed_task` | 완료 상태만 수정 |
| DELETE | `/delete_task/:itemId`   | 할일 삭제        |

---

## DB 스키마 참고 (tasks)

| 컬럼        | 타입      | 설명                           |
| ----------- | --------- | ------------------------------ |
| \_id        | TEXT (PK) | UUID                           |
| title       | TEXT      | 제목                           |
| description | TEXT      | 설명                           |
| date        | TEXT      | 날짜                           |
| isCompleted | BOOLEAN   | 완료 여부                      |
| isImportant | BOOLEAN   | 중요 여부                      |
| created_at  | TIMESTAMP | 생성 시각                      |
| updated_at  | TIMESTAMP | 수정 시각 (트리거로 자동 갱신) |
| userId      | TEXT      | 사용자 식별자                  |
