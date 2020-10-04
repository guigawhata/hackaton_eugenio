import React, { useEffect, useState } from 'react'

import { Container, ProfileContainer, LogoNatura, ProfileImage, ProfileName, Content, Row, Card, Thumbnail, TitleCard } from './styles'

import LogoImage from '../../assets/logo.png'
import ProfilePng from '../../assets/profile.png'

import novidadesPng from '../../assets/novidades.png'
import promocoesPng from '../../assets/promocoes.png'
import perfumariaPng from '../../assets/perfumaria.png'
import maquiagemPng from '../../assets/maquiagem.png'

const Home: React.FC = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  const handleNavigateToListProducts = (from: string) => {
    navigation.navigate('ListProducts', { from: from })
  }

  return (
    <Container>
      <ProfileContainer row={!loading}>
        <LogoNatura source={LogoImage} loaded={!loading} />
        <ProfileImage source={ProfilePng} loaded={!loading} />
        <ProfileName loaded={!loading}>Guilherme Jeronimo</ProfileName>
      </ProfileContainer>
      {!loading && (
        <Content>
          <Row>
            <Card onPress={() => handleNavigateToListProducts('Novidades')}>
              <Thumbnail source={novidadesPng} />
              <TitleCard>Novidades</TitleCard>
            </Card>
            <Card onPress={() => handleNavigateToListProducts('Promocoes')}>
              <Thumbnail source={promocoesPng} />
              <TitleCard>Promoções</TitleCard>
            </Card>
          </Row>
          <Row>
            <Card onPress={() => handleNavigateToListProducts('Perfumaria')}>
              <Thumbnail source={perfumariaPng} />
              <TitleCard style={{ top: 30 }}>Perfumaria</TitleCard>
            </Card>
            <Card onPress={() => handleNavigateToListProducts('Maquiagem')}>
              <Thumbnail source={maquiagemPng} />
              <TitleCard style={{ top: 30 }}>Maquiagem</TitleCard>
            </Card>
          </Row>
        </Content>
      )}
    </Container>
  )
}

export default Home