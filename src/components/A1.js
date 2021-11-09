import React, { useContext } from "react";
import "../styles/a1.scss";
import { Title } from "../data/a1";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Suba1 from "./suba1";
import { showDetailsContext } from "../contexts/ShowContext";



function A1()  {
  const [show, setShow] = useContext(showDetailsContext);
  
  const { path, url } = useRouteMatch();
  let q = path.slice(1,path.lastIndexOf("/"));
  
  const data = Title.map((item) => (
    <div className="item-container" key={item.id}>
      <Link
        to={`${url}${item.link}/`}
        className="link"
        onClick={() => setShow(!show)}
      >
        <div className="pic">
          <img src={item.pic} alt="" />
        </div>
        <div className="label">
          <span>{item.text}</span>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="a1-container">
      <div className={show ? "subject-container" : "subject-container-hide"}>
      <div className="title">
        <h1>{q.toUpperCase()}</h1>
      </div>
        <div className="subject">{data}</div>
      </div>
      <Switch>
        
        <Route path={`${path}:slug/`}>
          <Suba1 />
        </Route>
        
      </Switch>
    </div>
  );
};

export default A1;
