import React, {useRef, useEffect } from 'react';

const Hookref = () => {

    const exampleRef = useRef(null); //null dlatego, że można refa złapać po wyrenderowaniu strony

    useEffect(() => {
        exampleRef.current.value = "tak się robi refy!";
    }, []);

    return (
          <input type="text" ref={exampleRef}
            className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
    );
}

export default Hookref;
