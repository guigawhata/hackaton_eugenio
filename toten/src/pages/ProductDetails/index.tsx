import React, { useState } from 'react'

import {
  Container,
  ProfileContainer,
  LogoNatura,
  ProfileImage,
  ProfileName,
  Divider,
  Title,
  Content,
  ProductItem,
  ProductOtherItem,
  Column,
  ProductName,
  ProductTag,
  ProductDescription,
  ListOtherItems,
  Button,
  ButtonText,
  Row,
} from './styles'

import LogoImage from '../../assets/logo.png'
import ProfilePng from '../../assets/profile.png'

import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'

import api from '../../services/api'


const ProductDetails: React.FC = ({ navigation, route }) => {

  const from = route.params.from as string;
  const product = route.params.product as { id: string; image: string; name: string };

  const products = {
    product1: product1,
    product2: product2,
    product3: product3,
    product4: product4,
  }

  const handleListProducts = () => {
    navigation.navigate('ListProducts')
  }

  const handleSubmit = async () => {
    await api.post('/totems/try-aroma', {
      product_id: product.id,
      client_id: 'de4389db-578b-4689-88f6-88271113dda8',
      totem_id: '501ca674-ce78-4702-851a-3fbba2955830'
    }).finally(() => {
      setTimeout(() => {
        navigation.navigate('Voucher')
      }, 1000);
    })

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
        <ProductItem source={products[product.name.toLocaleLowerCase()]} />
        <Column>
          <ProductName>Nome do Produto</ProductName>
          <ProductTag>#4322</ProductTag>
          <ProductDescription>
            Descrição
          </ProductDescription>
          <ListOtherItems>
            <ProductOtherItem source={products[product.name.toLocaleLowerCase()]} />
            <ProductOtherItem source={products[product.name.toLocaleLowerCase()]} />
            <ProductOtherItem source={products[product.name.toLocaleLowerCase()]} />
            <ProductOtherItem source={products[product.name.toLocaleLowerCase()]} />
          </ListOtherItems>
        </Column>
        <Button onPress={handleSubmit} style={{ backgroundColor: '#EB6618', position: 'absolute', right: '5%', top: '7%' }}>
          <ButtonText>
            Quero Provar!
          </ButtonText>
        </Button>
      </Content>
      <Row>
        <Button style={{ backgroundColor: '#F0F0F0' }}>
          <ButtonText style={{ color: 'black', fontWeight: 'normal' }} onPress={handleListProducts}>
            Ver outros
          </ButtonText>
        </Button>
        <Button style={{ backgroundColor: '#00CE08' }}>
          <ButtonText>
            Gostei, vou levar!
          </ButtonText>
        </Button>
      </Row>

    </Container>
  )
}

export default ProductDetails