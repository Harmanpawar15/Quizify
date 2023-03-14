import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  ,Image,TouchableOpacity,Button} from 'react-native';
import Main from './Main'
 import Result from './Result';


 const App = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View>
     <Image
            style={{
              // resizeMode: 'center',
              height: 100,
              width: 220,
              //  position:'relative',
              //  top:30,
            }}
            source={require ('../assets/quizify-logo.png')}
          /> 
         </View>

         {/* To navigate to second screen */}
        <Button title="Click here to start"
            onPress={()=>
            navigation.navigate('Main')
            }
        /> 

        <Button title="RESULT"
        onPress={()=>
        navigation.navigate('Result')
        }  />

         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row' ,
    backgroundColor: '#fff',
    alignItems:'center',
   justifyContent:'space-evenly',
  


  },
  heading:{

    fontSize:27 ,
  }
});
export default App;