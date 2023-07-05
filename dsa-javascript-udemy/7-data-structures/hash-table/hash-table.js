class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size);
    }

    //_(underscore) significa privado
    _hash(key){
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;        
        }
        return total;
    }

    //acepta una key y un valor
    set(key, value) {
        //hash la key
        const hashIdx = this._hash(key);
        //almacena el par key:value en la hash table usando separate chaining
        // si el espacio esta vacio en la key crea un array en ese espacio
        if(!this.keyMap[hashIdx]){
            this.keyMap[hashIdx] = [];
        }
        //push el key,value si el key no esta repetido
        if(this.keyMap[hashIdx].length === 1){
            this.keyMap[hashIdx].push([key,value]);
        }
        else {
            for(let i = 0; i < this.keyMap[hashIdx].length; i++){
                if(key === this.keyMap[hashIdx][i][0]){
                    return "invalid [key]. key already taken";
                }
            }
            this.keyMap[hashIdx].push([key,value]);
        }
    }

    // acepta un valor
    get(key){
        //hash la key
        const hashIdx = this._hash(key);
        //recupera el key:value de la hashtable
        if(this.keyMap[hashIdx]){
            for(let i = 0; i < this.keyMap[hashIdx].length; i++){
                if(key === this.keyMap[hashIdx][i][0]){
                    return this.keyMap[hashIdx][i][1];
                }
            }
        }
        //si no hay valor retorna undefined
        return undefined
    }

    keys(){
        //Crear array para guardar las keys
        let res = [];
        //loop el array y sus sub arrays
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    //agregar las keys al array creado
                    res.push(this.keyMap[i][j][0]);
                }
            }
        }
        //agregar las keys al array creado
        //retornar el array
        return res;
    }


    values(){
        //crear array para guardar los valores
        let res = [];
        //loop el array y sus sub arrays
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j <  this.keyMap[i].length; j++){
                    // agrega los valores unicos (no duplicados) al array creado
                    if(!res.includes(this.keyMap[i][j][1])){
                        res.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        
        //retorna el array
        return res;
    }
}


let ht = new HashTable(3);
ht.set("kobe", 24);
ht.set("mj", 23);
ht.set("iverson", 3);
ht.set("iverson", 3);
ht.set("tmac", 3);
ht.set("doncic", 13423)

console.log(ht.keys());
console.log(ht.values())
