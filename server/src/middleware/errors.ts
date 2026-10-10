import { Request,Response,NextFunction } from 'express';
export function notFound(_req:Request,res:Response){res.status(404).json({message:'Endpoint not found'});
}
export function errors(err:Error,_req:Request,res:Response,_next:NextFunction){console.error(err);
res.status(500).json({message:'Something went wrong. Please try again.'});
}
