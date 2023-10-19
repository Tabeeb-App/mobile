import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

type StyledButtonProps = {
    children: React.ReactElement;
    style?: ViewStyle | TextStyle | ImageStyle;
    onPress: () => void
    disabled?: boolean
}

const StyledButton = (props: StyledButtonProps) => {
    const { onPress, style, children , disabled } = props
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.9} style={{ backgroundColor: 'transparent' , opacity: disabled ? 0.5 : 1 }} onPress={onPress}>
            <View style={[styles.button, style]}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default StyledButton



const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 20 ,
        elevation: 10,
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center'
    }
})