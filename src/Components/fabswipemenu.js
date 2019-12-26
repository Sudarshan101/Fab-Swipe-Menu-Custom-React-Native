
import React, {Component} from 'react';
import { StyleSheet, View, Animated, Text, TouchableOpacity, Easing } from 'react-native';
import { Button } from 'native-base';
var styles = StyleSheet.create({
    fabList:{
        zIndex:10,
        position:'absolute',
        bottom:20,
        display:"flex",
        flexDirection:"row",
        right:0,
        height:50,
        paddingRight:20,
        borderTopLeftRadius:100,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        borderBottomLeftRadius:100,
        backgroundColor:'rgb(38, 52, 74)',
    },
    fabOpenIcon:{
        zIndex:100,
        paddingLeft:8,  
        height:50,
        width:100,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    fabOpenIconFirst:{
      zIndex:100,
      paddingLeft:8,
      paddingRight:5,  
      height:50,
      width:50,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    },
    fabOpenIconLast:{
        zIndex:100,
        paddingLeft:8,
        paddingRight:5,  
        height:50,
        width:55,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }
  });
  
  
export default class FabSwipeMenu extends React.Component {
    constructor(props) {
      super(props);
      this.width = new Animated.Value(50);
      this.state = {
        isOpenSwipList:false,
      };
      this.animationWidth= this.props.otherThenTraining?155:310;
      //console.log(this.props);
    }
    openSwiprList = () => {
      this.width.setValue(55);
      this.setState({isOpenSwipList:true})
      Animated.timing(this.width, {
        toValue:this.animationWidth,
        delay:0,
        duration: this.animationWidth,
      }).start();
    };
    closeSwiprList = () => {
      this.width.setValue(this.animationWidth);
      this.setState({isOpenSwipList:false})
      Animated.timing(this.width, {
        toValue:55,
        delay:0,
        duration: this.animationWidth,
      }).start();
    };

    render() {
      return (
        <React.Fragment>
          {
          this.state.isOpenSwipList?
          <TouchableOpacity onPress={() => this.closeSwiprList()} style={{backgroundColor:'rgba(0,0,0,0)',position:"absolute",flex:1, width:'100%',height:'100%',top:0,left:0, zIndex:0}}></TouchableOpacity>:
          null
          }
          
        <Animated.View  style={[styles.fabList, {width:this.width}]}>
          {
          this.state.isOpenSwipList?
          null:
          <Button onPress={() => this.openSwiprList()} transparent style={styles.fabOpenIconFirst} >
              <Text style={{fontSize:9,color:'rgb(256,256,256)'}}>Open</Text>
          </Button>
          }
          <Button transparent style={styles.fabOpenIcon} >
           <Text style={{fontSize:12,color:'rgb(256,256,256)'}}>Home</Text>
          </Button>
          <Button transparent style={styles.fabOpenIcon} >
            <Text style={{fontSize:12,color:'rgb(256,256,256)'}}>About</Text>
          </Button>
          <Button transparent style={styles.fabOpenIcon} >
            <Text style={{fontSize:12,color:'rgb(256,256,256)'}}>Contact</Text>
          </Button>
          <Button transparent style={styles.fabOpenIcon} >
            <Text style={{fontSize:12,color:'rgb(256,256,256)'}}>Help</Text>
          </Button>
        </Animated.View>
        </React.Fragment>
      );
    }
}