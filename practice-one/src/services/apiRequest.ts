export enum ApiMethod {
  Get = 'GET',
  Post = 'POST',
  Delete = 'DELETE',
  Patch = 'PATCH',
  Put = 'PUT',
}

export const apiRequest = async <T>(
  path: string,
  method: ApiMethod,
  body?: T
): Promise<unknown> => {
  try {
    const response = await fetch(path, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      throw new Error(`${response.status}`)
    }

    return await response.json()
  } catch (err) {
    console.error('An error occurred in request:', err)
    throw err
  }
}
