import Hero from '../components/home/Hero';
import About from '../components/home/About';
import SkillPreview from '../components/home/SkillPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactMini from '../components/common/ContactMini';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SkillPreview />
      <FeaturedProjects />
      <ContactMini />
    </>
  );
};

export default Home;