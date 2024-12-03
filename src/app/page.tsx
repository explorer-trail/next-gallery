import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const imageUrls = [
    "https://utfs.io/f/hPiYQFO9Rl6jThvDrfg8vtY7nUs4K0BrquFlm9hapPjOLy3x",
    "https://utfs.io/f/hPiYQFO9Rl6j0KwasV73iCWRVTgfkOJdotlz1L6Z5ub0FjwY",
    "https://utfs.io/f/hPiYQFO9Rl6jh2V8YvO9Rl6jG5hspA1VDtgFvfNbnaCmkoQ7",
    "https://utfs.io/f/hPiYQFO9Rl6jCuaBVMzteWhHd56op7ilPwf2Z3rVm8cXQS10",
    "https://utfs.io/f/hPiYQFO9Rl6jGQs5iAgM3d1XTKNU5CVJxz4FoWDO7ZBEkcws",
    "https://utfs.io/f/hPiYQFO9Rl6jggooTdpyqvHN81EPSLorlsfbzReTa49dZQUh",
  ];

  const mockImages = imageUrls.map((url, index) => {
    return {
      id: index,
      url,
    };
  });

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id} className="w-1/2 p-4">
            <div>{post.name}</div>
          </div>
        ))}

        {mockImages.map((img) => (
          <div key={img.id} className="w-1/2 p-4">
            <img src={img.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
