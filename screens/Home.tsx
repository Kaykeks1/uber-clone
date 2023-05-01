import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const Home = () => {

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />
        
        <GooglePlacesAutocomplete
          placeholder='Where from'
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          // onPress={(data, details = null) => {
          //   console.log(data, details);
          // }}
          onFail={(data) => {
            console.log({data});
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
        />
        <NavOptions />
        {/* <Text style={tw`text-blue-500`}>Home</Text> */}
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})