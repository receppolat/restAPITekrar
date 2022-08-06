import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


//Styles
import styles from './style'

//Components
import GradiantButton from 'components/GradiantButton'
export default function AddPost() {

    const [body, setBody] = useState();
    const [title, setTitle] = useState();
    const [tags, setTags] = useState();

    const addPost = () => {
        if (body && title && tags) {
            fetch('https://dummyjson.com/posts/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    userId: 5,
                    body: body,
                    tags: tags,
                })
            })
                .then(res => res.json())
                .then(console.log);
        }
    }
    return (
        <SafeAreaView>
            <TextInput
                placeholder='Body'
                onChangeText={setBody}
                style={styles.input}
            />
            <TextInput
                placeholder='Title'
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                placeholder='Tags'
                onChangeText={setTags}
                style={styles.input}
            />
            <GradiantButton
                text={'Kaydet'}
                style={styles.button}
                textColor={'white'}
                onPress={addPost}
            />
        </SafeAreaView>
    )
}
