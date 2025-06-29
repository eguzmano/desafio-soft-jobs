export const logger = (req, _, next) => {
  const { method, originalUrl, query, body } = req

  // Ocultar password si existe
  const safeBody = { ...body }
  if ('password' in safeBody) {
    safeBody.password = '****'
  }

  console.log({
    method,
    path: originalUrl,
    query,
    body: safeBody
  })

  next()
}
