import React, { useEffect, useState } from 'react'

import { Container, Row, Title, ProfileContainer, ImageProfile, NameProfile, TagProfile, TextQrCode, ContainerQrCode } from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import QRCode from 'react-native-qrcode';

import profilePng from '../../assets/profile.png';

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Icon name='left' size={22} color="black" style={{ position: 'absolute' }} />
        <Title>QRCode</Title>
      </Row>
      <ProfileContainer>
        <ImageProfile source={profilePng} />
        <NameProfile>Guilherme Jeronimo</NameProfile>
        <TagProfile>#65473</TagProfile>
      </ProfileContainer>
      <TextQrCode>Aproxime o QRCode da banca para continuar a compra.</TextQrCode>
      <ContainerQrCode>
        <QRCode
          value={JSON.stringify({ id: 'de4389db-578b-4689-88f6-88271113dda8' })}
          size={500}
          bgColor='black'
        />
      </ContainerQrCode>
    </Container>
  )
}

export default Home