import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
 function Abc() {
    return (
     <View>
     <Text>Consider this be your question </Text>
    

     <View>
     <TouchableOpacity>
        <Text>Option1</Text>
       </TouchableOpacity> 
       <TouchableOpacity>
        <Text>Option2</Text>
       </TouchableOpacity>
       <TouchableOpacity>
        <Text>Option3</Text>
       </TouchableOpacity>
       <TouchableOpacity>
        <Text>Option4</Text>
       </TouchableOpacity>
       </View>
 <View>
        <TouchableOpacity>
        <Text>SKIP</Text>
       </TouchableOpacity> 
       <TouchableOpacity>
        <Text>NEXT</Text>
       </TouchableOpacity> 
       </View>
       </View>
    
    );
  }
  
  const styles = StyleSheet.create({
    
  });
  export default Abc ;