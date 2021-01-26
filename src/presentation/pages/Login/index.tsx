import React, { useEffect, useState } from 'react';

const boat = require('../../../assets/boat.png');

import {
  Animated,
  StatusBar,
} from 'react-native';

import { 
  Container, 
  ImageHeader, 
  ButtonOp, 
  TextButton,
  ViewDate,
  ContainerMain,
  ViewinViewDate,
  TextViewDate,
  ViewCards
} from './styles';


import normalize from '../../responsivity';

const App: React.FC = () => {
  const [active1, setActive1] = useState<boolean>(true);
  const [active2, setActive2] = useState<boolean>(false);
  const [pos1] = useState<Animated.Value>(new Animated.Value(0));
  const [pos2] = useState<Animated.Value>(new Animated.Value(0));



  const loginIn = () => {
    setActive1(false)
    setActive2(true)
    Animated.parallel([
      Animated.timing(
        pos2,
        {
          toValue: normalize(-411),
          duration: 500,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        pos1,
        {
          toValue: normalize(-411),
          duration: 500,
          useNativeDriver: false,
        }
      ),


    ]).start();


  }

  const singIn = async () => {
    setActive1(true)
    setActive2(false)

    Animated.parallel([
      Animated.timing(
        pos2,
        {
          toValue: normalize(0),
          duration: 500,
          useNativeDriver: false,
        }
      ),
      Animated.timing(
        pos1,
        {
          toValue: normalize(0),
          duration: 500,
          useNativeDriver: false,
        }
      ),


    ]).start();
  }



  return (
    <>
      <StatusBar backgroundColor="#DBD5F1" barStyle='dark-content' />
      <ContainerMain>
        <ImageHeader source={boat} resizeMode="cover" />
        <Container>
          <ButtonOp active={active1} onPress={() => { singIn() }} >
            <TextButton active={active1}>
              Existing
            </TextButton>
          </ButtonOp>

          <ButtonOp active={active2} onPress={() => (loginIn())} >
            <TextButton
              active={active2}
            >
              New
            </TextButton>
          </ButtonOp>
        </Container>

        <ViewCards>


          <ViewDate as={Animated.View} style={{transform: [{ translateX: pos2}]}}>
            <ViewinViewDate >
              <TextViewDate >Existing</TextViewDate>
            </ViewinViewDate>
          </ViewDate>

          <ViewDate as={Animated.View} style={{transform: [{ translateX: pos1}]}}>
            <ViewinViewDate >
              <TextViewDate>New</TextViewDate>
            </ViewinViewDate>
          </ViewDate>
        </ViewCards>
      </ContainerMain>
    </>

  )
};

export default App;