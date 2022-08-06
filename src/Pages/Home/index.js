import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


//Components
import Post from 'components/Post'
import GradiantButton from 'components/GradiantButton'

//Styles

import styles from './style'

export default function Home({navigation}) {

  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(response => {
        setPosts(response.posts)
      });

  }, [])

  const renderItem = ({item}) => {
    return(
      <Post post ={item} />
    )
  }
  const navigateToAdd = () => {
    navigation.navigate('PostScreen');
  }
  return (
    <SafeAreaView>
      <GradiantButton 
        text = {'Post oluştur'}
        style ={styles.button}
        textColor = {'white'}
        onPress = {navigateToAdd}
      />
      <FlatList
        data={posts}
        keyExtractor={item => { item.id }}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}
