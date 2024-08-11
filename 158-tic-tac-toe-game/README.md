# #158 틱택토 게임 한 번 더!

> 진행된 STEP 순서로 정리

#### STEP1

- 작업 환경 구성

#### STEP2

- 게임 상수 정의
- 컴포넌트 추출, 컴포넌트 트리 구성
- 현재 컴포넌트 구성 <br/>
  ![image](https://github.com/user-attachments/assets/e7bd2c80-be44-431e-b94f-1780b5d299ad)

#### STEP3

- props에 따른 렌더링 설계
  - 플레이어가 선택한 칸은 버튼이 비활성화 상태로 설정
- 속성 검사
  - props가 올바르게 전달되는지 검사
- CSS 모듈 스타일링
  - 스타일 클래스 이름이 고유하게 관리되어 다른 컴포넌트 스타일과 충돌하지 않음

#### STEP4

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

#### STEP5

- 게임 상태 업데이트
- 화면(UI) 변경
- 어려웠던 부분

```
  const playGame = (index) => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, squareIndex) => {
        if (squareIndex === index) {
          return currentPlayer;
        }
        return square;
      });
    });
  };
```

- 왜 playGame에서는 현재 상태가 아니라 prevSquare를 기반으로 클릭된 칸을 찾는 지 이해하는 데 오래걸렸다.
- useState에 관한 공식 문서 설명

```
- useState가 반환하는 set 함수를 사용하면 state를 다른 값으로 업데이트하고 리렌더링을 촉발할 수 있습니다. 여기에는 다음 state를 직접 전달하거나, 이전 state로부터 계산한 함수를 전달할 수도 있습니다.
- set 함수는 다음 렌더링에 대한 state 변수만 업데이트합니다. set 함수를 호출한 후에도 state 변수에는 여전히 호출 전 화면에 있던 이전 값이 담겨 있습니다.
```

#### STEP6

- CSS 모듈을 활용한 스타일링

#### STEP7

- 게임 승리 조건 상수로 선언

```
const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
```

- 게임 승리자가 있는 지 확인하는 함수 작성

```
export const checkWinner = (squares) => {
  let winnerInfo = null;

  for (const [x, y, z] of WINNER_CONDITIONS) {
    const winner = squares[x];

    if (winner && winner === squares[y] && winner === squares[z]) {
      console.log('GAME OVER');
      winnerInfo = {
        winner,
        condition: [x, y, z],
      };
      break;
    }
  }
  return winnerInfo;
};
```

- 게임 승리 시 스타일링 <br/>
  ![image](https://github.com/user-attachments/assets/253e74f0-2f56-436b-af66-e0f1fa38e611)

#### STEP8

- 게임 종료 시 게임 오버 메시지 출력
- 게임을 실행하는 함수 종료

```
  if (winnerInfo) {
      alert('GAME OVER');
      return; // 함수 종료
    }
```

#### STEP9

- 게임 플레이어 집합
- Squares의 상태 Board로 끌어올리기
  - Squares의 상태를 Status와도 공유하기 위해 둘의 가장 가까운 부모인 Board로 끌어올림
