// PLEASE READ THE COMMENTS :)

// Can someone please help! haha I spent hours with this api and keep getting errors in the console.
// The first lines of code (in comments) is another method I have tried. The current active code is my most recent attempt. 
// If anyone can correct it and explain it to me so I can stop going insane that would be awesome. 

// FIRST METHOD

// function request() {
//     then((response) => {
//         if (!response.ok) {
//             throw new Error('HTTP error! Status: ${response.status}');
//         }

//         return response.body();
//     })
//     URL: 'http://gateway.marvel.com/docs';
//     Params: {
//         method: 'GET';
//         headers: 'Access-Control-Allow-Origin';
//         apikey: "b54dd6a59e90a62162c8b014c6c598e8";
//         ts: "date.now()";
//         hash: "md5(ts+baad4fa42abb871344cefe7a070a43eae292130d+b54dd6a59e90a62162c8b014c6c598e8)";
    // }
    // Headers: {
    // Accept: "*"
    // }
// }
// console.log(Response.body)
// console.log(Response.headers)
// console.log(Response.status)
// console.log(Response.json)



// Other Method
// Open the HTML in browser and check console, I think we are close? maybe... 
async function postData(url = 'http://gateway.marvel.com/docs', data = {}) {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(data)
    });
    return response.json();
  }
  
postData('http://gateway.marvel.com/docs', { answer: 'any'})
    .then((data) => {
      console.log(data); 
    });

fetch('http://gateway.marvel.com/docs'), {
    credentials: 'include'
}
