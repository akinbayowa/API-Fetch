import React, {   useEffect, useState  } from 'react';
import axios  from 'axios';
import Results from '../component/Results';
import '../Style/Search.css';



const Search =()=> {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  

  useEffect(()=>{
    setRepos([]);
    setDetails({});
  }, [username]);


  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  };


  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`
    }).then(resp => { 
      setLoading(false);
      setRepos(resp.data)});
  };
  
  function renderRepo(repo) {
    return (
      <div onClick={() => getDetails(repo.name)} key={repo.id}>
        <h2>
          {repo.name}
        </h2>
      </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    axios({
      method: 'get',
      url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then(res => {
      setDetailsLoading(false);
      setDetails(res.data)
    });
  }
  return(
      <>
      <div className='searchInput'>

        <input 
        placeholder='Enter your username'       
        value={username}
        onChange={e => setUsername(e.target.value)} 
        /> 
        <button onClick={handleSubmit}>{loading ? "loading....": "Search"}</button>
      </div>
        <div>
            {repos.map(renderRepo)}
        </div>

        <div>
        <Results details={details} loading={detailsLoading} />
        </div>

        
    </>
  
  )
}
export default Search;