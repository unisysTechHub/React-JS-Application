const env = {
    server : "aws"
    
}
const  apiConfig = {
    
     baseURL : env.server === "local" ?   "http://127.0.0.1:8082" : env.server === "aws" ? "http://user-service.retail:8082" : "unknown"
    
}

export default apiConfig