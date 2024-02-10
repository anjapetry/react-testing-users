import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserList from '../UserList';

test('render one row per user', () => {
    // Arrange: render the component
    // Act: find all the rows in the table
    // Assert: ensure correct number of rows

  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'John', email: 'johnfawcett@molfarella.io'},
    ];
    render(<UserList users={users} />);
});

test('it shows the name and email of each user', () => {
});
