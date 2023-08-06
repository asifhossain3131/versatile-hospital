import DbConnect from "./DbConnect"
import 'server-only'

// export const getAnUserFromDb=async(email:string)=>{
//     const db=await DbConnect()
//     const userCollection=db.collection('users')
//     const user=await userCollection.findOne({email:email})
//     return user
// }