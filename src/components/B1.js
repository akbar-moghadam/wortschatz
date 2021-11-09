import React,{useContext} from 'react'
import { showDetailsContext } from "../contexts/ShowContext";
import {  useRouteMatch } from "react-router-dom";
const B1 = () => {
    const [show] = useContext(showDetailsContext);
    const { path } = useRouteMatch();
  let q = path.slice(1,path.lastIndexOf("/"));
    return (
        <div className="a1-container">
        <div className={show ? "subject-container" : "subject-container-hide"}>
        <div className="title">
          <h1>{q.toUpperCase()}</h1>
        </div>
          {/* <div className="subject">{data}</div> */}
        </div>
        {/* <Switch>
          
          <Route path={`${path}:slug/`}>
            <Suba1 />
          </Route>
          
        </Switch> */}
      </div>
    )
}

export default B1
