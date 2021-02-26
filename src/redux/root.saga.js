import { all , call } from 'redux-saga/effects'
import { shopSaga } from './shop/shop.sagas'
import { userSaga } from '../redux/user/user.sagas';
import { cartSaga } from './cart/cart.sagas';
export function* rootSaga(){
    yield all([
        call(shopSaga),
        call(userSaga),
        call(cartSaga)
    ])
}