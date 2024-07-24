import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UploadImageBox from '../UploadImageBox'


const queryClient = new QueryClient()

describe('Upload Box Component', () => {

	render(<QueryClientProvider client={queryClient}>
		<UploadImageBox/>
	</QueryClientProvider>)

    test('After upload, respective buttons and options show up', async() => {
        const file = new File(['test-image'], 'bird.jpg', { type: 'image/jpg' })
        const fileInput:any = screen.getByTestId('file-upload')

        expect(fileInput.getAttribute('disabled')).toBe(null)
        fireEvent.change(fileInput, { target: { files: [file] } });

        // Check that uploaded file shows on screen
        const fileName = 'bird.jpg'
        const uploadedFile = fileInput.files[0].name
        expect(fileName).toBe(uploadedFile)

        //Check that buttons show up after successful selection
        const buttons = await screen.findAllByTestId('button')
        expect(buttons.length).toBe(2)
        const changeImageButton = await screen.findByText('Change Image')
        expect(changeImageButton).toBeDefined()
        const uploadImageButton = await screen.findByText('Upload To Cloudinary')
        expect(uploadImageButton).toBeDefined()
        const removeFileText = screen.getByText('Remove File')
        expect(removeFileText).toBeDefined()
    });
})



