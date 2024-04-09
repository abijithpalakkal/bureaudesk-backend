import { dependencies } from "../../config/dependencies";
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { verifyToken } from "../../utils/jwtverify";



export const setManagerController = (dependencies: any) => {
    const { useCases: { getEmployeesUseCase, updateUserUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try{

        
        console.log(req.body,"adkjfhibfijnjvnkj nk j kn knsa vks ")
        const obj = {
            Authorization: "semi_node",
            Departmentid: req.body.departmentid
        }
        const Response = await getEmployeesUseCase(dependencies).execute(obj)
        console.log(Response,"responseaskjdbncakbjkcajkln c")
        if (Response.length>0) {
            console.log("evde ethi")
            const obj2 = {
                _id: Response[0]._id,
                obj: {
                    Authorization: "basic_node"
                }
            }
            const data = await updateUserUseCase(dependencies).execute(obj2)

        }
        const obj1 = {
            _id: req.body.id,
            obj: {
                Authorization: "semi_node"
            }
        }
        const data = await updateUserUseCase(dependencies).execute(obj1)
        res.json({status:true,payload:data})
    }catch(error){
        next(error)
    }
}
}