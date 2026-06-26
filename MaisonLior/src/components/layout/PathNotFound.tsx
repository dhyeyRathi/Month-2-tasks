import { Helmet } from "react-helmet-async";
const NotFound = () => {
  return (
    <>
    <Helmet>
      <title>Oops Lost SomeWhere? | Maison Lior</title>
      <meta
          name="description"
          content="Return to Home Page"
        />
    </Helmet>
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
       
      <div className="max-w-md text-center">
        <p className="eyebrow">Lost in the garden</p>

        <h1 className="font-heading text-espresso mt-6 text-7xl">
          404
        </h1>

        <p className="mt-6 text-sm font-body text-muted-foreground">
          The page you're looking for has wandered off into another
          celebration.
        </p>

        <a
          className="mt-8 inline-flex items-center border border-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-ivory"
          href="/"
        >
          Return home
        </a>
      </div>
    </div></>
  );
};

export default NotFound;