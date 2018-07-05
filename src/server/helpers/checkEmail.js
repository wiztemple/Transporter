const checkEmail = (request, response, next) => {
  const { email } = request.body;
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    return response.status(400).json({
      status: 'fail',
      message: 'invalid request email',
    });
  }
  return next();
};

export default checkEmail;
