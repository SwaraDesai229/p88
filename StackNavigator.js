import React from "React";
import{createStacknavigator} from"@react-navigator/stack;import tabNavigator from"../tabNaviagtor;
import PostScreen from"../screens/PostScreen";
import Profile from"../screens./profile"
import { TouchableOpacity } from "react-native";

const Stack=createStacknavigator();

const StackNavigator=()=>{
    return(
        <Stack.navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false
            }}
             
        />
    )
    const Drawer=createDrawerNavigator();

    const DrawerNavigator=()=>{
        return(
            <Drawer Naviagtor
             <Drawer.Screen name="Home"component={TSackNavigator}/>
             <Drawer.Screen name="Profile"component={Profile}/>
            </Drawer.navigator>
        );
    );
    export default DrawerNavigator;
          >
            )
  }

}
   <Stack.Screen name="Home" component={TabNavigator}/>
   <Stack.Screen name="PostScreen"component={PostScreen}/>
   </Stack.Navigator>
   );
};

export default StackNavigator;
return(
    <View style={StyleSheet.container}>
        <SafeAreaView style={StyleSheet.droiddSafeArea}/>
        <View style={style.appTitle}>
            <Image>
                source={require("../assets/logo.png")}
                style={StyleSheet.appIcon}
            ></Image>
            <Text style={styles.appTitleText}>{Story Telling\nApp'}</Text>
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>this.signInWithGoogleAsync}
        >
    </View>
)

render(){
    if(!this.state.fontsloaded){
        return <Apploading/>;
    } else{
        return(
            
            <View>
                style={{
            flex:1,
            justifyContent;"Center",
            alignItems:"Center"
                }}>
                <Button
                  title="Sign in with google"
                  onPress={()=> this.signInWithGoogleAsync()}></Button>
                />
            </View>
        )
    }
}
