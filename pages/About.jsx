import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {

    return (
        <div>
            <Head>
                <title>Alexis Fraudita</title>
                <meta name="description" content="Hey I'm Alexis Fraudita, I'm 
                software developer and I will share with you everything that i'm
                 learning about machine learning, electronics and more." 
                 />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, 
                Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, 
                Fraudita, Alexis Fraudita, Python, Pytorch"
                />
                <meta property="og:title" content="Alexis Fraudita" />
                <meta property="og:description" content="Hey I'm Alexis Fraudita, 
                I'm software developer and I will share with you everything that 
                i'm learning about machine learning, electronics and more." 
                />
                <meta 
                    property="og:image" 
                    content="https://alexfm101.github.io/images/me.jpeg" 
                />
                <meta property="og:url" content="https://alexfm101.github.io/" />
                <meta property="og:type" content="website" />
                <meta 
                    name="viewport" content="initial-scale=1.0, 
                    width=device-width" key="viewport" 
                />
            </Head>

            <Navbar/>

            <main className="mx-auto md:px-8 lg:max-w-screen-md pt-10">
                <div className="flex pt-5 w-full">
                    <h1 className="text-gradient bg-gradient-to-r from-blue-600
                     to-blue-500 text-6xl font-bold font-square-peg
                     ml-3 py-3 pr-3  md:text-7xl">
                        Hey 
                    </h1>
                    <p className='text-4xl md:text-5xl py-6'>&#128075;</p>
                </div>
                <div className="max-w-screen-md mx-4">

                    <p className="mt-2 font-Roboto  text-gray-600 lg:text-lg">
                        My name is Alexis Fraudita, I&apos;m Electrical Engineer
                        Student and Software Developer from Venezuela 🇻🇪.
                    </p>
                    <p className="font-Roboto  text-gray-600 mt-2 lg:text-lg">
                         I&apos;m very interested in Robot Learning and the hardware
                          for robotics, so I decided to create this blog to share
                           my projects and learning notes in these fields.
                    </p>
                    <p className='mt-2 font-Roboto text-gray-600 lg:text-lg'>
                        Currently, I&apos;m working on my Bachelor thesis about 
                        a framework for create smart controllers in robots 
                        manipulators using Reinforcement Learning.
                    </p>
                    <p className="font-Roboto text-gray-600 mt-2 lg:text-lg">
                        Some others things and interests that I enjoy are sports
                        like table tennis, compose music, videogames  and watch 
                        movies that for me is a source of inspiration.
                    </p>
                </div>

                <Footer/>

            </main>
        </div>
    );
};


export default About;
// #202124