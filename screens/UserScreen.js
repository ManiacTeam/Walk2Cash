import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import Pie from 'react-native-pie'
import Chart from 'react-native-chart';

onPressLearnMore = () => {

}

class UserScreen extends Component {

  state = {
    view : -1,
    pressStatusDay: 1, 
    pressStatusWeek: 0, 
    pressStatusMonth: 0, 
    pressStatusYear: 0    
  }

  onPressDay = () => {
    this.setState({
      view : 0,
      pressStatusDay : 1,
      pressStatusWeek: 0, 
      pressStatusMonth : 0,
      pressStatusYear : 0,
    
    })
  }
  onPressWeek = () => {
    this.setState({
      view : 1,
      pressStatusDay : 0,
      pressStatusWeek: 1, 
      pressStatusMonth : 0,
      pressStatusYear : 0
      
    })
  }
  onPressMonth = () => {
    this.setState({
      view : 2,
      pressStatusDay : 0,
      pressStatusWeek: 0, 
      pressStatusMonth : 1,
      pressStatusYear : 0
      
    })
  }
  onPressYear = () => {
    this.setState({
      view : 3,
      pressStatusDay : 0,
      pressStatusWeek: 0, 
      pressStatusMonth : 0,
      pressStatusYear : 1
      
    })
  }

  showGraph = () =>{
    if(this.state.view==1){
      return(
        <Chart
        style={styles.chart}
        data={[
            ["SAT", 4714],
            ["SUN", 172],
            ["MON", 6392],
            ["TUE", 4707],
            ["WED", 9023],
            ["THU", 4714],
            ["FRI", 1722],
        ]}
        verticalGridStep={2}
        type="bar"
        axisColor="#F72582"
        axisLabelColor="#F72582"
        hideVerticalGridLines={true}
     />
      )
    }else if(this.state.view==2){
      return(
        <Chart
        style={styles.chart}
        data={[
            ["20/9", 4496],
            ["", 2345],
            ["", 6455],
            ["", 6709],
            ["", 5475],
            ["25/9", 6392],
            ["", 4707],
            ["", 1364],
            ["", 8023],
            ["", 4714],
            ["29/9", 172],
            ["", 6392],
            ["", 4707],
            ["", 9023],
            ["", 4714],
            ["3/10", 1722],
        ]}
        verticalGridStep={2}
        type="bar"
        axisColor="#F72582"
        axisLabelColor="#F72582"
        hideVerticalGridLines={true}
     />
      )
    }else if(this.state.view==3){
      return(
        <Chart
        style={styles.chart}
        data={[
            ["JAN", 4496],
            ["FEB", 5502],
            ["MAR", 6455],
            ["APR", 6709],
            ["MAY", 5475],
            ["JUN", 6392],
            ["JUL", 4707],
            ["AUG", 4333],
            ["SEP", 4714],
            ["OCT", 4524],
        ]}
        verticalGridStep={2}
        type="bar"
        axisColor="#F72582"
        axisLabelColor="#F72582"
        hideVerticalGridLines={true}
     />
      )
    }else{
      return(
        <Chart
        style={styles.chart}
        data={[
            ["09:00", 34],
            ["10:00", 60],
            ["11:00", 12],
            ["12:00", 44],
            ["13:00", 345],
            ["14:00", 120],
            ["15:00", 125],
            ["16:00", 92],
            ["17:00", 61],
            ["18:00", 72],
        ]}
        verticalGridStep={2}
        type="bar"
        axisColor="#F72582"
        axisLabelColor="#F72582"
        hideVerticalGridLines={true}
     />
      )
    }
  }

