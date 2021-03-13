import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ToastAndroid, Alert, FlatList} from "react-native";
import db from '../Config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID : '',
            password : ''
      }
    }
    userLogin = (emailID, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailID, password).then(()=>{return Alert.alert('Successfully Logged in')}).catch((error)=>{
            var errorMessage = error.message;
            console.log(errorMessage);
        })
    };

    userSignUp = (emailID, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailID, password).then(()=>{return Alert.alert('Successfully Signed up')}).catch((error)=>{
            var errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    render(){
        return(
            <View style = {styles.container}>

                <View style = {styles.profileContainer}>
                <Image source={require("../assets/BookSanta.png")} style={{marginTop : 25, width : 150, height : 200}}></Image>
                <Text style={styles.title}>Book Santa</Text>
                </View>

                <View style = {styles.buttonContainer}>
                <TextInput style = {styles.loginBox} placeholder = "abc@example.com" keyboardType = "email-address" placeholderTextColor = '#ffff' onChangeText = {(text)=>{
                    this.setState({
                        emailID : text
                    });
                }}></TextInput>
                <TextInput style = {styles.loginBox} placeholder = "password" secureTextEntry = {true} placeholderTextColor = '#ffff' onChangeText = {(text)=>{
                    this.setState({
                        password : text
                    });
                }}></TextInput>

                <TouchableOpacity style = {[styles.button, {marginBottom : 20, marginTop : 20}]} onPress = {()=>{this.userLogin(this.state.emailID, this.state.password)}}><Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress = {()=>{this.userSignUp(this.state.emailID, this.state.password)}}><Text style = {styles.buttonText}>Sign Up</Text></TouchableOpacity>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:60,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })
  