import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from '../Header'


const queryClient = new QueryClient()

describe('Header Component', () => {
	render(<QueryClientProvider client={queryClient}>
		<Header/>
	</QueryClientProvider>)

    test('modal shows on button click', () => {
        const button = screen.getByText('Upload Image')
        expect(button).toBeDefined()
        fireEvent.click(button)
        const uploadModal = screen.getByTestId('modal-wrapper')
        expect(uploadModal).toBeDefined()
        const text = screen.getByText('Click to select images')
        expect(text).toBeDefined()
    })
})



