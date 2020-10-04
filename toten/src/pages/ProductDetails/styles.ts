import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background: white;
`;

export const ContainerBackground = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -10;
`;


export const ProfileContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 90px;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
`;

export const LogoNatura = styled.Image`
  height: 90px;
  width: 350px;  
  resize-mode: contain;
`;

export const ProfileImage = styled.Image`
  height: 80%;
  width: 100px;
  resize-mode: contain;
  margin-top: auto;
  margin-left: auto;  
`;

export const ProfileName = styled.Text`
  color: #3F3F3F;
  font-size: 24px;
  margin-top: 20px;
`;

export const Divider = styled.View`
  width: 95%;
  background: #EB6618;
  border-radius: 5px;
  margin: 30px auto;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  padding: 10px;
  margin-left: 5%;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const ProductItem = styled.Image`
  resize-mode: contain;
  margin-left: 5%;
`;

export const ProductOtherItem = styled.Image`
  width: 127px;
  height: 159px;
  margin-right: 15px;
`;

export const Column = styled.View`
  flex-direction: column;
  width: 50%;
  margin-left: 10%;
`;

export const ProductName = styled.Text`
  font-size: 24px;
  color: #3F3F3F;
`;

export const ProductTag = styled.Text`
  font-size: 18px;
  color: #3F3F3F;
  opacity: 0.48;
  margin-top: 3px;
`;

export const ProductDescription = styled.Text`
  font-size: 24px;
  color: #3F3F3F;
  margin-top: 20px;
`;

export const ListOtherItems = styled.View`
  flex-direction: row;
  margin-top: 20%;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  height: 69px;
  justify-content:center;
  align-items:center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  padding: 0 60px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
  padding: 0 6%;
`;

