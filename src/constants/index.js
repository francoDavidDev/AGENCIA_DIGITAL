export const LINKS =[
    {
        name: 'Inicio',
        path:'/home'
    },
    {
        name: 'Nosotros',
        path:'/about'
    },
   
   /* {
        name: 'Servicios',
        path:'/services'
    },*/
    {
        name: 'Precios',
        path:'/precios'
    },
    {
        name: 'Trabajos',
        path:'/works'
    },
  
    {
        name: 'Contacto',
        path:'/contact'
    },
]

import TrendingUpIcon from '../img/icons/bx-line-chart.png';
import ComputerIcon from '../img/icons/bx-desktop.png';
import MobileAndroidIcon from '../img/icons/bx-mobile-alt.png';


import TrendingUpIconBlack from '../img/icons/lineChartBlack36.png';
import ComputerIconBlack from '../img/icons/desktopBlack36.png';
import MobileAndroidIconBlack from '../img/icons/mobileBlack36.png';




export const SERVICES=[
    {
        icon: ComputerIcon,
        icon2:ComputerIconBlack,
        title:'Paginas Webs',
        description:'Diseñamos páginas web personalizadas según sus necesidades.',
    },
    {
        icon: MobileAndroidIcon,
        icon2:MobileAndroidIconBlack,
        title:'Paginas Mobiles',
        description:'Nos especializamos en crear y optimizar Páginas Móviles .',
    },
    /*{
        icon: MobileAndroidIcon,
        icon2:MobileAndroidIconBlack,
        title:'Marketing Digital',
        description:'Mejoramos su presencia en redes sociales realizando posteos, subiendo historias y respondiendo mensajes',
    },*/
    {
        icon: TrendingUpIcon,
        icon2:TrendingUpIconBlack,
        title:'SEO',
        description:'Diseño web optimizado para SEO y mejor visibilidad en buscadores.',
    }, 
 
]

export const TEXT_ABOUT=[
    {
        title: 'Quienes somos',
        description:'Simplemente apasionados por la tecnologia y el marketing'
    },
    {
        title: 'Nuestra filosofía',
        description:'Mi filosofía es el trabajo bien hecho, siempre a disposicion del cliente'
    },
    {
        title: 'Como trabajar',
        description:'Trabajo 24/7 para poder mejora el servicio'
    },
    
]


import coffeShop from '../img/works/coffeeShop.png'
import nikeShop from '../img/works/nikeShop.png'
import starkeFitt from '../img/works/starkeFit2.png'
import travelWeb from '../img/works/travelWeb.png'
import AlmendraCoffee from '../img/works/almendraCoffe.png'




export const WORKS =  [
    {
        title: 'titulo del trabajo',
        description: 'descripcionm del trabajo',
        image: coffeShop,
    },
    {
        title: 'titulo del trabajo',
        description: 'descripcionm del trabajo',
        image: nikeShop,
    },
    {
        title: 'titulo del trabajo',
        description: 'descripcionm del trabajo',
        image: starkeFitt,
    },
    {
        title: 'titulo del trabajo',
        description: 'descripcionm del trabajo',
        image: travelWeb,  
    },
    {
        title: 'titulo del trabajo',
        description: 'descripcionm del trabajo',
        image: AlmendraCoffee,     
    },
]
 import facebook from '../img/icons/socialMedia/facebook36.png'
 //import linkedin from '../img/icons/socialMedia/linkedin36.png'
 import email from '../img/icons/socialMedia/email36.png'
 import instagram from '../img/icons/socialMedia/instagram36.png'


export const ICONS_LINKS=[
    {
        name: facebook,
        path:'#'
    },
   /* {
        name: linkedin
        
    },*/
    {
        name: instagram,
        path:'#'
    },
    {
        name: email,
        path:'#'
    },
]




export const WEB_PRICES=[
    {


        
        title:'Landing Page',
        url:'/questionLandingPage',
        description1:[
            {d:'Web hosting por 1 año'},
            {d:'Dominio por 1 año'},
            {d:'Certificado SSL x 1 año'},
            {d:'No necesita mantenimiento web'},

        ],

        description2:[
            {d:'Sitio creado en REACT.JS'},
            {d:'5 secciones(se cobra adicional por mas secciones)'},
            {d:'Hasta 10 fotos precargadas'},
            {d:'No necesita mantenimiento web'},

        ],
        description3:[
            {d:'Optimización para todo tipo de dispositivo'},
            {d:'1 formulario de contacto'},
            {d:'Links a redes sociales'},
            {d:'Formularios de contacto'},
            {d:'Botón de WhatsApp'},
            {d:'Hasta 5 cuentas de mail'},
            {d:'WhatsApp intregrado'},
        ],

        price:'$20.000',
        informacion:''

           
        
    },
    {


        title:'Paginas Corporativas',
        url:'/questionWebCorporativa',
        description1:[
            {d:'Web hosting por 1 año'},
            {d:'Dominio por 1 año'},
            {d:'Certificado SSL x 1 año'},
            {d:'No necesita mantenimiento web'},

        ],

        description2:[
            {d:'Sitio creado en REACT.JS'},
            {d:'5 secciones(se cobra adicional por mas secciones)'},
            {d:'Hasta 10 fotos precargadas'},
            {d:'No necesita mantenimiento web'},

        ],
        description3:[
            {d:'Optimización para todo tipo de dispositivo'},
            {d:'1 formulario de contacto'},
            {d:'Links a redes sociales'},
            {d:'Formularios de contacto'},
            {d:'Botón de WhatsApp'},
            {d:'Hasta 5 cuentas de mail'},
            {d:'WhatsApp intregrado'},
        ],

        price:'$35.000',
        informacion:'El mantenimiento incluye actualizaciones,temas, plugins y seguridad mensual'
           
        
    },
   
    
]





export const GYMS_WEBS=[
    {
        title:'Starke fitness',
        description:'One page',
        image: starkeFitt,
    },
    {
        title:`Almendra 'cafe de especialidad'`,
        description:'One page',
        image: AlmendraCoffee,
    },
    {
        title:`Viajes'`,
        description:'One page',
        image: travelWeb,
    },
    {
        title:`Tienda de Nike`,
        description:'One page',
        image: nikeShop,
    },
    
    {
        title:`Cafe shop`,
        description:'One page',
        image: coffeShop,
    },
    
]