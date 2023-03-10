import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantsCard from './RestaurantsCard'

const FeaturedRow = ({ title, description, feaaturedCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>



      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {/* RestaurantsCards..... */}
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
        <RestaurantsCard 
        id={123}
        imgUrl="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
        title="Testing 1"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        short_description="This is a test Description"
        dishes={[]}
        long={20}
        lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow