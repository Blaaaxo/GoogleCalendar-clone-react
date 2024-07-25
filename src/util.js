import dayjs from "dayjs";

// Exporta una función llamada getMonth que toma un parámetro opcional 'month'
export function getMonth(month = dayjs().month()){
    const year = dayjs().year();
    const firstDayOfTheMouth = dayjs(new Date(year, month, 1)).day();

    // Inicializa currentMonthCount con un valor negativo para ajustar el primer día del mes
    let currentMonthCount = 0 - firstDayOfTheMouth;

    // Crea una matriz de 5 semanas (filas), cada una con 7 días (columnas)
    const daysMatrix = new Array(5).fill([]).map(() =>{
        return new Array(7).fill(null).map(() => {

            currentMonthCount++;

            // Crea un objeto dayjs para cada día en la matriz
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })

    // Devuelve la matriz de días
    return daysMatrix;
}