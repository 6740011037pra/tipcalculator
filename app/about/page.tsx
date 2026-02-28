import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <h1 className="font-bold">About Me</h1>
        <p>Hello! My name is Prakaykeaw, and I am a passionate web developer with a love for creating dynamic and user-friendly websites. With a strong background in front-end development, I specialize in building responsive and visually appealing web applications. I am always eager to learn new technologies and stay up-to-date with the latest trends in web development. In my free time, I enjoy exploring new frameworks and contributing to open-source projects.</p>
        <Image
  src="https://images.unsplash.com/photo-1770037367722-5444567fcb52"
  alt="Profile Picture"
  width={200}
  height={200}
  className="rounded-full mt-4"
/>
    </div>
  );
};
export default AboutPage;
