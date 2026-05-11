import { motion } from "framer-motion";

function Card({ title, desc, image, live, github }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative h-90 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-purple-500/20"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="text-gray-300 text-sm mt-2 leading-relaxed line-clamp-2">
          {desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium bg-purple-500 rounded-lg hover:bg-purple-600 transition shadow-lg shadow-purple-500/30"
          >
            Live Demo →
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            GitHub →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;