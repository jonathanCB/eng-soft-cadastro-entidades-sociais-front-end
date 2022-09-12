export class EntidadeSocial {
  constructor(
    public id: number,
    public nome: string,
    public objetivos: string,
    public email: string,
    public telefone: string,
    public uf: string,
    public municipio: string,
    public logradouro: string,
    public numero: number,
    public token_usuario: string
  ) {}
}
