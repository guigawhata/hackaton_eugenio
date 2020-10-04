import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex:1;
  background: white;
`;

export const ProfileContainer = styled.View<{ row: boolean }>`
  flex-direction: ${props => props.row ? 'row' : 'column'};
  width: 100%;
  padding: 0 40px;
  align-self: center;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const LogoNatura = styled.Image<{ loaded: boolean }>`
  height: ${props => props.loaded ? 120 : 200}px;
  resize-mode: contain;
`;

export const ProfileImage = styled.Image<{ loaded: boolean }>`
  margin-top: 5%;
  width: 200px;
  height: 200px;

  ${props => props.loaded && css`
    width: 80px;
    height: 80px;
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
    margin-top: 40px;
    margin-left: 20px;
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
