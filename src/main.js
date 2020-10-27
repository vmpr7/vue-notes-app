import { createApp } from 'vue'
import App from './App.vue';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import './main.scss'

const app = createApp(App);

app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Textarea', Textarea); 
app.component('Toast', Toast);

app.mount('#app')
