import { useState } from 'react';
import dataProjects from './data/projects';
import { useParams } from "react-router-dom";

const StudyCase = () => {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    if (index < 2){
      setIndex(index + 1);
    }else {
      setIndex(index);
    }
  }

  function handlePreviousClick() {
    if (index > 0){
      setIndex(index - 1);
    }else {
      setIndex(index);
    }
  }

  // let projects = dataProjects[index];
  // const [projects, setProjects] = useState(undefined);
  
  const {url} = useParams();
  const projects = dataProjects.find(projects => projects.url === url);
  
  return(
    <div>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <h1>
        {projects.id} - {projects.name}
      </h1>
      <h2>
        {projects.title}
      </h2>
      <h3>
        {projects.description}
      </h3>
    </div>
  )
};

export default StudyCase;