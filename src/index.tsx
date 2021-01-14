import React, { useEffect, useState } from 'react';

import boat from './assets/boat.png';

import {
  View,
  Text,
  Animated,
 
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';


import Login from './components/Login';

import Signin from './components/Signin';

import { 
  Container, 
  ImageHeader, 
  ButtonOp, 
  TextButton,
  ViewDate,
  ContainerMain,
  ViewinViewDate,
  TextViewDate
} from './styles';

interface IAnimatedTiming {
  toValue: number;
  duration: number;
}

import normalize from './responsividade';

const App: React.FC = () => {
  const [active1, setActive1] = useState<boolean>(true);
  const [active2, setActive2] = useState<boolean>(false);
  const [pos1] = useState<Animated.Value>(new Animated.Value(0));
  const [pos2] = useState<Animated.Value>(new Animated.Value(0));



  const entrar1 = () => {
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

  const cadastrar1 = async () => {
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
          <ButtonOp active={active1} onPress={() => { cadastrar1() }} >
            <TextButton active={active1}>
              Existing
            </TextButton>
          </ButtonOp>

          <ButtonOp active={active2} onPress={() => (entrar1())} >
            <TextButton
              active={active2}
            >
              New
            </TextButton>
          </ButtonOp>
        </Container>
        <View style={{ flexDirection: 'row', }}>


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
        </View>
      </ContainerMain>
    </>

  )
};

export default App;