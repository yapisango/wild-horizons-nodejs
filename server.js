import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  const urlObj = new URL(req.url, `http://${req.headers.host}`)
  const pathname = urlObj.pathname
  const queryObj = Object.fromEntries(urlObj.searchParams)

  console.log(`Request received: ${req.method} ${pathname}`)

  console.log('req.url:', req.url)
  console.log('pathname:', pathname)
  console.log('queryObj:', queryObj)

  if (pathname === '/api' && req.method === 'GET') {
    const filteredData = Object.keys(queryObj).length === 0
      ? destinations
      : getDataByQueryParams(destinations, queryObj)

    sendJSONResponse(res, 200, filteredData)

  } else if (pathname.startsWith('/api/continent/') && req.method === 'GET') {
    const segments = pathname.split('/')
    const continent = segments[3]

    if (!continent) {
      sendJSONResponse(res, 400, {
        error: "Bad Request",
        message: "Continent name missing in path."
      })
      return
    }

    const filteredData = getDataByPathParams(destinations, 'continent', continent)
    sendJSONResponse(res, 200, filteredData)

  } else if (pathname.startsWith('/api/country/') && req.method === 'GET') {
    const segments = pathname.split('/')
    const country = segments[3]

    if (!country) {
      sendJSONResponse(res, 400, {
        error: "Bad Request",
        message: "Country name missing in path."
      })
      return
    }

    const filteredData = getDataByPathParams(destinations, 'country', country)
    sendJSONResponse(res, 200, filteredData)

  } else {
    sendJSONResponse(res, 404, {
      error: "not found",
      message: "The requested route does not exist"
    })
  }
})

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))


