import {
  AddressIcon,
  ClockIcon,
  EmailIcon,
  FaxIcon,
  PhoneIcon,
} from "../../assets/Image";
//
export const MapSection = () => {
  return (
    <>
      <div className="flex items-center gap-9">
        <div
          className=" flex items-center justify-end pr-8 bg-gray-100 h-[361px] rounded-tr-[50px] rounded-br-[50px]"
          style={{
            paddingLeft: "calc((100% - 1512px) / 2)",
          }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38003.752221103736!2d10.1941248!3d53.4642688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1756890532665!5m2!1sen!2sde"
            width="840"
            height="297"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* MEGA NEWS INFORMATION */}
        <div className=" w-[322px] h-[297px]">
          <div className="flex items-center gap-1">
            <div className="w-[4px] h-[10px] bg-[#F81539] rounded-[12px]"></div>
            <h3 className="text-2xl font-bold">Mega News Information</h3>
          </div>
          <div className="border-l-5 border-l-gray-100 pl-3 mt-3 mb-5">
            <p className="flex gap-2 text-[13px] font-medium pt-3 pb-3 ">
              <EmailIcon /> Email : Management@mega.news
            </p>
            <p className="flex gap-2 text-[13px] font-medium pt-3 pb-3">
              <PhoneIcon /> Phone number : +1(234) 567-8910
            </p>
            <p className="flex gap-2 text-[13px] font-medium pt-3 pb-3">
              <FaxIcon /> Fax : +1(234) 567-8910{" "}
            </p>
            <p className="flex gap-2 text-[13px] font-medium pt-3 pb-3">
              <AddressIcon /> Address : 1234 Foxrun St.New Lenox, IL 123456{" "}
            </p>
          </div>
          <div>
            <p className="flex items-center justify-center gap-2 text-[13px] font-medium bg-gray-100 rounded-[12px] h-[40px] ">
              {" "}
              <ClockIcon /> Responding 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
