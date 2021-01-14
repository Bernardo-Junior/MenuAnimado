import styled from 'styled-components/native';

import normalize from '../../responsividade';

export const Container = styled.View`
  width: ${normalize(200)}px;
  height: ${normalize(20)}px;
`;

export const TextContainer = styled.Text`
  font-size: ${normalize(25)}px;
  color: #FFF
`;