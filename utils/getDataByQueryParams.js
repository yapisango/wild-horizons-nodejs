export const getDataByQueryParams = (data, queryObj) => {
  const { continent, country, is_open_to_public } = queryObj

  let result = data

  if (continent) {
    result = result.filter(destination =>
      destination.continent.toLowerCase() === continent.toLowerCase()
    )
  }

  if (country) {
    result = result.filter(destination =>
      destination.country.toLowerCase() === country.toLowerCase()
    )
  }

  if (is_open_to_public !== undefined) {
    const publicBool = JSON.parse(is_open_to_public.toLowerCase()) 
    result = result.filter(destination =>
      destination.is_open_to_public === publicBool
    )
  }

  return result
}
