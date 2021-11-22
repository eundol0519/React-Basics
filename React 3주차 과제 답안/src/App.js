import React from "react";

// 라우팅을 하려면 Route를 가져와야겠죠! 가져옵니다. 
// ** 앗? BrowserRouter로 감싸주어야 하는데, BrowserRouter는 어디에 있나요? => index.js에 있어요 :)
import { Route } from "react-router-dom";

// 각 페이지에 해당하는 컴포넌트를 import!
import Main from "./Main";
import Review from "./Review";


function App() {
  
  return (
    <div className="App">
      {/* exact는 왜 써줬을까요? 헷갈린다면 아래의 exact를 지우고 상세페이지(~~~/review/월)로 이동해서 확인해보기! */}
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/review/:week_day" exact>
        <Review />
      </Route>
    </div>
  );
}

export default App;
