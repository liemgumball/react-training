import { act, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  it('should render a primary focused button with text "OK"', () => {
    let counter = 0;

    render(
      <Button variant="primary" autoFocus onClick={() => counter++}>
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

    expect(counter).toEqual(1);
  });

  it('should render a disabled button', () => {
    let counter = 0;

    render(
      <Button disabled onClick={() => counter++}>
        OK
      </Button>
    );

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDisabled();

    act(() => {
      buttonElement.click();
    });

    expect(counter).toEqual(0);
  });
});
