import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './utils/routes';
import { Colors } from './utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import MyLearingScreen from './screens/MyLearningScreen';
import AccountScreen from './screens/AccountScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName={Routes.HomeTabs}
            screenOptions={{
                headerShown: false,
                presentation: 'modal'
            }}
        >
            {/* <Stack.Screen name={Routes.Login} component={LoginScreen} /> */}
            {/* <Stack.Screen name={Routes.VerifyOTP} component={VerifyOTPScreen} /> */}
            <Stack.Screen name={Routes.HomeTabs} component={MyTabs} />
            {/* <Stack.Screen name="Notifications" component={Notifications} /> */}

            <Stack.Screen
                name={Routes.CourseDetails}
                component={CourseDetailsScreen}
                options={{
                    // Set the presentation mode to modal for our modal route.
                    presentation: 'modal',
                }}
            />

        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();




function MyTabs() {


    return (
        <>
            <Tab.Navigator
                initialRouteName={Routes.Home}
                screenOptions={{
                    tabBarShowLabel: false, tabBarActiveTintColor: Colors.primary, headerShown: false
                }}
            >
                <Tab.Screen
                    name={Routes.Home}
                    component={HomeScreen}
                    //   initialParams={{
                    //     handleBottomSheet: handleModal
                    //   }}
                    options={{
                        tabBarIcon: ({ color, size }) => (<AntDesign name='home' size={size} color={color} />),

                    }} />
                <Tab.Screen
                    name={Routes.MyLearning}
                    component={MyLearingScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="play-circle" color={color} size={30} />),

                    }}
                />
                <Tab.Screen
                    name={Routes.Account}
                    component={AccountScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={30} />),

                    }}
                />
            </Tab.Navigator>

        </>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <MyStack />
            </SafeAreaProvider>
        </NavigationContainer>
    );
}