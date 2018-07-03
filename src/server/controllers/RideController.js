import db from '../dbconnection/db';

export default class RideController {
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

  static async getARide(request, response) {
    const { rideId } = request.params;
    const query = `SELECT * FROM requests WHERE id = '${request.params.id}'`;
    try {
      const result = await pool.query(query);
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
  // static createRide(request, response){}
  // static getRideRequests(request, response) {}
  // static requestRide(request, response) {}
  // static  acceptRide(request, response) {}
  // updateRideOffer(request, response) {}
  // updateRideRequest(request, response) {}
  // deleteRequestOffer(request, response) {}
  // deleteRideRequest(request, response) {}
}
