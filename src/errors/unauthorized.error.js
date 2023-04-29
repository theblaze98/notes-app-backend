class UnauthorizedError extends Error {
  statusCode = 401;
}

export default UnauthorizedError;
