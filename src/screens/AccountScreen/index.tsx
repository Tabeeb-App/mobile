import React from 'react'
import { View, Text, TouchableHighlight, ScrollView, StyleSheet, Image, StatusBar } from 'react-native'
import { CommonActions, useNavigation, useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../../utils/colors'
import { Routes } from '../../utils/routes'

function AccountScreen() {

    const navigation = useNavigation()
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: Colors.white, marginTop: StatusBar.currentHeight }}

        >
            <StatusBar />

            {/* Account info */}
            <View style={Styles.headerContainer}>
                <View style={Styles.accountInfoContainer}>
                    <Image source={{ uri: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' }}
                        style={Styles.accountInfoImage} />
                    <View>
                        <Text style={Styles.accountInfoName}>Abdullah omar</Text>
                        <Text style={Styles.accountInfoEmail}>abdullahomar.dev@gmail.com</Text>
                    </View>
                </View>
            </View>


            {/* User Info */}
            <View style={Styles.group}>
                <Text
                    style={{
                        marginHorizontal: 15, fontSize: 14, fontFamily: 'Mooli-Regular', color: 'gray'

                    }}
                >Account Settings</Text>
                {
                    ProfileScreenData.account.map((item, ind) => (
                        <SectionItem key={ind} item={item} ind={ind} groupLength={ProfileScreenData.account.length}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: Colors.primary }}> {item.icon}</Text>
                                <Text style={{ color: Colors.black, paddingTop: 3 }}> {item.text}</Text>
                            </View>
                            <MaterialIcons style={{ color: Colors.primary, fontSize: 22 }} name='keyboard-arrow-right' />
                        </SectionItem>

                    ))
                }
            </View>


            {/* App Info */}
            <View style={Styles.group}>
                <Text style={{
                    marginHorizontal: 15, fontSize: 14, fontFamily: 'Mooli-Regular', color: 'gray'
                }}>Help & support</Text>
                {
                    ProfileScreenData.support.map((item, ind) => (
                        <SectionItem key={ind} item={item} ind={ind} groupLength={ProfileScreenData.support.length}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: Colors.primary, }}> {item.icon}</Text>
                                <Text style={{ color: Colors.black, paddingTop: 3 }}> {item.text}</Text>
                            </View>
                            <MaterialIcons style={{ color: Colors.primary, fontSize: 22 }} name='keyboard-arrow-right' />
                        </SectionItem>
                    ))
                }
            </View>


            <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="#DDDDDD"
                onPress={() => {
                    // Reset the navigation stack and remove all screens
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0, // Index of the new screen in the stack
                            routes: [
                                { name: Routes.Login }, // New screen to navigate to
                            ],
                        })
                    );
                }}
                style={{
                    borderRadius: 10

                }}
            >
                <View style={{
                    flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10
                }}>
                    <MaterialCommunityIcons style={{ color: Colors.primary, }} name="logout" size={25} />
                    <Text style={{ color: Colors.primary, paddingTop: 3 }}>Logout</Text>
                </View>
            </TouchableHighlight>

        </ScrollView>

    )
}


const SectionItem = ({ children, groupLength, item, ind }: { children: React.ReactNode, groupLength: Number, item?: { text: String, route: String, icon: React.ReactNode }, ind?: Number }) => {

    const navigation = useNavigation()

    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#DDDDDD"
            //@ts-ignore
            onPress={() => navigation.navigate(item.route)}
            style={{
                borderTopRightRadius: ind === 0 ? 10 : 0,
                borderTopLeftRadius: ind === 0 ? 10 : 0,
                borderBottomRightRadius: ind === Number(groupLength) - 1 ? 10 : 0,
                borderBottomLeftRadius: ind === Number(groupLength) - 1 ? 10 : 0,
            }}
        >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                borderRadius: ind === 0 ? 10 : 0
            }}>
                {children}
            </View>
        </TouchableHighlight>
    )
}



export default AccountScreen

const Styles = StyleSheet.create({
    group: {
        marginHorizontal: 5,
        marginTop: 10,
    },
    item: {

    },
    headerContainer: {
        backgroundColor: 'white',
        color: Colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    accountInfoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        gap: 10
    },
    accountInfoImage: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    accountInfoName: {
        color: Colors.black,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Mooli-Regular'
    },
    accountInfoEmail: {
        color: Colors.gray,
        textAlign: 'center',
        fontFamily: 'Mooli-Regular',
        fontSize: 12
    }

})

const ProfileScreenData = {
    support: [
        {
            text: "Terms & conditions",
            route: Routes.TermsAndConditions,
            icon: <MaterialCommunityIcons size={25} name="file-document-outline" />
        },
        {
            text: "Contact Us",
            route: Routes.ContactUs,
            icon: <MaterialIcons size={25} name='contact-support' />

        },
        {
            text: "About Us",
            route: Routes.AboutUs,
            icon: <MaterialIcons size={25} name='info-outline' />

        }
    ],
    account: [
        {
            text: "Edit Profile",
            route: Routes.EditProfile,
            icon: <MaterialCommunityIcons name="account-edit" size={25} />

        },
        {
            text: "Change Password",
            route: Routes.ChangePassword,
            icon: <MaterialCommunityIcons name="security" size={25} />
        },
        {
            text: "Payment History",
            route: Routes.PaymentHistory,
            icon: <MaterialIcons size={25} name='payments' />

        }
    ],

}