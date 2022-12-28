# TodoList 구현

이 프로젝트는 간단한 TodoList 입니다.
제목과 내용을 입력하여 추가하면 상단에 진행중인 아이템이 등록되며
완료한 경우 버튼을 눌러 하단의 완료칸으로 아이템을 옮길 수 있고
취소를 눌러 아이템을 다시 상단으로 위치시키는 것도 가능합니다
삭제하기를 눌러 아이템을 삭제하는것도 가능합니다

사용한 훅은 useState 입니다.

기능구현을 위해 생성한 함수는
onChange, onCLick 입니다.

사용한 JavaScript 내장 메서드는 map, filter입니다.

Todo의 State는

| id  | title  | body   | isdone |
| --- | ------ | ------ | ------ |
| 0   | "제목" | "내용" | false  |
| 1   | "제목" | "내용" | false  |
| 2   | "제목" | "내용" | false  |

App.js 에서는 input의 입력값을 User.js로 보내면서 input을 빈칸으로 변경해줍니다.

User.js 에서는 input에서 입력받은값을 받아와 보여주며
삭제하기, 완료, 취소등의 onClick event 발생 시
App.js에 값을 보내줍니다.

값을 받아온 App.js에서 아이템의 위치를 리렌더링 해줍니다.
