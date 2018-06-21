/**
 * 
 */
(function() {
    
    const firstFunc = name => {
        return "Hi ${name}, Welcome to Javascript";
    }
    console.log(firstFunc('Raj'));
    
    const secondFunc = name => "Hi ${name}, Without return keyword";
    console.log(secondFunc('Raj'));
    
    //ES5
    const myArray = ['tony', 'sara', 'ekaa', 5];
    let firstArray = myArray.map(function(item) {
        return item;
    });
    console.log(firstArray);
    
    //ES6
    let secondArray = myArray.map(item => item);
    console.log(secondArray);
    
    const defaultParamtersFunc = (name, age=32) => {
        return "Hi ${name}, With ${age} years, you did great achievement";
    }
    
    console.log(defaultParamtersFunc('Raj'));
    console.log(defaultParamtersFunc('Ekaa', 18));
    
    const contacts = {
            name: 'Raj',
            familyName: 'Kumar',
            age: 32
    };
    
    //ES5
    let name = contacts.name;
    console.log(name);
    
    //ES6
    //if we want to use different name, use colon
    let {es6Name, birthName:familyName} = contacts;
    console.log(es6Name);
    console.log(birthName);
    
    const names = ['Ekaa', 'Raj', 'Others'];
    let [wife] = names;
    console.log(wife);
    
    
    const myPromise = () => {
        return new Promise((resolve, reject) => {
            resolve('The promise executed successfully');
        });
    };
    
    console.log(myPromise());
    
    const url='https://jsonplaceholder.typicode.com/posts';
    const getData = url => {
        return fetch(url);
    }
    
    getData(url).then(data => data.json()).then(result => console.log(result));
    
})();