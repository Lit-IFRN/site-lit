import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
            description
            image_url
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => ({
    slug: project.frontmatter.slug,
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    image_url: project.frontmatter.image_url
  }));
};

export default useProjects;
