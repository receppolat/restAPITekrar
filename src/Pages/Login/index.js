import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Components 
import GradiantButton from 'components/GradiantButton'

//Style
import styles from './style'

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <GradiantButton
        text={'Giriş yap'}
        style={styles.button}
        textColor={'black'}
        colors={['#fa7e1e', 'beige', '#d62976', '#962fbf']}
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </SafeAreaView>
  )
}
