import React, { useState, useEffect } from 'react';
import './App.css';

function App({login}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) {
      return;
    } else {
      setLoading(true);
    }

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('something went wrong.');
        }
      })
      .then(setData)
      .catch((err) => {
        console.log('err', err);
        setError(err);
        console.log('error', error);
      })
      .finally(setLoading(false));
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  
  if (!data) return <h1>No user data</h1>;

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img 
          alt={data.login}
          src={data.avatar_url} />
      </div>
    );
  } else {
    return <div>No User Avaliable</div>
  }
}

export default App;
