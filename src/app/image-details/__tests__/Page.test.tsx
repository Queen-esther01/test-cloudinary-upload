import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllImages from '../page'


const queryClient = new QueryClient()

describe('Image Details', () => {

    const mockImage = [
        {
            url: 'cloudinary/Balloons.jpg',
            original_filename: 'Balloons.jpg'
        }
    ]
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
        return key === 'CloudinaryImages' ? JSON.stringify(mockImage) : null;
    });

	render(<QueryClientProvider client={queryClient}>
		<AllImages/>
	</QueryClientProvider>)

    test('images are stored in local storage', () => {
        const images = JSON.parse(localStorage.getItem('CloudinaryImages')!)
        if(images === null){
            const text = screen.getByText('No Images Uploaded Yet!')
            expect(text).toBeDefined()
        }
        else{
            const imageName = screen.getByText('Balloons.jpg')
            expect(images.length).toBe(1)
            expect(images[0].original_filename).toBe('Balloons.jpg')
            expect(imageName).toBeDefined()
        }
    });
})



