import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Image, Text,} from 'react-native-elements';
import CardStack,{Card} from 'react-native-card-stack-swiper'
const db = [
  {
    name: 'Richard Hendricks',
    uri:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg"
  },
  {
    name: 'Erlich Bachman',
    uri:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
  },
  {
    name: 'Monica Hall',
    uri:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  }
]


function App () {
  const characters = db;
  console.log(characters);
  const [lastDirection, setLastDirection] = useState(null)
  const [isFirst,setFirst]=useState(false)

  

  return(
  <View style={styles.swipeContainer}>
  <CardStack 
  disableBottomSwipe={true}
  disableTopSwipe={false}>
    {characters.map((person)=>(
      <Card>
        <View style={styles.imageContainer}>
        <Image
         source={{uri:person.uri}} 
         style={styles.image} 
          resizeMode="cover"
           />
        <Text h3 containerStyle={styles.text}>
        {person.name}
          </Text>
        </View>
      </Card>
    ))
    }
  </CardStack>
</View>)
}


const styles=StyleSheet.create({
  swipeContainer:{
    display:"flex",
    justifyContent:"center",
    alignContent:'center',
    marginTop:200,
    marginLeft:5,
    marginRight:5
    
  },
  swipe:{
   position:"absolute",
    justifyContent:"center",
    alignContent:'center',
   
  },
  card:{   
marginTop:400,
flex:1,
position:"relative",
width:350,
height:500,
shadowColor:"#FFC0CB",
shadowRadius:10,
borderRadius:20,
marginRight:15,
marginLeft:15,
shadowColor: '#000000',
shadowOffset: {
      width: 0,
      height: 3
    },
shadowRadius: 5,
shadowOpacity: 1.0
},
imageContainer:{
  backgroundColor:"#FABFC9",
  borderRadius:10,
  paddingTop:10,
  paddingBottom:50
}
,
image:{
    width:400,
    height:400,
    borderRadius:10,
   
  }, 
  text:{
    fontStyle:"normal",
    fontWeight:"bold",
    marginBottom:0,
    color:"#000000",
    marginLeft:10

  },
  
 
})


export default App

