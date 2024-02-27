export const ColorChanger = ({ color }) => {

    const colorCuadrado = {
        backgroundColor: color
    };

    return (
        <div className="cuadrado" style={colorCuadrado}></div>
    )
}