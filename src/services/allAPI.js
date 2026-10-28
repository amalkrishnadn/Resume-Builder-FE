import axiosConfig from "./axiosConfig";
import { BASEURL } from "./BaseURL";

export const addResume = async (reqbody) => {
    return await axiosConfig('post',`${BASEURL}/resumeDatas`,reqbody)
};
export const getResume =async()=>{
    return await axiosConfig('get',`${BASEURL}/resumeDatas`,'')
}
export const deleteResume = async(id)=>{
    return await axiosConfig('delete',`${BASEURL}/resumeDatas/${id}`,'')
}
export const getSingleResume = async(id)=>{
    return await axiosConfig('get',`${BASEURL}/resumeDatas/${id}`,'')
}
export const updateResume=async(id,reqBody)=>{
    return await axiosConfig('put',`${BASEURL}/resumeDatas/${id}`,reqBody)
}