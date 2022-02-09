import UserServices from "../services/userService.js"

console.log("User component yüklendi")

let UserService = new UserServices

UserService.getById(6)