import { Address } from './address.model';


export class User {
    id: String;
    fullName: String;
    fantasyName: String;
    email: String;
    cpf_cnpj: String;
    password: String;
    confirmPassword: String;
    phoneNumber: String;
    phoneNumber2: String;
    address: Address;
}