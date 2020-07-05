import React from 'react';
import useServerApi from '../useServerApi';
const { REACT_APP_USERLIST_URL } = process.env;

function Details(props) {

  const {info} = props;

  const [{data, isLoading, hasError}] = useServerApi(
  `${REACT_APP_USERLIST_URL}/${info.id}.json`,
  info
  );

  return (
      <div className="user_profile">
      {(!hasError) && (isLoading) && <div className='loading'>{'Loading...'}</div>}
      {data.avatar && <img className="user_avatar" src={data.avatar} alt={data.name}></img>}
      {data.name && <div className="user_name">{data.name}</div>}
      {data.details && Object.keys(data.details).map((item) => (
        <p key={item} className="user_details">
          {item}: {data.details[item]}
        </p>  
      ))}  
    </div>
  );
}

export default Details;
