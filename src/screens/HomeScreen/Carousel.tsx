import * as React from 'react';
import { Dimensions, View, Image, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const Images = [
    'https://jnj-content-lab.brightspotcdn.com/dims4/default/9041f27/2147483647/strip/true/crop/1440x666+0+0/resize/1440x666!/quality/90/?url=http%3A%2F%2Fjnj-brightspot.s3.amazonaws.com%2Fee%2F43%2F0932c19b402c901b8d5bc797c1b4%2Fhow-data-science-is-ushering-in-a-new-era-of-modern-medicine-lede-0322.jpg',
    'https://www.cmss.gov.in/wp-content/uploads/2021/12/Slider-new.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/a-z-hospital-departments-1566209638.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*'
]

function HomeCarousel() {
    const width = Dimensions.get('window').width;

    const _renderItem = ({ item, index }: { item: string, index: number }) => {
        return (
            <View>
                <Image source={{ uri: item }}
                    style={{
                        borderRadius: 20,
                        height: 160,
                        marginHorizontal: 5
                    }} />
            </View>
        );
    }
    return (
        <View style={{
            height: 170,
            display: 'flex',
            justifyContent: 'center',
             paddingTop: 10
        }}>
            <Carousel
                style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                mode='parallax'
                loop
                width={width - 20}
                autoPlay={true}
                scrollAnimationDuration={1000}
                data={Images}
                renderItem={_renderItem}
            />
        </View>
    );
}

export default HomeCarousel;

