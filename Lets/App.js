/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { WebView } from "react-native-webview";

const App = () => {
  const [webUrl, setWebUrl] = useState('192.168.56.56');
  const [withdrawView, setWithdrawView] = useState(true);


  const newCameraPermission = async () => {
    await Camera.requestCameraPermission();
  }
  newCameraPermission();


  const webUrlHandle = (navState) => {
    if (navState.url.indexOf('withdraw') > 0) {
      setWithdrawView(false);
    } else {
      setWithdrawView(true);
    }
  }

  const returnToWebview = () => {
    setWithdrawView(true);
  }


  return (
    <SafeAreaView style={styles.screen}>
      {
        withdrawView
          ?
          <WebView
            source={{ uri: webUrl }}
            style={styles.view}
            onNavigationStateChange={(navState) => { webUrlHandle(navState) }}
          />
          :
          <View>
            <Text>gd</Text>
            <Button title="웹뷰로 돌아가기" onPress={returnToWebview}></Button>
            <Button title="카메라(QR)찍기" ></Button>

          </View>
      }
    </SafeAreaView>
  )



}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
})


export default App;
