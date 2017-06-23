import React, {Component} from 'react';
import { Linking, Button, ScrollView } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator, DrawerView,
         NavigationActions, StackRouter } from 'react-navigation';
import { Icon, Tile, List } from 'react-native-elements';

import HomeScreen from './Header';
import AddScreen from './Add';
import SettingScreen from './Setting';
import CourseScreen from'./Course';
import AccountScreen from './Account';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import AccountEditScreen from './AccountEdit';
import CourseInfoEditScreen from './CourseInfoEdit'




export const SignupStack = StackNavigator({
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '註冊',
        left: (
          <Icon
            name='chevron-left'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('LoginScreen')}
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
      })
    },
  },
},
  {
    headerMode: 'screen',
    headerStyle: (backgroundColor = '#a6e0d7')
  }
)

export const HomeStack = StackNavigator(
{
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '課表',
        left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
        right:(
          <Icon
            name='add'
            iconStyle={{ marginRight : 10 }}
            onPress={ () => navigate('Add') }
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
      })
    },
  },
  Add: {
    screen: AddScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '新增課程',
        style: ({ backgroundColor: '#a6e0d7' }),
        tintColor: '#000000'
      })
    },
  },
  Course: {
    screen: CourseScreen,
    navigationOptions: {
      header: ({ state, navigate }) => ({
        title: `${state.params.name}`,
        right:(
          <Icon
            name='edit'
            iconStyle={{ marginRight : 10 }}
            /*onPress={ () => navigate('CourseInfoEdit') }*/
          />
        ),
        style: ({ backgroundColor: '#a6e0d7', shadowColor: 'rgba(99,99,99,0)' }),
        tintColor: '#000000'
      })
    },
  },
  CourseInfoEdit: {
    screen: CourseInfoEditScreen,
  }

},
{
  headerMode: 'screen',
  headerStyle: (backgroundColor='#a6e0d7' )
}
);


export const SettingStack = StackNavigator({
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '設定',
        left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
        tintColor: '#000000'
      })
    },
  },
},
{
  // headerMode: 'none',
}
);

export const AccountStack = StackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '會員資料',
        left: (
          <Icon
            name='menu'
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
        right: (
          <Icon
            name='mode-edit'
            iconStyle={{ marginRight: 10 }}
            onPress={() => navigate('AccountEdit')}
          />
        ),
        style: ({ backgroundColor: '#a6e0d7' }),
        tintColor: '#000000'
      })
    },
  },
  AccountEdit: {
    screen: AccountEditScreen,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: '更新會員資料',
        // right: (
        //   <Icon
        //     name='mode-edit'
        //     iconStyle={{ marginRight: 10 }}
        //     onPress={() => navigate('AccountEdit')}
        //   />
        // ),
        style: ({ backgroundColor: '#a6e0d7' }),
        tintColor: '#000000'
      })
    },
  },
},
{
  // headerMode: 'none',
}
);

export const DrawerRouter = DrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        drawer: {
          label: '我的課表',
          icon: ({ tintColor }) => <Icon name="view-list" size={25} color={tintColor} />
        },
      },
    },

    AccountStack: {
      screen: AccountStack,
      navigationOptions: {
        drawer: {
          label: '會員',
          icon: ({ tintColor }) => <Icon name="person" size={25} color={tintColor} />
        },
      },
    },

    SettingStack: {
      screen: SettingStack,
      navigationOptions: {
        drawer: {
          label: '設定',
          icon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />
        },
      },
    },


  },

  {
    initialRouteName: 'HomeStack',
    contentOptions: {
      activeTintColor: '#37bc9b',
    },
    contentComponent:
      props => (
        <ScrollView>
          <Tile
            imageSrc={require('./assets/userImg.jpg')}
            title={props.Account}
            featured
          />
          <DrawerView.Items {...props} />
        </ScrollView>
      )
  },
);

export const LoginStack = StackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    SignupStack: {
      screen: SignupStack,
    },
    Home: {
      screen: DrawerRouter,
    }
  },
  {
    headerMode: 'none',
  }
);