import React from 'react'
import { StyleSheet, View } from 'react-native'

const Screen = ({children,style}) => {
    return( <View style={[styles.screen,style]}>{children}</View>)
}

export default Screen

const styles = StyleSheet.create({
    screen:{
        flex:1
    }
})
