export class Usuario {
  constructor(
    public cpfCnpj: string,
    public nome: string,
    public email: string,
    public telefone: string,
    public logradouro: string,
    public numero: number,
    public uf: string,
    public municipio: string
  ) {}
}
