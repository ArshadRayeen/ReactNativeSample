import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
    
} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import IconCall from 'react-native-vector-icons/Ionicons';

const PostDetails = (props) => {
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [item, setItem] = useState({});
    const details = useState(props.route.params.details);

    useEffect(() => {
        console.log(details[0]);
        setItem(details[0])
    }, [])

    return (
        <View style={styles.container}>

            <MapView
                style={styles.mapStyle}
                showsUserLocation={false}
                zoomEnabled={true}
                zoomControlEnabled={true}
                isMapReady={true}
                region={{
                    latitude: Number(21.1503),
                    longitude: Number(72.825),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker
                    coordinate={{ latitude: Number(21.1503), longitude: Number(72.825) }}>
                    <View style={styles.courseImgView}>

                    </View>
                </Marker>
                <Marker
                    coordinate={{ latitude: Number(21.2266), longitude: Number(72.8312) }}>
                    <View style={styles.courseImgView}>

                    </View>
                </Marker>


            </MapView>
            <View style={styles.cardView}>
                <View style={styles.distansView}>
                    <Text style={styles.text_diatance}>Address</Text>
                    <Text style={styles.text_dist}>{item.address},{item.area}</Text>
                </View>
                <TouchableOpacity
                    style={styles.btnPhone}
                >
                    <IconCall name="md-call-sharp" style={styles.iconbell} />
                </TouchableOpacity>
                <View style={styles.staffView}>
                    <Text style={styles.text_diatance}>asbcas</Text>
                    <Text style={styles.text_dist}>scbjsbc</Text>
                </View>
            </View>
        </View>
    );
};
export default PostDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mapStyle: {
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    cardView: {
        backgroundColor: 'white',

        // marginHorizontal: Matrics.Scale(10),
        width: '90%',

        borderRadius: 15,
        // top: Platform.OS == 'android' ? Matrics.Scale(120) : Matrics.Scale(220),
        bottom: '10%',
        position: 'absolute',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 2 },
        marginStart: '5%',
        marginEnd: '5%'
    },
    distansView: {
        flexDirection: 'row',
        width: '80%',
        marginTop: '3%'
    },
    text_diatance: {
        fontSize: 20,
        color: '#000',
        width: '35%',
        marginLeft: '7%',
    },
    text_dist: {
        fontSize: 20,
        color: '#c0c0c0',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '50%'
    },
    staffView: {
        flexDirection: 'row',
        width: '80%',
        marginTop: '1%',
        marginBottom: '1%'
    },
    btnPhone: {
        alignSelf: 'flex-end',
        marginTop: '25%',
        position: 'absolute',
        top: '1%',
        left: '72%',
        width: '25%',
        height: '5%'

    },
    iconbell:{
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        color: '#fff',
        backgroundColor:'#000',
        borderRadius:20,
        padding:10,
        fontSize:14,
        fontWeight:'900',
        
    },
    courseImgView: {

        borderRadius: 90 / 2,
        borderWidth: 4,
        borderColor: '#fff',
        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },

})
