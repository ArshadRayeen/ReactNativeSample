import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  List,
  StyleSheet,
} from 'react-native';
// import axios from 'axios';
const axios = require('axios');

import ListCard from '../components/ListCard';
import helpers from '../utils';

const BASE_URL = helpers.BASE_URL;


const Foodlist =(props)=>{
    const [post,setPost]=useState([]);
    useEffect(()=>{
        getALlFood();
    },[])

    async function getALlFood() {
        try {
          const response = await axios.get('http://opentable.herokuapp.com/api/restaurants?city=Chicago');
          console.log('=====> ',response.data);
          setPost(response.data.restaurants)
        } catch (error) {
          console.error(error);
        }
      }
     const viewItem = (item) => {
      props.navigation.navigate('Restaurants Details',{details:item})
      };
      renderPost = ({item}) => {
        return <ListCard item={item} viewItem={viewItem} />;
      };
      

    return (
       

      
      <View style={styles.wrapper}>

         
         <FlatList
          containerStyle={{ borderTopWidth: 1, borderBottomWidth: 1}}
          data={post}
          renderItem={renderPost}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id.toString()}
        />
      </View>

    );

   
  
}
export default Foodlist;
  

const styles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor:'#fff'
  },
  topWrapper: {
    flexDirection: 'row',
  },
  textInputWrapper: {
    flex: 4,
  },
  textInput: {
    height: 35,
    borderColor: '#5d5d5d',
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});

