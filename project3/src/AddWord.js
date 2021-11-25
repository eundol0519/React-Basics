import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { createDictionaryFB } from './redux/modules/dictionary'

// import Button from "@material-ui/core/Button";

const AddWord = (props) => {

  let wordRef = useRef('');
  let explanationRef = useRef('');
  let exampleRef = useRef('')

  const wordState = useRef();
  const explanationState = useRef();
  const exampleState = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const addInfo = () => {

    const wordInfo = wordRef.current.value;
    const explanationInfo = explanationRef.current.value;
    const exampleInfo = exampleRef.current.value

    if (wordInfo === "") {
      wordState.current.style.outline = 'none';
      wordState.current.style.border = '3px solid #FA8072';
      explanationState.current.style.border = '1px solid white';
      exampleState.current.style.border = '1px solid white';
    } else if (explanationInfo === "") {
      explanationState.current.style.outline = 'none';
      wordState.current.style.border = '1px solid white';
      explanationState.current.style.border = '3px solid #FA8072';
      exampleState.current.style.border = '1px solid white';
    } else if (exampleInfo === "") {
      exampleState.current.style.outline = 'none';
      wordState.current.style.border = '1px solid white';
      explanationState.current.style.border = '1px solid white';
      exampleState.current.style.border = '3px solid #FA8072';
    } else {
      dispatch(createDictionaryFB({ word: wordInfo, explanation: explanationInfo, example: exampleInfo }))
      history.push("/");
    }
  }

  return (
    <Flex>
      <Wrap>
        <Title>단어 추가하기</Title>
        <Card ref={wordState}>
          <SubTitle>단어</SubTitle>
          <Input ref={wordRef} type="text"/>
        </Card>
        <Card ref={explanationState}>
          <SubTitle>설명</SubTitle>
          <Input ref={explanationRef} type="text"/>
        </Card>
        <Card ref={exampleState}>
          <SubTitle>예시</SubTitle>
          <Input ref={exampleRef} type="text"/>
        </Card>

        <BtnList>
          <Btn onClick={addInfo}><BtnText>추가하기</BtnText></Btn>
          <Btn onClick={() => { history.goBack() }}><BtnText>목록</BtnText></Btn>
        </BtnList>
      </Wrap>
    </Flex>
  );
}

const InInput = keyframes`
  from{
    width: 90%;
    height: 60%;
    outline: none;
  }

  to{
    width: 95%;
    height: 65%;
    outline: none;
  }
`

const Flex = styled.div`
  margin: auto;
  display: flex;
`

const Wrap = styled.div`
  width: 520px;
  margin: auto;
  margin-top : 10%;
  margin-bottom : 5%;
  background-color: #AFEEEE;
  height: 615px;

  border-radius: 10px;
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
  width: 420px;
  height: 130px;
  margin :auto;
  padding-left: 5%;
  padding-bottom: 2%;
  text-align : left;
  margin-bottom : 2%;
  font-size: 15px;
`

const Input = styled.input`
  width: 90%;
  height: 60%;
  margin-bottom : 20px;
    
  &:focus{
    animation : ${InInput} 0.55s;
  }
`

const SubTitle = styled.p`
  border-bottom: 1px solid black;
  width: 7%;
  font-size: 12px;
`

const BtnList = styled.div`
  display: flex;
`

const Btn = styled.div`
  border-radius : 5px;
  width: 190px;
  height: 40px;
  background-color: white;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
  background-color: #1E90FF;
  padding-bottom: 10px;
`

const BtnText = styled.div`
  padding-top: 12px;
  color : white;
  font-size: 20px;
`

export default AddWord;