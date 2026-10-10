const BASE=import.meta.env.VITE_API_URL||'http://localhost:4000/api';
 export function getToken(){return localStorage.getItem('mindful_token')} export function setToken(t:string|null){if(t)localStorage.setItem('mindful_token',t);
else localStorage.removeItem('mindful_token')} export async function api<T=any>(path:string,options:RequestInit={}):Promise<T>{const token=getToken();
let res: Response;
try {
  res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
} catch {
  throw new Error('Cannot connect to the server. Start the backend with npm run dev and make sure the database is initialized.');
}
const data=await res.json().catch(()=>({message:'Unexpected server response'}));
if(!res.ok)throw new Error(data.message||'Request failed');
return data as T;
}
