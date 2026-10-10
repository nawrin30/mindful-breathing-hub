import {FormEvent,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Eye,EyeOff,ArrowRight,LoaderCircle} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import {Toast} from '../components/Toast';
export function AuthForm({mode}:{mode:'login'|'register'}){const {login,register}=useAuth(),nav=useNavigate();
const [name,setName]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState(''),[confirm,setConfirm]=useState(''),[show,setShow]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');
const submit=async(e:FormEvent)=>{e.preventDefault();
setError('');
if(mode==='register'&&password!==confirm){setError('Your passwords do not match.');
return}setBusy(true);
try{if(mode==='register'){await register(name,email,password);
nav('/login',{state:{registered:true}})}else{await login(email,password);
nav('/dashboard')}}catch(err){setError(err instanceof Error?err.message:'Please try again.')}finally{setBusy(false)}};
return <><form className="auth-form" onSubmit={submit}>{mode==='register'&&<label>Full name<input value={name} onChange={e=>setName(e.target.value)} placeholder="What should we call you?" autoComplete="name" required minLength={2} maxLength={80}/></label>}<label>Email address<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required/></label><label>Password<div className="password-field"><input type={show?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder={mode==='register'?'At least 8 characters':'Enter your password'} autoComplete={mode==='register'?'new-password':'current-password'} minLength={mode==='register'?8:1} required/><button type="button" aria-label={show?'Hide password':'Show password'} onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>{mode==='register'&&<label>Confirm password<input type={show?'text':'password'} value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="Enter your password again" autoComplete="new-password" minLength={8} required/></label>}<button className="button button-dark auth-submit" disabled={busy}>{busy?<><LoaderCircle className="spin" size={18}/> Please wait…</>:<>{mode==='login'?'Log in to your space':'Create my account'} <ArrowRight size={17}/></>}</button></form>{error&&<Toast message={error} error onClose={()=>setError('')}/>}</> }
