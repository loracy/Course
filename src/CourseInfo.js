import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem, Icon, Button } from 'react-native-elements';
import CourseInfoEdit from './CourseInfoEdit';

class CourseInfo extends Component {

render() {
  const {container} = styles;

  return (
    
          <View>
            <List>
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`${this.props.teacher} 老師`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_teacher.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`${this.props.room} 教室`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_room.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`${this.props.credit}學分`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_credit.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title={`每週${this.props.day} ${this.props.startTime}～${this.props.endTime}`}
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_time.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title="備註"
              titleContainerStyle={{ paddingLeft: 15 }}
              avatar={require('./assets/ic_note.png')}
              avatarStyle={{ width: 25,height: 25 }}
              hideChevron
            />
          </List>

        </View>
        
      
  );
}
}

const styles = StyleSheet.create({
  container: {
      position: 'relative',
      flex: 1,
  },
});

export default CourseInfo;
