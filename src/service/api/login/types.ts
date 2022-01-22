export interface LoginParams {
    userName: string
    password: string | number
}
export interface LoginApi {
    login: (params: LoginParams) => Promise<any>
}