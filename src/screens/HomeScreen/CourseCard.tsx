import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Colors } from '../../utils/colors';
import { ICourse } from '../../types/course.entity';
import { Routes } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native'

type CourseCardProps = {
    course: ICourse
}

function CourseCard(props: CourseCardProps) {

    const { course } = props
    const navigation = useNavigation()
    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="white"
            //@ts-ignore
            onPress={() => navigation.navigate(Routes.CourseDetails)}
            style={{
                width: 260,
                borderRadius: 10,
                marginBottom: 10,

            }}
        >
            <View
                style={{
                    padding: 10,
                    width: '100%',
                    // width: 300,
                    paddingBottom: 10,
                    borderRadius: 15,
                    overflow: 'hidden',
                    marginRight: 100,
                    elevation: 1,
                    backgroundColor: Colors.white
                }}
            >
                <Image
                    // resizeMode="cover"
                    source={{ uri: course.thumbnail }}
                    style={{
                        height: 100,
                        backgroundColor: Colors.lightGray,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10
                    }} />
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{
                        //  fontSize: moderateScale(17),
                        fontWeight: 'bold'
                    }}>{course.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, gap: 8 }}>
                            <Image source={{ uri: 'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 50
                                }} />
                            <Text style={{ color: Colors.darkGray }} >{course.instructor}</Text>

                        </View>
                        <Text style={{ color: Colors.primary }}>${course.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default CourseCard