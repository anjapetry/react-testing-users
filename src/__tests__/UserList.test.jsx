import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../UserList';

test('render one row per user', () => {
    // Arrange: render the component
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'John', email: 'johnfawcett@molfarella.io'},
    ];
    render(<UserList users={users} />);

// Act: find all the rows in the table
// screen.logTestingPlaygroundURL(); to create query functions
const rows = screen.getAllByRole('row');

// Assert: ensure correct number of rows in the table
expect(rows).toHaveLength(3);
});

test('it shows the name and email of each user', () => {
});
