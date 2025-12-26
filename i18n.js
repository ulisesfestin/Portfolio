// Traducciones del portafolio
const translations = {
    es: {
        // Navegación
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        
        // Hero
        'hero.title': 'Ingeniero de Software e Informática',
        'hero.subtitle': 'Transformando ideas en soluciones tecnológicas escalables y de alto valor',
        'hero.cta': 'Ver Proyectos',
        
        // Habilidades
        'skills.title': 'Áreas de Especialización',
        'skills.web.title': 'Desarrollo Web & Backend',
        'skills.web.desc': 'Aplicaciones web modernas con APIs REST escalables, gestión de bases de datos y arquitecturas cloud',
        'skills.mobile.title': 'Desarrollo Móvil',
        'skills.mobile.desc': 'Aplicaciones móviles multiplataforma con React Native y Java, enfocadas en experiencia de usuario y gestión por roles',
        'skills.dl.title': 'Deep Learning & Computer Vision',
        'skills.dl.desc': 'Modelos de IA con PyTorch para detección y clasificación de objetos, alcanzando alta precisión en producción',
        'skills.ai.title': 'IA Generativa',
        'skills.ai.desc': 'Asistentes virtuales con LLMs integrados a WhatsApp para automatización inteligente y venta consultiva',
        'skills.vr.title': 'Realidad Virtual',
        'skills.vr.desc': 'Experiencias VR inmersivas con Unity 3D para educación, capacitación y simulación de procesos complejos',
        
        // Proyectos
        'projects.title': 'Proyectos Destacados',
        'projects.role.freelancer': 'Freelancer',
        'projects.role.thesis': 'Tesis de Grado',
        'projects.role.contract': 'Contrato Desarrollo a Medida',
        'projects.role.hackathon': 'Hackathon',
        
        // Proyecto 1
        'project1.title': 'App Web para Playa de Estacionamiento',
        'project1.desc': 'Sistema web para reservas en tiempo real de lugares en una playa de estacionamiento local, ofreciendo comodidad y disponibilidad 24/7 a los clientes.',
        
        // Proyecto 2
        'project2.title': 'Servidor Backend para Gestión de Alquileres',
        'project2.desc': 'Sistema backend robusto para la gestión centralizada de reservas, usuarios y departamentos de un complejo, facilitando un seguimiento ordenado y eficiente.',
        
        // Proyecto 3
        'project3.title': 'App Mobile de Productos de Belleza',
        'project3.desc': 'Aplicación móvil que unifica la gestión de pedidos de vendedoras con la venta directa web, optimizando el flujo de trabajo y consolidando las operaciones comerciales en una sola plataforma por roles.',
        
        // Proyecto 4
        'project4.title': 'Sistema de Clasificación de Vehículos en Peajes con Deep Learning',
        'project4.desc': 'Modelo de Deep Learning mediante Visión Computacional para automatizar el cobro de peajes, clasificando automáticamente el tipo de vehículo (auto, moto, bus, camión, ambulancia) y asignando el monto correspondiente. Logró 97% de precisión utilizando Faster R-CNN.',
        
        // Proyecto 5
        'project5.title': 'MMS Chemistry VR',
        'project5.desc': 'Aplicación de Realidad Virtual que simula una técnica de laboratorio para control de calidad (agua/alimentos), publicada en Meta Horizon. Permite la práctica sin riesgos ni costos de materiales.',
        
        // Proyecto 6
        'project6.title': 'Asistente Virtual con IA Generativa para Venta Consultiva',
        'project6.desc': 'Asistente virtual integrado a WhatsApp que utiliza IA Generativa para interpretar la necesidad del cliente e impulsar la venta consultiva de indumentaria personalizada.',
        
        // Contacto
        'contact.title': 'Conectemos',
        'contact.message': '¿Tienes un proyecto en mente? Me encantaría colaborar contigo.',
        'contact.cta': 'Conectemos para tu próximo proyecto',
        
        // Footer
        'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.title': 'Software & Computer Engineer',
        'hero.subtitle': 'Transforming ideas into scalable, high-value technology solutions',
        'hero.cta': 'View Projects',
        
        // Skills
        'skills.title': 'Areas of Expertise',
        'skills.web.title': 'Web & Backend Development',
        'skills.web.desc': 'Modern web applications with scalable REST APIs, database management and cloud architectures',
        'skills.mobile.title': 'Mobile Development',
        'skills.mobile.desc': 'Cross-platform mobile applications with React Native and Java, focused on user experience and role-based management',
        'skills.dl.title': 'Deep Learning & Computer Vision',
        'skills.dl.desc': 'AI models with PyTorch for object detection and classification, achieving high accuracy in production',
        'skills.ai.title': 'Generative AI',
        'skills.ai.desc': 'Virtual assistants with LLMs integrated into WhatsApp for intelligent automation and consultative selling',
        'skills.vr.title': 'Virtual Reality',
        'skills.vr.desc': 'Immersive VR experiences with Unity 3D for education, training and simulation of complex processes',
        
        // Projects
        'projects.title': 'Featured Projects',
        'projects.role.freelancer': 'Freelancer',
        'projects.role.thesis': 'Thesis Project',
        'projects.role.contract': 'Custom Development Contract',
        'projects.role.hackathon': 'Hackathon',
        
        // Project 1
        'project1.title': 'Parking Lot Web App',
        'project1.desc': 'Web system for real-time parking space reservations at a local parking lot, offering convenience and 24/7 availability to customers.',
        
        // Project 2
        'project2.title': 'Backend Server for Rental Management',
        'project2.desc': 'Robust backend system for centralized management of reservations, users and apartment units, facilitating organized and efficient tracking.',
        
        // Project 3
        'project3.title': 'Beauty Products Mobile App',
        'project3.desc': 'Mobile application that unifies saleswomen order management with direct web sales, optimizing workflow and consolidating business operations into a single role-based platform.',
        
        // Project 4
        'project4.title': 'Deep Learning Vehicle Classification System for Toll Booths',
        'project4.desc': 'Deep Learning model using Computer Vision to automate toll collection by automatically classifying vehicle types (car, motorcycle, bus, truck, ambulance) and assigning the corresponding amount. Achieved 97% accuracy using Faster R-CNN.',
        
        // Project 5
        'project5.title': 'MMS Chemistry VR',
        'project5.desc': 'Virtual Reality application that simulates a laboratory technique for quality control (water/food), published on Meta Horizon. Enables practice without risks or material costs.',
        
        // Project 6
        'project6.title': 'Generative AI Virtual Assistant for Consultative Sales',
        'project6.desc': 'Virtual assistant integrated with WhatsApp that uses Generative AI to interpret customer needs and drive consultative sales of personalized apparel.',
        
        // Contact
        'contact.title': "Let's Connect",
        'contact.message': 'Have a project in mind? I would love to collaborate with you.',
        'contact.cta': "Let's connect for your next project",
        
        // Footer
        'footer.rights': 'All rights reserved.'
    }
};

// Estado actual del idioma
let currentLang = 'es';

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar el botón de idioma
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
}

// Inicializar el cambio de idioma
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay un idioma guardado
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    if (savedLang !== 'es') {
        changeLanguage(savedLang);
    }
    
    // Agregar evento al botón de cambio de idioma
    document.getElementById('lang-toggle').addEventListener('click', function() {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        changeLanguage(newLang);
    });
});
