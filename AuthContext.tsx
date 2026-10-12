import {createContext,useContext,useEffect,useState,ReactNode} from 'react';
import {api,getToken,setToken} from '../services/api';
import type {User} from '../types';
type C={user:User|null;
loading:boolean;
login:(email:string,password:string)=>Promise<void>;
register:(name:string,email:string,password:string)=>Promise<void>;
logout:()=>Promise<void>;
refresh:()=>Promise<void>};
const Context=createContext<C|null>(null);
export function AuthProvider({children}:{children:ReactNode}){const [user,setUser]=useState<User|null>(null),[loading,setLoading]=useState(true);
const refresh=async()=>{if(!getToken()){setUser(null);
setLoading(false);
return}try{const r=await api<{user:User}>('/auth/me');
setUser(r.user)}catch{setToken(null);
setUser(null)}finally{setLoading(false)}};
useEffect(()=>{void refresh()},[]);
const login=async(email:string,password:string)=>{const r=await api<{token:string;
user:User}>('/auth/login',{method:'POST',body:JSON.stringify({email,password})});
setToken(r.token);
setUser(r.user)};
const register=async(name:string,email:string,password:string)=>{await api('/auth/register',{method:'POST',body:JSON.stringify({name,email,password})})};
const logout=async()=>{try{await api('/auth/logout',{method:'POST'})}finally{setToken(null);
setUser(null)}};
return <Context.Provider value={{user,loading,login,register,logout,refresh}}>{children}</Context.Provider>}
export function useAuth(){const c=useContext(Context);
if(!c)throw new Error('AuthProvider missing');
return c;
}
