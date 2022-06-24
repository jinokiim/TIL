import AppLoading from 'expo-app-loading';
import React, { useState,  } from 'react';
import * as Font from 'expo-font';
import { Text, Image } from 'react-native';
import { Asset, useAssets } from 'expo-asset';


import {Ionicons} from '@expo/vector-icons'

// font와 Image를 확인해서 미리 로드
// const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))
// const loadImages = (images) => images.map(image => {
//   if(typeof image === 'string') {
//     return Image.prefetch(image);
//   } else{
//     return Asset.loadAsync(image)
//   }
// });

// AppLoading Component : css나 API등 사전에 미리 로딩 (expo install expo-app-loading)
export default function App() {

  // const [ready, setReady] = useState(false);
  // const onFinish = () => setReady(true);

  // 로딩시에 필요한 행동들을 적는다. (API를 호출하거나, DB정보를 받아오거나 등을 위해서)
  // const startLoading = async() => {
  //   const fonts = loadFonts([Ionicons.font]);
  //   const images = loadImages([require('./pig.png'), "https://reactnative.dev/img/oss_logo.png"]);
  //   await Promise.all([...fonts, ...images])
  // };

  const [assets] = useAssets([require('./pig.png')])

  if(!assets) {
    return <AppLoading></AppLoading>;
  }

  // 로딩이 아직 되지 않았다면 보여줄것.
  // if (!ready) {
  //   return <AppLoading
  //     startAsync={startLoading}
  //     onFinish={onFinish} 
  //     onError={console.error}>
  //   </AppLoading>;
  // }
  // 로딩 완료 후
  return <Text>We are done loading</Text>
}
