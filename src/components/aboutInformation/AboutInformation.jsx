import {
  ClockIcon,
  FaxIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../../assets/AllImages";
import Title from "../title/Title";

const AboutInformation = () => {
  return (
    <div className="flex gap-7 m-auto  w-[1512px] my-10 ">
      <div className="bg-gray-100 p-5 rounded-r-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160842.042071763!2d6.802517911017945!3d50.95780316239696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf259169ab2fe5%3A0x42760fc4a2a77f0!2zS8O2bG4!5e0!3m2!1sde!2sde!4v1756886765618!5m2!1sde!2sde"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[840px] h-[297px] rounded-r-xl"
        ></iframe>
      </div>
      <div className="flex flex-col gap-3 ">
        <Title title={"Mega News Information"} />
        <div className="flex flex-col gap-7 border-l-3  border-gray-200 pl-2 my-5">
          <p className="flex gap-3 items-center text-sm">
            <MailIcon />
            Email : Management@Mega.News
          </p>
          <p className="flex gap-3 items-center text-sm">
            <PhoneIcon />
            Phone number : +1(234) 567-8910
          </p>
          <p className="flex gap-3 items-center text-sm">
            <FaxIcon />
            fax : +1(234) 567-8910
          </p>
          <p className="flex gap-3 items-center text-sm">
            <LocationIcon />
            Address : 1234 Foxrun St.New Lenox, IL 123456
          </p>
        </div>
        <div className="bg-gray-100 rounded-md p-2 my-3">
          <p className="flex gap-3 items-center text-sm">
            <ClockIcon />
            Responding 24 Hours A Day, 7 Days a Week
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInformation;
