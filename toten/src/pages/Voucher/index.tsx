import React, { useEffect, useState } from 'react'

import { Container, ProfileContainer, LogoNatura, ProfileImage, ProfileName, Content, Button, Text } from './styles'

import LogoImage from '../../assets/logo.png'
import ProfilePng from '../../assets/profile.png'

const Voucher: React.FC = ({ navigation }) => {
  const [loading, setLoading] = useState(false);


  return (
    <Container>
      <ProfileContainer row={!loading}>
        <LogoNatura source={LogoImage} loaded={!loading} />
        <ProfileImage source={ProfilePng} loaded={!loading} />
        <ProfileName loaded={!loading}>Guilherme Jeronimo</ProfileName>
      </ProfileContainer>
      {!loading && (
        <Content>
          <Button>
            <Text>
              Criar voucher
          </Text>
          </Button>
        </Content>
      )}
    </Container>
  )
}

export default Voucher