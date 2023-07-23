import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../theme";
import CarouselBanner from 'react-native-carousel-banner';

const Carousel = () => {

    const images = [
        "https://img.freepik.com/free-photo/front-view-elegant-perfume-colored-flowers-beige-ombre-background_140725-145231.jpg",
        "https://img.freepik.com/free-photo/serum-bottle-yellow-flower-arrangement_23-2149353084.jpg",
        "https://img.freepik.com/free-photo/top-view-blue-ribbon-man-perfume-gift-box-engagement-band-right-side-dark-table_140725-141972.jpg"
    ]

    return(
        <View style={{margin: 20}}>
            <CarouselBanner 
                data={images} 
                autoplay
                autoplayInterval={3000}
                dotColor={COLORS.primary}
                roundedSize={10}
            />
        </View>
    )
}

export default Carousel;