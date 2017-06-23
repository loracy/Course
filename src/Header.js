import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import * as firebase from 'firebase';


class HomeScreen extends React.Component {
  state = { 
    course: [],
    test: [{"name": "100", "class": "sss"},{"name": "200", "class": "sxxccd"}],
   };

  componentWillMount() {
    this.setCourseInfo().then(console.log('component~~~'));
    
  }

  courseSection(){
    const { navigate } = this.props.navigation;
    var leftStyle, topStyle, heightStyle = 0 ;
    var bgColor = ['#6fa8dc','#0a8ac4',
                   '#9dda3b','#84bf25',
                   '#d66146','#df4232',
                   '#e3cd16','#d0b91e',
                   '#005898','#003459',
                   '#ce8a35','#833017',
                   '#dd9a8b','#d4717c',];
    var bgColorCounter1 = -2;
    var bgColorCounter2 = -1;
    return(
    this.state.course.map((c) => {
      bgColorCounter1 = bgColorCounter1 + 2; 
      bgColorCounter2 = bgColorCounter2 + 2;
            if(c.day === '一'){leftStyle = 0}
            else if(c.day === '二'){leftStyle = 65}
            else if(c.day === '三'){leftStyle = 130}
            else if(c.day === '四'){leftStyle = 195}
            else if(c.day === '五'){leftStyle = 260}

            if(c.startTime === '08:10'){topStyle = 0}    
            else if(c.startTime === '09:10'){topStyle = 70}
            else if(c.startTime === '13:30'){topStyle = 280}
            else if(c.startTime === '14:20'){topStyle = 350}

            if(c.credit === '2'){heightStyle = 140}
            else if(c.credit === '3'){heightStyle = 210}
            
            
            console.log(this.state.course);
              return(
                  <View key={c.name} style={{ position: 'absolute', left: leftStyle, top: topStyle }}>
                    <Button
                      title={c.name}
                      onPress={() => this.goToCoursePage(c)}
                      backgroundColor={bgColor[bgColorCounter1]}
                      buttonStyle={{ position: 'relative', width: 63, height: heightStyle, marginLeft: 1, marginRight: 1,padding: 3 }}
                      color='#ffffff'
                      fontSize={14}
                    />
                    <Button 
                      title={c.room}
                      onPress={() => this.goToCoursePage(c)}
                      backgroundColor={bgColor[bgColorCounter2]}
                      buttonStyle={{ position: 'absolute', bottom: 0, width: 63, height: 25, marginLeft: 1, marginRight: 1, padding: 3 }}
                      fontSize={14}
                    />
                  </View>
            )}) 
    )
  }
  
  goToCoursePage(c) {
    this.props.navigation.navigate( 'Course', { ...c });
  }
  
  setCourseInfo = async () => {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    console.log(this.state.course);
    console.log('startSettingInfo~~~');
    let snapshot = await dbUserid.once('value');
    var courseSlice = this.state.course ;

      if( snapshot.val().course.course1 !== undefined ){
        courseSlice.push(snapshot.val().course.course1);
        this.setState({course: courseSlice});
      }  else{ console.log('1失敗'); }

      if( snapshot.val().course.course2 !== undefined ){
        courseSlice.push(snapshot.val().course.course2);
        this.setState({course: courseSlice});
      }  else{ console.log('2失敗'); }

      if( snapshot.val().course.course3 !== undefined ){
        courseSlice.push(snapshot.val().course.course3);
        this.setState({course: courseSlice});
      }  else{ console.log('3失敗'); }

      if( snapshot.val().course.course4 !== undefined ){
        courseSlice.push(snapshot.val().course.course4);
        this.setState({course: courseSlice});
      }  else{ console.log('4失敗'); }

      if( snapshot.val().course.course5 !== undefined ){
        courseSlice.push(snapshot.val().course.course5);
        this.setState({course: courseSlice});
      }  else{ console.log('5失敗'); }

      if( snapshot.val().course.course6 !== undefined ){
        courseSlice.push(snapshot.val().course.course6);
        this.setState({course: courseSlice});
      }  else{ console.log('6失敗'); }

      if( snapshot.val().course.course7 !== undefined ){
        courseSlice.push(snapshot.val().course.course7);
        this.setState({course: courseSlice});
      }  else{ console.log('7失敗'); }
    
      if( snapshot.val().course.course8 !== undefined ){
        courseSlice.push(snapshot.val().course.course8);
        this.setState({course: courseSlice});
      }  else{ console.log('8失敗'); }

      if( snapshot.val().course.course9 !== undefined){
        courseSlice.push(snapshot.val().course.course9);
        this.setState({course: courseSlice});
      }  else{ console.log('9失敗'); }

    return(true)

  }

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;
    const { firstRowBox, boxWeek, blank, box1, boxTime, boxTimeNo, boxTimes } = styles;
    return (
      <View style={{ position: 'relative' }}>
        <View style={{ flexDirection: 'row' }}>
            
            <View style={{ flexDirection: 'column' }}>
                <Text style={blank} />
                <View style={boxTime}><Text style={boxTimes}>08:10</Text><Text style={boxTimeNo}>1</Text><Text style={boxTimes}>09:00</Text></View>
                <View style={boxTime}><Text style={boxTimes}>09:05</Text><Text style={boxTimeNo}>2</Text><Text style={boxTimes}>09:55</Text></View>
                <View style={boxTime}><Text style={boxTimes}>10:15</Text><Text style={boxTimeNo}>3</Text><Text style={boxTimes}>11:05</Text></View>
                <View style={boxTime}><Text style={boxTimes}>11:10</Text><Text style={boxTimeNo}>4</Text><Text style={boxTimes}>12:00</Text></View>
                <View style={boxTime}><Text style={boxTimes}>13:30</Text><Text style={boxTimeNo}>5</Text><Text style={boxTimes}>14:20</Text></View>
                <View style={boxTime}><Text style={boxTimes}>14:25</Text><Text style={boxTimeNo}>6</Text><Text style={boxTimes}>15:15</Text></View>
                <View style={boxTime}><Text style={boxTimes}>15:35</Text><Text style={boxTimeNo}>7</Text><Text style={boxTimes}>16:25</Text></View>
                <View style={boxTime}><Text style={boxTimes}>16:30</Text><Text style={boxTimeNo}>8</Text><Text style={boxTimes}>17:20</Text></View>
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週一</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週二</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週三</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
            
            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週四</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={firstRowBox}><Text style={boxWeek}>週五</Text></View>
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
              <Text style={box1} />
            </View>
        </View>
        <View style={{ position: 'absolute', left: 50, top: 42 }}> 
          {
            this.courseSection()
          }
        </View>
      </View>
    );     
  }
}


const styles = StyleSheet.create({
     firstRowBox: {
        backgroundColor: '#37bc9b',
        justifyContent: 'center',
        width: 65,
        height: 42,
        borderWidth: 0.5,
        borderColor: '#e5e5e5',
    },
    blank: {
        backgroundColor: '#37bc9b',
        width: 50,
        height: 42,
        borderColor: '#e5e5e5',
        borderWidth: 0.5,
    },
    boxWeek: {
      color: '#ffffff',
      textAlign: 'center',
    },
    box1: {
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        width: 65,
        height: 70,
        textAlign: 'center',
        color: '#545454',
    },
    boxTime: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 70,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        backgroundColor: '#f3f3f3',
    },
    boxTimeNo: {
      color: '#37bc9b',
      fontSize: 19,
      fontWeight: '500',
    },
    boxTimes: {
      color: '#37bc9b',
      fontSize: 12,
      fontWeight: '200',
    },
});

export default HomeScreen;
