//forEach()-----↓

const newForEach=(arr,func)=>{
    
    for(let i=0;i<arr.length;i++){
        func(arr[i],i,arr)
    }
    
}

//fill()-----↓

const newFill=(num,ini,fin)=>{

for(let i=0;i<array.length;i++){
    if(ini===i){
        array[i]=num
    }
    if(fin===i&&fin>ini){
        array[i]=num
    }
}
return array
}

//map()-----↓

const newMap=(arr,func)=>{
    let newArray=[]
    let execut=0
    for(let i=0;i<arr.length;i++){
        execut=func(arr[i],i,arr)
        newArray.push(execut)
    }
    return newArray
}

//some()-----↓

const newSome=(array, callback)=>{
let execut=0
for(let i=0;i<array.length;i++){
    execut=callback(array[i],i,array)
    if(execut===true){
        return true
    }
}
return execut
}
const isPositiv=(eleme,index,arr)=>{
if(eleme>0){
    return true
}
else{
    return false 
}
}

//find()-----↓

const newFind=(array,callback)=>{
    let execut=0
for(let i=0;i<array.length;i++){
    execut=callback(array[i],i,array)
    if(execut===true){
        return array[i]
    }
}
}

const maiorq10=(element,index,array1)=>{
if(element>10){
return true
}
else{
    return false
}
}


//findIndex()-----↓

const newfindIndex=(array,callback)=>{
    for(let i=0;i<array.length;i++){
        execut=callback(array[i],i,array)
        if(execut===true){
            return i
        }
    }
}

const menorq20=(element,index,array1)=>{
    if(element<20){
    return true
    }
    else{
        return false
    }
}

//every()-----↓

const newEvery=(array,callback)=>{
    let execut=0
    for(let i=0;i<array.length;i++){
       execut=callback(array[i],i,array)
    }
    return execut
}

const negativeNum=(elem,index,array)=>{

    if(elem< 0){
        return true
    }
    else{
        return false
    }
}

//filter()-----↓

const newFilter=(array,callback)=>{
    let newArray=[]
    let execut=0
    for(let i=0;i<array.length;i++){
        execut=callback(array[i],i,array)
        if(execut===true){
            newArray.push(array[i])
        }
    }
    return newArray
}

const maiorq5=(elem,index,arr)=>{
    if(elem>5){
        return true
    }
    else{
        return false
    }
}

// concat()-----↓
const newConcat = (arr, arr2, ...arr3) => {
    let result = arr
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i])  [1,2,3,4]
    }
    for (let i = 0; i < arr3.length; i++) {
        if (typeof arr3[i] === 'object') {
            for (let j = 0; j < arr3[i].length; j++) {
                result.push(arr3[i][j])
            }
        }
    }
    return result
}
console.log(newConcat([1,3,4,5],[1,2,3,4,5,6,7],1))

//includes()-----↓

const newIncludes=(num,array)=>{
    let condition=false
    for(let i=0;i<array.length;i++){
        if(array[i]===num){
            condition=true
        }
    }
    return condition
}

//indexOf()-----↓

const newIndexOf=(array,element,index)=>{
    let valid=0
    if(index<array.length){
    for(let i=index;i<array.length;i++){
        valid=array[i]
        if(array[i]===element){
            return i
        }
    }
    if(valid!==element){
        return -1
    }
}
else{
    return -1
}
}

//join()-----↓

const newJoin=(array,str)=>{
let string=""
for(let i=0;i<array.length;i++){
    string+=array[i]+""+str
}
return string

}


//reduce()-----↓

const newReduce=(array,callback,i)=>{
let execut=0
for(i=0;i<array.length;i++){
    execut+=callback(acc=0,array[i])
}
return execut
}

const somarArrays=(acumulador,ValAtu)=>acumulador+=ValAtu


console.log(newReduce([1,2,3,4],somarArrays))



