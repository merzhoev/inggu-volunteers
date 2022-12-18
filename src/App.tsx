import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'pages/routes';
import { AuthorizedLayout } from 'layouts/authorized-layout';
import { News } from 'pages/news';
import { Profile } from 'pages/profile';
import { Favorites } from 'pages/favorites';
import { Events } from 'pages/events';

import { useState } from 'react';
import { PhoneInput } from 'components/phone-input';

function Test() {
  const [phoneValue, setPhoneValue] = useState('');
  console.log('Test ~ phoneValue', phoneValue);

  return (
    <div style={{ backgroundColor: '#fff', padding: 50, flex: 1 }}>
      <PhoneInput
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
        onPhoneChange={({ dirty }) => console.log(dirty)}
        label="Введите номер телефона"
      />
    </div>
  );
}

function App() {
  const isAuth = true;

  return (
    <div className="app">
      <AuthorizedLayout>
        <Routes>
          <Route path={'/test'} element={<Test />} />
          <Route path={routes.profile} element={<Profile />} />
          <Route path={routes.news} element={<News />} />
          <Route path={routes.favorites} element={<Favorites />} />
          <Route path={routes.events} element={<Events />} />
          <Route path="*" element={<Navigate to={routes.news} />} />
        </Routes>
      </AuthorizedLayout>
    </div>
  );
}

export default App;
