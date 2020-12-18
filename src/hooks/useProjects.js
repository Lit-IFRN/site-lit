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
            image_name
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(project => ({
    slug: project.frontmatter.slug,
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    image_name: project.frontmatter.image_name
  }));
};

export default useProjects;
