

// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Configuração do Firebase (Firebase configuration)
const firebaseConfig = {
  apiKey: "AIzaSyD3X8eTVcVB1w-vPjGbTnltR524maPVzCA",
  authDomain: "banco-de-cadastro-af5e8.firebaseapp.com",
  projectId: "banco-de-cadastro-af5e8",
  storageBucket: "banco-de-cadastro-af5e8.appspot.com",
  messagingSenderId: "121013910034",
  appId: "1:121013910034:web:36a8830be777c045bfb6cb"
};

// Inicialização do Firebase (Initialize Firebase)
const firebaseApp = initializeApp(firebaseConfig);

// Obter instância do Firestore (Get Firestore instance)
const db = getFirestore(firebaseApp);

export { db };
