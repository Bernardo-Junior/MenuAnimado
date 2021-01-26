
import styled from 'styled-components/native';

import normalize from '../../responsivity';

import { IButtonExisting } from '../../../data/protocols/Login';

export const ContainerMain = styled.View`
  flex:1;
  background-color: #DBD5F1;
`;
export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  margin: 10px;
  width: ${normalize(350)}px;
  height: ${normalize(70)}px;
  align-self: center;
  background-color: #6A81CD;
  border-radius: ${normalize(50)}px;
  margin-top: ${normalize(20)}px;
`;

export const ImageHeader = styled.Image`
  width: ${normalize(300)}px; 
  height: ${normalize(200)}px;
  align-self: center;
  margin-top: ${normalize(40)}px;
`;

export const ButtonOp = styled.TouchableOpacity<IButtonExisting>`

  width: ${normalize(170)}px;
  height: ${normalize(60)}px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.active ?' #FFFFFF' : 'transparent' };
  border-radius: ${normalize(50)}px;
         
`;

export const TextButton = styled.Text<IButtonExisting>`
  color: ${props => props.active ?' #000000' : '#FFFFFF' };
  font-weight: bold;
`;

export const ViewDate = styled.View`
  width: ${normalize(411)}px; 
  height: ${normalize(400)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${normalize(20)}px;
`;

export const ViewinViewDate = styled.View`
  width: ${normalize(300)}px; 
  height: ${normalize(400)}px; 
  justify-content: center;
  background-color: #FFFFFF; 
  border-radius: ${normalize(15)}px; 
  border-color: #000000;
  elevation: 5;
`;

export const TextViewDate = styled.Text`
  align-self: center; 
  font-weight: bold;
  color:  #000000;
  font-size: ${normalize(40)}px;
 
`;

export const ViewCards = styled.View`
  flex-direction: row;
`;



