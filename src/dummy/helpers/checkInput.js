import { isNullOrUndefined } from 'util';


class Validate {
  static checkInput(request, response, next) {
    const {
      name, to, from, seats, price, driver, takeOff,
    } = request.body;
    if (name.trim() === '' || name.trim() === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'No input was received for name',
      });
    }

    if (to.trim() === '' || to.trim() === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'No input was received for to',
      });
    }
    if (from.trim() === '' || from === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'No input was received for from',
      });
    }
    if (driver.trim() === '' || driver === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'No input was received for driver',
      });
    }
    if (isNullOrUndefined(seats)) {
      return response.status(400).json({
        status: 'fail',
        message: 'No input was received for seats',
      });
    }
    if (!Number(seats)) {
      return response.status(400).json({
        status: 'fail',
        message: 'invalid value, only numbers is accepted',
      });
    }
    if (isNullOrUndefined(price)) {
      return response.status(400).json({
        status: 'fail',
        message: 'No input was received for price',
      });
    }
    if (!Number(price)) {
      return response.status(400).json({
        status: 'fail',
        message: 'invalid value, only numbers is accepted',
      });
    }
    if (!takeOff || takeOff === undefined) {
      return response.status(400).json({
        status: 'fail',
        message: 'takeOff time is required',
      });
    }
    return next();
  }
}

export default Validate;
