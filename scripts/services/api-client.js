// HTTP/HTTPS calls
import URL from '../utils/constant.js';

async function makeNetworkCall(){
    // METHOD 1: nested promise or nested callback function -> callback hell / pyramid function
    // It will run without using async keyword before function
    // const promise = fetch(URL);
    // console.log('promise is: ', promise);
    // promise.then(response=>{
    //     console.log('response is: ', response);
    //     //promise2 is dependent promise or nested promise
    //     const promise2 = response.json(); //Deserialization (JSON to Object)
    //     promise2.then(data=>console.log('data is ', data))
    //     .catch(e=>console.log('JSON parse Error', e))
    // }).catch(err=>{
    //     console.log('Error is ', err)
    // })

    // Method 2: await means it'll wait until response comes, behave like sync method
    // async keyword uses here along with function, means async represent that caller nei iss function ko async mehtod kaha hh means while calling this fucntion we get promise & handle using then and catch block
    // below declaration runs in sync manner
    try{
        const response = await fetch(URL); // Block
        const object = await response.json(); //Block
        return object // Wrap Promise
    }   
    catch(err){
        console.log('some problem in API call ', err)
        throw err; // throw err to caller
    }
}

export default makeNetworkCall;
