import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Parfums from './pages/Parfums';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="parfums" element={<Parfums />} />
        <Route
          path="parfums/women-parfums"
          element={<div>Жіночі парфуми</div>}
        />
        <Route
          path="parfums/men-parfums"
          element={<div>Чоловічі парфуми</div>}
        />
        <Route
          path="parfums/unisex-parfums"
          element={<div>Унісекс парфуми</div>}
        />
        <Route
          path="parfums/kids-parfums"
          element={<div>Дитячі парфуми</div>}
        />
        
        <Route path="makeup" element={<div>Макіяж</div>} />
        <Route path="makeup/eyes" element={<div>Очі</div>} />
        <Route path="makeup/brows" element={<div>Брови</div>} />
        <Route path="makeup/lips" element={<div>Губи</div>} />
        <Route path="makeup/face" element={<div>Обличчя</div>} />

        <Route path="hair" element={<div>Волосся</div>} />
        <Route path="hair/shampoo" element={<div>Шампунь</div>} />
        <Route path="hair/balm" element={<div>Бальзам</div>} />
        <Route path="hair/mask" element={<div>Маска</div>} />
        <Route path="hair/paint" element={<div>Фарбування</div>} />

        <Route path="face" element={<div>Обчиччя</div>} />
        <Route path="face/cream" element={<div>Крем</div>} />
        <Route path="face/serum" element={<div>Сироватка</div>} />
        <Route path="face/mask" element={<div>Маска</div>} />
        <Route path="face/oil" element={<div>Олія</div>} />

        <Route path="body" element={<div>Тіло</div>} />
        <Route path="body/gel" element={<div>Гель для душу</div>} />
        <Route path="body/cream" element={<div>Крем для тіла</div>} />
        <Route path="body/hands" element={<div>Крем для рук</div>} />
        <Route path="body/legs" element={<div>Крем для ніг</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
