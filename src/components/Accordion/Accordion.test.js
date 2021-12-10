import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from './Accordion';

describe('Accordion tests', () => {
  test('renders without errors', () => {
    render(<Accordion heading={<p>heading</p>} />);
    const accordionComponent = screen.getByTestId('accordion');
    expect(accordionComponent).toBeInTheDocument();
  });

  test('shows and hides content on accordion click', () => {
    render(
      <Accordion heading={<p>heading</p>}>
        <p data-testid="test-content">content</p>
      </Accordion>
    );
    const accordionButton = screen.getByRole('button');
    userEvent.click(accordionButton);
    const testContent = screen.getByTestId('test-content');
    expect(testContent).toBeInTheDocument();
    userEvent.click(accordionButton);
    expect(testContent).not.toBeInTheDocument();
  });
});
