import { useEffect, useState } from "react";

type Repository = {
  thumbImage:image;
  description:string;
  title:string;
}


function App(){
  const [repositories,setRepositories] = useState<Repository[]>([])
  useEffect(()=>{
    fetch('https://api-fake-blog.herokuapp.com/postagens')
  .then(response => response.json())
  .then(data => {
    setRepositories(data);
  })
  },[])
  return(
    <ul>
      {repositories.map(repo =>{
        return(
          <li key={repo.title}>
            <strong>{repo.title}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}