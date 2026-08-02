import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ZoomIn } from 'lucide-react';

const GALLERY_DATA = [
  { id: 1, type: 'hackathon', src: '/hacknova.jpeg', title: 'HackNova 2024' },
  { id: 2, type: 'certificate', src: '/gsa.jpeg', title: 'Google Student Ambassador Program' },
  { id: 3, type: 'event', src: '/event.jpeg', title: 'Event' },
  { id: 4, type: 'hackathon', src: '/innovision.jpeg', title: 'Innovision' },
  { id: 5, type: 'certificate', src: '/guvi.jpeg', title: 'Ui/UX' },
  { id: 6, type: 'event', src: '/event 1.jpeg', title: 'Event Coordinator' },
];

const CATEGORIES = ['All', 'Hackathons', 'Certificates', 'Events'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = GALLERY_DATA.filter(img => {
    if (filter === 'All') return true;
    if (filter === 'Hackathons' && img.type === 'hackathon') return true;
    if (filter === 'Certificates' && img.type === 'certificate') return true;
    if (filter === 'Events' && img.type === 'event') return true;
    return false;
  });

  return (
    <section id="gallery" className="py-24 px-6 sm:px-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">
              Gallery <span className="text-neutral-500">.</span>
            </h2>
            <p className="text-gray-400 text-lg">Moments from hackathons, events, and milestones.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full border transition-all text-sm font-medium ${filter === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-outfit font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                  <span className="text-white/70 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 capitalize">{img.type}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold font-outfit text-white">{selectedImage.title}</h3>
                <p className="text-white/60 capitalize mt-2">{selectedImage.type}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
