import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent:'center', alignItems:'center'}}>

           
            <View>
                <Text 
                style={{ 
                    fontFamily: "Inter", 
                    fontSize: '40px', 
                    marginTop:'50px',
                    fontWeight:'800'

                    }}>
                     Happening now
                </Text>
                <Text 
                style={{ 
                    fontFamily: "Inter", 
                    fontSize: '25px', 
                    marginTop:'20px',
                    fontWeight:'800'

                    }}>
                     Join today.
                </Text>

            </View>
            </View>
            <View style={{marginTop:'90px'}}>
                <Pressable style={styles.button}>
                <Image
                    style={styles.logo_login}
                    source={require('../assets/google.png')}
                />
                    <Text>
                    Sign up with Google
                        </Text>
                </Pressable>
                <Pressable style={styles.button}>
                <Image
                    style={styles.logo_login}
                    source={require('../assets/apple-logo.png')}
                />
                    <Text>
                    Sign up with Google
                        </Text>
                </Pressable>
                <View style={{margin:'10px', alignItems:'center'}}>
                    <Text style={{width:'20px', backgroundColor:'white', textAlign:'center'}}>
                        or
                    </Text>
                    <View style={{width:'300px', height:'1px',backgroundColor:"lightgray", position:'absolute', marginTop:'11px', zIndex:'-10'}}> 

                    </View>
                </View>
                    <Pressable style={styles.button_acc} onPress={()=> navigation.navigate('Home')}>
                        <Text style={{ fontWeight:600, fontSize:'15px', color:'white'}}>
                        Create account
                            </Text>
                    </Pressable>
                   
                    
            </View>
            <View style={styles.pollicy}>
                        <Text style={{fontSize:'11px'}}>
                            By signing up, you agree to the Terms of Service and Privacy Pollicy, including Cookie Use.
                        </Text>
            </View>
            <View style={{marginVertical:'10px', marginTop:'20px', width:'300px'}} >
            <Text style={{fontSize:'15px', fontWeight:600}}>
                    Already have an account?
                        </Text>
            </View>
            <View>
            <Pressable style={styles.button_sign}>
                        <Text style={{ fontWeight:600, fontSize:'15px', color:'#1D9BF0' }}>
                        Sign in
                            </Text>
                    </Pressable>
            </View>
            
        </View>

    );

}




const styles = StyleSheet.create({
    container:{
        fontFamily:'Inter',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',

    },
    logo:{
        width:'120px',
        height:'120px',

    },
    button:{
        width:'300px',
        height:'40px',
        fontWeight:500,
        borderWidth: '1px',
        borderColor:'lightgray',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '10px',
        borderRadius:'100px',
        flexDirection:'row',
    },
    button_acc:{
        width:'300px',
        height:'40px',
        fontWeight:500,
        borderWidth: '1px',
        borderColor:'lightgray',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '10px',
        borderRadius:'100px',
        flexDirection:'row',
       backgroundColor:'#1D9BF0'
    },
    logo_login:{
        width:'20px',
        height:'20px',
        marginRight:'15px',

    },
    pollicy:{
        width:'300px',
        margin:'10px',
        
    },
    button_sign:{
        width:'300px',
        height:'40px',
        fontWeight:500,
        borderWidth: '1px',
        borderColor:'lightgray',
        justifyContent:'center',
        alignItems:'center',
        marginTop: '10px',
        borderRadius:'100px',
        flexDirection:'row',
        backgroundColor:'white'
    }

})