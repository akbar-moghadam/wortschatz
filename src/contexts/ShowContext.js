import { createContext, useState } from 'react';

//create a context, with createContext api
export const showDetailsContext = createContext();

const ShowDetailsProvider = (props) => {
        // this state will be shared with all components 
    const [show, setShow] = useState(true);
   

    return (
                // this is the provider providing state
        <showDetailsContext.Provider value={[show, setShow]}>
            {props.children}
        </showDetailsContext.Provider>
    );
};

export default ShowDetailsProvider;