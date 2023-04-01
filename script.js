let user = {
    name : "Alex",
    age : 18,
    isConfirm: true ,
    lastOnline: {
        hours : 12,
        minutes : 1 ,
        seconds : 2 
    },
    GetStrLastOnline(){
        console.log(`last online: ${user.lastOnline.hours} `)

    }

}

user.GetStrLastOnline()



