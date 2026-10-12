import {ReactNode,useState} from 'react';
import {NavLink,Link,useNavigate,Navigate} from 'react-router-dom';
import {Activity,Wind,Heart,ChartNoAxesCombined,UserRound,Settings,Menu,X,LogOut,Home,Music2} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
const links=[['/dashboard','Dashboard',Home],['/breathing','Breathing studio',Wind],['/meditation','Meditation',Heart],['/sounds','Ambient sounds',Music2],['/mood','Mood journal',Activity],['/progress','Progress',ChartNoAxesCombined],['/profile','Profile',UserRound],['/settings','Settings',Settings]] as const;
export function Shell({children}:{children:ReactNode}){const {user,logout}=useAuth();
const [open,setOpen]=useState(false);
const nav=useNavigate();
return <div className="app-shell"><aside className={`sidebar ${open?'sidebar-open':''}`}><Link to="/dashboard" className="brand"><span className="brand-mark"><Wind size={22}/></span><span>mindful<span className="brand-dot">.</span><small>YOUR CALM SPACE</small></span></Link><div className="side-label">YOUR SPACE</div><nav>{links.map(([to,label,Icon])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>`nav-item ${isActive?'active':''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav><div className="sidebar-bottom"><div className="mini-quote">“Almost everything will work again if you unplug it for a few minutes, including you.”<small>— Anne Lamott</small></div><button className="nav-item logout" onClick={async()=>{await logout();
nav('/')}}><LogOut size={18}/> Sign out</button></div></aside>{open&&<button aria-label="Close navigation" className="mobile-scrim" onClick={()=>setOpen(false)}/>}<main className="main-area"><header className="topbar"><button className="icon-button mobile-menu" aria-label="Open navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div><div className="eyebrow">MAKE SPACE FOR YOURSELF</div><div className="top-title">A little calm goes a long way.</div></div><div className="top-user"><div className="avatar">{user?.name?.slice(0,1).toUpperCase()}</div><div><b>{user?.name}</b><small>Your mindful journey</small></div></div></header><section className="page-content">{children}</section></main></div>}
export function Protected({children}:{children:ReactNode}){const {user,loading}=useAuth();
if(loading)return <div className="loading-screen"><div className="breath-orb small-orb"/><p>Finding your calm space…</p></div>;
if(!user)return <Navigate to="/login" replace/>;
return <Shell>{children}</Shell>}
