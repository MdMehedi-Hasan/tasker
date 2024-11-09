import { useGetAllPostsQuery } from "../redux/api/baseApi";

const Posts = () => {
  const { data } = useGetAllPostsQuery();
  console.log({ data });
  return (
    <div>
      {data?.map((item) => (
        <div key={item?.id} className="bg-zinc-500 rounded my-10 text-center text-xl text-white">
          <h1>{item?.id}</h1>
          <p>{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
