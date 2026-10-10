import { Request,Response,NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export interface AuthRequest extends Request { userId?: string }
export function auth(req:AuthRequest,res:Response,next:NextFunction){ const h=req.headers.authorization;
 const token=h?.startsWith('Bearer ')?h.slice(7):null;
 if(!token) return res.status(401).json({message:'Please sign in to continue.'});
 try{const payload=jwt.verify(token,process.env.JWT_SECRET!) as {sub:string};
 req.userId=payload.sub;
 next();
}catch{return res.status(401).json({message:'Your session expired. Please sign in again.'});
}}
