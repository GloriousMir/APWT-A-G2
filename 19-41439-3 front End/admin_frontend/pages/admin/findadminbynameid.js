import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyLayout from '@/pages/component/layout';
import UserLayout from '../component/admindata';

export default function MyPage({ data }) {
  const [ inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'findadminbynameid',
      param: { inputValue: inputValue }
    });
  }

  return (
    <>
     <MyLayout />
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data.status == null? 
   <UserLayout data={data}/>
      : data.status }
    </>
  );
}

export async function getServerSideProps({ param }) {
  const inputValue = param.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/admin/findadminbynameid/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"enter valid user id"}
    }
  };
}
}