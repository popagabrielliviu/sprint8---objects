
    // const oldObject = {
        // a: 1,
        // b: 2
    // };
 

    // 1. let newObject = { a: oldObject.a };

    // console.log(newObject);



    // 2. const {b, ...rest} = oldObject;
    // const objectClone = {...rest};

    // console.log(objectClone);


    // primele 2 metode functioneaza si le-am inteles. Nu pot intelege cum folosesc o functie pt aceasta tema. Exemplul de mai jos este inspirat de pe net, dar nu functioneaza
    
    function object (a,b) {
        const oldObject = {
            a: 1,
            b: 2
        };

        return oldObject;

    }

    const newObject = (function({ b, ...object }) {

        return object;


    })


    console.log(newObject);
