import axios from "axios"
import { baseUrl } from "../utils/baseUrl"

export const uploadImage = async(formData:FormData) => {
    return axios.post(`${baseUrl}`, formData)
    .then(response => {
        return response.data
    }).catch((error:{ response: { data: { message: string }}}) => {
        return Promise.reject(error.response.data.message)
    })
}