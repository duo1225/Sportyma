import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Button} from 'react-native-elements';
import { connect } from 'react-redux';

import Card from '../Components/Card';

const ListClubs = (props)=>{
const {clubReducer, navigation} = props;
  return (
    <View>
       <Button
                title={'Ajouter club'}
                containerStyle={{
                  width:150,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  marginLeft:15,
                }}
                onPress={()=>navigation.navigate('AddNewClub')}
              />

        {clubReducer.map(club =>(
            <Card navigation={navigation} 
            id={club.id} 
            key={club.id} 
            name={club.name} 
            pays={club.pays} 
            url={club.url}/>
        ))
    }
    </View>

);
}

export default connect(
  (state)=>{return state}//映射状态
  //{addClub:createAddClubAction}//映射操作状态的方法
)(ListClubs)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
  });