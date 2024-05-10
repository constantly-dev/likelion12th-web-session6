import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
  const { pageId } = useParams();
  return <Container>{pageId}페이지 입니다.</Container>;
};

const Container = styled.div`
  border: 1px solid #000000;
  margin: 100px auto;
  text-align: center;
  width: 200px;
  height: 40px;
`;
export default Detail;
