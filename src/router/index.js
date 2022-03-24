import { createRouter, createWebHistory } from 'vue-router';
import Adddata from '../components/Adddata';
import Getdata from '../components/Getdata';
import HelloWorld from '@/components/HelloWorld'

const routes = [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
},
{
    path: '/adddata',
    name: 'AddData',
    component: Adddata
},
{
    path: '/getdata',
    name: 'GetData',
    component: Getdata
}];
const router=createRouter({
    history: createWebHistory(),
    routes})
export default router