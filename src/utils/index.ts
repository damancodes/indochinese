export const urlBuilder = (url:string)=>{
    return import.meta.env.VITE_BASE_URL + url
}