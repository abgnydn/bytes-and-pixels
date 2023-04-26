import { AnyObject } from "yup";

export default function ErrorPage({ error }: AnyObject) {
  console.log(error);
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {" "}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
