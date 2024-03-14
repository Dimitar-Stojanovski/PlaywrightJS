import * as nodefetch from "node-fetch"

export const getLoginToken = async()=>{
  const response =  await nodefetch("http://localhost:2221/api/login", {
    method:'POST',
    body: JSON.stringify({"username":"admin","password":"Admin123"}), 
  })

  if(response.status != 200){
    throw new Error("Something wrong happened extracting the token")
  }

  const responseBody = await response.json()
  return responseBody.token 
}

