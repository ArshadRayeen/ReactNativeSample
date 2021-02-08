import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';

const ListCard = ({item, viewItem}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        viewItem(item);
      }}>
      
      
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{uri: item.image_url}}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.paragraph}>{item.phone}</Text>
          <Text style={styles.subtitle}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  //
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 15,
   backgroundColor:"#f5f5f0"
   
    
  },
  imageWrapper: {
    marginRight: 10,
  },
  titleWrapper: {
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#303540',
  },
  paragraph: {
    fontSize: 14,
    color: '#c0c0c0',
  },
});

export default ListCard;
