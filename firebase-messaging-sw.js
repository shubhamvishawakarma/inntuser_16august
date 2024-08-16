// // firebase-messaging-sw.js

// // Import the Firebase scripts that are needed
// importScripts(
//     "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
//   );
//   importScripts(
//     "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
//   );
  
//   const firebaseConfig = {
//     apiKey: "AIzaSyBF_pIUNxQv9UXmv0e7RC5Uiy3_jr_ML8U",
//     authDomain: "innt-6700e.firebaseapp.com",
//     projectId: "innt-6700e",
//     storageBucket: "innt-6700e.appspot.com",
//     messagingSenderId: "321243157659",
//     appId: "1:321243157659:web:8e2415f5233192918f223e",
//   };
  
//   firebase.initializeApp(firebaseConfig);
  
//   const messaging = firebase.messaging();
  
//   messaging.onBackgroundMessage(function (payload) {
//     console.log(
//       "[firebase-messaging-sw.js] Received background message ",
//       payload
//     );
  
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//       body: payload.notification.body,
//       icon: payload.notification.icon,
//     };
  
//     self.registration.showNotification(notificationTitle, notificationOptions);
//   });
  