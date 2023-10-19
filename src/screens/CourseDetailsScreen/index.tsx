import React from 'react'
import { View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../utils/colors'
import { ImageBackground } from 'react-native'



const image = { uri: 'https://imgs.search.brave.com/8GeOJon7zrB0CxwkDACaOlt18BlOevTEj2nzLNb_EaY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/ZWk5VnNjOHN0eU9H/WjluTjBJM1JBSGFF/OCZwaWQ9QXBp' };


const courseLessons = [
    { id: '1', name: "Introduction", duration: '2000', type: 'video' },
    { id: '2', name: "JavaScript fundmentals", duration: '2000', type: 'video' },
    { id: '3', name: "JavaScript fundmentals", duration: '2000', type: 'video' },
    { id: '4', name: "JavaScript fundmentals", duration: '2000', type: 'video' },
]



function CourseDetailsScreen({ navigation }: any) {
    return (
        <ScrollView style={{ position: 'relative', zIndex: 50, backgroundColor: 'white' }}>


            <View style={{ height: 200 }}>


                <ImageBackground source={image}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.HeroBannerContent}>
                        <Text onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name="arrow-left-bold-outline" color={Colors.primary} size={30} />
                        </Text>
                    </View>
                </ImageBackground>
            </View>

            {/* <VideoPlayer /> */}


            <View style={{
                borderTopRightRadius: 20, borderTopLeftRadius: 20,
                marginTop: -20,
                backgroundColor: 'white', padding: 20
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hematology</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <MaterialCommunityIcons name="account" size={20} color={Colors.primary} />
                        <Text style={{ fontSize: 16 }}>by Dr.Ramadan Selim</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <AntDesign name='star' color={Colors.primayYellow} size={20} />
                        <Text style={{ fontSize: 16 }}>4.8</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{ color: Colors.darkGray }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione minus obcaecati quasi minima iusto totam.</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Lessons</Text>
                    <View>
                        {
                            courseLessons.map((lesson, ind) => (
                                <View
                                    key={ind}
                                    style={{  paddingVertical: 6, marginBottom: 6, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Text style={{paddingHorizontal: 5, fontSize:18}}>{ind + 1}</Text>
                                        <MaterialCommunityIcons name="play-circle" color={Colors.primary} size={30} />
                                        <Text style={{fontSize: 16}}>{lesson.name}</Text>
                                    </View>
                                    <Text style={{ color: Colors.primary }}>15:43 mins</Text>
                                </View>
                            ))
                        }
                    </View>

                </View>
            </View>
        </ScrollView >
    )
}

export default CourseDetailsScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',

    },
    HeroBannerContent: {
        position: 'absolute' ,
        color: 'white',
        top: 0 ,
        padding: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});





