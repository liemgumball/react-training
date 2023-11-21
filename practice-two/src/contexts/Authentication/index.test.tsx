import { render, act, waitFor } from '@testing-library/react';
import AuthProvider, { AuthContext } from '.';

describe('AuthContext', () => {
  it('provides default values', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            expect(value.auth).toBeNull();
            expect(value.setAuth).toBeInstanceOf(Function);
            return null;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );
  });

  it('sets auth state correctly', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            // Initial state
            expect(value.auth).toBeNull();
            expect(value.setAuth).toBeInstanceOf(Function);

            // Update state
            act(() => {
              value.setAuth({
                accessToken: 'test-token',
                user: {
                  email: 'test@example.com',
                  name: 'Test User',
                  id: 1,
                },
              });
            });

            waitFor(() => {
              // Updated state
              expect(value.auth).not.toBeNull();
              expect(value.auth?.accessToken).toBe('test-token');
              expect(value.auth?.user.name).toBe('Test User');
            });

            return null;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    it('updates auth state when setAuth is called', () => {
      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              const updatedAuth = {
                accessToken: 'new-test-token',
                user: {
                  email: 'new-test@example.com',
                  name: 'New Test User',
                  id: 2,
                },
              };

              act(() => {
                value.setAuth(updatedAuth);
              });

              expect(value.auth).toEqual(updatedAuth);

              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );
    });
  });
});
