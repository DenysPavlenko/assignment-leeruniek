export const plan = {
  id: 1,
  name: 'Group plan M/E',
  userCreated: 'John Doe',
};

export const categories = [
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
    name: 'Division',
    parentNoteCategoryId: 1,
    groupPlanId: 1,
  },
  {
    id: 4,
    isArchived: false,
    name: 'Language',
    parentNoteCategoryId: null,
    groupPlanId: 1,
  },
  {
    id: 5,
    isArchived: false,
    name: 'Reading',
    parentNoteCategoryId: 4,
    groupPlanId: 1,
  },
  {
    id: 5.1,
    isArchived: false,
    name: 'Spelling',
    parentNoteCategoryId: 4,
    groupPlanId: 1,
  },
  {
    id: 6,
    isArchived: false,
    name: 'Individual',
    parentNoteCategoryId: null,
    groupPlanId: 1,
  },
  {
    id: 7,
    isArchived: true,
    name: 'Social',
    parentNoteCategoryId: null,
    groupPlanId: 1,
  },
];

export const notes = [
  {
    id: 101,
    categoryId: 3,
    content: 'Pupils',
    dateCreated: '2021-10-11',
    groupPlanId: 1,
  },
  {
    id: 102,
    categoryId: 3,
    content: 'Pupils can do operations with fractions.',
    dateCreated: '2021-10-10',
    groupPlanId: 1,
  },
  {
    id: 103,
    categoryId: 2,
    content: 'Pupils should remember basic multiplication table.',
    dateCreated: '2021-10-11',
    groupPlanId: 1,
  },
  {
    id: 104,
    categoryId: 5,
    content: 'Pupils should be able read N words in minute',
    dateCreated: '2021-10-11',
    groupPlanId: 1,
  },
  {
    id: 104.1,
    categoryId: 5.1,
    content: 'Pupils should be able spell N words',
    dateCreated: '2021-10-11',
    groupPlanId: 1,
  },
  {
    id: 105,
    categoryId: 6,
    content: 'Goal for current year: no typos in simple words',
    dateCreated: '2021-10-05',
    groupPlanId: 1,
  },
  {
    id: 106,
    categoryId: 6,
    content: 'In middle of year new handbook should be used.',
    dateCreated: '2021-09-11',
    groupPlanId: 1,
  },
  {
    id: 107,
    categoryId: 6,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateCreated: '2021-10-11',
    groupPlanId: 2,
  },
  {
    id: 107,
    categoryId: 7,
    content: '...',
    dateCreated: '2021-10-11',
    groupPlanId: 1,
  },
];
