import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-68432","appId":"1:163777057438:web:0b12a1654fc5bd7724e18f","storageBucket":"simple-crm-68432.appspot.com","apiKey":"AIzaSyDxBJTTlIudRrr5PhwayH5wgfJs7IJmjSg","authDomain":"simple-crm-68432.firebaseapp.com","messagingSenderId":"163777057438"})), provideFirestore(() => getFirestore())]
};
