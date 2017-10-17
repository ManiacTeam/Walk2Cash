import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { Router,Scene } from 'react-native-router-flux'

import DashboardScreen from './screens/DashboardScreen.js'
import CheckinScreen from './screens/CheckinScreen.js'
import RedeemScreen from './screens/RedeemScreen.js'
import UserScreen from './screens/UserScreen.js'


import BlueScreen from './screens/BlueScreen.js'
import LoginScreen from './screens/LoginScreen.js'
import BlackScreen from './screens/BlackScreen.js'


// class TabIcon extends Component {
//   render(){

//       console.log(this.props)
//       return (
//         <Image 
//           source={require('./images/profiles.png')}
//         />
//       );
//   }
// }

const TabIcon = ({ focused, title }) => {

  switch (title) {
      case 'Dashboard':
        return (
          <View>
            {focused ? (
               <Image source={require('./assets/graph_w.png')} style={styles.iconStyleSelected} />
            ) : (
               <Image source={require('./assets/graph_w.png')} style={styles.iconStyle} />
            )}
          </View>
          );
      case 'Checkin':
        return (
          <View>
          {focused ? (
               <Image source={require('./assets/placeholder_w.png')} style={styles.iconStyleSelected} />
              ) : (
             <Image source={require('./assets/placeholder_w.png')} style={styles.iconStyle} />
          )}
        </View>
        );
      case 'Redeem':
        return (
          <View>
          {focused ? (
              <Image source={require('./assets/ticket_w.png')} style={styles.iconStyleSelected} />
              ) : (
             <Image source={require('./assets/ticket_w.png')} style={styles.iconStyle} />
          )}
        </View>
        );
      case 'User':
        return (
          <View>
          {focused ? (
              <Image source={require('./assets/user_w.png')} style={styles.iconStyleSelected} />
              ) : (
             <Image source={require('./assets/user_w.png')} style={styles.iconStyle} />
          )}
        </View>
        );
  }

}

const App = () => {

    return (
      <Router>

        <Scene key = "root">

        <Scene
          key = "login"
          component = {LoginScreen}
          title = "LoginScreen"
          hideNavBar={true}
          initial
        />

          <Scene
             key =  "tabbar"
             tabs = {true}
             hideNavBar = {true}   
             showLabel = {false}          
             tabBarStyle = {{backgroundColor : '#262E46'}}
          >
          
            <Scene key = "firstTab" 
                navigationBarStyle={{backgroundColor : '#262E46'}}
                titleStyle = {{color : '#808285'}}  
                title = "Dashboard" 
                icon = {TabIcon}>

                  <Scene
                    key = "dashboard"
                    component = {DashboardScreen}
                    title = "DASHBOARD"
                    hideNavBar={false}
                  />
              
                  <Scene
                    key = "black"
                    component = {BlackScreen}
                    title = "black"
                    tintColor = '#F5318D'
                  />

            </Scene>

            <Scene key = "secondTab" 
                 navigationBarStyle={{backgroundColor : '#262E46'}} 
                 titleStyle = {{color : '#808285'}} 
                 title = "Checkin" 
                 icon = {TabIcon}>

                  <Scene
                    key = "checkin"
                    component = {CheckinScreen}
                    title = "MAP"
                    hideNavBar={false}
                  />

            </Scene>

            <Scene key = "thirdTab" 
                 navigationBarStyle={{backgroundColor : '#262E46'}} 
                 titleStyle = {{color : '#808285'}} 
                 title = "Redeem" 
                 icon = {TabIcon}>

                  <Scene
                    key = "redeem"
                    component = {RedeemScreen}
                    title = "VOUCHER REDEEM"
                    hideNavBar={false}
                  />

            </Scene>


            <Scene key = "fourthTab" 
                 navigationBarStyle={{backgroundColor : '#262E46'}} 
                 titleStyle = {{color : '#808285'}} 
                 title = "User" 
                 icon = {TabIcon}>

                  <Scene
                    key = "user"
                    component = {UserScreen}
                    title = "USER"
                    hideNavBar={false}
                  />

            </Scene>

          </Scene>


        </Scene>
      </Router>


    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  iconStyle : {
    paddingTop : 20,
    width : 27,
    height : 27,
  },
  iconStyleSelected : {
    paddingTop : 20,
    width : 27,
    height : 27,
    tintColor : '#F5318D'
  }
});

export default App