export const actionTypes = {
  LOOKING_DRIVER: 'Looking for a driver',
  DRIVER_ACCEPTED: 'A driver has been found. Waiting for the answer',
  DRIVER_FOUND: "ASDASDA",
  DRIVER_REFUSED: 'The driver refused.',
  DRIVER_CANCELLED: "DSADADAS",
  DRIVER_ARRIVED: 'The driver has arrived',
  IN_PROGRESS: 'The ride has begun',
  END_RIDE: 'The ride has ended',
};

const paymentsTypes =  ['cash', 'card']

export const lookingDriver = ({ price, payment, destination, location }: { price: number, payment: number, destination: string, location: string } ) => ({
  type: 'LOOKING_DRIVER',
  description: actionTypes.LOOKING_DRIVER,
  payload: { 
    price,
    payment: paymentsTypes[payment],
    time: new Date().toLocaleString(),
    destination,
    location,
    rideId: Math.floor(Math.random() * 1000000)
  }
});

export const driverFound = () => ({
  type: 'DRIVER_FOUND',
  description: actionTypes.DRIVER_FOUND,
  payload: {}
});

export const driverAccepted = () => ({
  type: 'DRIVER_ACCEPTED',
  description: actionTypes.DRIVER_ACCEPTED,
  payload: {}
});

export const driverRefused = () => ({
  type: 'DRIVER_REFUSED',
  description: actionTypes.DRIVER_REFUSED,
  payload: {}
});

export const driverCancelled = () => ({
  type: 'DRIVER_CANCELLED',
  description: actionTypes.DRIVER_CANCELLED,
  payload: {}
});

export const driverArrived = () => ({
  type: 'DRIVER_ARRIVED',
  description: actionTypes.DRIVER_ARRIVED,
  payload: {}
});

export const inProgress = () => ({
  type: 'IN_PROGRESS',
  description: actionTypes.IN_PROGRESS,
  payload: {}
});

export const endRide = () => ({
  type: 'END_RIDE',
  description: actionTypes.END_RIDE,
  payload: {}
});
