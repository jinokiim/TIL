import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
  // StyleSheet import -> css
import { ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { Fontisto } from '@expo/vector-icons';


// 한화면 기준너비를 잡기위한 api
const { width:SCREEN_WIDTH } = Dimensions.get('window');
console.log(SCREEN_WIDTH);


export default function App() {

  const [city, setCity] = useState('loading...');
  // 날씨를 저장할 배열
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const API_KEY = 'write api key';

  const icons = {
    "Clear": "day-sunny",
    "Clouds": "cloudy",
    "Rain": "rain",

  }


  // 위치를 추적하는 함수
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    // console.log(permission)
    if(!granted){
      setOk(false);
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false})
    setCity(location[0].city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
    const json = await response.json();
    console.log(json);
    setDays(json.daily);
  }

  useEffect(() => {
    getWeather();
  }, [])


  return (
    
      <View style={styles.container}>
        <StatusBar style='light'></StatusBar>
        <View style={styles.city}>
          <Text style={styles.cityName}>{city}</Text>
        </View>
        {/* 
        pagingEnabled : 스크롤시 페이지가 있게 넘기기
        horizontal : 좌우스크롤로 변경
        showsHorizontalScrollIndicator={false}: 하단 좌우스크롤 숨기기
        contentContainerStyle : ScrollView 일때 css 불러오기
        */}
        <ScrollView 
        pagingEnabled
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
          {days.length === 0 ? (
            <View style={styles.day}>
              <ActivityIndicator color="white" size="large" style={{marginTop: 10}} />
            </View> 
          ) : ( 
            days.map((day, index) => 
            <View key={index} style={styles.day}>
              <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
                <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
            )
            
          )}
        </ScrollView>
      </View>
    
  );
}


// css를 주기위한 용도
const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: "orange",
  },
  
  city: {
    flex:1,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

  weather: {
    // scrollView일때 flex를 주게되면 크기가 고정되어 안된다.
    // flex: 3,
    // backgroundColor: "teal"
  },

  cityName: {
    color: "white",
    fontSize: 68,
    fontWeight: "500",
  },

  day: {
    // backgroundColor: "teal",
    // flex: 1,
    width: SCREEN_WIDTH,
    // justifyContent:"center",
    alignItems:"flex-start",
    marginLeft:5,
    
    
  },
  temp:{
    marginTop: 50,
    fontSize:99,
    color: "white",
  },
  description:{
    marginTop: -10,
    fontSize:40,
    color: "white",
  },
  tinyText:{
    marginTop: -10,
    fontSize:30,
    color: "white",
  },

});
