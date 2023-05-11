import Head from 'next/head';
import { FaUsers, FaBook, FaProjectDiagram } from 'react-icons/fa';
import MyLayout from './component/layout';
import Footer from './component/footer';
const About = () => {
  return (
    <>
     <MyLayout title="About Us" />
      <Head>
        <title>About Us </title>
      </Head>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          class="w-full md:w-1/2 object-cover rounded-lg ml-7"
          src="/about1.jpg"
          alt="Student Portal"
        />
        <div className="md:w-1/2 md:pl-10 lg:pl-20 xl:pl-32 mr-7">
          <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
          <p className="text-gray-700 mb-6">
            Amra Korbo Joy (AKJ), our mission is to provide students with convenient access to educational resources, networking opportunities, and career development tools that support their academic and professional goals. We believe that by creating a platform for students to connect with peers, collaborate on coursework, and engage with a diverse community of learners, we can help them achieve academic success and personal growth.
          </p>
          <p className="text-gray-700 mb-6">
            Our team is committed to continually improving and expanding the resources available on our platform, to ensure that our users have access to the most up-to-date and effective learning materials. We also strive to foster a supportive and inclusive community, where all learners are welcomed and encouraged to participate.
          </p>
          <p className="text-gray-700 mb-6">
            Whether you're a college student looking to improve your grades, a high school student preparing for college admissions, or a lifelong learner seeking to expand your knowledge and skills, Student Portal is here to help you achieve your goals. Join our community today and discover the many benefits of learning with us.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 mr-7 ml-7">
        <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg px-6 py-8">
            <FaUsers className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-4">Networking Opportunities</h2>
            <p className="text-gray-700">
            AKJ provides a platform for students to connect with other learners who share similar interests or career goals. This can lead to valuable networking opportunities and the development of long-term professional relationships.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-6 py-8">
            <FaBook className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-4">Convenient Access to Educational Resources</h2>
            <p className="text-gray-700">
            With AKJ, students can access a wide range of educational resources, such as study guides, practice quizzes, and tutorial videos, from anywhere, at any time. This allows students to supplement their classroom learning and improve their understanding of course material on their own schedule
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-6 py-8">
            <FaProjectDiagram className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-4">Personal Growth</h2>
            <p className="text-gray-700">
           AKJ's resources and networking opportunities can also contribute to students' personal growth and development. By engaging with a diverse community of learners, students can gain a broader perspective on the world and develop new interests and passions.
            </p>
          </div>
        </div>
      </div>
<Footer/>

    </>
  );
};

export default About;

