import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Button from '../Button'

const queryClient = new QueryClient()

describe('Loader Component', () => {

	render(<QueryClientProvider client={queryClient}>
		<Button children={'View Images'} loading={true}/>
	</QueryClientProvider>)

	test('Loader shows on button', () => {
        const loader = screen.getByTestId('button-loader')
        const buttonText = screen.findByText('View Images')
        expect(loader).toBeDefined
        expect(buttonText).not.toBeDefined
	})
})



