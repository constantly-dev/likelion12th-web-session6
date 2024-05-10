import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DATA } from '../assets/Data';

const Main = () => {
  return (
    <Container>
      <Title>React-Router</Title>
      {DATA.map((item) => (
        <NavbarLink to={`/detail/${item.num}`}>
          <MenuBox>{item.num} 페이지로 이동</MenuBox>
        </NavbarLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 700px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid #000000;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 900;
`;
const MenuBox = styled.div`
  width: 300px;
  height: 40px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #000000;
  font-family: Arial, Helvetica, sans-serif;
`;
const NavbarLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  &:hover {
    color: blue;
  }
`;
export default Main;
