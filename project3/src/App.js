import './App.css';
import nullCardImg from './NullCardImg.png'
import AddWord from './AddWord';
import UpdateWord from './UpdateWord';
import Spinner from './Spinner';

import React from 'react';
import { Route, useHistory } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { deleteDictionaryFB, loadDictionaryFB } from './redux/modules/dictionary'

// import Button from "@material-ui/core/Button";

function App() {

  const dispatch = useDispatch();
  let history = useHistory();
  const dictionary_list = useSelector((state) => state.dictionary);
  const userInfo = dictionary_list.list
  const is_loaded = dictionary_list.is_loaded

  const deleteBtn = (index) => {
    dispatch(deleteDictionaryFB(userInfo[index].id))
  }

  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, [userInfo])

  return (
    <Flex>
      <Route path="/" exact>
        <Wrap className="App">
          <Title>My Dictionary</Title>
          <Container>
            {
              (userInfo.length != 0)
                ?
                userInfo.map((item, index) => {
                  return (
                    <Card key={index}>
                      <SubTitle>단어</SubTitle>
                      <Text>{item.word}</Text>
                      <SubTitle>설명</SubTitle>
                      <Text>{item.explanation}</Text>
                      <SubTitle>예시</SubTitle>
                      <Text>{item.example}</Text>
                      <div style={{ display: 'flex' }}>
                        <DeleteBtn onClick={() => { deleteBtn(index) }}>삭제하기</DeleteBtn>
                        <UpdateBtn onClick={() => { history.push({pathname:"/updateWord", state:index}) }}>수정하기</UpdateBtn>
                      </div>
                    </Card>
                  );
                })
                :
                <NullCard>
                  <img src={nullCardImg}></img>
                  <div>
                    아직 아무도<br />
                    작성하지 않았어요!<br />
                    😄😄😄😄😄😄
                  </div>
                </NullCard>
            }
          </Container>

          {
            !is_loaded && <Spinner></Spinner>
          }
        </Wrap>
        <AddBtn className="addBtn" onClick={() => { history.push("/addWord") }}><AddBtnText>+</AddBtnText></AddBtn>
      </Route>
      <Route path="/addWord" component={AddWord}></Route>
      <Route path="/updateWord" component={UpdateWord}></Route>
    </Flex >
  );
}

const InSpin = keyframes`
  from{
    transform : rotate(0deg);
  }
  
  to{
    transform : rotate(360deg);
  }
`

const OutSpin = keyframes`
  from{
    transform : rotate(360deg)
  }

  to{
    transform : rotate(0deg);
  }
`

const Flex = styled.div`
  display: flex;
`

const Wrap = styled.div`
  width: 500px;
  margin: auto;
  margin-top : 3%;
  margin-bottom : 5%;
  background-color: #AFEEEE;
  
  border-radius: 10px;
`

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 550px;
`

const Title = styled.h3`
  text-align : left;
  margin-left: 10%;
  padding-top : 10px;
`

const Card = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius : 5px;
  width: 400px;
  height: 270px;
  margin:auto;
  padding-left: 5%;
  text-align : left;
  margin-bottom : 10%;
  font-size: 15px;
`

const NullCard = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius : 5px;
  width: 400px;
  height: 270px;
  margin:auto;
  padding-left: 5%;
  text-align : left;
  margin-bottom : 5%;
  font-size: 15px;
  margin-top: 100px;

  display: flex;

  & img {
    margin: 5%;
    margin-left: 0px;
    margin-bottom : 50px;
  }

  & div {
    margin-top: 100px;
  }
`

const SubTitle = styled.p`
  border-bottom: 1px solid black;
  width: 7%;
  font-size: 12px;
`

const Text = styled.p`
  word-break:break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const DeleteBtn = styled.button`
  border: 1px solid #1E90FF;
  background-color: #1E90FF;
  border-radius: 5px;
  margin-right: 10px;
`

const UpdateBtn = styled.button`
  border: 1px solid #1E90FF;
  background-color: #1E90FF;
  border-radius: 5px;
`

const AddBtn = styled.div`
  border-radius: 100px;
  width: 80px;
  height: 80px;
  color: white;
  background-color: #1E90FF	;

  right: 35%;
  bottom: 10%;
  position: fixed;
  
  // 커서 올라갔을 때 모양 변하게
  cursor: pointer;

  &:hover{
    animation: ${InSpin} 2s;
  }

  &:not(:hover){
    animation: ${OutSpin} 2s;
  }
`

const AddBtnText = styled.div`
  text-align : center;
  padding-top: 12px;
  
  // 두께
  font-weight: bolder;
  // 넓이
  font-size: 40px;
`

export default App;
