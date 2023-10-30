import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  it('should render a primary focused button with text "OK"', () => {
    render(
      <Button primary autoFocus>
        OK
      </Button>
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('OK');
    expect(buttonElement).toHaveFocus();
    expect(buttonElement).not.toBeDisabled();
  });

  it('should render a disabled button', () => {
    render(<Button disabled>OK</Button>);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDisabled();
  });
});
