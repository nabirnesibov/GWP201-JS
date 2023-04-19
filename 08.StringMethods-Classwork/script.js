////// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ['quba', 'mingəcevir', 'bakı', 'qazaq', 'gence', 'şirvan']

let newText = arr1.map((item) => item[0].toUpperCase() + item.slice(1, -1) + item.at(-1).toUpperCase())
console.log(newText)





// 2.String and Array
let text = 'We are MERN-Stack developers'




//  1.Replace 'MERN Stack' with 'Front-end'.

console.log(text.replace("MERN Stack", "Front-end"))

// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!

console.log(text.toLocaleLowerCase().replaceAll("e", "a"))

// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!

console.log(text.concat("  in Microsoft!"))

// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
const newArr=[]
text.split("").map((item,index)=>item.toLowerCase()==="r"?newArr.push(index):newArr)
console.log(newArr)

// 5.Find index of first 'r' (excepting 'are').  // 9
console.log(text.toLocaleLowerCase().indexOf("r", 5))

// 6. "Mətn"də saitləri tapın və onları unikal dəyərləri ehtiva edən "newArr"-a əlavə edin. //['e','a','o']
// saitlər = ['a', 'i', 'o', 'u', 'e']



// 3.Cəm regionun sahəsini hesablamaq üçün 'calcArea()' adlı funksiyanı (ox funksiyası) yazın,
// əgər regionun uzunluğu 'arr2'-də 6-ya bərabərdirsə.
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },

]//let result = students.reduce((sum, current, index) => current.age > 10 ? sum + current.age : sum, 0)

// console.log(result);

let result=arr3.reduce((sum,current)=>current.region.length===6?sum+current.area:sum,0)
console.log(result)


// 4. 'arr3' artan qaydada çeşidləyin.

const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]

console.log(arr4.sort((a,b)=>a-b))



//5. Bütün iç-içə massivi bir massivdə toplayın.
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(Infinity))



// 6. "Rənglər" massivini rəng uzunluğu ilə çeşidləyin, əgər rəngin uzunluğu bir-birinə bərabərdirsə, onları əlifba sırası ilə sıralayın.
 const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']

console.log(colors.sort((a,b)=>a.length-b.length))