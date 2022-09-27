import { useGetCurrentTimeQuery } from "../graphql";

const CurrentTime = () => {
  const { loading, error, data } = useGetCurrentTimeQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>{data?.getCurrentTime?.date}</p>
    </div>
  );
};

export default CurrentTime;
