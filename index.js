import { View, StyleSheet, Text } from 'react-native'
import React ,{useState, useEffect} from 'react'
import {db} from '../config'
import { ref, onValue } from 'firebase/database'
const FetchData = () => {
  const [todoData, setToData]=useState([])
  useEffect (() =>
  {
    const starCountRef = ref(db , 'posts/');
    onValue (starCountRef, (snapshot) =>
    {
      const data =snapshot.val ();
      const newPosts = Object.keys(data).map(key =>
      ({
        id:key,
        ...data[key]

      }));
      console.log(newPosts);
      setToData(newPosts);
  });

  
} , [])
 return (
  <View style={styles.container}>
 <Text> fetech data </Text> 
 {
  todoData.map((item,index) =>{
    return(
    <View key ={index}>
      <Text>
        {item.title}
      </Text>
      <Text>
        {item.body}
      </Text>

      </View>
  )
 })
}
</View>
 )
}
export default FetchData
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
