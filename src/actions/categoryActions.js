import axios from 'axios';
import {GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORIES, CATEGORIES_LOADING} from './types';

export const getCategories = () => dispatch =>{
   dispatch(setCategoriesLoading());
   axios
    .get('localhost:5000/api/categories')
    .then(res => 
        dispatch({
        type:GET_CATEGORIES,
        payload:res.data
    }))
}

export const deleteCategory = (id) =>{
    return {
        type:DELETE_CATEGORIES,
        payload:id
    };
}

export const addCategory = (category) =>{
    return {
        type:ADD_CATEGORY,
        payload:category
    };
}

export const setCategoriesLoading = () =>{
    return {
        type:CATEGORIES_LOADING
        
    };
}

