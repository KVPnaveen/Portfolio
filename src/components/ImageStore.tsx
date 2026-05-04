import { useEffect, useState } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';

const IMAGE_STORE_KEY = 'portfolio-image-store';
const MAX_IMAGES = 12;
const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024;
const DEFAULT_STORED_IMAGES = ['/images/profile.jpg'];

export default function ImageStore() {
  const [images, setImages] = useState<string[]>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_STORED_IMAGES;
    }

    const storedImages = window.localStorage.getItem(IMAGE_STORE_KEY);
    if (!storedImages) {
      return DEFAULT_STORED_IMAGES;
    }

    try {
      const parsed = JSON.parse(storedImages);
      if (!Array.isArray(parsed)) {
        return DEFAULT_STORED_IMAGES;
      }

      const savedImages = parsed.filter((value) => typeof value === 'string') as string[];
      return Array.from(new Set([...DEFAULT_STORED_IMAGES, ...savedImages])).slice(0, MAX_IMAGES);
    } catch {
      return DEFAULT_STORED_IMAGES;
    }
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.localStorage.setItem(IMAGE_STORE_KEY, JSON.stringify(images));
  }, [images]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (!selectedFiles.length) {
      return;
    }

    const remainingSlots = MAX_IMAGES - images.length;
    const filesToProcess = selectedFiles.slice(0, Math.max(remainingSlots, 0));

    if (remainingSlots <= 0) {
      setErrorMessage(`You can store up to ${MAX_IMAGES} images.`);
      event.target.value = '';
      return;
    }

    const validFiles = filesToProcess.filter((file) => file.type.startsWith('image/'));
    if (validFiles.length !== filesToProcess.length) {
      setErrorMessage('Some files were skipped because they are not images.');
    } else {
      setErrorMessage('');
    }

    const oversizedFile = validFiles.find((file) => file.size > MAX_FILE_SIZE_BYTES);
    if (oversizedFile) {
      setErrorMessage('One or more images are larger than 2MB.');
      event.target.value = '';
      return;
    }

    Promise.all(
      validFiles.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (typeof reader.result === 'string') {
                resolve(reader.result);
              } else {
                reject(new Error('Invalid image data'));
              }
            };
            reader.onerror = () => reject(new Error('Image read failed'));
            reader.readAsDataURL(file);
          })
      )
    )
      .then((newImages) => {
        setImages((previousImages) => [...newImages, ...previousImages].slice(0, MAX_IMAGES));
      })
      .catch(() => {
        setErrorMessage('Unable to process one or more images. Please try again.');
      });

    event.target.value = '';
  };

  const removeImage = (indexToRemove: number) => {
    setImages((previousImages) => previousImages.filter((_, index) => index !== indexToRemove));
  };

  return (
    <section id="image-store" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-4xl font-extrabold text-on-surface">Image Store.</h2>
            <p className="text-on-surface-variant mt-2">Upload and keep your portfolio images in this browser.</p>
          </div>

          <label
            htmlFor="image-store-upload"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-surface-container-lowest font-semibold cursor-pointer hover:opacity-90 transition-opacity"
          >
            <ImagePlus size={18} />
            Add Images
          </label>
          <input
            id="image-store-upload"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        {errorMessage && <p className="text-sm text-red-500 font-medium mb-6">{errorMessage}</p>}

        {images.length === 0 ? (
          <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-8 text-center text-on-surface-variant">
            No images yet. Upload images to build your local gallery.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={`${image.slice(0, 24)}-${index}`} className="relative group rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-container-lowest">
                <img src={image} alt={`Stored portfolio image ${index + 1}`} className="w-full h-44 object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-lowest/90 text-on-surface-variant hover:text-red-500 transition-colors"
                  aria-label={`Remove image ${index + 1}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
