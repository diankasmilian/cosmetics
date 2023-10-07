import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<div>Home</div>}/>
        <Route path='parfums' element={<div>Парфуми</div>}/>
        <Route path='makeup' element={<div>Макіяж</div>}/>
        <Route path='hair' element={<div>Волосся</div>}/>
        <Route path='face' element={<div>Обчиччя</div>}/>
        <Route path='body' element={<div>Тіло</div>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Route>
    </Routes>
  );
}
