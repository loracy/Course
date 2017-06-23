import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { TabNavigator, StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { List, ListItem, Icon, Button } from 'react-native-elements';
// import Tabs from 'react-native-tabs';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import CourseInfo from './CourseInfo';
import ToDoList from './ToDoList';

export class Tabs extends Component {
  render() {
    return (
      <ScrollableTabView
        tabBarBackgroundColor='#a6e0d7'
        tabBarActiveTextColor='#37bc9b'
        tabBarInactiveTextColor='#37bc9b75'
        tabBarUnderlineStyle={{backgroundColor: '#37bc9b'}}
      >
        <CourseInfo 
          tabLabel='課程資訊'
          name={this.props.name}
          description={this.props.description}
          teacher={this.props.teacher}
          credit={this.props.credit}
          room={this.props.room}
          day={this.props.day}
          startTime={this.props.startTime}
          endTime={this.props.endTime}
        />
        <ToDoList 
          tabLabel='待辦事項'
        />
      </ScrollableTabView>
    );
  }
}
