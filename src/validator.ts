const TITULO_MIN_CARACTERES = 5;
const TITULO_MAX_CARACTERES = 100;

function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim().length === 0) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    const tituloTratado = titulo.trim();

    return true;
}

export default validarChamado;
