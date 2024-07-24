import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Button from '../Button'

const queryClient = new QueryClient()

describe('Button Component', () => {

    const triggerButton = vi.fn()

	render(<QueryClientProvider client={queryClient}>
		<Button children={'View Images'} onClick={triggerButton} loading={false}/>
	</QueryClientProvider>)

	test('Button is rendered and default type is button', () => {
		const button = screen.getByText('View Images')
		expect(button.getAttribute('type')).toBe('button');
		expect(button).toBeDefined()
	})

	test('Button can be clicked and is not disabled', () => {
        const button = screen.getByText('View Images')
        expect(button.getAttribute('disabled')).toBe(null)
        fireEvent.click(button);
        expect(triggerButton).toHaveBeenCalledTimes(1);
	})
})



