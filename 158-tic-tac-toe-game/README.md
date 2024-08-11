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
- 상태를 끌어올린 후
  - 상태 관리: Board가 게임 전체의 상태(squares)를 관리, Squares는 이를 props로 받아 표시만 함
  - 이벤트 처리: Squares에서 발생한 클릭 이벤트는 Board의 handlePlayGame 함수를 통해 처리됨
  - 데이터 흐름: Board에서 Squares로 단방향 데이터 흐름이 이루어짐(squares, winnerInfo, onPlay)
  - 책임 분리: Board는 게임 로직과 상태 관리를, Squares는 UI 렌더링 담당

#### STEP10 ~ 11

- 게임 상태 메시지 표시
- 승자가 누구인지 표시
- 비겼을 경우 비겼음을 알려줌
- Squares 컴포넌트 속성 타입 검사(w. 타입 모듈 분리) <br/>
  ![image](https://github.com/user-attachments/assets/402ea607-1b6d-49cf-b8c4-e9046e892189)

- History 컴포넌트와 상태 공유를 위해 Board에서 Game으로 state 끌어올리기
- 이쯤 되니까 상태를 끌어올리지 않고도 다른 컴포넌트들과 공유할 수 있으면 좋겠다는 생각이 들었다.

#### STEP12

- Game 컴포넌트의 gameHistory 상태
- Game 컴포넌트의 gameIndex 상태

#### STEP13

- 시간 여행 기능 구현

<br/>

#### 후기

- 과제를 수행하면서 리액트의 개념이 아직 많이x10000000000 부족함을 느꼈다.
- 아무래도 공식 문서를 더 읽고 실습하고 읽고 실습하고 읽고 실습하고... 하는 과정이 많이 필요할 것 같다.
- 알고 있다고 생각했던 것도 다시 코드를 보니 "그래서 왜 이렇게 짰더라?"라는 생각이 들었던 부분이 꽤 있었다.
- 그래도 과제를 해 보니 왜 리액트를 사용하는지 조금은 알 것 같았다.
- 수업 때도 계속 반복해서 설명을 듣다 보니 상태 끌어올리기 만큼은 확실히 알게 되었다. (모든 개념을 확실히 하고싶지만... 일단은 하나라도 갖고 가는 것에 만족...)
- 여전히 혼자 코드를 처음부터 끝까지 짜는 것에는 무리가 있을 것 같지만, 처음 접했을 때의 막막함과 두려움은 사라졌다.
- 얼마 남지 않은 리액트 수업도 파이팅🔥🔥🔥🔥🔥🔥🔥🔥🔥
