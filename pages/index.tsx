import { Grid } from '@mui/material';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projectCard';
import { getGithubRepos, getRepoLanguages } from '../lib/projects';
import utilStyles from '../styles/utils.module.css';

const introduction: string = "I'm a software engineer and here are some of my projects"


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
      <Grid container spacing={4} justifyContent="center">

        {githubRepoData.map((repo: any) => {
          return (
            <Grid item key={repo.name}>
              <ProjectCard
                key={repo.name}
                name={repo.name}
                description={repo.description}
                website={repo.homepage}
                source={repo.html_url}
                languages={repo.languages}
                />
            </Grid>
          )
        }
        )}

      </Grid>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const githubRepoData: JSON | false = await getGithubRepos();
  const repoLanguages: string[][] = [];

  // fetches individual repo languages and adds them to collective repo data 
  if (Array.isArray(githubRepoData)) {
    const promiseArray = githubRepoData.map( async (repo) => {
      var languages = await getRepoLanguages(repo.languages_url);
      repo.languages = Object.keys(languages);
    })
    await Promise.all(promiseArray);
  }
  
  return {
    props: {
      githubRepoData
    }
  }
}
