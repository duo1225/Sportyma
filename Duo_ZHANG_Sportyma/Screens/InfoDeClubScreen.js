import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import {Card,Text} from 'react-native-elements';

import { connect } from 'react-redux';



const InfoDeClubScreen = (props)=>{
    const {jouerReducer} = props;
    const {clubReducer} = props;
    const {id} = props.route.params;
    
    return ( 
      <ScrollView>
        <View style={styles.container}>
      {clubReducer.map((club)=>(
        (club.id == id)?( 
        <Card key = {id} containerStyle={{ marginTop: 15 }}>
          <Card.Title>Informations of Club</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts} h2>
          {club.name}
          </Text>
          <Text style={styles.fonts} h4>
          Pays: &nbsp;&nbsp;&nbsp;{club.pays}
          </Text>
          <Text style={styles.fonts} h4>
          Saison:&nbsp;&nbsp; 2022
          </Text>
          <Text style={styles.fonts} h4>
          Déscription: 
          <br/>
          c'est un club très connu et professionnel.
          </Text>
          <Card.Divider />
          <Text style={styles.fonts} h4>
          Les jouers: 
          </Text>
          <Text style={styles.fonts}>
          {jouerReducer.map((jouer)=>(
               <li>{jouer.nom} -- {jouer.prenom}</li>)       
               )}
          </Text>
      </Card>):(<Text></Text>)
      ))}
        </View>
      </ScrollView>
    )
}

export default connect(
  (state)=>{return state}//state
)(InfoDeClubScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
  });
  
