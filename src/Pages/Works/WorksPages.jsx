import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import dataProjects from '../../Components/StudyCases/data/projects';

const WorksPage = () =>{
  return (
    <div className="content">
      <h1>Works</h1>
      <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
      <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
      <div>
        {dataProjects.map((work) => (
          <NavLink key={work.id} to={'/works/' + work.url}> {work.name} </NavLink>
        ))}
      </div>
      <Outlet />{/* affiche l'affichages possible */}
    </div>
  )
};
export default WorksPage;