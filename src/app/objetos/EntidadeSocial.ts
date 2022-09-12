export class EntidadeSocial {
  constructor(
    public nome: string,
    public finalidade: string,
    public email: string,
    public telefone: string,
    public uf: string,
    public municipio: string,
    public logradouro: string,
    public numero: number,
    public token_usuario: string
  ) {}
}
