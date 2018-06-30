const checker = (request, response, next) => {
  const { requestId } = request.params;
  const regex = /^\d*[1-9]\d*$/;
  if (!regex.test(requestId)) {
    return response.status(400).json({
      status: 'fail',
      message: 'invalid request id',
    });
  }
  return next();
};

export default checker;
