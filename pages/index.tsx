import { Grid } from '@mui/material';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import Layout, { siteTitle } from '../components/layout';
import ProjectCard from '../components/projectCard';
import { getGithubRepos, getRepoLanguages } from '../lib/projects';
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
      <Grid container spacing={4} justifyContent="center">

        {githubRepoData.map((repo: any) => {
          return (
            <Grid item>
              <ProjectCard
                key={repo.name}
                name={repo.name}
                description={repo.description}
                website={repo.homepage}
                source={repo.html_url}
                languages={repo.lanugages}
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

  if (Array.isArray(githubRepoData)) {
    console.log("happened");
    var count: number = 0;
    githubRepoData.map(async (repo: any) => {
      var languages = await getRepoLanguages(repo.languages_url);
      githubRepoData[count].languages = Object.keys(languages);
      count++
    })
  }




  return {
    props: {
      githubRepoData
    }
  }
}