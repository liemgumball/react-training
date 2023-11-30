type ApiMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';

const request = async <T, TData>(
  path: string,
  method: ApiMethod,
  body?: T
): Promise<TData> => {
  try {
    const response = await fetch(path, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return (await response.json()) as TData;
  } catch (err) {
    console.error('An error occurred in request:', err);
    throw err as Error;
  }
};

const get = async (path: string) => {
  return await request(path, 'GET');
};

const post = async <T>(path: string, body: T) => {
  return await request(path, 'POST', body);
};

const remove = async (path: string) => {
  return await request(path, 'DELETE');
};

const patch = async <T>(path: string, body: T) => {
  return await request(path, 'PATCH', body);
};

const put = async <T>(path: string, body: T) => {
  return await request(path, 'PUT', body);
};

const api = {
  get,
  post,
  patch,
  remove,
  put,
};

export default api;
