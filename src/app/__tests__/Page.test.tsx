import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from '../page'

const queryClient = new QueryClient()

describe('Homepage', () => {
	render(<QueryClientProvider client={queryClient}>
		<Home/>
	</QueryClientProvider>)

	test('Page title is displayed on page load', () => {
		expect(screen.findByText('Cloudinary Upload App')).toBeDefined()
	})
	test('Upload box title is displayed on page load', () => {
		expect(screen.findByText('Click to select images')).toBeDefined()
	})
	test('Footer is displayed on page load', () => {
		expect(screen.findByText('Built with Nextjs')).toBeDefined()
	})
})



