export const TaskList = (props) => {

    const { id, text, completed } = props

    return (
        <div className={`card-tarea ${completed == false ? ' incompleta' : ' completa'}`} >
            <div>
                <h2>Tarea {id}</h2>
                <p>{text}</p>
                <p>{`${completed == false ? 'Tarea incompleta' : 'Tarea completa'}`}</p>
            </div>
        </div>
    )
}