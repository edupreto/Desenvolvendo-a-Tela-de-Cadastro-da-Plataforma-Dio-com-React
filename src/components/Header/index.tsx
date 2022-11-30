import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dio 1.png'
import { Button } from '../Button';

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture
} from './styles';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/')
  }  


  return (
    <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logo da dio" onClick={handleClickSignIn} />
            {autenticado ? (
              <>
              <BuscarInputContainer>
              <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
              </>
            ) :null}
          </Row>
          <Row>
            {autenticado ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
            ) : (
              <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />              
              </>)}
          </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
