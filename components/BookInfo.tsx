import { useGetBooksQuery } from "../graphql/graphql";

const BookInfo = () => {
  const { loading, error, data } = useGetBooksQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>
        {data?.getBooks?.map((book) => (
          <div key={book?.id}>
            {book?.name} - {book?.author}
          </div>
        ))}
      </p>
    </div>
  );
};

export default BookInfo;
