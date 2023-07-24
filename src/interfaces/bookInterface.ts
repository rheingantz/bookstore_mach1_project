interface IBookPost {
    nome: string,
	codigo_barras: string,
	id_editora: number,
	preco: number,
	estoque: number,
	id_idioma: number
};

interface IBookPut {
	nome?: string,
	codigo_barras?: string,
	id_editora?: number,
	preco?: number,
	estoque?: number,
	id_idioma?: number
}

export {IBookPost, IBookPut};