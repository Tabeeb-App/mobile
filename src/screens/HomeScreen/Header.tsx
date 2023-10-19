import React from 'react'
import { View, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../utils/colors'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Routes } from '../../utils/routes'

const NotificationsButton = () => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(Routes.Notifications as never)}
        >
            <View style={{ borderWidth: 2, borderColor: Colors.primary, justifyContent: 'center', borderRadius: 50, width: 40, height: 40, alignItems: 'center' }}>
                <Fontisto name="bell" color={Colors.primary} size={20} />
            </View>
        </TouchableWithoutFeedback>
    )
}



const ProfileAvatar = () => (
    <Image source={{ uri: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' }}
        style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            borderColor: Colors.primary,
            borderWidth: 1
        }} />
)

const WelcomeMessage = () => (
    <View>
        <Text style={{ color: 'black', fontSize: 13, fontFamily: 'Mooli-Regular' }} >Welcome</Text>
        <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mooli-Regular' }}>Abdullah omar</Text>
    </View>
)

function HomeHeader() {
    return (
        <View
            style={{
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
                position: 'relative',

            }}>
            <View style={{
                paddingHorizontal: 15,
                paddingTop: 20,
                paddingBottom: 10,

            }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: "center",
                    }}
                >


                    <View style={{ flexDirection: 'row', alignItems: 'center', flexGrow: 1, gap: 10 }}>
                        <ProfileAvatar />
                        <WelcomeMessage />
                    </View>
                    <NotificationsButton />
                </View>

            </View>

        </View>





    )
}

export default HomeHeader



