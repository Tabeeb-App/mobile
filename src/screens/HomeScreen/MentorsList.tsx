import React from 'react'
import { Image, ScrollView, Text, TouchableHighlight, View, ViewBase } from 'react-native'

const doctors = [
    { id: 1, name: "Dr. Ramdan Selim", img: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' },
    { id: 2, name: "Dr. Ramdan Selim", img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: "Dr. Ramdan Selim", img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
]

function MentorsList() {
    return (
        <View style={{paddingTop: 20}}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: '700', fontSize: 22 }}>Our Mentors</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                    style={{
                        paddingHorizontal: 20,
                        marginVertical: 10,
                        flexDirection: 'row',
                        display: 'flex',
                        gap: 10
                    }}>

                    {
                        doctors.map((item, ind) => (
                            <View key={item.id} >
                                <Image
                                    source={{ uri: item.img }}
                                    style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 50,
                                    }}
                                />
                            </View>

                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default MentorsList