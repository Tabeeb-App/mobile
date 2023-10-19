import Header from './Header';
import React from 'react'
import { View, ScrollView, StyleSheet, StatusBar, Text } from 'react-native'
import HomeCarousel from './Carousel';
import CourseList from './Courselist';
import MentorsList from './MentorsList';


export default function HomeScreen() {


    return (
        <View style={styles.container}>

            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <HomeCarousel />
                <View style={{ marginHorizontal: 20, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: "800" }}>Learning that fits</Text>
                    <Text style={{ fontSize: 20, color: 'gray' }}>skills for your present (and future)</Text>
                </View>
                <CourseList />
                <MentorsList />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});
