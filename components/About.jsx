import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
         
        <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/well.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">Biz Kimiz?</Title>
          <p className="my-5 flex flex-col items-center">
          Müzik Marketim ses ışık ve müzik aletleri  kategorisinde yüzlerce devlet kurumu ve 
          kurumsal firmanın ihtiyaçları doğrultusunda en doğru ve en mantıklı çözümleri sunmaktadır. 
          Size özel atanan alanında uzman destek ekibimiz alanlarındaki bilgilerini doğru ve verimli 
          bir şekilde kullanarak taleplerinizi hızlıca karşılar.
          </p>
          <button className="btn-primary">devamını oku</button>
        </div>
      </div>
    </div>
  );
};

export default About;
