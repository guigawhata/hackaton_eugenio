import React, { useEffect, useState } from 'react'

import { Container, ProfileContainer, LogoNatura, ProfileImage, ProfileName, Content, Row, Card, Thumbnail, TitleCard } from './styles'

import LogoImage from '../../assets/logo.png'
import ProfilePng from '../../assets/profile.png'

import novidadesPng from '../../assets/novidades.png'
import promocoesPng from '../../assets/promocoes.png'
import perfumariaPng from '../../assets/perfumaria.png'
import maquiagemPng from '../../assets/maquiagem.png'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

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
            <Card>
              <Thumbnail source={novidadesPng} />
              <TitleCard>Novidades</TitleCard>
            </Card>
            <Card>
              <Thumbnail source={promocoesPng} />
              <TitleCard>Promoções</TitleCard>
            </Card>
          </Row>
          <Row>
            <Card>
              <Thumbnail source={perfumariaPng} />
              <TitleCard>Perfumaria</TitleCard>
            </Card>
            <Card>
              <Thumbnail source={maquiagemPng} />
              <TitleCard>Maquiagem</TitleCard>
            </Card>
          </Row>
        </Content>
      )}
    </Container>
  )
}

export default Home