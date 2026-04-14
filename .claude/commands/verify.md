# verify

배포 전 코드 검증 (린트 + 빌드)

## 설명

프로젝트의 코드 품질을 확인하고 빌드 가능 여부를 검증합니다.

- **린트 검사**: ESLint로 코드 스타일 및 규칙 위반 확인
- **빌드 검사**: Next.js 빌드 실행하여 에러 없음 확인

## 사용 시나리오

- ✅ **커밋 전**: 코드 품질 확인
- ✅ **배포 전**: 모든 문제 점검
- ✅ **PR 제출 전**: 빌드 가능 여부 확인

## 명령어

```bash
npm run verify
```

## 예상 출력

```
> eslint && next build

  0 problems (0 errors, 0 warnings)

   ▲ Next.js 15.x.x
   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Generating static pages (4/4)

Route (app)  Size
...
```

## 팁

- 빌드에 시간이 걸릴 수 있습니다 (1-2분)
- 에러가 발생하면 에러 메시지를 확인하고 수정 후 다시 실행하세요
- 로컬에서 `npm run verify`로 검증한 후 푸시하면 CI/CD 실패를 줄일 수 있습니다
