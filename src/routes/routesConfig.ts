import React from "react";
/* interface RouteConfig {
  to: string;
  title: string;
  description: string;
  component: React.ComponentType | null;
} */

export const routes = [
  {
    to: null,
    title: "Creación de componentes",
    description: "",
    component:  React.lazy(()=> import("../pages/Home")),
  }, 
  {
    to: "Ejem1",
    title: "Componente usando clases",
    description: "Muestra como crear un componente usando clases. Obsoleto.",
    component: React.lazy(() => import("../pages/Ejem1")),
  },
  {
    to: "Ejem2",
    title: "Componente usando funciones",
    description: "Muestra como crear un componente usando funciones normales.",
    component: React.lazy(() => import("../pages/Ejem2")),
  },
  {
    to: "Ejem3",
    title: "Componente usando funciones flecha",
    description: "Muestra como crear un componente usando funciones de tipo flecha. Usado cuando el componente es muy sencillo.",
    component: React.lazy(() => import("../pages/Ejem3")),
  },
  {
    to: "Ejem3b",
    title: "Uso de varios componentes",
    description: "React solo puede renderizar un solo componente. Para renderizar varios componentes se deben agrupar en un solo componente. O con un fragment.",
    component: React.lazy(() => import("../pages/Ejem3b")),
  },
  {
    to: "Ejem4",
    title: "Componentes condicionales",
    description: "Muestra como usar condicionales en JSX.",
    component: React.lazy(() => import("../pages/Ejem4")),
  },
  {
    to: "Ejem4b",
    title: "Componetización",
    description: "Muestra usar la componetización para reutilizar código.",
    component: React.lazy(() => import("../pages/Ejem4b")),
  },
  {
    to: null,
    title: "Props",
    description: "",
    component:  React.lazy(()=> import("../pages/Home")),
  }, 
  {
    to: "Ejem5",
    title: "Componente con props",
    description: "Muestra como pasar propiedades a los componentes.",
    component: React.lazy(() => import("../pages/Ejem5")),
  },
  {
    to: "Ejem6",
    title: "Estilando componentes",
    description: "Muestra como estilar componentes, usando className o style.",
    component: React.lazy(() => import("../pages/Ejem6")),
  },
  {
    to: "Ejem7",
    title: "Pasando funciones como props",
    description: "Muestra como pasar funciones a un componente.",
    component: React.lazy(() => import("../pages/Ejem7")),
  },
  {
    to: "Ejem8",
    title: "Como no modificar las props",
    description: "Muestra como no se deben modificar las props.",
    component: React.lazy(() => import("../pages/Ejem8")),
  },
  {
    to: "Ejem9",
    title: "Children",
    description: "Muestra como usar la propiedad children.",
    component: React.lazy(() => import("../pages/Ejem9")),
  },
  {
    to: "Ejem10",
    title: "Spread operator en props",
    description: "Muestra como pasar todas las propiedades de un objeto a un componente. (poco recomendable)",
    component: React.lazy(() => import("../pages/Ejem10")),
  },
  {
    to: null,
    title: "Manejo de estado",
    description: "",
    component:  React.lazy(()=> import("../pages/Home")),
  }, 
  {
    to: "Ejem11",
    title: "Estado manejo",
    description: "Muestra como usar y cambiar el estado en un componente.",
    component: React.lazy(() => import("../pages/Ejem11")),
  },
  
  {
    to: "Ejem13",
    title: "Propagación de estado2",
    description: "Muestra como react .",
    component: React.lazy(() => import("../pages/Ejem13")),
  },
  {
    to: "Ejem14",
    title: "Inicialización de estado",
    description: "Muestra como react .",
    component: React.lazy(() => import("../pages/Ejem14")),
  },
  {
    to: "Ejem15",
    title: "Problemas Inicialización de estado",
    description: "Muestra como react .",
    component: React.lazy(() => import("../pages/Ejem15")),
  },
  {
    to: "Ejem16",
    title: "Comunicación hijo con padre",
    description: "Muestra como se puede comunicar un componente hijo con su padre.",
    component: React.lazy(() => import("../pages/Ejem16")),
  },
  {
    to: "Ejem17",
    title: "Mapeado de elementos",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem17")),
  },
  {
    to: "Ejem18",
    title: "Problemas con el estado",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem18"))
  },
  {
    to: null,
    title: "Efectos",
    description: "",
    component:  React.lazy(()=> import("../pages/Home")),
  }, 
  {
    to: "Ejem19",
    title: "Realizar efectos en los componentes con useEffect",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem19"))
  },
  {
    to: "Ejem20",
    title: "Desmontar componentes",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem20"))
  },
  {
    to: "Ejem21",
    title: "Llamadas a apis",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem21"))
  },
  {
    to: "Ejem21/:nombre",
    title: "Llamadas a apis",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem21_detail"))
  },
  {
    to: "Ejem22",
    title: "Subscripción a eventos",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem22"))
  },
  {
    to: "Ejem23",
    title: "Cuidado con los bucles infinitos",
    description: "Muestra como react ",
    component: React.lazy(() => import("../pages/Ejem23"))
  },
  {
    to: null,
    title: "Formularios",
    description: "",
    component:  React.lazy(()=> import("../pages/Home")),
  }, 
  {
    to: "Ejem24",
    title: "Formularios simples",
    description: "Muestra como se crean formularios simples en react.",
    component: React.lazy(() => import("../pages/Ejem24"))
  },
  {
    to: "Ejem25",
    title: "Formularios multiples campos",
    description: "Muestra se crean formularios con multiples campos en un solo estado",
    component: React.lazy(() => import("../pages/Ejem25"))
  },
  {
    to: "Ejem26",
    title: "Formularios (validación)",
    description: "Muestra como gestionar la validación de formularios",
    component: React.lazy(() => import("../pages/Ejem26"))
  },
  {
    to: null,
    title: "Hooks personalizados",
    description: "",
    component:  React.lazy(()=> import("../pages/Home")),
  }, 
  {
    to: "Ejem27",
    title: "Use hooks",
    description: "Creando hooks personalizados",
    component: React.lazy(() => import("../pages/Ejem27"))
  },
  {
    to: "Ejem28",
    title: "Use hooks en formularios",
    description: "Simplificando el codigo del formulario con usehook",
    component: React.lazy(() => import("../pages/Ejem28"))
  },
  {
    to: "Ejem29",
    title: "Rutas protegidas",
    description: "Redirigindo a una ruta protegida",
    component: React.lazy(() => import("../pages/Ejem29"))
  },
  {
    to: null,
    title: "Contexto",
    description: "",
    component:  React.lazy(()=> import("../pages/Home")),
  }, 
  {
    to: "Ejem30",
    title: "useContext",
    description: "uso de contexto",
    component: React.lazy(() => import("../pages/Ejem30"))
  },
];
