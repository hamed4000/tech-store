import * as contentFull from "contentful"

const client = contentFull.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "abic1vbbal4u",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "eN59GupN8ABxMF6yvS0nJ_v3AhoDyONyRdzGT55C3P4"
});

export default client;



