import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TouchableWithoutFeedback 는 UI변경은 없는 컴포넌트
// Pressable 는 설정을 더 많이 줄 수 있다.
import { theme } from './color';

const STORAGE_KEY = '@toDos';

export default function App() {
  
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState({});
  
  useEffect(() => {
    loadToDos();
  }, []);

  const work = () => setWorking(true);
  const travel = () => setWorking(false);
  const onChangeText = (payload) => setText(payload);

  const saveToDos = async (toSave) => {
    const s = JSON.stringify(toSave)
    await AsyncStorage.setItem(STORAGE_KEY, s)
  };

  const loadToDos = async() => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    // console.log(s)
    // String을 Object로 변환
    setToDos(JSON.parse(s));
  };

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    // 저장
    // const newToDos = Object.assign({}, toDos, {[Date.now()]: {text, word:working}});
    const newToDos = { ...toDos, [Date.now()]: { text, working }, };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");  //입력창을 다시 공백으로
  };

  // 삭제에 관한
  const deleteToDo = (key) => {
    Alert.alert('Delete ToDo', 'Are you sure?', [
      // 버튼만들기
      {text: 'Cancel'},
      // "I'm Sure"을 눌렀을때 실행할 함수 onPress
      {
        text: "I'm Sure", 
        onPress: () => {
          const newToDos = {...toDos};
          delete newToDos[key]
          setToDos(newToDos);
          saveToDos(newToDos);
        } 
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* header */}
      <View style={styles.header}>
        {/* 누르면 반응하게(text가 투명해짐) */}
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        {/* 누르면 배경이 지정한 색, 투명도로 변경 */}
        {/* <TouchableHighlight 
        underlayColor="red"
        activeOpacity={0.5}
        onPress={() => console.log('pressed')}> */}
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: working ? theme.grey : "white"}}>Travel</Text>
        </TouchableOpacity>
        {/* </TouchableHighlight> */}
      </View>
      <View>
        <TextInput 
          onSubmitEditing={addToDo}  // 전송버튼을 누를때 발생
          returnKeyType='done'  // 전송버튼 변경
          onChangeText={onChangeText}
          value={text}
          placeholder={working ? 'Add a Todo' : 'where do you wanna go?'} 
          style={styles.input}></TextInput>
      </View>
      <ScrollView>
        {Object.keys(toDos).map((key) => (
          // toDos의 working이 working과 같은것만 보여주기
          toDos[key].working === working ? <View style={styles.toDo} key={key}>
            <Text style={styles.toDoText}>{toDos[key].text}</Text>
            <TouchableOpacity onPress={ () => deleteToDo(key) }>
              <Text>❌</Text>
            </TouchableOpacity>
          </View> : null
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor:"white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500"

  },
});
