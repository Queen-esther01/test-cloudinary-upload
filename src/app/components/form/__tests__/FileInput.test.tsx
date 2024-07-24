import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FileInput from '../FileInput'

const queryClient = new QueryClient()

describe('File Input', () => {
	
    const triggerSelect = vi.fn()

	render(<QueryClientProvider client={queryClient}>
		<FileInput onFileSelect={triggerSelect}/>
	</QueryClientProvider>)


	test('Input exists on the page', () => {
		const fileInput = screen.getByTestId('file-upload')
		expect(fileInput.getAttribute('type')).toBe('file');
		expect(fileInput).toBeDefined()
	})

	test('Input is not disabled and can upload image', () => {
		const file = new File(['test-image'], 'bird.jpg', { type: 'image/jpg' })
		const fileInput = screen.getByTestId('file-upload')

		expect(fileInput.getAttribute('disabled')).toBe(null)
		fireEvent.change(fileInput, { target: { files: [file] } });
		expect(triggerSelect).toHaveBeenCalled();
	});
})



