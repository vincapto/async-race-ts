export function getRandColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function getTimeCar() {
    return `Car_${Date.now().toString().split('').slice(-5)
        .join('')}`;
};