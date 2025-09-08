import ButtonComponent from "./button";

export default async function Contact() {
  console.log("Hey is this in the server or client?");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const post = await response.json();
  console.log(post);
  return (
    <main>
      <h1>Contact Page</h1>
      <p>This is the Contact page of the application.</p>
        <ButtonComponent></ButtonComponent>
      </main>
  );
}