module.exports = (axios, app, protectedRoutes, qs, { services, baseUrl }) => {
  function request (targetUrl, req, res) {
    try {
      const { method, body } = req
      console.log(targetUrl)
      axios({
        method,
        url: targetUrl,
        data: body,
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        }
      })
        .then(({ data }) => {
          res.json(data)
        })
        .catch(({ response }) => {
          res.json(response.data)
        })
    } catch (e) {
      console.log(e)
    }
  }

  protectedRoutes.all('/public/:service/:params?', (req, res) => {
    try {
      const exceptionMethods = ['GET', 'POST']
      const { service, params } = req.params
      const pathParam = params || ''
      const queryParam = qs.stringify(req.query) || ''
      let { target } = services[service] || { target: '' }

      if (services[service]) {
        if (exceptionMethods.includes(req.method)) {
          target = `${baseUrl}${services[service].target + '/'}${pathParam}${queryParam ? '?' + queryParam : ''}`
        } else {
          target = `${baseUrl}${services[service].target}`
        }
        if (services[service].posttarget) {
          target = target + '/' + services[service].posttarget
        }
        request(target, req, res)
      }
    } catch (e) {
      console.log(e)
    }
  })
}
