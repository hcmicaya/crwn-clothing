import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shops.types';

export function* fetchCollectionsAsync() {
	//all function* needs a yield
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); //v202
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
	yield all([ call(fetchCollectionsStart) ]);
}
