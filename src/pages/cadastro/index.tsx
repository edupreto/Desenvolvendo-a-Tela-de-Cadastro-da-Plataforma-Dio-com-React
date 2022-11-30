import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MdLock, MdEmail } from 'react-icons/md';
import { HiUser } from 'react-icons/hi';

import { InputRecord } from '../../components/InputRecord';
import { TitleHighLight, FazerLogin, Container, Title, Column, Wrapper, SubTitle, Row, PrivaciText } from './styles';

const Cadastro = () => {

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/Feed')
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>            
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <Title>Comece agora grátis</Title>
            <SubTitle>Crie sua conta e make the change._</SubTitle>
            <form>
            <InputRecord placeholder="Name" leftIcon={<HiUser />} name={undefined} />
            <InputRecord placeholder="E-mail" leftIcon={<MdEmail />} name={undefined} />
            <InputRecord placeholder="Password" leftIcon={<MdLock />} name={undefined} />
            <Button title="Criar minha conta" variant="secondary" onClick={handleClickSignIn}/>
            
            </form>
            <Row>
            <PrivaciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PrivaciText>
            </Row>            
            <Row>
            <FazerLogin>Já tenho conta.
              <TitleHighLight> Fazer login
                </TitleHighLight>
                </FazerLogin>
                          
            </Row>
          </Wrapper>                      
        </Column>
      </Container>
            
    </>
  )
}
export { Cadastro }