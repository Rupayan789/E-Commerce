import { takeLatest , put ,all,call} from 'redux-saga/effects'

import UserActionType from '../user/useractiontypes'
import { clearCart } from './cart.actions'

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionType.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}



export function* cartSaga(){
    yield all([call(onSignOutSuccess)])
}