import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
    AdjustmentsHorizontalIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon
} from "react-native-heroicons/outline"

import backImage from "../assets/backImage.png"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
                <Image source={backImage}
                    className="h-7 w-7 bg-gray-300 rounded-full" />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00ccbb"/>
                    </Text>
                </View>

                <UserIcon size={35} color="#00ccbb"/>
            </View>

            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <MagnifyingGlassIcon size={20} color="#00ccbb"/>
                    <TextInput 
                    placeholder='Restaurants and Eatry'
                    keyboardType='default'
                    /> 
                </View>


                <AdjustmentsVerticalIcon size={20} color="#00ccbb"/>
            </View>

            {/* Body */}

            <ScrollView className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 140
            }}
            >
                {/* Categories */}
                <Categories />
                {/* Featured Rows */}

                <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placements from our partners"
                featuredCategory="featured"
                />
                {/* Tasty Discounts */}
                <FeaturedRow
                id="1234"
                title="Featured"
                description="Paid placements from our partners"
                featuredCategory="featured"
                />
                {/* Offers near you */}
                <FeaturedRow
                id="12345"
                title="Featured"
                description="Paid placements from our partners"
                featuredCategory="featured"
                />
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen