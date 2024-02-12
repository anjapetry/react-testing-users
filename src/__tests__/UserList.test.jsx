import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../UserList';

test('render one row per user', () => {
    // Arrange: render the component
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'John', email: 'johnfawcett@molfarella.io'},
    ];
    const { container } = render(<UserList users={users} />);

// Act: find all the rows in the table
// screen.logTestingPlaygroundURL(); to create query functions
// const rows = screen.getAllByRole('row');
// workaround to use within to get rows from tbody
   const rows = within(screen.getByTestId('users')).getAllByRole('row');
//const table = within(container).getByRole('table');
// const table = container.querySelector('table');
// console.log(table);
// eslint-disable-next-line
// const rows = container.querySelectorAll('tbody tr'); fallback #2


// Assert: ensure correct number of rows in the table
expect(rows).toHaveLength(2);
});

test('it shows the name and email of each user', () => {
});
