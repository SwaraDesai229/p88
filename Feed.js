import React,{ Component } from 'react';
import{View,Text} from 'react-native'

export default class Feed extends Component { 
    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:"Center",
                    alignItems:"center

                    }}>
                        <Text>Feeds</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:"black"    
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"? Statusbar.currentheight:
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color:"white",
        fontSize:RFValue(28),
    },
    cardContainer:{
        flex:0.85
    }
});