import React, { useState } from 'react';
import Welcome from './Welcome';

const ListComponent = () => {
  const [users, setUsers] = useState([
    { name: "홍길동", age: "12", height: "180" },
    { name: "홍길막", age: "51", height: "167" },
    { name: "홍길선", age: "1321", height: "10" },
  ]);

  return (
    <div>
      {users.map((user) => {
        return <Welcome username={user.name} age={user.age}></Welcome>;
      })}
    </div>
  );
};

export default ListComponent;