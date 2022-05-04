export const get = async (url: string) => {
  return await fetch(url).then((r) => r.json())
}

export const getWithAuth = async (url: string, token: string | undefined) => {
  return await fetch(url, {
    headers: new Headers({
      Authorization: 'Bearer ' + token,
    }),
  }).then((r) => r.json())
}
