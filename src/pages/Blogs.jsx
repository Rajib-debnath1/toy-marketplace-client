import useTitleRoutes from "../shared/hooks/useTittle";

const Blogs = () => {
    useTitleRoutes("Blogs")
    return (
        <div className="m-5">
            <h2 className="text-center text-3xl mb-4">Some important Q and A</h2>
            <div>
                <h5 className="mb-2 font-semibold">Q1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
                <p className="mb-4">Ans: When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>
                <h5  className="mb-2 font-semibold">Q2.Compare SQL and NoSQL databases?</h5>
                <p className="mb-4">Ans:  SQL is still widely used for querying relational databases, where data is stored in rows and tables that are linked in various ways. NoSQL is a non-relational database, meaning it allows different structures than a SQL database not rows and columns and more flexibility to use a format that best fits the data.  </p>
                <h5  className="mb-2 font-semibold">Q3.What is express js? What is Nest JS ?</h5>
                <p className="mb-4">Ans: Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI. </p>
                <h5  className="mb-2 font-semibold">Q4.What is MongoDB aggregate and how does it work ?</h5>
                <p className="mb-4">Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. </p>
            </div>
        </div>
    );
};

export default Blogs;