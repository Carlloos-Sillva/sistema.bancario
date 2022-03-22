export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.valido(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false;
        
    }

    static valido(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }

}