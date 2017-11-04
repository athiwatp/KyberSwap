import {REHYDRATE} from 'redux-persist/constants'
import Rate from "../services/rate"
import BigNumber from "bignumber.js"

const initState = {
  currentBlock: 0,
  connected: true,
  termOfServiceAccepted: false,
  nodeName: "Infura Kovan",
  nodeURL: "https://kovan.infura.io/0BRKxQ0SFvAxGL72cbXi",
  // rates: {},
}

const global = (state=initState, action) => {
  switch (action.type) {
    // case REHYDRATE: {
    //   if (action.payload.global) {
    //     var loadedRates = action.payload.global.rates
    //     var rates = {}
    //     Object.keys(loadedRates).forEach((id) => {
    //       var rateMap = loadedRates[id]
    //       var rate = new Rate(
    //         rateMap.name,
    //         rateMap.symbol,
    //         rateMap.icon,
    //         rateMap.address,
    //         new BigNumber(rateMap.rate),
    //         new BigNumber(rateMap.balance)
    //       )
    //       rates[id] = rate
    //     })
    //     var newState = {...state, ...action.payload.global, rates: rates}
    //     return newState
    //   }
    //   return state
    // }
    case "GLOBAL.NEW_BLOCK_INCLUDED_FULFILLED": {
      return {...state, currentBlock: action.payload}
    }
    case "GLOBAL.GET_NEW_BLOCK_FAILED": {
      return {...state, connected: false}
    }
    // case GLOBAL.RATE_UPDATED_FULFILLED: {
    //   var newRates = {...state.rates}
    //   var rate = action.payload
    //   newRates[rate.symbol] = rate
    //   return {...state, rates: newRates }
    // }
    case "GLOBAL.TERM_OF_SERVICE_ACCEPTED": {
      return {...state, termOfServiceAccepted: true}
    }
    case "GLOBAL.IDLE_MODE": {
      return {...state, idleMode: true}
    }
    case "GLOBAL.EXIT_IDLE_MODE": {
      return {...state, idleMode: false}
    }
    // case 'GLOBAL.ALL_RATE_UPDATED_FULFILLED': {
    //   if(!state.allStateUpdatedFirstTime){
    //     return {...state, allStateUpdatedFirstTime: 1}
    //   } 
    //   return {...state};
    // }
  }
  return state
}

export default global
