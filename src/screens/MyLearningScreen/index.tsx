import React from 'react'
import { StatusBar } from 'react-native'
import { Text, View } from 'react-native'
import { Colors } from '../../utils/colors'

function MyLearingScreen() {

  return (
    <View style={{
      marginTop: StatusBar.currentHeight
    }}>
      <Text>Myleaning</Text>
      <Text>Myleaning</Text>
      <Text>Myleaning</Text>
      <Text>{StatusBar.currentHeight}</Text>
    </View>
  )
}

export default MyLearingScreen