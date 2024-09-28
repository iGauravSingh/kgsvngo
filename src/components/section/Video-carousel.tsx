import { Movie, randomMoviesSet1 } from "../../movies";

import { motion } from "framer-motion";

export const VideoCarousel = () => {
  return (
    <div className=" mt-10 w-screen">
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.4 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <div className="[--carousel-offset:-32px] [--duration:90s]">
          <SmallVideoCarousel movies={randomMoviesSet1} />
        </div>
      </motion.div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex">
        {movies.map((movie, index) => (
          <div
            className="aspect-video w-[30vw] shrink-0 md:w-[20vw]"
            key={`${movie.name}-${index}`}
          >
            <img
              className="h-full w-full object-cover"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
