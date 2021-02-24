import { convertCollectionsSnapShotToMap, firestore } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
  
});
export const fetchCollectionsSuccess=(collectionsMap)=>({
  type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsMap
})
export const fetchCollectionsFailure=errorMessage=>({
  type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:errorMessage
})

export const fetchCollectionsStartAsync=()=>{
  console.log("fetching")
  return dispatch=>{
    const collectionRef=firestore.collection('collections');
    dispatch(fetchCollectionsStart())
    collectionRef.get().then(snapShot=>{
      console.log(snapShot)
         const collectionsMap=convertCollectionsSnapShotToMap(snapShot);
         console.log(snapShot)
        //  updateCollections(collectionsMap);
         dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(error=>dispatch(fetchCollectionsFailure(error.message)))
  }
}
