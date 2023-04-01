let user = {
    name : 'John',
    age : 18 , 
    isConfirmed : false,
    lastOnline : {
        hours : 12,
        minutes :  29 ,
        seconds : 60
    },
    setConfirm (){
        this.isConfirmed = true
    },
    setAge(age){
        this.age = age
    },
    getYearBirthDate(){
        console.log(`Рік народження ${2023-this.age}  `)
    },
    getStrLastOnline(){
        console.log(`Last Online ${this.lastOnline.hours} hours ${this.lastOnline.minutes} minutes ${this.lastOnline.seconds} seconds ago`);
    }
}

const getCountUsers = (users) => (users.length) 
const getSumOrders = (users) => {
    let sum = 0
    for(let i = 0; i < users.orders.length; i++){
        sum += users.orders[i].price 
    }
    console.log(`User ${users.name} has ${sum}`)
}


let userlist = [
    {
        name : 'John',
        age : 18 , 
        isConfirmed : false,
        orders : [
            {
                product : 'TV',
                price : '3000',
                count : 1,
            },
            {
                product : 'PS5',
                price : '7000',
                count : 1,
            }
        ],
        lastOnline : {
            hours : 12,
            minutes :  29 ,
            seconds : 60
        },  
    },
    {
        name : 'Alex',
        age : 20 , 
        isConfirmed : false,
        orders : [],
        lastOnline : {
            hours : 9,
            minutes :  12 ,
            seconds : 54
        },
    }
]

getSumOrders(userlist[0])
