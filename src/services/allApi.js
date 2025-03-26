import serverURL from '../services/serverURL'
import commonApi from '../services/commonApi'

export const addMenuItemApi=(reqBody)=>{    
    return commonApi('POST',`${serverURL}/add-menu`,reqBody)
}

export const getAllMenuItemApi=()=>{    
    return commonApi('GET',`${serverURL}/get-menu`,{})
}

export const addFoodMenuItemApi=(reqBody)=>{    
    return commonApi('POST',`${serverURL}/add-menu-item`,reqBody)
}

export const getAllFoodItemApi=(reqBody)=>{    
    return commonApi('POST',`${serverURL}/get-food-item`,reqBody)
}