  showTotal = () =>{
    if(this.state.view==1){
      return(
        <View style={{flexDirection:'row'}}>
          <View style={{alignItems: 'center',margin:10}}>
            <Text style={{fontSize:15,color:'white'}}>Total steps</Text>
            <Text style={{fontSize:20,color:'#F72582',fontWeight:'bold'}}>25,321 steps</Text>
          </View>
          <View style={{alignItems: 'center',margin:10}}>
            <Text style={{fontSize:15,color:'white'}}>Avg steps</Text>
            <Text style={{fontSize:20,color:'#F72582',fontWeight:'bold'}}>4,220 steps</Text>
          </View>
        </View>
      )
    }else if(this.state.view==2){
      return(
        <View style={{flexDirection:'row'}}>
          <View style={{alignItems: 'center',margin:10}}>
            <Text style={{fontSize:15,color:'white'}}>Total steps</Text>
            <Text style={{fontSize:20,color:'#F72582',fontWeight:'bold'}}>135,505 steps</Text>
          </View>
          <View style={{alignItems: 'center',margin:10}}>
            <Text style={{fontSize:15,color:'white'}}>Avg steps</Text>
            <Text style={{fontSize:20,color:'#F72582',fontWeight:'bold'}}>4,672 steps</Text>
          </View>
        </View>
      )
    }else if(this.state.view==3){
      return(
        <View style={{flexDirection:'row'}}>
          <View style={{alignItems: 'center',margin:10}}>
            <Text style={{fontSize:15,color:'white'}}>Total steps</Text>
            <Text style={{fontSize:20,color:'#F72582',fontWeight:'bold'}}>1,592,041 steps</Text>
          </View>
          <View style={{alignItems: 'center',margin:10}}>
            <Text style={{fontSize:15,color:'white'}}>Avg steps</Text>
            <Text style={{fontSize:20,color:'#F72582',fontWeight:'bold'}}>5,006 steps</Text>
          </View>
        </View>
      )
    }else{
      return(
        <View style={{alignItems: 'center',margin:10}}>
          <Text style={{fontSize:15,color:'white'}}>Total steps</Text>
          <Text style={{fontSize:20,color:'#F72582',fontWeight:'bold'}}>1,440 steps</Text>
        </View>
      )
    }
  }
    render() {
        
        return (
            <ScrollView contentContainerStyle = {styles.container}>

              <View style={{flexDirection:'row',margin:30}}>
                  <View>
                    <Image
                        style={{width: 100, height: 100, borderRadius: 50,marginRight:30}}
                        source={{uri: 'https://www.tkgourmet.com/v/vspfiles/photos/3-salmonnorway-2.jpg'}}
                    /> 
                  </View>
                  <View style={{justifyContent:'center'}}>
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Salmon Norway</Text>
                    <Text style={{color: '#F5318D'}}>MY POINTS: 144 </Text>
                  </View>
              </View>
              
              
               <View style={{flexDirection:'row', flexWrap:'wrap'}}>

                    <View style={styles.sortGraph}>
                            
                            <Text style={this.state.pressStatusDay ? styles.buttonPress : styles.welcome} onPress={this.onPressDay}>
                                Day</Text>
                            <Text style={this.state.pressStatusWeek ? styles.buttonPress : styles.welcome} onPress={this.onPressWeek}>
                                Week</Text>
                            <Text style={this.state.pressStatusMonth ? styles.buttonPress : styles.welcome} onPress={this.onPressMonth}>
                                Month</Text>
                            <Text style={this.state.pressStatusYear ? styles.buttonPress : styles.welcome} onPress={this.onPressYear}>
                                Year</Text>
                    </View>
              </View>


             <View style={{flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {this.showGraph()}
              </View>

              <View>
                {this.showTotal()}
              </View>

              <View style={styles.card}>

                  <Text style={{color: 'white',
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginBottom: 20,
                    marginTop: 20}}>
                    PINNED VOUCHER
                  </Text>

                  <View style={{flexDirection: 'row',marginBottom: 30}}>


                    {/* PIE CHART */}
                    <View style={styles.eachPie}>
                      <View>
                        <Pie
                          radius={36}
                          innerRadius={31}
                          series={[40]}
                          colors={['#F5318D']}
                          backgroundColor='#364060'
                        />
                        <View style={styles.gauge}>
                          <Text style={styles.gaugeText}>40%</Text>
                        </View>
                      </View>

                      <Text style={styles.textG}>400 / 1000</Text>
                      <Text style={styles.textDet}>Chocolate Mocha</Text>
                      
                    </View>
                    {/* END PIE CHART */}

                    {/* PIE CHART */}
                    <View style={styles.eachPie}>
                      <View>
                        <Pie
                          radius={35}
                          innerRadius={30}
                          series={[40]}
                          colors={['#F5318D']}
                          backgroundColor='#364060'
                        />
                        <View style={styles.gauge}>
                          <Text style={styles.gaugeText}>40%</Text>
                        </View>
                      </View>

                      <Text style={styles.textG}>400 / 1000</Text>
                      <Text style={styles.textDet}>Chocolate Mocha</Text>
                      
                    </View>
                    {/* END PIE CHART */}

                  </View>

                  
                  <View style={{flexDirection: 'row', marginBottom: 30}}>


                    {/* PIE CHART */}
                    <View style={styles.eachPie}>
                      <View>
                        <Pie
                          radius={35}
                          innerRadius={30}
                          series={[40]}
                          colors={['#F5318D']}
                          backgroundColor='#364060'
                        />
                        <View style={styles.gauge}>
                          <Text style={styles.gaugeText}>40%</Text>
                        </View>
                      </View>

                      <Text style={styles.textG}>400 / 1000</Text>
                      <Text style={styles.textDet}>Chocolate Mocha</Text>
                      
                    </View>
                    {/* END PIE CHART */}

                    {/* PIE CHART */}
                    <View style={styles.eachPie}>
                      <View>
                        <Pie
                          radius={35}
                          innerRadius={30}
                          series={[40]}
                          colors={['#F5318D']}
                          backgroundColor='#364060'
                        />
                        <View style={styles.gauge}>
                          <Text style={styles.gaugeText}>40%</Text>
                        </View>
                      </View>

                      <Text style={styles.textG}>400 / 1000</Text>
                      <Text style={styles.textDet}>Chocolate Mocha</Text>
                      
                    </View>
                    {/* END PIE CHART */}

                  </View>
                    

                  


              </View>
          

         </ScrollView>
        );

    }

}

const styles = StyleSheet.create({
    dayLabel:{
      color: '#7B7B7B',
      marginRight: 5
    },
    welcome: {
      borderRadius: 50,
      height: 30,
      width: 70,
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#F72582',
      margin: 3,
      color: '#F72582',
      textAlign: 'center',
      textAlignVertical: 'center'
        
    },
    buttonPress: {
      borderRadius: 50,
      height: 30,
      width: 70,
      borderRadius:10,
      margin: 3,
      backgroundColor: '#F72582',
      textAlign: 'center',
      textAlignVertical: 'center'
        
    },
    chart: {
      width: 340,
      height: 200,
      margin: 20
    },
    container: {
      alignItems: 'center',
      backgroundColor: '#171C2F',
    },

    sortGraph: {
      flexDirection: 'row'
    },
    gauge: {
      position: 'absolute',
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gaugeText: {
      backgroundColor: 'transparent',
      fontWeight: 'bold',
      color: 'white',
    },
    gaugeGoal: {
      color: '#364069',
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#262d47',
      shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.6, shadowRadius: 10,
      width: 300,
      height: 370,
      margin: 20,
    },
    textDet: {
      color: 'white',
    },
    textG: {
      color: '#7B7B7B',
      fontSize: 12,
    },
    eachPie: {
      alignItems: 'center',
      margin: 10
    }
  });
  
  export default UserScreen
