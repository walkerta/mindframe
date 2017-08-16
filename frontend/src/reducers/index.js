import {combineReducers} from 'redux';
import {ENTRY_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/index';
import entryList from '../data/entry';
import update from 'immutability-helper';

const initialState = {
    entry: entryList(),
    selectedEntry: null,
    selectedAccount: null
}

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case ENTRY_SELECTED:
            return update(state, {
                selectedEntry: {
                    $set: state.entry.find(entry => entry._id === action.payload)
                }
            });
        /*

          You will need to correct a reducer case for ACCOUNT_SELECTED here - HINT: it should mimic closely the USER_SELECTED case.

        */

        case ACCOUNT_SELECTED:
            return update(state, {
                selectedEntry: {
                    $set: action.payload
                }
            });
