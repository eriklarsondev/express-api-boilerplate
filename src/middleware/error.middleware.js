export function handleError(err, req, res, next) {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Something went wrong, try again later'

  res.status(statusCode)
  res.send(message)
}
