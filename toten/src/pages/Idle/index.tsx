import React from 'react'

import { Container, Title, Button, Image } from './styles'
import ImageBackground from '../../assets/retangulo.png'
import ImageQrCode from '../../assets/scan-qrcode.png'

const Idle: React.FC = ({ navigation }) => {
  const handleScan = () => {
    navigation.navigate('Home')
  }

  return (
    <Container source={ImageBackground}>
      <Title>
        Aponte o QrCode
      </Title>
      <Button onPress={handleScan} activeOpacity={0.9}>
        <Image source={ImageQrCode} />
      </Button>
    </Container>
  )
}

export default Idle