import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const MyCard = (props)=> {
  const {id,name,pays,url}  = props;
  return(<>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>Club:  {name}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={require('../image/'+url)}
          />
          <Text style={{ marginBottom: 10 }}>
          The club of {pays}...
          Entrez pour en savoir plus...
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{borderRadius: 0,marginLeft: 0,marginRight: 0,marginBottom: 0,}}
            title="Savoir plus"
            onPress={()=> props.navigation.navigate('InfoDeClubScreen',{id:id})}
          />
        </Card>
      </View>
    </ScrollView>
  </>)
}


export default MyCard;
// export default class extends Component {
//   render() {
//     const {id,name,pays}  = this.props;
//     const {navigate} = this.props.navigation;
//     return (
//         <>
//           <ScrollView>
//             <View style={styles.container}>
//               <Card>
//                 <Card.Title>Club:  {name}</Card.Title>
//                 <Card.Divider />
//                 <Card.Image
//                   style={{ padding: 0 }}
//                   source={{
//                     uri:
//                       'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
//                   }}
//                 />
//                 <Text style={{ marginBottom: 10 }}>
//                 The club of {pays}...
//                 Entrez pour en savoir plus...
//                 </Text>
//                 <Button
//                   icon={
//                     <Icon
//                       name="code"
//                       color="#ffffff"
//                       iconStyle={{ marginRight: 10 }}
//                     />
//                   }
//                   buttonStyle={{borderRadius: 0,marginLeft: 0,marginRight: 0,marginBottom: 0,}}
//                   title="Savoir plus"
//                   onPress={()=>navigate('InfoDeClubScreen',{id:id})}
//                 />
//               </Card>
//             </View>
//           </ScrollView>
//         </>
//       );
//   }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
