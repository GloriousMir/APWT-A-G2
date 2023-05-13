export default function SSR({ data }) {
  return (
    <>
      <h1>This SSR request!</h1>
      <ul>
        {Array.isArray(data) &&
          data.map((item) => (
            <li key={item.id}>
              <p>Name: {item.StudentName}</p>
              <p>E-mail: {item.StudentEmail}</p>
              <p>Institute: {item.InstituteName}</p>
              <p>Address: {item.Address}</p>


            </li>
          ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/admin/allstudent");
  const data = await response.json();

  return { props: { data } };
}
