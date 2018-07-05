/**
 * @description validate post ride
 * @param {object} request - The object that return a request
 * @param {object} response - The object that returns a response
 * @param {object} next- The object that tell the next action to run
 * @returns {object}
 */
export default class Validation {
  static createRideValidation(request, response, next) {
    const { location, destination, seats } = request.body;
    if (
      !location || location === undefined || location.toString().trim() === '' || typeof location !== 'string'
    ) {
      return response.status(400).send({
        valid: false,
        message: 'Ride location is required',
      });
    }
    if (
      !destination || destination === undefined || destination.toString().trim() === '' || typeof destination !== 'string'
    ) {
      return response.status(400).send({
        valid: false,
        message: 'Ride destination is required',
      });
    }
    if (!seats || seats === undefined || /\s/g.test(seats) === true) {
      return response.status(400).send({
        valid: false,
        message: 'Number of seats is required',
      });
    }
    return next();
  }

  static userCreation(request, response, next) {
    const {
      firstname, lastname, email, password,
    } = request.body;
    if (!firstname || firstname === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'firstname is required',
      });
    }
    if (!lastname || lastname === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'lastname is required',
      });
    }
    if (!email || email === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'email is required',
      });
    }
    if (!password || password === undefined || password.length < 6) {
      return response.status(400).json({
        status: 'fail',
        message: 'password is required',
      });
    }
    return next();
  }

  static checkEmail(request, response, next) {
    const { email } = request.body;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      return response.status(400).json({
        status: 'fail',
        message: 'invalid request email',
      });
    }
    return next();
  }
}
