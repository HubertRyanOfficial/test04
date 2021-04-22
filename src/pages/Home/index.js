import React, {useEffect, useState} from 'react';

// * modules

// * components

import Post from '../../components/Post';

// * utils

import {api} from '../../config/api';

import './styles.css';

//

function Home() {
  const [allPosts, setAllPosts] = useState([]);

  //

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await api.get('/posts');
      setAllPosts(response.data);
    } catch (error) {
      alert('Houve um error!');
      setAllPosts([]);
    }
  }

  function handleComponentFunction() {
    console.log('Opa');
  }

  return (
    <div className="homeContainer">
      <main className="homeList">
        {allPosts.map(post => (
          <Post
            key={post.id}
            data={post}
            handleFunction={handleComponentFunction}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
// + Desenvolvido por Hubert Ryan
