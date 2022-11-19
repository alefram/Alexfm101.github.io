import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Post = ({projectData}) => {
	return (
		<div>
			<Head>
				<title>Project | {projectData.title}</title>
				<meta name="author" content="Alexis Fraudita"/>
				<meta 
					name="keywords" 
					content="Machine Learning, Robotics, Electronics, 
					Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, 
					Alexis Fraudita, Python, Pytorch"
				/>
				<meta property="og:title" content={projectData.title} />
				<meta property="og:description" content={projectData.description}/>
				<meta property="og:type" content="article"/>
				<meta 
					property="og:url" 
					content={
					`https://alefram.github.io/projects/${projectData.title}`
					} 
				/>
			</Head>

			<Navbar/> 
			<main className="mt-10 px-4 md:px-2 ">
					<div className='text-center'>
						<h1 className="text-4xl text-stone-900 font-bold font-nunito">
							{projectData.title}
						</h1>
					</div>
					<article 
						className="text-justify mx-auto mt-4 font-Roboto markdown prose 
						 prose-blue text-background text-base" 
						dangerouslySetInnerHTML={{ 
							__html: projectData.contentHtml 
						}} 
					/>
			</main>
			<Footer/>
		</div>  
		);
};

export async function getStaticPaths() {
	const paths = getAllProjectsIds()
	return {
		paths,
		fallback: false
	}
};

export async function getStaticProps({ params }) {
	const projectData = await getProjectsData(params.id)
	return {
		props: {
			projectData
		}
	}
};

export default Post;