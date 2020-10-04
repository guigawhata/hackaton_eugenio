import React from 'react'

import { Container, Row, Title, ProfileContainer, ImageProfile, NameProfile, TagProfile, TextQrCode, ImageQrCode } from './styles'
import Icon from 'react-native-vector-icons/AntDesign'

import profilePng from '../../assets/profile.png';
import qrCodePng from '../../assets/qr-code.png';

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
      <ImageQrCode source={qrCodePng} />
    </Container>
  )
}

export default Home