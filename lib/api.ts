function updateOptions(options) {
  const update = { ...options }
  if (process.env.ACCESS_TOKEN) {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  }
  return update
}

function api(uri, options) {
  return fetch(`http://api.cup2022.ir/api/v1${uri}`, updateOptions(options))
}

export { api }
