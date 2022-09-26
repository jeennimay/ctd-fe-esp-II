export const FormatacaoTitulo = (texto: string) => {
    return texto
        .split(" ")
        .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join(" ");
};

export const FormatacaoTempo = (tempo: Date) => {
    const hora = new Date();
    const minutosDecorrido = Math.floor(
        (hora.getTime() - tempo.getTime()) / 60000
    );

    return minutosDecorrido
}