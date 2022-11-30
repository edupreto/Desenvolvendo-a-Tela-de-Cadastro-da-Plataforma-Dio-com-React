import React from 'react';

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
        </Column>
        <Column  flex={1}>
        <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
        <UserInfo percentual={35} nome="Pablo Henrique" image="https://github.com/pablohdev.png" />
        <UserInfo percentual={90} nome="Pablo Henrique" image="https://github.com/pablohdev.png" />
        <UserInfo percentual={55} nome="Pablo Henrique" image="https://github.com/pablohdev.png" />
        <UserInfo percentual={35} nome="Pablo Henrique" image="https://github.com/pablohdev.png" />
        <UserInfo percentual={12} nome="Pablo Henrique" image="https://github.com/pablohdev.png" />
        </Column>

      </Container>
            
    </>
  )
}
export { Feed }