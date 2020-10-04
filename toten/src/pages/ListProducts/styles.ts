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
  flex-wrap: wrap;
  width:95%;
  margin: 0 auto;
  justify-content: space-around;
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 250px;
  margin-bottom: 20px;
`;

export const CardImage = styled.Image``;

