const ProfileImage = ({
  src = '/images/profile.jpg',
  alt = 'Profile picture',
  size = 'lg',
  showStatus = true,
  isOnline = true,
  className = '',
}) => {
  const sizeMap = {
    sm: 'h-24 w-24',
    md: 'h-40 w-40',
    lg: 'h-[22rem] w-[22rem]',
    xl: 'h-96 w-96',
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Circular profile image with zoom on hover */}
      <div className={`${sizeMap[size]} overflow-hidden rounded-full shadow-lg transition-shadow duration-300 hover:shadow-2xl ring-4 ring-slate-100 dark:ring-slate-900`}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
        />
      </div>

      {/* Online status indicator */}
      {showStatus && (
        <div
          className={`absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white transition-all dark:border-slate-900 ${
            isOnline
              ? 'animate-pulse bg-green-500'
              : 'bg-slate-400'
          }`}
          aria-label={isOnline ? 'Online' : 'Offline'}
        />
      )}
    </div>
  );
};

export default ProfileImage;
