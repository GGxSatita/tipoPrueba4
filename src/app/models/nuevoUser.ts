export type NuevoUser = {
  firstName : string,
  lastName : string,
  age : number,
  username : string,
  password : string,
  birthDate :string,
  gender : 'male' | 'female'
}
export type RegistroRespuesta = NuevoUser & {
  id : number
}
