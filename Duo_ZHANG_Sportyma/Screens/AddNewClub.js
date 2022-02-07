import React,{ useState, useEffect,useRef } from 'react';
import { View,TextInput } from 'react-native';
import {Text,Button } from 'react-native-elements';
import {nanoid} from 'nanoid';
import uuid from 'react-native-uuid';
import { connect } from 'react-redux'

import {nameValidator,paysValidator} from "../core/utils"
import {createAddClubAction} from '../store/action/club'

 const AddNewClub =(props)=> {
  const [name,setName] = useState('Liverpool F.C.');
  const [pays,setPays] = useState('Angleterre');
  const nameRef = useRef();
  const paysRef = useRef();
 
  //useEffect(callback, []);

  function inscription(){
    const newName = nameRef.current.value;
    const newPays = paysRef.current.value;
    const newUrl = 'bayernClub.jpg';
    const isNom=nameValidator(newName);
    const isPays=paysValidator(newPays);
    const newClub = {id:uuid.v4(),name:newName,pays:newPays,url:newUrl};

    if(isNom||isPays){
      alert('nom ou pays est vide!');
      return;
  }else{
      props.dispatch(createAddClubAction(newClub));
      props.navigation.navigate('ListClubs');
  }
  }
    return(
    <View style={{
      textAlign:'center',
      flex: 1,}}>
      <Text style={{ marginBottom: 8,
      textAlign:'center'
      }} h3>
         Ajouter un nouveau club
      </Text>
      <TextInput
                label="name"
                returnKeyType="next"
                ref={nameRef}
                style={{height:50,borderColor:'gray',borderWidth:1,margin:10}}
            />
       <TextInput
                label="pays"
                returnKeyType="next"
                ref={paysRef}
                style={{height:50,borderColor:'gray',borderWidth:1,margin:10}}
            />
       <Button
                title={'submit'}
                containerStyle={{
                  width:150,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  marginLeft:100,
                }}
                onPress={()=>inscription()}
              />
    </View>);
}


const mapStateToProps=(state)=>(
  {state},
  {addClub:createAddClubAction}
)


export default connect(mapStateToProps)(AddNewClub)