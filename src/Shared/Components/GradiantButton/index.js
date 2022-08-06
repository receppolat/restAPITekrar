import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

//Third Party
import LinearGradient from 'react-native-linear-gradient'

export default function GradiantButton({ text, style, textColor, colors = ['#4c669f', '#3b5998', '#192f6a'], onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={colors} style={style}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            >
                <Text style={{ color: textColor }}>{text}</Text>
            </LinearGradient >
        </TouchableOpacity>
    )
}
