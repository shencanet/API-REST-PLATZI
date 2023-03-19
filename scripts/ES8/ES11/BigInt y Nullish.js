/*Big Int, enteros muy grandes

El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt*/
const number1 = 45n
const number2 = BigInt(45)

typeof 45n // 'bigint'
/*
JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER.*/

