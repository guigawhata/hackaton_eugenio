import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  flex: 1;
  background: #D2570F;
  resize-mode: contain;  
  justify-content: center;
  align-content: center;  
`;

export const Title = styled.Text`
  text-align:center;
  font-size: 64px;
  font-weight: bold;
  color: white;
`;

export const Button = styled.TouchableOpacity`
  align-self: center;
  margin-top: 40px;
`;

export const Image = styled.Image`
  resize-mode: contain;
`;