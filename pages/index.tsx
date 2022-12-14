import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projectCard';
import { getGithubRepos } from '../lib/projects';
import utilStyles from '../styles/utils.module.css';

const introduction: string = "I'm a software developer. Here are some of my projects..."


export default function Home({ githubRepoData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>{introduction}</p>
        </section>
      </Layout>
      <div className={utilStyles.projectContainer}>
        {githubRepoData.map((repo: any) => {
          return (
            <ProjectCard
              key={repo.name}
              name={repo.name}
              description={repo.description}
              website={repo.homepage}
              source={repo.html_url} />
          )
        }

        )}
      </div>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const githubRepoData: JSON | false = await getGithubRepos();

  return {
    props: {
      githubRepoData
    }
  }
}