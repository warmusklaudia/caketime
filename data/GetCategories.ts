export default async () => {
  try {
    const response = await fetch('http://localhost:3000/categories')
    const json = await response.json()
    return json.movies
  } catch (error) {
    console.error(error)
  }
}
