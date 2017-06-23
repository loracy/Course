import React, { Component } from 'react';
import { View, Picker, ActivityIndicator, StatusBar, TextInput } from 'react-native';
import * as firebase from 'firebase';
import { Icon, FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements';
import ModalPicker from 'react-native-modal-picker';

// Make a component
class AccountEdit extends Component {
    // static navigationOptions = ({ navigation, screenProps }) => ({
    //     title: '更新會員資料',
    //     style: ({ backgroundColor: '#a6e0d7' }),
    //     headerRight: <Button title='儲存' onPress={this.props.navigation.navigate('Account')}/>,
    // });

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
      <View style={styles.formStyle}> 
          <FormLabel labelStyle={styles.formLabel}>姓名</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            placeholder='Your name'
            autoCorrect={false}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <FormLabel labelStyle={styles.formLabel}>電子信箱</FormLabel>
          <FormInput
            containerStyle={styles.formBorder}
            inputStyle={styles.formInput}
            placeholder='user@email.com'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel labelStyle={styles.formLabel}>學校</FormLabel>
          <ModalPicker
              data={schoolData}
              initValue=""
              onChange={(option)=>{ this.setState({school:option.label})}}
              style={styles.modalPicker} >
              
              <TextInput
                  style={styles.pickerInput}
                  editable={false}
                  placeholder="選擇你就讀的學校"
                  value={this.state.school} 
              />
              <Icon 
                name='arrow-drop-down'
                style={styles.dropDownIcon}
              />                     
          </ModalPicker>

          <FormLabel labelStyle={styles.formLabel}>科系</FormLabel>      
          <ModalPicker
              data={departmentData}
              initValue=""
              onChange={(option)=>{ this.setState({department:option.label})}}
              style={styles.modalPicker} >
              
              <TextInput
                  style={styles.pickerInput}
                  editable={false}
                  placeholder="選擇你就讀的科系"
                  value={this.state.department}                   
              />             
              <Icon 
                name='arrow-drop-down'
                style={styles.dropDownIcon}
              />     
          </ModalPicker>    
  
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


export default AccountEdit;
