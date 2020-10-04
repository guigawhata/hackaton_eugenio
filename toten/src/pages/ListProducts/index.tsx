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
    { id: '1', image: product1, name: 'product1' },
    { id: '2', image: product2, name: 'product2' },
    { id: '3', image: product3, name: 'product3' },
    { id: '4', image: product4, name: 'product4' },
    { id: '5', image: product1, name: 'product1' },
    { id: '6', image: product2, name: 'product2' },
    { id: '7', image: product3, name: 'product3' },
    { id: '8', image: product4, name: 'product4' },
    { id: '9', image: product1, name: 'product1' },
    { id: '10', image: product2, name: 'product2' },
    { id: '11', image: product3, name: 'product3' },
    { id: '12', image: product4, name: 'product4' },
    { id: '13', image: product1, name: 'product1' },
    { id: '14', image: product2, name: 'product2' },
    { id: '15', image: product3, name: 'product3' },
    { id: '16', image: product4, name: 'product4' },
  ])

  const handleProductDetails = (product: string) => {
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
        {items.map(item => (
          <Card
            key={item.id}
            onPress={() => handleProductDetails(item.name)}
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