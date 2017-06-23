import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon, Tile, List, ListItem, FormLabel, FormInput, Button, Card, SearchBar } from 'react-native-elements';
import courses from './json/Courses.json';

// Make a component
class Add extends Component {
  state = { 
    courses: [],
    name: null,
    description: null,
    teacher: null,
    credit: null,
    day: null,
    startTime: null,
    endTime: null,
    room: null,
    key: null,
    typingKeyWord: '',
   };

  componentWillMount() {
    this.setState({ courses });
  }

saveCourseInfo = async () => {
    // await dbUserid.child('course').set({ courseName, teacher });
    const { currentUser } = firebase.auth();
    const saveName = this.state.name;
    const saveDescription = this.state.description;
    const saveTeacher = this.state.teacher;
    const saveCredit = this.state.credit;
    const saveDay = this.state.day;
    const saveStartTime = this.state.startTime;
    const saveEndTime = this.state.endTime;
    const saveRoom = this.state.room;
    const Key = this.state.key;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    // await dbUserid.child('course').update({ Name });
    await dbUserid.child('course').child(this.state.key).set({ name: saveName, 
      description: saveDescription, teacher: saveTeacher, credit: saveCredit, 
      day: saveDay, startTime: saveStartTime, endTime: saveEndTime, room: saveRoom });

}

 onAddCourse = async (course) => {
    // this.setState({ saving: true });
    this.setState({ 
      name: course.courseName,
      description: course.description, 
      teacher: course.teacher,
      credit: course.credit,
      day: course.day,
      startTime: course.startTime,
      endTime: course.endTime,
      room: course.room,
      key: course.key,
      typingKeyWord: '',

     });
    try {

      // await firebase.auth().createUserWithEmailAndPassword(email, password);
      // const { courseName, teacher } = this.state;
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.child('course').push(this.state.key);
      this.saveCourseInfo();

      this.props.navigation.navigate('Home');
    } catch (err) {
      dbUserid.update({ course: "fail" });
    }
  }
  
onSearch = async (keyword) => {
  this.setState({
    typingKeyWord: keyword,
  })

    if(this.state.typingKeyWord === ''){
      this.setState({
        courses,
      })
    }
    if(this.state.typingKeyWord === '行'){
      this.setState({
        courses: [
          {
              "courseName": "行動程式設計",
              "description": "大二選修",
              "teacher": "俞齊山",
              "credit": "2",
              "day": "二",
              "startTime": "08:10",
              "endTime": "11:10",
              "room": "B403",
              "key": "course2"
          },
        ]
      })
    }
    if(this.state.typingKeyWord === '程式'){
      this.setState({
        courses: [
          {
              "courseName": "行動程式設計",
              "description": "大二選修",
              "teacher": "俞齊山",
              "credit": "2",
              "day": "二",
              "startTime": "08:10",
              "endTime": "11:10",
              "room": "B403",
              "key": "course2"
          },
          {
              "courseName": "程式設計",
              "description": "大一必修",
              "teacher": "王學武",
              "credit": "3",
              "day": "三",
              "startTime": "13:30",
              "endTime": "16:40",
              "room": "F505",
              "key": "course7"
          },
        ]
      })
    }
    

}

  render() {
    // const { navigate } = this.props.navigation;
    // const { goBack } = this.props.navigation;
    var bgColor = '#ffffff';
    var bgColorCounter = 0;
    return (
      <ScrollView>
        <View>
          <SearchBar
            lightTheme
            onChangeText={keyword => this.onSearch(keyword)}
            placeholder='搜尋課程名稱' 
            />
            {
            this.state.courses.map((course) => {
              if(bgColorCounter%2 === 0){
                bgColorCounter ++;
                bgColor = '#f2f2f7';
              }else{ 
                bgColorCounter ++;
                bgColor = '#ffffff';     
              }
                return (
                  <View key={course.courseName}>
                    <Card containerStyle={{ backgroundColor: bgColor ,
                                            paddingTop: 15, paddingBottom: 15, paddingRight: 28, paddingLeft:28, 
                                            margin: 0, borderWidth: 0}} >
                      <Text style={{ fontSize: 18, marginBottom: 10, marginLeft: 1 }}>{course.courseName} -{course.description}</Text>
                      <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', marginRight: 8 }}>
                          <Image source={require('./assets/ic_teacher.png')} 
                                 style={{ width:15, height:15, tintColor: '#234880', marginRight: 4, marginLeft: 1 }}
                          />
                          <Text>{course.teacher} 老師</Text>
                        </View>               
                        <View style={{ flexDirection: 'row', marginRight: 8 }}>
                          <Image source={require('./assets/ic_time.png')} 
                                 style={{ width:15, height:15, marginRight: 4 }}
                          />
                          <Text>星期{course.day} {course.startTime}～{course.endTime}</Text>
                        </View>               
                        <View style={{ flexDirection: 'row', }}>
                          <Image source={require('./assets/ic_room.png')} 
                                 style={{ width:15, height:15, marginRight: 4 }}
                          />
                          <Text>{course.room}</Text>
                        </View>
                      </View>
                      <Button 
                      title='加入'
                      textStyle={{ letterSpacing: 4 }}
                      color={'#37bc9b'}
                      onPress={ () => this.onAddCourse(course) }
                      buttonStyle={{ marginLeft: 0, marginRight: 0, marginTop: 10, 
                                     borderWidth: 1.5, borderColor:'#37bc9b', 
                                     backgroundColor: '#ffffff', height: 35 }}	
                      containerViewStyle={{ borderRadius: 5 }}
                      borderRadius={5}
                      
                      />
                    </Card>
                    
                  </View>                  
                )
              })
            }
         
        </View>
      </ScrollView>
    );
  }
}


export default Add;
