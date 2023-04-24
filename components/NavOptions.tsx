import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

const data = [
  { id: 123, title: "Get a ride", image: "http://links.papareact.com/3pn", screen: "Map" },
  { id: 456, title: "Order food", image: "http://links.papareact.com/28w", screen: "EatScreen" }
]

type StackParamList = {
  Map: undefined
}
type NavigationProps = StackNavigationProp<StackParamList>

const NavOptions = () => {
  const navigation = useNavigation<NavigationProps>()

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item:any) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`} onPress={() => navigation.navigate(item.screen)}>
          <View>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain", // keeps the aspect ratio
              }}
              source={{
                uri: item.image
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})