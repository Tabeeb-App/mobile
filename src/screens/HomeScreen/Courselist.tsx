import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { dummyCoursesData } from '../../../dummyData';
import CourseCard from './CourseCard';

function CourseList() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingHorizontal: 20
                }}>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>Courses</Text>
                </View>

                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 10, gap: 10 }}>
                            {
                                dummyCoursesData.map((item, ind) => (
                                    <CourseCard course={item} />

                                ))
                            }
                        </View>

                    </ScrollView>
                </View>
            </View>

        </ScrollView>
    )
}

export default CourseList