import { Router } from 'express';
import Validate from '../helpers/checkInput';
import RideController from '../controllers/RideConroller';

const rideRoute = Router();

// get all rides
rideRoute.get('/', RideController.getRides);

// get a ride
rideRoute.get('/:rideId', RideController.getOneRide);

// create a ride
rideRoute.post('/', Validate.checkInput, RideController.createRide);

// remove a ride
rideRoute.delete('/:rideId', RideController.removeRide);

// update/edit a ride
rideRoute.put('/:rideId', RideController.updateRide);

export default rideRoute;
