import { motion } from "framer-motion";

function Card({ index, title, category, image, live, github }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm shadow-2xl"
    >
      {/* Project Image with smooth zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
        />
      </div>

      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-700"></div>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10 pointer-events-none">
        {/* Top bar: Index & Category */}
        <div className="flex justify-between items-start w-full">
          <span className="text-sm md:text-lg font-syne font-semibold px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 tracking-widest uppercase">
            {category}
          </span>
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:rotate-45 pointer-events-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>

        {/* Bottom bar: Title & Links */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full pointer-events-auto">
          <div>
            <div className="flex items-baseline gap-2 md:gap-4">
              <span className="text-xl md:text-3xl font-syne font-light text-white/50">
                {index} /
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-syne font-bold text-white tracking-tight group-hover:text-white/90 transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-gray-400 text-xs md:text-sm font-inter tracking-widest uppercase mt-3 pl-1">
              {category.split(" — ")[0]} <span className="text-white/30">•</span> {category.split(" — ")[1] || "2026"}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2 md:pt-0">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-black font-inter font-medium text-sm hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Live Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-inter font-medium text-sm backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;