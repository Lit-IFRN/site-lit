const findImage = (images, imageName) => {
  const { node } = images.find(image => image.node.name === imageName);
  return node.childImageSharp.fluid;
};

export default findImage;
