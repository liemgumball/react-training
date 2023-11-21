import { act, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  it('should render a primary focused button with text "OK"', () => {
    const mockOnClick = vi.fn();

    render(
      <Button variant="primary" autoFocus onClick={mockOnClick}>
        OK
      </Button>
    );

    const buttonElement = screen.getByRole('button');

    //testing props
    expect(buttonElement).toHaveTextContent('OK');
    expect(buttonElement).toHaveFocus();
    expect(buttonElement).not.toBeDisabled();

    //testing onClick
    act(() => {
      buttonElement.click();
    });

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render a disabled button', () => {
    const mockOnClick = vi.fn();

    render(
      <Button disabled onClick={mockOnClick}>
        OK
      </Button>
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDisabled();

    act(() => {
      buttonElement.click();
    });

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
