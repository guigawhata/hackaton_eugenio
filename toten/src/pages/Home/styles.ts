import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex:1;
  background: white;
`;

export const ProfileContainer = styled.View<{ row: boolean }>`
  flex-direction: column;
  width: 100%;
  align-self: center;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 0 5%;

  ${props => props.row && css`
    flex-direction: row;
    height: 90px;
  `};
`;

export const LogoNatura = styled.Image<{ loaded: boolean }>`
  height: ${props => props.loaded ? '90px' : '28%'};
  width: ${props => props.loaded ? '350px' : '54%'};  
  resize-mode: contain;
`;

export const ProfileImage = styled.Image<{ loaded: boolean }>`
  margin-top: 5%;
  width: 200px;
  height: 200px;

  ${props => props.loaded && css`
    height: 80%;
    width: 100px;
    resize-mode: contain;
    margin-top: auto;
    margin-left: auto;
  `};
`;

export const ProfileName = styled.Text<{ loaded: boolean }>`
  color: #3F3F3F;
  font-size: 36px;
  margin-top: 15px;

  ${props => props.loaded && css`
    font-size: 24px;
    margin-top: 20px;
  `};
`;

export const Content = styled.View`
  width: 90%;
  flex-direction: column;
  align-self: center;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;  
`;

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  width: 45%;   
`;

export const Thumbnail = styled.Image`
  width: 100%;  
  resize-mode: contain;
`;

export const TitleCard = styled.Text`
  color: white;
  font-size: 48px;  
  font-weight: bold;
  position: absolute;
  bottom: 30px;
  left: 30px;
`;
