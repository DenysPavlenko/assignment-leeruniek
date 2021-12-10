import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Categories from './Categories';

const dummyCategories = [
  {
    id: 1,
    isArchived: false,
    name: 'Mathematics',
    parentNoteCategoryId: null,
    groupPlanId: 1,
  },
  {
    id: 2,
    isArchived: false,
    name: 'Multiplication',
    parentNoteCategoryId: 1,
    groupPlanId: 1,
  },
  {
    id: 3,
    isArchived: false,
    name: 'Language',
    parentNoteCategoryId: null,
    groupPlanId: 1,
  },
  {
    id: 4,
    isArchived: true,
    name: 'Reading',
    parentNoteCategoryId: null,
    groupPlanId: 1,
  },
];

const dummyNotes = [
  {
    id: 101,
    categoryId: 2,
    content: 'Math note 2',
    dateCreated: '2021-10-11',
    groupPlanId: 1,
  },
  {
    id: 102,
    categoryId: 2,
    content: 'Math note 1',
    dateCreated: '2021-10-10',
    groupPlanId: 1,
  },
  {
    id: 103,
    categoryId: 3,
    content: 'Lang note',
    dateCreated: '2021-10-10',
    groupPlanId: 1,
  },
];

describe('Categories tests', () => {
  test('renders without errors', () => {
    render(<Categories data={dummyCategories} notes={dummyNotes} />);
    const categoriesComp = screen.getByTestId('categories');
    expect(categoriesComp).toBeInTheDocument();
  });

  test('renders right number of categories, without subcategories and archived ones', () => {
    render(<Categories data={dummyCategories} notes={dummyNotes} />);
    const categories = screen.getAllByRole('heading', { level: 3 });
    expect(categories.length).toBe(2);
  });

  test('renders categories in alphabeticall order', () => {
    const oreder = ['Language', 'Mathematics'];
    render(<Categories data={dummyCategories} notes={dummyNotes} />);
    const categories = screen.getAllByRole('heading', { level: 3 });
    categories.forEach((node, idx) => {
      expect(node.textContent).toBe(oreder[idx]);
    });
  });

  test('renders proper categories notes', () => {
    render(<Categories data={dummyCategories} notes={dummyNotes} />);
    const category = screen.getByText(/language/i);
    const parent = category.parentElement;
    const note = within(parent).getByText(/lang note/i);
    expect(note).toBeInTheDocument();
  });

  test('renders proper subcategory/ies', () => {
    render(<Categories data={dummyCategories} notes={dummyNotes} />);
    const category = screen.getByText(/mathematics/i);
    const accordionButton = category.closest('button');
    userEvent.click(accordionButton);
    const subCategoriesContainer = screen.getByTestId('accordion-content');
    const note = within(subCategoriesContainer).getByText(/multiplication/i);
    expect(note).toBeInTheDocument();
  });

  test('renders proper notes for subcategory/ies and in right order', () => {
    const order = ['Math note 1', 'Math note 2'];
    render(<Categories data={dummyCategories} notes={dummyNotes} />);
    const category = screen.getByText(/mathematics/i);
    const accordionButton = category.closest('button');
    userEvent.click(accordionButton);
    const subCategoriesContainer = screen.getByTestId('accordion-content');
    const notes = within(subCategoriesContainer).getAllByText(/math note/i);
    notes.forEach((node, idx) => {
      expect(node.textContent).toBe(order[idx]);
    });
  });
});
