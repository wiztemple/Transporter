import db from '../dbconnection/db';

export default class RideController {
  /**
 * @description get all rides
 * @param {object} request - The object that return a request
 * @param {object} response - The object that returns a response
 * @returns {object}
 */
  static async getRides(request, response) {
    const query = 'SELECT * FROM rides ORDER BY id ASC';
    try {
      const rides = await db.query(query);
      if (rides.rows > 0) {
        return response.status(200).json({
          status: 'success',
          message: 'All rides',
          all: rides.rows,
        });
      }
      return response.status(404).json({
        status: 'fail',
        message: 'no ride found',
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  /**
 * @description get a specific ride
 * @param {object} request - The object that return a request
 * @param {object} response - The object that returns a response
 * @returns {object}
 */
  static async getARide(request, response) {
    const rideId = parseInt(request.params.rideId, 10);
    const query = `SELECT * FROM rides WHERE id = '${rideId}'`;
    try {
      const result = await db.query(query);
      if (result.rowCount === 0) {
        return response.status(404).json({
          status: 'fail',
          message: 'ride not found',
        });
      }
      return response.status(200).json({
        status: 'success',
        message: 'ride was successfully returned',
        ride: result.rows[0].ride,
      });
    } catch (error) {
      return response.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  /**
 * @description create ride
 * @param {object} request - The object that return a request
 * @param {object} response - The object that returns a response
 * @returns {object}
 */
  static async createRide(request, response) {
    const {
      location, destination, seats, departure, userId,
    } = request.body;
    const query = `INSERT INTO rides (location, destination, seats, departure, userId) VALUES('${location}', '${destination}', '${seats}', '${departure}', ${userId}')`;
    try {
      const result = await db.query(query);
      return response.status(201).json({
        status: 'success',
        message: 'ride was successfully created',
        ride: {
          id: result.rows[0].id,
          userId: result.rows[0].userId,
          location: result.rows[0].location,
          destination: result.rows[0].destination,
          seats: result.rows[0].seats,
          departure: result.rows[0].departure,
        },
      });
    } catch (error) {
      return response.status(500).json({
        status: 'fail',
        message: error.message,
      });
    }
  }
  // static getRideRequests(request, response) {}
  // static requestRide(request, response) {}
  // static  acceptRide(request, response) {}
  // updateRideOffer(request, response) {}
  // updateRideRequest(request, response) {}
  // deleteRequestOffer(request, response) {}
  // deleteRideRequest(request, response) {}
}
