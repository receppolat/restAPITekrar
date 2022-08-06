import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

//Styles
import styles from './style'
//Components
import Icon from 'components/Icon'

export default function Post({ post }) {
    const [reactions, setReactions] = useState(post.reactions);
    const [isLiked, setIsLiked] = useState(false)
    const reactionSet = () => {
        fetch('https://dummyjson.com/posts/' + post.id, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reactions: post.reactions + 1
            })
        })
            .then(res => res.json())
            .then(response => {
                if (isLiked == false) {
                    setReactions(reaction => {
                        return ++reaction
                    })
                    setIsLiked(true)
                }
                else {
                    setReactions(reaction => {
                        return --reaction
                    })
                    setIsLiked(false)
                }
            });
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text>Photo </Text>
                <Text>Username</Text>
            </View>
            <View style={{ marginTop: '2%' }}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, marginBottom: '1%' }}>{post.title}</Text>
                <Text>{post.body}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '2%' }}>
                {
                    post.tags.map((tag) => {
                        return (<Text style={{ color: 'blue' }}>{'#' + tag}</Text>)
                    })
                }
            </View>
            <TouchableOpacity
                style={{ flexDirection: 'row-reverse', alignItems: 'center' }}
                onPress={reactionSet}
            >
                {
                    isLiked ? <Icon name="star : ant" size={25} color="rgba(0,0,0,.4)" />:
                    <Icon name="staro : ant" size={25} color="rgba(0,0,0,.4)" /> 
                }
                
                <Text style={{ fontSize: 18 }}>{reactions}</Text>
            </TouchableOpacity>

        </View >
    )
}
