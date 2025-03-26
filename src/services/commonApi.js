import axios from "axios" 

const commonApi=async (reqMethod, url, reqBody)=>{
   const reqConfig={
        method:reqMethod,
        url,
        data:reqBody
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

 export default commonApi