import LinkDescription from "../components/LinkDescription";
import { routes } from "../routes/routesConfig";



export default function Home() {
    return <nav>
      {/*   <ul className="flex flex-row gap-4 flex-wrap">
        <li> 
        <LinkDescription 
            to="Ejem0" 
            title="Ejemplo 0: Programacion imperativa" 
            description="Muestra como se programaba en javascript antes de la llegada de react."
        />
        </li>
      </ul> */}

    <ul className="flex flex-col gap-4">
        {routes.map(({ to, title, description }) => (
          <li key={to} className="flex">
           {to ?
            <LinkDescription to={to} title={title} description={description} />
            :
            <span className="text-2xl font-bold text-orange-300">{title}</span>
            }
          </li>
        ))}
    </ul>
</nav>

}