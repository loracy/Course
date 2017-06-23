import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ScrollView, View, Text, StyleSheet, PixelRatio, Image } from 'react-native';
import { Avatar, List, ListItem, Button, Icon, Tile } from 'react-native-elements';
import Dimensions from 'Dimensions';


class Account extends Component {
  state = {
    email: null,
    password: null,
    username: null,
    school: null,
    department: null,          
  };
  
  componentDidMount() {
    this.setUserInfo();
  }

  setUserInfo = async () => {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let Fusername = snapshot.val().username;
      let Femail = snapshot.val().email;
      let Fschool = snapshot.val().school;
      let Fdepartment = snapshot.val().department;
      console.log('trying to get the info from firebase........')
      this.setState({ username: Fusername, email: Femail, school: Fschool, department: Fdepartment });
      console.log('setting the new state...............')
    } catch (err) { 
      console.log('cant see the info...........')
    }

  }
  
  onSignOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('LoginScreen');
  }

render() {
  const { goBack } = this.props.navigation;
  const { userImg, userText, listItemTitle } = styles;
  return (
      <ScrollView>
        <Tile
            imageSrc={require('./assets/userBG.png')}            
            
        />
        <View style={{ position: 'absolute', left: (0.5 * Dimensions.get('window').width - 75), top: 40,
                       justifyContent: 'center'}}>
          <Image 
            style={userImg}
            source={require('./assets/userImg.jpg')} 
          />     
          <View>
            <Text style={userText}>{this.state.username}</Text>
            <Text style={userText}>{this.state.school} {this.state.department}</Text>  
          </View>
        </View>
        <List>
          <ListItem
            title='姓名'
            titleStyle={listItemTitle}
            rightTitle={this.state.username}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-end' }}
            hideChevron
            containerStyle={styles.accountList}
          />
          <ListItem
            title='電子信箱'
            titleStyle={listItemTitle}
            rightTitle={this.state.email}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-end' }}
            hideChevron
            containerStyle={styles.accountList}
          />
          <ListItem
            title='學校'
            titleStyle={listItemTitle}
            rightTitle={this.state.school}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-end' }}
            hideChevron
            containerStyle={styles.accountList}
          />
          <ListItem
            title='科系'
            titleStyle={listItemTitle}
            rightTitle={this.state.department}
            rightTitleStyle={{ color: 'gray' }}
            rightTitleContainerStyle={{ alignItems: 'flex-end' }}
            hideChevron
            containerStyle={styles.accountList}
          />
        </List>
        
        <Button 
          title='登出此帳號'
          icon={{ name: 'subdirectory-arrow-left', color: 'red' }}
          backgroundColor='rgba(0, 0, 0, 0)'
          shadow='none'
          color='red'
          onPress={() => this.onSignOut()}
          buttonStyle={{ marginTop: 15, width: 200 * PixelRatio.get(), marginLeft: -20 }}
        />
      </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  accountList: {
    height:50,
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
  btn: {
    marginTop: 50,
    width: 400,
  },
  userImg: {
    borderRadius: 37.5 * PixelRatio.get(),
    width: 75 * PixelRatio.get(),
    height: 75 * PixelRatio.get(),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  userText: {
    backgroundColor: 'rgba(99,99,99,0)',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 10
  },
  listItemTitle: {
    color: '#39b293',
    // alignSelf:'center',
  }
});

export default Account;

