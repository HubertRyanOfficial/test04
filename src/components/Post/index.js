import React, {memo} from 'react';

// * modules

// * components

// * utils

import './styles.css';

//

const picturesProfile = [
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

function Post({data}) {
  let backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  let randomPicture = Math.floor(Math.random() * 5);

  return (
    <a className="postComponentLink" href={`/posts/${data.id}`}>
      <main className="postComponentContainer" style={{backgroundColor}}>
        <div className="postHeader">
          <img
            className="postHeaderImg"
            src={picturesProfile[randomPicture]}
            alt=""
          />
          <strong>{data.title}</strong>
        </div>

        <p>{data.body.slice(0, 100) + ' (Leia mais)'}</p>
      </main>
    </a>
  );
}

export default memo(Post);
// + Desenvolvido por Hubert Ryan
