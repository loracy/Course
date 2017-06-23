import React, { Component } from 'react';
import { TouchableOpacity, View, ActivityIndicator, AsyncStorage, StatusBar, Image } from 'react-native';
import FBButton from './components/fbbutton';
import { FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements';
import { Facebook } from 'expo';
import * as firebase from 'firebase';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
  };

  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      console.log('start sign-in');
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('sign-in succese!');
      this.props.navigation.navigate('Home');

    } catch (err) {
      this.setState({ error: err.message , loading: false });
      console.log(this.state.error);
      return (this.state.error);
    }
  }

  goToNewScreen = async () => {

    this.setState({
        email: '',
        password: '',
        error: '',
        loading: false,
    });
    this.props.navigation.navigate('SignupStack');
  }

  renderButton() {
    if (this.state.loading) {
      return (<ActivityIndicator size='small' />);
    }

    return (
      <Button
        title='登入'
        backgroundColor='#4AAF4C'
        buttonStyle={{ borderRadius: 10 }}
        onPress={() => this.onSignIn()}
      />
    );
  }


  render() {
    return (
      <View>
        <View style={styles.backgroundPath}>
          <Image source={require('./assets/Path 1.png')} />
        </View>
        <View style={styles.formStyle}>
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <Image style={{ width: 100, height: 100, marginBottom: 5 }} source={require('../assets/icons/app.png')} />
            <Image style={{ marginBottom: 8 }} source={require('./assets/logoWord.png')} />
            <Image source={require('./assets/logoWord_down.png')} />
          </View>
          <View style={styles.inputRowStyle}>
            <View
              style={{ width: 30, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 24, height: 24 }} source={require('./assets/man.png')} />
            </View>
            <FormInput
              containerStyle={{ width: 250, marginLeft: 5, borderBottomWidth: 0 }}
              inputStyle={{ fontSize: 15 }}
              placeholder='輸入信箱'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={styles.inputRowStyle}>
            <View
              style={{ width: 30, alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 24, height: 24 }} source={require('./assets/locked.png')} />
            </View>
            <FormInput
              containerStyle={{ width: 250, marginLeft: 5, borderBottomWidth: 0 }}
              inputStyle={{ fontSize: 15 }}
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='輸入密碼'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <FormValidationMessage labelStyle={{fontSize: 10}} >{this.state.error}</FormValidationMessage>
        </View>
        <View style={styles.buttonContainer}>
          {this.renderButton()}
          <FBButton navigation={this.props.navigation} />
          <TouchableOpacity style={styles.textStyle} onPress={() => this.goToNewScreen()}>
            <Text style={{ color: '#747474', fontSize: 12, textDecorationLine: 'underline' }}>還沒註冊？</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 200,
    paddingLeft: 40,
    paddingRight: 40,
    

  },
  inputRowStyle: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ababab'
  },
  buttonContainer: {
    padding: 20,
    paddingTop: 15
  },
  textStyle: {
    alignItems: 'center',
    marginTop: 10,
  },
  backgroundPath: {
    position: 'absolute',
    zIndex: -11,
  }

};

export default LoginScreen;
