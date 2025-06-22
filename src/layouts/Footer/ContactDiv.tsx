import SocialsDiv from '@/components/Socials/SocialsDiv';
import FormInput from '@/components/UI/FormInput';

const ContactDiv = () => {
  return (
    <div className="max-w-xs">
      <p className="ml-1 font-bold max-w-[250px]">
        Có điều gì muốn trao đổi với các chuyên gia của chúng tôi?
      </p>
      <div className="my-3">
        <FormInput
          type="email"
          placeholder="Email của bạn"
          className="rounded-xl border-ocean-dark border-2 bg-transparent placeholder:text-ocean-dark"
        />
      </div>
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
