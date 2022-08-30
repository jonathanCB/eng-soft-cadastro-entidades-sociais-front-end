export class Usuario {
  private _token!: string;
  private _senha!: string;
  private _confirma_senha!: string;

  constructor(
    public nome: string,
    public cpfCnpj: string,
    public email: string,
    public telefone: string,
    public logradouro: string,
    public numero: number,
    public uf: string,
    public municipio: string
  ) {}

  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }
  public get senha(): string {
    return this._senha;
  }
  public set senha(value: string) {
    this._senha = value;
  }
  public get confirma_senha(): string {
    return this._confirma_senha;
  }
  public set confirma_senha(value: string) {
    this._confirma_senha = value;
  }
}
