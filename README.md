# Next.js 간단한 조회용 스타터 킷

간단한 데이터 조회 및 검색/필터링 기능을 갖춘 Next.js 스타터 킷입니다.

## 기술 스택

- **Next.js 15**: 최신 React 프레임워크
- **React 19**: UI 라이브러리
- **TypeScript**: 타입 안전성
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **App Router**: Next.js 최신 라우팅 방식

## 주요 기능

- ✅ 데이터 조회 테이블
- ✅ 실시간 검색 기능
- ✅ 드롭다운 필터링 (부서, 상태 등)
- ✅ 반응형 디자인
- ✅ 다크모드 지원
- ✅ 결과 카운트 표시

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지 (조회 기능)
│   └── globals.css     # 전역 스타일
├── components/         # (추가할 재사용 컴포넌트)
└── lib/                # (추가할 유틸리티)
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 됩니다.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 커스터마이징

### 데이터 추가

`src/app/page.tsx`의 `SAMPLE_USERS` 배열을 수정하여 샘플 데이터를 변경할 수 있습니다.

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    status: "활성" | "비활성";
}
```

### 필터링 추가

페이지의 필터 섹션에 새로운 필터를 추가할 수 있습니다:

1. 상태 변수 추가
2. useMemo 필터 로직 수정
3. UI 필터 입력 추가

### 스타일 변경

Tailwind CSS의 커스텀 색상은 `tailwind.config.ts`에서 수정할 수 있습니다.

## API 연동 (선택)

데이터베이스나 API와 연동하려면:

1. **API Route** 사용:
   ```typescript
   // src/app/api/users/route.ts
   export async function GET() {
       // API 로직
   }
   ```

2. **Prisma** (선택):
   ```bash
   npm install @prisma/client
   npm install -D prisma
   npx prisma init
   ```

## 라이선스

MIT
# web-starter-kit
