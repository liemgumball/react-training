import { Mock } from 'vitest';
import api from '.';

beforeEach(() => {
  (global.fetch as Mock) = vi.fn(); // redirect fetch() to the Mock
});

afterEach(() => {
  vi.resetAllMocks();
});

describe('API Functions', () => {
  const mockResponse = (data: unknown, status = 200) =>
    Promise.resolve({
      json: () => Promise.resolve(data),
      ok: status >= 200 && status < 300,
      status,
    });

  it('handles successful GET request', async () => {
    const responseData = { data: 'example' };
    (fetch as Mock).mockImplementationOnce(() => mockResponse(responseData));

    const result = await api.get('/example');

    expect(result).toEqual(responseData);
    expect(fetch).toHaveBeenCalledWith('/example', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('handles successful POST request', async () => {
    const requestData = { body: 'example' };
    const responseData = { data: 'example' };
    (fetch as Mock).mockImplementationOnce(() => mockResponse(responseData));

    const result = await api.post('/example', requestData);

    expect(result).toEqual(responseData);
    expect(fetch).toHaveBeenCalledWith('/example', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
  });

  it('handles successful DELETE request', async () => {
    const responseData = { data: 'example' };
    (fetch as Mock).mockImplementationOnce(() => mockResponse(responseData));

    const result = await api.remove('/example');

    expect(result).toEqual(responseData);
    expect(fetch).toHaveBeenCalledWith('/example', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('handles successful PATCH request', async () => {
    const requestData = { body: 'example' };
    const responseData = { data: 'example' };
    (fetch as Mock).mockImplementationOnce(() => mockResponse(responseData));

    const result = await api.patch('/example', requestData);

    expect(result).toEqual(responseData);
    expect(fetch).toHaveBeenCalledWith('/example', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
  });

  it('handles successful PUT request', async () => {
    const requestData = { body: 'example' };
    const responseData = { data: 'example' };
    (fetch as Mock).mockImplementationOnce(() => mockResponse(responseData));

    const result = await api.put('/example', requestData);

    expect(result).toEqual(responseData);
    expect(fetch).toHaveBeenCalledWith('/example', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
  });

  it('handles unsuccessful request', async () => {
    const errorMessage = 'Error message';
    (fetch as Mock).mockImplementationOnce(() => Promise.reject(errorMessage));

    await expect(api.get('/example')).rejects.toThrowError(errorMessage);
  });
});
