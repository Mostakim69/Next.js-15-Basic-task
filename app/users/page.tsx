
export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json();
  return (
    <div>
      <h1>user Page</h1>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>
            <h3> {user.name}</h3>
          </li>
        ))}
      </ul>
      <p>This is the users page of the application.</p>
    </div>
  );
}