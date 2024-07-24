import axios from "axios"

export const uploadImage = async(formData:FormData) => {
    return axios.post(`${process.env.BASE_URL}`, formData)
    .then(response => {
        return response.data
    }).catch((error:{ response: { data: { message: string }}}) => {
        return Promise.reject(error.response.data.message)
    })
}