type Props = {
  imgUrl: string;
};

const ProfilePic = ({ imgUrl }: Props) => {
  return (
    <div className="h-10 w-10 rounded-full border-[1.5px] border-white relative cursor-pointer">
      <img src={imgUrl} className="h-full w-full object-cover" />
      <div className="h-2 w-2 rounded-full border-[1.33px] border-white bg-[#20C997] absolute bottom-0 right-0"></div>
    </div>
  );
};

export default ProfilePic;
