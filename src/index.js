import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // для того, щоб передати store всім компонентам, які будуть використовувати дані зі store
import { store } from './redux/store';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider - компонент, який передає store всім компонентам, які будуть використовувати дані зі store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// ==============================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { store, persistor } from 'redux/store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import App from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* Передаємо store в Provider */}
//     <Provider store={store}>
//       {/* показуємо спінер поки не завантажиться стор */}
//       <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
