import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem, Icon, Button } from 'react-native-elements';

class ToDoList extends Component {

render() {
  return (

        <View>
          <View style={{ flexDirection: 'row', top: 19, marginBottom: 2 }}>
            <Text style={{ color: '#999999', left: 10, fontSize: 13 }}>已完成</Text>
            <Text style={{ color: '#999999', left: 23, fontSize: 13 }}>項目／時間</Text>
            <Text style={{ color: '#999999', left: 225, fontSize: 13 }}>提醒</Text>
          </View>
          <List>
            <ListItem
              containerStyle={{ height: 65, justifyContent: 'center' }}
              title="期末考"
              titleContainerStyle={{ paddingLeft: 10 }}
              leftIcon={{ name: 'check-box-outline-blank',
                          style: ({ color: '#37bc9b' })
                       }}
              rightIcon={{ name: 'notifications',
                           style: ({ paddingRight: 5 }),
                           color: 'red', 
                        }}
              subtitle='2017/06/15  15:30'
              subtitleStyle={{ paddingLeft: 10 }}
            />
            <ListItem
              containerStyle={{ height: 65, justifyContent: 'center' }}
              title="期中考"
              titleContainerStyle={{ paddingLeft: 10 }}
              leftIcon={{ name: 'check-box',
                          style: ({ color: '#37bc9b' })
                       }}
              rightIcon={{ name: 'notifications-none',
                           style: ({ paddingRight: 5 })
                        }}
              subtitle='2017/04/24  15:30'
              subtitleStyle={{ paddingLeft: 10 }}
            />
            <ListItem
              containerStyle={{ height: 55, justifyContent: 'center' }}
              hideChevron
              title="新增待辦事項"
              titleStyle={{ textAlign: 'center', color: '#0084ff' }}
              leftIcon={{ name: 'add', color: '#545454', style: { left: 105, color: '#0084ff' } }}

            />
          </List>
        </View>
  )
}
}


export default ToDoList;
