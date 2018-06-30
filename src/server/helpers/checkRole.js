const checkRole = (request, response, next) => {
  const { role } = request.decoded;
  if (!role && role !== 'admin') {
    return response.json({
      status: 'fail',
      message: 'unauthorized access to this resource',
    });
  }
  return next();
};

export default checkRole;
