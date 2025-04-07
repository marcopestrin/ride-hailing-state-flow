import { combineReducers } from 'redux';

export interface RideState {
  status: string
  price: number | undefined
  payment: string | undefined
  time: string | undefined
  destination: string | undefined
  rideId: number | undefined
  location: string | undefined
  description: string | ""
}

interface Action {
  type: string
  description: string
  payload: {
    [key: string]: any
  }
}

export interface AppState {
  app: RideState
}

const initialState: RideState = {
  status: 'ready',
  price: undefined,
  payment: undefined,
  time: undefined,
  destination: undefined,
  rideId: undefined,
  description: "",
  location: undefined,
};

const appReducer = (state = initialState, action: Action): RideState => {

  const { description } = action;

  switch (action.type) {
    
    case 'LOOKING_DRIVER':
      return { 
        ...state,
        status: action.type,
        price: action.payload.price,
        payment: action.payload.payment,
        time: action.payload.time,
        destination: action.payload.destination,
        rideId: action.payload.rideId,
        location: action.payload.location,
        description
      };

    case 'DRIVER_FOUND':
      return { 
        ...state,
        status: action.type,
        description
      };

    case 'DRIVER_ACCEPTED':
      return { 
        ...state,
        status: action.type,
        description
      };

    case 'DRIVER_REFUSED':
      return {
        ...state,
        status: action.type,
        description
      };

    case 'DRIVER_ARRIVED':
      return {
        ...state,
        status: action.type,
        description
      };

    case 'DRIVER_CANCELLED':
      return {
        ...state,
        status: action.type,
        description
      };

    case 'IN_PROGRESS':
      return {
        ...state,
        status: action.type,
        description
      };

    case 'END_RIDE':
      return {
        ...state,
        status: action.type,
        description
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  app: appReducer,
});
