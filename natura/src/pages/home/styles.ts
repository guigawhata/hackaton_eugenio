import styled from 'styled-components/native'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const Container = styled.ScrollView`
  width: 100%;
  padding: 20px 40px;
`;

export const Row = styled.View`
  flex-direction: row; 
  align-items:center;
`;

export const Title = styled.Text`
  font-size: 24px;
  flex:1;
  text-align:center;
  color: #3F3F3F;
`;

export const ProfileContainer = styled.View`
  align-items:center;
  width: 100%;
  margin-top: ${width / 5}px;
`;

export const ImageProfile = styled.Image`
  width: 150px;
  height: 150px;
`;

export const NameProfile = styled.Text`
  color: #3F3F3F;
  font-size: 24px;
  margin-top: 5px;
`;

export const TagProfile = styled.Text`
  color: #3F3F3F;
  opacity: 0.5;
  font-size: 14px;
  margin-top: 2px;
`;

export const TextQrCode = styled.Text`
  color: #3F3F3F;
  font-size: 18px;
  text-align:center;
  margin-top: ${width / 8}px;
`;

export const ImageQrCode = styled.Image`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  margin-top: ${width / 15}px;
`;