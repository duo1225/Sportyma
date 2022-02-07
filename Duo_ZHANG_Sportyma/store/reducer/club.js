//l'état initialisé
const iniState = [
    {id:'01',name:'FC Paris Saint-Germain',pays:'France',url:'parisClub.jpg'},
    {id:'02',name:'RC Strasbourg Alsace',pays:'France',url:'strasbourClub.jpg'},
    {id:'03',name:'Manchester United F.C.',pays:'Angleterre',url:'manchesterClub.jpg'},
    {id:'04',name:'FC Bayern Munich',pays:'Allemagne',url:'bayernClub.jpg'},
    {id:'05',name:'FC Barcelona',pays:'Espagnol',url:'barceloneClub.jpg'},
]

//Reducer pour les clubs
export default function clubReducer(preState=iniState,action){
    console.log("action",action);
    const {type,data} = action;
    switch (type) {
        case 'AJOUTER_CLUB':
            return [data,...preState];
        default:
            return preState;      
    }

}