import React from 'react';
import styled, {keyframes} from 'styled-components';

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}

const boxAnimation = keyframes`
  0%{
    border-radius: 0px;
  }

  30%{
    border-radius: 50px;
    top : 300px;
  }

  50%{
    border-radius: 50px;
    top : 400px;
  }

  50%{
    border-radius: 0px;
    top : 700px;
  }

  100%{
    border-radius: 0px;
    top: 20px;
  }
  
  // or from, to
`;
// const로 선언한 변수는 선언부보다 위에 사용하면
// ReferenceError: Cannot access 'boxAnimation' before initialization
// 라는 에러를 발생 시킨다.

const Box = styled.div`
  width : 100px;
  height: 100px;
  background-color: green;
  border-radius: 0px;

  position: absolute;
  top: 20px;
  left: 20px;

  animation: ${boxAnimation} 2s 1s infinite linear alternate;
`

export default App;
