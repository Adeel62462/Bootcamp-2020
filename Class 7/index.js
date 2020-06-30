console.log("Before Preparing");

function prepareFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is Preparing");
            resolve("Food is prepared!");
        },100);
    });
}

function prepareCake() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cake is Preparing");
            resolve("Cake is prepared!");
        },100);
    });
}

async function startProcess() {
    try{
        let food = await prepareFood();
    console.log(food);
    let cake = await prepareCake();
    console.log(cake);
    }    
    catch(error){
        console.log(error);
    }
}

startProcess();


console.log("After Preparing");
