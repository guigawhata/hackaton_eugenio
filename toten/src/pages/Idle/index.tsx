import React, { useEffect } from 'react'

import { Container, Title, ContainerView, Image } from './styles'
import ImageBackground from '../../assets/retangulo.png'
import ImageQrCode from '../../assets/scan-qrcode.png'

import socket from '../../services/socket'

const Idle: React.FC = ({ navigation }) => {
  useEffect(() => {
    socket.disconnect()
    socket.connect()
    socket.on('welcome', (response) => { console.log(response); handleScan() })
  }, [])

  const handleScan = () => {
    navigation.navigate('Home')
  }

  return (
    <Container source={ImageBackground}>
      <Title>
        Aponte o QrCode
      </Title>
      <ContainerView>
        <Image source={ImageQrCode} />
      </ContainerView>
    </Container>
  )
}

export default Idle