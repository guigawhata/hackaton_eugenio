import React, { useState } from 'react'

import { Container, ContainerBackground, ProfileContainer, LogoNatura, ProfileImage, ProfileName, Divider, Title, Content, Card, CardImage } from './styles'

import LogoImage from '../../assets/logo.png'
import ProfilePng from '../../assets/profile.png'
import Retangulo2Png from '../../assets/retangulo2.png'

import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'


const ListProducts: React.FC = ({ navigation, route }) => {

  const { from } = route.params;
  const [items, setItems] = useState([
    { id: 'a803f8ef-4351-43ba-97af-6e8e0c705e92', image: product1, name: 'product1' },
    { id: '5d39cce4-c95e-4024-8f11-bb96d24f4d09', image: product2, name: 'product2' },
    { id: '5b14fb89-be63-4c8d-8890-1f169bfa5644', image: product3, name: 'product3' },
    { id: 'c447c1c8-e83f-4c69-94eb-547380c9c7ce', image: product4, name: 'product4' },
    { id: 'a803f8ef-4351-43ba-97af-6e8e0c705e92', image: product1, name: 'product1' },
    { id: '5d39cce4-c95e-4024-8f11-bb96d24f4d09', image: product2, name: 'product2' },
    { id: '5b14fb89-be63-4c8d-8890-1f169bfa5644', image: product3, name: 'product3' },
    { id: 'c447c1c8-e83f-4c69-94eb-547380c9c7ce', image: product4, name: 'product4' },
    { id: 'a803f8ef-4351-43ba-97af-6e8e0c705e92', image: product1, name: 'product1' },
    { id: '5d39cce4-c95e-4024-8f11-bb96d24f4d09', image: product2, name: 'product2' },
    { id: '5b14fb89-be63-4c8d-8890-1f169bfa5644', image: product3, name: 'product3' },
    { id: 'c447c1c8-e83f-4c69-94eb-547380c9c7ce', image: product4, name: 'product4' },
    { id: 'a803f8ef-4351-43ba-97af-6e8e0c705e92', image: product1, name: 'product1' },
    { id: '5d39cce4-c95e-4024-8f11-bb96d24f4d09', image: product2, name: 'product2' },
    { id: '5b14fb89-be63-4c8d-8890-1f169bfa5644', image: product3, name: 'product3' },
    { id: 'c447c1c8-e83f-4c69-94eb-547380c9c7ce', image: product4, name: 'product4' },
  ])

  const handleProductDetails = (product: { id: string; image: string }) => {
    navigation.navigate('ProductDetails', { from: from, product: product })
  }

  return (
    <Container>
      <ProfileContainer>
        <LogoNatura source={LogoImage} />
        <ProfileImage source={ProfilePng} />
        <ProfileName>Guilherme Jeronimo</ProfileName>
      </ProfileContainer>
      <Divider>
        <Title>{from}</Title>
      </Divider>
      <Content>
        {items.map((item, index) => (
          <Card
            key={index}
            onPress={() => handleProductDetails(item)}
            style={{
              shadowColor: "#aaa",
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 3.65,

              elevation: 6,
            }}>
            <CardImage source={item.image} />
          </Card>
        ))}
      </Content>
      <ContainerBackground source={Retangulo2Png} />
    </Container>
  )
}

export default ListProducts