# #158 틱택토 게임 한 번 더!

> 진행된 STEP 순서로 정리
> 각 STEP 별로 어려웠던 점/부분 기록

##### STEP1

- 작업 환경 구성

##### STEP2

- 게임 상수 정의
- 컴포넌트 추출, 컴포넌트 트리 구성
- 현재 컴포넌트 구성
  ![image](https://github.com/user-attachments/assets/e7bd2c80-be44-431e-b94f-1780b5d299ad)

##### STEP3

- props에 따른 렌더링 설계
  - 플레이어가 선택한 칸은 버튼이 비활성화 상태로 설정
- 속성 검사
  - props가 올바르게 전달되는지 검사
- CSS 모듈 스타일링
  - 스타일 클래스 이름이 고유하게 관리되어 다른 컴포넌트 스타일과 충돌하지 않음

##### STEP4

- 게임 상태

```
const [squares, setSquares] = useState(INITIAL_SQUARES);
```

- 파생된 상태

```
const isDisabled = !!children;
```

- 이벤트 핸들러 반환 (closure)

```
const handlePlay = (index) => {
    console.log(`play game #${index}`);
  };
```
