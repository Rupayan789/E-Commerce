import { takeLatest ,put ,call, all} from 'redux-saga/effects';
import { firestore,convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils'
import {
    fetchCollectionsSuccess,fetchCollectionsFailure
} from './shop.actions'
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync(){
    yield console.log("I am fired");
    try{
        const collectionRef=firestore.collection('collections');
        const snapShot=yield collectionRef.get();
        const collectionsMap=yield call(convertCollectionsSnapShotToMap,snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
   
    // collectionRef.get().then(snapShot=>{
    //   console.log(snapShot)
    //      const collectionsMap=convertCollectionsSnapShotToMap(snapShot);
    //      console.log(snapShot)
    //     //  updateCollections(collectionsMap);
    //      dispatch(fetchCollectionsSuccess(collectionsMap))
    // }).catch(error=>dispatch(fetchCollectionsFailure(error.message)))
  }


export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}

export function* shopSaga(){
    yield all([call(fetchCollectionsStart)])
}