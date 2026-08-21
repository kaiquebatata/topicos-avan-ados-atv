const TITULO_MIN_CARACTERES = 5;
const TITULO_MAX_CARACTERES = 100;

function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim().length === 0) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    const tituloTratado = titulo.trim();

    if (tituloTratado.length < TITULO_MIN_CARACTERES) {
        throw new Error(
            `O título do chamado deve possuir no mínimo ${TITULO_MIN_CARACTERES} caracteres.`
        );
    }

    if (tituloTratado.length > TITULO_MAX_CARACTERES) {
        throw new Error(
            `O título do chamado deve possuir no máximo ${TITULO_MAX_CARACTERES} caracteres.`
        );
    }

    return true;
}

export default validarChamado;
