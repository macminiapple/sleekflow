const ProfileImage = ({ src }) => {
  return (
    <div className="rounded-full overflow-hidden h-24 w-24">
      <img src={src} />
    </div>
  );
};

export default ProfileImage;
