import React from 'react';
import { render, screen } from '@testing-library/react';
import TransferFormSkeleton from './TransferFormSkeleton';

describe('TransferFormSkeleton', () => {
  it('renders all skeleton elements correctly', () => {
    render(<TransferFormSkeleton />);

    // Check headingsc
    const titles = screen.getAllByRole('heading');
    expect(titles).toHaveLength(3);
    titles.forEach((title) => {
      expect(title).toHaveClass('skeleton-text');
    });

    // Check select boxes
    const selects = screen.getAllByRole('combobox');
    expect(selects).toHaveLength(2);
    selects.forEach((select) => {
      expect(select).toBeDisabled();
      expect(select).toHaveClass('skeleton-select');
    });

    // Check input field
    const input = screen.getByPlaceholderText('Ex : 100.00');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('skeleton-input');

    // Check loading button
    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('skeleton-button');

    // Check error spans
    const errors = screen.getAllByText((content, element) =>
      element.tagName.toLowerCase() === 'span' &&
      element.classList.contains('skeleton-error')
    );
    expect(errors).toHaveLength(3);
  });
});
