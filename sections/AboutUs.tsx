export interface Props {
  subtitle?: string;
  subtitle2?: string;
}

export default function AboutUs({
  subtitle =
    "Our NFTs are based on blockchain technology, which guarantees the authenticity and exclusive ownership of each work. Each piece is unique and cannot be replicated, making it a true expression of creativity and value.",
  subtitle2 =
    "In our marketplace, you'll have access to a variety of talented and emerging artists. From stunning illustrations to immersive animations and even unique music, we have something for every taste and style",
}: Props) {
  return (
    <>
      <div class="flex flex-row w-full justify-around items-center">
        <div class="flex flex-col p-5">
          <h1 class="text-4xl mb-5">About US</h1>
          <p class="text-sm">{subtitle}</p>
          <p class="text-sm">{subtitle2}</p>
        </div>
        <img
          src="https://i.imgur.com/tFWPnnz.jpg"
          class="w-[200px] h-[200px] mr-4"
        />
      </div>
    </>
  );
}
