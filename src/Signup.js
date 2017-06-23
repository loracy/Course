import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator, AsyncStorage, Picker, StatusBar } from 'react-native';
import * as firebase from 'firebase';
import { Icon, FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements';
import { Facebook } from 'expo';
import ModalPicker from 'react-native-modal-picker';

import FBButton from './components/fbbutton';

// Make a component
class Signup extends Component {
  state = {
    email: null,
    password: null,
    username: null,
    school: '',
    department: '',
    course: '',
    error: ' ',
    loading: false,
    saving: false,
  };

  onSaveInfo = async () => {
    const { currentUser } = firebase.auth();
    const { email, username, school, department, course } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    await dbUserid.set({  username, email, school, department, course });
    console.log('check the saving function~~~~~~~~');
  }

  onCreateUser = async () => {
    const { email, password } = this.state;
    this.setState({ loading: true , error: ' '});
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const { currentUser } = firebase.auth();
      let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
      await dbUserid.set({  username: "", email: "", school: "", department: "", course: "", });
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({ saving: false });
      this.onSaveInfo();
      this.props.navigation.navigate('Home');
    } catch (err) {
      this.setState({
        error: err.message,
        loading: false,
      });
      console.log(this.state.error);
    }
  }


  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='small' />;
    }

    return (
      <Button
        title='註冊'
        backgroundColor='#F29019'
        buttonStyle={{ borderRadius: 10 }}
        onPress={() => this.onCreateUser()}
        style={styles.signupBtn}
      />
    );
  }

  render() {
    let index = 0;
    const schoolData = [
      // { key: index++, section: true, label: 'Fruits' },
      { key: index++, label: '國立台灣大學' },
      { key: index++, label: '國立台北教育大學' },
      { key: index++, label: '國立清華大學' },
      { key: index++, label: '國立交通大學' },
      { key: index++, label: '國立政治大學' },
      // { key: index++, section: true, label: 'Vegetables' },
      { key: index++, label: '國立臺北大學' },
      { key: index++, label: '亞洲大學' },
      { key: index++, label: '東海大學' },
      { key: index++, label: '世新大學' },
      { key: index++, label: '中國文化大學' },
      { key: index++, label: '天主教輔仁大學' },
      { key: index++, label: '東吳大學' },
      { key: index++, label: '僑光科技大學' }
    ];

    const departmentData = [
            { key: index++, label: '數位科技設計系' },
            { key: index++, label: '教育學系' },
            { key: index++, label: '兒童與英語教育學系' },
            { key: index++, label: '資訊科學系' },
            { key: index++, label: '自然科學教育學系' },
            { key: index++, label: '教育與經營管理學系' },
            { key: index++, label: '數資暨資訊教育學系' },
            { key: index++, label: '音樂學系' },
            { key: index++, label: '體育學系' },
            { key: index++, label: '語文與創作學系' },
            { key: index++, label: '藝術造形設計學系' },
            { key: index++, label: '社會與區域發展學系' },
    ];

    console.log(this.state);
    return (
      <View style={styles.signupLayout}>

        <View style={styles.formStyle}>
          <FormLabel labelStyle={styles.formLabel}>姓名</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            placeholder='輸入姓名'
            autoCorrect={false}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <FormLabel labelStyle={styles.formLabel}>電子信箱</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            placeholder='信箱即為帳號'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel labelStyle={styles.formLabel}>密碼</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='至少6位英文/數字'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        {/*<FormLabel labelStyle={styles.formLabel}>學校</FormLabel>*/}
        <View style={styles.pickerContainer}>
          <ModalPicker
            data={schoolData}
            initValue=""
            onChange={(option) => { this.setState({ school: option.label }) }}
            style={styles.modalPicker} >

            <TextInput
              style={styles.pickerInput}
              editable={false}
              placeholder="選擇你就讀的學校"
              value={this.state.school}
            />
            {/*<Icon
              name='arrow-drop-down'
              style={styles.dropDownIcon}
            />*/}
          </ModalPicker>

          {/*<FormLabel labelStyle={styles.formLabel}>科系</FormLabel>*/}
          <ModalPicker
            data={departmentData}
            initValue=""
            onChange={(option) => { this.setState({ department: option.label }) }}
            style={styles.modalPicker} >

            <TextInput
              style={styles.pickerInput}
              editable={false}
              placeholder="選擇你就讀的科系"
              value={this.state.department}
            />
            {/*<Icon
              name='arrow-drop-down'
              style={styles.dropDownIcon}
            />*/}
          </ModalPicker>
        </View>
        <FormValidationMessage labelStyle={{fontSize: 10}} >{this.state.error}</FormValidationMessage>
        {this.renderButton()}
        <FBButton navigation={this.props.navigation} />

      </View>
    );
  }
}

const styles = {
  signupLayout: {
    marginTop: -30,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  formStyle: {
    marginTop: 50,
    // flex: 1,
  },
  formLabel: {
    fontSize: 13,
    color: '#37bc9b',
  },
  formBorder: {
    borderBottomColor: '#37bc9b',
  },
  formInput: {
    color: '#000',
    fontSize: 15
  },
  pickerContainer: {
    justifyContent:'space-around',
    marginTop: 30,
  },
  modalPicker: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  pickerInput: {
    //backgroundColor: '#86A397',
    // borderColor:'#ccc', 
    fontSize: 15,
    alignItems: 'center',
    color: 'black',
    padding: 25
  },
  // dropDownIcon: {
  //   position: 'absolute',
  //   backgroundColor: 'red',
  //   top: 13,
  //   right: 5,
  //   // alignSelf:'center',
  // },
  signupBtn: {
    marginTop: 30,

  }
};

export default Signup;
