import {useEffect} from 'react';
import {CheckCircle2,AlertCircle,X} from 'lucide-react';
export function Toast({message,error,onClose}:{message:string;error?:boolean;onClose:()=>void}){useEffect(()=>{const t=setTimeout(onClose,3500);return()=>clearTimeout(t)},[message]);
return <div role="status" className={`toast ${error?'toast-error':''}`}><span>{error?<AlertCircle size={18}/>:<CheckCircle2 size={18}/>}</span>{message}<button aria-label="Dismiss notification" onClick={onClose}><X size={16}/></button></div>}
