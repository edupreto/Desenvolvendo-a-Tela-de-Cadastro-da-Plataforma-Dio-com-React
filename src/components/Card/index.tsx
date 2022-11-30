import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import {
    HasInfo,
    PostInfo,
    UserPicture,
    CardContainer,
    Content,
    ImageBackground,
    UserInfo
  } from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.digitalinnovation.one/public/components/pages/public-catalog/header/banner-play.png"/>
        <Content>
          <UserInfo>
            <UserPicture src='https://github.com/edupreto.png'/>
              <div>
                <h4>Edu Preto</h4>
                <p>Há 8 minutos</p>
              </div>
            </UserInfo>
          <PostInfo>
            <h4>Projeto para Bootcamp Orange Inter</h4>
            <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...</p><strong>Saiba Mais</strong>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
            <p>
              <FiThumbsUp /> 10
            </p>
          </HasInfo>
        </Content>      
    </CardContainer>
  )
}
export { Card }
