import React, {useEffect, useState} from 'react';

// * modules

import {useParams} from 'react-router-dom';

// * components

// * utils

import {api} from '../../config/api';

import './styles.css';

//

const picturesProfile = [
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

function Posts() {
  let backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  let randomPicture = Math.floor(Math.random() * 5);

  const {id} = useParams();

  //

  const [data, setData] = useState({});

  //

  useEffect(() => {
    getInfoFromPost();
  }, []);

  async function getInfoFromPost() {
    try {
      const response = await api.get(`/posts/${id}`);
      setData(response.data);
    } catch (error) {
      alert('Houve um error!');
    }
  }

  return (
    <div className="homeContainer">
      <main className="homeList">
        <main className="postComponentContainerItem" style={{backgroundColor}}>
          <div className="postHeader">
            <img
              className="postHeaderImg"
              src={picturesProfile[randomPicture]}
              alt=""
            />
            <strong>{data.title}</strong>
          </div>

          <p>{data.body}</p>
        </main>
      </main>
    </div>
  );
}

export default Posts;
// + Desenvolvido por Hubert Ryan
