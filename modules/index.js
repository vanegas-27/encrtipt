
let hashTable;


export function createHashTable(){

    const simbolos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789°!#$%&/()=?¡¿'¬|,;.:-_}]{[^+*~´¨`";

    const array = simbolos.split('');


    hashTable = array.map(item => {

        let hash = "";

        for(let i = 0;i < 7;i++){
            const randomNumber = Math.floor(Math.random() * (array.length - 1) + 1); //genera un numero ramdon
            hash += array[randomNumber];
        }

        return {item , hash};
    });
    

}




export function encript(clave){

    const keys = clave.split('');

    let pass = "";

    for (let i=0 ; i < keys.length ; i++){

        for (const dic of Object.values(hashTable)) {

            if(dic.item == keys[i]) {
                pass += dic.hash;
            }
            
        }
    
    }

    return pass;
}






export function desencript(hash){

    let password =  "";

    const longitud  = hash.length / 7;

    let start = 0;
    let end = 6;

    for(let i = 0 ; i < longitud; i++){

        const copyHash = hash.slice(start,end + 1);

        start = end + 1;
        end += 7;
        
        const resul = hashTable.find(i => i.hash == copyHash);

        if(resul){
            password += resul.item;
        }
        

    }

    return password;

}

