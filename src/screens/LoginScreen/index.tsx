import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    ActivityIndicator,
    Text,
} from "react-native"
import PhoneInput from "react-native-phone-number-input";
import Button from "../../atoms/Button";
import { Image } from "react-native";
import { Colors } from "../../utils/colors";

function LoginScreen() {
    const [value, setValue] = useState("102030405");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    const [loading, setLoading] = useState(false);

    const singIn = () => {

    }

    return (

        < View style={styles.container} >
            <StatusBar backgroundColor={Colors.primary} />
            <SafeAreaView style={styles.wrapper}>
                <View style={{ marginBottom: 0 }}>
                    <Image
                        source={{ uri: 'https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/9dd99ce3-8177-4817-bb92-d768a71e2de8/design-previews/671cd1d6-a4d6-4eab-8e69-10e778569288/1685141170172-thumbnail.jpeg' }}
                        style={{ width: "100%", alignSelf: 'center', height: 120 }}
                         />
                </View>
                {showMessage && (
                    <View style={styles.message}>
                        <Text>Value : {value}</Text>
                        <Text>Formatted Value : {formattedValue}</Text>
                        <Text>Valid : {valid ? "true" : "false"}</Text>
                    </View>
                )}
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="EG"
                    layout="first"
                    onChangeText={(text: string) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text: string) => {
                        setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                    codeTextStyle={{}}
                    containerStyle={{ borderRadius: 20 }}
                    textInputStyle={{}}
                    flagButtonStyle={{}}
                    textContainerStyle={{ borderRadius: 20 }}
                    countryPickerButtonStyle={{}}
                />
                <Button style={{ marginTop: 10 }} onPress={singIn}>
                    {
                        loading
                            ? <ActivityIndicator size="small" color="white" />
                            : <Text style={{ color:Colors.white, fontSize: 18, textAlign: 'center' ,fontFamily: 'Mooli-Regular' }}>Login</Text>
                    }
                </Button>
                <View style={{display: 'flex' , flexDirection:'row' , justifyContent: 'space-between'}}>
                    <Text style={{fontFamily: 'Mooli-Regular'}}>Don't have an account!</Text>
                    <Text style={{color: Colors.primary ,fontFamily: 'Mooli-Regular'}}>Sign Up</Text>
                </View>

            </SafeAreaView>
            <View style={{ height: '20%' }}>

            </View>
        </View >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        height: '80%'
    },
    message: {

    },
    button: {

    }
});
