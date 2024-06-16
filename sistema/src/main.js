// main.js

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { db } from './firebase'; // Importe 'db' corretamente

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Se estiver usando BootstrapVue para Vue 3
import { BootstrapVue3, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue-3';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);

// Registrar ícones globalmente se necessário
app.component('BIcon', BIcon);
app.component('BIconArrowUp', BIconArrowUp);
app.component('BIconArrowDown', BIconArrowDown);

// Exemplo de uso do Firestore
db.collection('exemplo').get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    console.log(doc.id, ' => ', doc.data());
  });
});

app.mount('#app');
app.config.globalProperties.$db = db;
