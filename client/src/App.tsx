import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import {AuthProvider,useAuth} from './context/AuthContext';
import {Landing,AuthPage} from './pages/Public';
import {Protected} from './components/Layout';
import {Dashboard,Breathing,Meditation,Sounds,MoodJournal,Progress,Profile,SettingsPage} from './pages/AppPages';
import './styles.css';
function LoginRoute({mode}:{mode:'login'|'register'}){const {user,loading}=useAuth();
if(loading)return <div className="loading-screen">Loading your space…</div>;
if(user)return <Navigate to="/dashboard" replace/>;
return <AuthPage mode={mode}/>;
}
function AppRoutes(){return <Routes><Route path="/" element={<Landing/>}/><Route path="/login" element={<LoginRoute mode="login"/>}/><Route path="/register" element={<LoginRoute mode="register"/>}/><Route path="/dashboard" element={<Protected><Dashboard/></Protected>}/><Route path="/breathing" element={<Protected><Breathing/></Protected>}/><Route path="/meditation" element={<Protected><Meditation/></Protected>}/><Route path="/sounds" element={<Protected><Sounds/></Protected>}/><Route path="/mood" element={<Protected><MoodJournal/></Protected>}/><Route path="/progress" element={<Protected><Progress/></Protected>}/><Route path="/profile" element={<Protected><Profile/></Protected>}/><Route path="/settings" element={<Protected><SettingsPage/></Protected>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
export default function App(){return <BrowserRouter><AuthProvider><AppRoutes/></AuthProvider></BrowserRouter>}
