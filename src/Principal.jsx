import { useState } from "react";
import { ColorChanger } from "./components/ColorChanger";
import { Navbar } from "./components/Navbar";
import { tasks } from "./utils/tareasData";
import { TaskList } from "./components/TaskList";



export const Principal = () => {

    const [ColorCuadrado, CambiarColor] = useState('black');

    const ColorAzul = () => {
        CambiarColor('blue');
    }

    const ColorRojo = () => {
        CambiarColor('red');
    }

    return (
        <section>
            <Navbar />
            <article className='container'>
                <h1>Crea un componente ColorChanger que muestre un cuadrado de color. Pasa un prop llamado color al componente que determine el color del cuadrado. Agrega estilos para ajustar el tamaño del cuadrado y aplicar el color recibido.
                </h1>
                <ColorChanger color={ColorCuadrado} />
                <div className="botones">
                    <button onClick={ColorAzul}>Color Azul</button>
                    <button onClick={ColorRojo}>Color Rojo</button>
                </div>
                <h1>Crea un componente TaskList que tome un prop llamado tasks, que será un array de objetos de tarea con propiedades id, text y completed. Renderiza una lista de tareas con el texto de cada tarea. Aplica estilos para resaltar las tareas completadas.
                </h1>
                <div className="contenedor-tareas">
                    {
                        tasks.map((task) => (
                            <TaskList
                                key={task.id}
                                {...task} />
                        ))
                    }
                </div>
            </article>
        </section>
    )
}