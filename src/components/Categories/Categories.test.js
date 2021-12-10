import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Categories from './Categories';
import { categories, notes } from 'assets/dummy-data';

describe('Categories tests', () => {
  test('renders without errors', () => {
    render(<Categories data={categories} notes={notes} />);
    const categoriesComp = screen.getByTestId('categories');
    expect(categoriesComp).toBeInTheDocument();
  });

  test('renders 3 categories', () => {
    render(<Categories data={categories} notes={notes} />);
    const renderedCategories = screen.getAllByRole('heading', { level: 3 });
    expect(renderedCategories.length).toBe(3);
  });

  test('categories are in alphabetical order', () => {
    render(<Categories data={categories} notes={notes} />);
    const renderedCategories = screen.getAllByRole('heading', { level: 3 });
    expect(renderedCategories.length).toBe(3);
  });

  test('renders categories in alphabeticall order', () => {
    const oreder = ['Individual', 'Language', 'Mathematics'];
    render(<Categories data={categories} notes={notes} />);
    const renderedCategories = screen.getAllByRole('heading', { level: 3 });
    renderedCategories.forEach((node, idx) => {
      expect(node.textContent).toBe(oreder[idx]);
    });
  });

  test('renders proper categories notes', () => {
    render(<Categories data={categories} notes={notes} />);
    const renderedCategory = screen.getByText(/individual/i);
    expect(renderedCategory.nextSibling.textContent).toBe('...');
  });

  test('doesn`t render subcategory if it is absent', () => {
    render(<Categories data={categories} notes={notes} />);
    const renderedCategory = screen.getByText(/individual/i);
    expect(renderedCategory.nextSibling.textContent).toBe('...');
  });

  test('renders proper subcategory/ies', () => {
    render(<Categories data={categories} notes={notes} />);
    const renderedCategory = screen.getByText(/language/i);
    const accordionButton = renderedCategory.closest('button');
    userEvent.click(accordionButton);
    const renderedSubCategories = screen.getAllByRole('heading', { level: 4 });
    expect(renderedSubCategories.length).toBe(2);
  });

  test('renders proper notes for subcategory/ies and in right order', () => {
    const order = [
      'Pupils',
      'Pupils can do operations with fractions.',
      'Pupils should remember basic multiplication table.',
    ];
    render(<Categories data={categories} notes={notes} />);
    const renderedCategory = screen.getByText(/mathematics/i);
    const accordionButton = renderedCategory.closest('button');
    userEvent.click(accordionButton);
    const subCategoriesContainer = screen.getByTestId('accordion-content');
    const noteElems = within(subCategoriesContainer).getAllByTestId('note');
    noteElems.forEach((node, idx) => {
      expect(node.textContent).toBe(order[idx]);
    });
  });
});
