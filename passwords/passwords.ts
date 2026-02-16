const currentDate = new Date().getFullYear(); // 2026, 2027, 2028, 2029, 2030.....

export const paraComecar = `PSEL_${currentDate}` as const;
export const numerosBinarios = `#Z3NS3NH4_${currentDate}#` as const;
export const sequenciaComandosHover = "3-4-4-3-4-2-4-3-4-2-2-2-1-1" as const;
export const sequenciaSimbolos = "2-1-3-4" as const;
export const fioParaDesconectar = "2" as const;
export const fiosColoridos = {
  modulo_um: "2-1-3",
  modulo_dois: "3-2-2-4",
  modulo_tres: "3-2-3-4-1",
} as const;

export const passwords = {
  paraComecar,
  numerosBinarios,
  sequenciaComandosHover,
  sequenciaSimbolos,
  fioParaDesconectar,
  fiosColoridos,
};
