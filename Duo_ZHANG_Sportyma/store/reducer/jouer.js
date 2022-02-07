//l'état initialisé
const iniState = [
    {id:'001',nom:'ZHANG',prenom:'Duo'},
    {id:'002',nom:'MICHEAL',prenom:'Jacky'},
    {id:'003',nom:'PIERRE',prenom:'Tom'},
    {id:'004',nom:'CHEN',prenom:'Jerry'},
    {id:'005',nom:'MANT',prenom:'Luna'},
]

//Reducer pour les clubs
export default function jouerReducer(preState=iniState,action){
    const {type,data} = action;
    switch (type) {
        case 'AJOUTER_JOUER':
            return [data,...preState];
        default:
            return preState;      
    }

}