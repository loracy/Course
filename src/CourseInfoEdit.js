import React, { Component } from 'react';
import { View, Picker, ActivityIndicator, StatusBar, TextInput } from 'react-native';
import * as firebase from 'firebase';
import { List, ListItem, Icon, FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements';

class CourseInfoEdit extends Component {
  state = {
    username: null,
    email: null,
    school: null,
    department: null,
    saving: false
  };

  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let school = snapshot.val().school;
      let department = snapshot.val().department;

      this.setState({ username, email, school, department });
    } catch (err) { }
  }

  onSaveInfo = async () => {
    this.setState({ saving: true });
    const { currentUser } = firebase.auth();
    const { username, email, school, department } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.update({ username, email, school, department });
    this.setState({ saving: false });
    this.props.navigation.navigate('Account');
  }

  renderButton() {
    if (this.state.saving) {
      return <ActivityIndicator size='large' />;
    }

    return (
      <Button
        style={{ marginTop: 25 }}
        title='確定更新'
        onPress={this.onSaveInfo}
        backgroundColor='#4AAF4C'
      />
    );
  }

  render() {
    return (
      <View style={styles.formStyle}>
        <StatusBar barStyle='light-content' />        
          <List>
            <ListItem
              textInput={{ fuck: true }}
              textInputEditable
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title='老師'
              hideChevron
            />
            <ListItem
              textInput={{ 'fuck': true }}
              textInputEditable
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title='教室'
            />
            <ListItem
              textInput={{ 'fuck': true }}
              textInputEditable
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title='學分'
              hideChevron
            />
            <ListItem
              textInput={{ 'fuck': true }}
              textInputEditable
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title='上課日'
              hideChevron
            />
            <ListItem
              textInput={{ 'fuck': true }}
              textInputEditable
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title='上課時間'
              hideChevron
            />
            <ListItem
              textInput={{ 'fuck': true }}
              textInputEditable
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title='下課時間'
              hideChevron
            />
            <ListItem
              textInput={{ 'fuck': true }}
              textInputEditable
              containerStyle={{ height: 55, justifyContent: 'center' }}
              title='備註'
              hideChevron
            />
          </List>
        {this.renderButton()}
      </View>
    );
  }
}


const styles = {
  signupLayout: {
    // backgroundColor:'#a6e0d750',
  },
  formStyle: {
    marginTop: 20,
    // flex: 1,
  },
  formLabel: {
    color: '#37bc9b',
  },
  formBorder: {
    borderBottomColor: '#37bc9b',
  },
  formInput: {
    color:'#000'
  },
  modalPicker: {
    // flexDirection: 'row',
    justifyContent:'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'gray',
    marginLeft:15,
    marginRight:15,
    // marginBottom:15,
  },
  pickerInput: {
    borderWidth:1,
    borderColor: '#37bc9b',
    // borderColor:'#ccc', 
    padding:10, 
    height:30, 
    width:345, 
    marginRight:'auto', 
    marginLeft:'auto', 
    marginTop:10,
    marginBottom:10
  },
  dropDownIcon: {
    position: 'absolute',
    // backgroundColor:'red',
    top: 13,
    right: 5,
    // alignSelf:'center',
  },
  signupBtn: {
    marginTop: 30,

  }
};


export default CourseInfoEdit;
