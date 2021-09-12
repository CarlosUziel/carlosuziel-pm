export type categories = `courses` | `books` | `videos` | `other`;

export interface BibType {
  link: string;
  id: string;
  name: string;
  author: string;
  category: categories[];
  labels?: string[];
  description: string;
}

const Bibs: BibType[] = [
  // courses
  {
    id: `css224w`,
    category: [`courses`],
    link: `https://web.stanford.edu/class/cs224w/`,
    labels: [`Machine Learning`, `Graphs`],
    name: `CS224W: Machine Learning with Graphs`,
    author: `Prof. Jure Leskovec`,
    description: `Complex data can be represented as a graph of relationships between objects. Such networks are a fundamental tool for modeling social, technological, and biological systems. This course focuses on the computational, algorithmic, and modeling challenges specific to the analysis of massive graphs. By means of studying the underlying graph structure and its features, students are introduced to machine learning techniques and data mining tools apt to reveal insights on a variety of networks. `,
  },
  {
    id: `deep_life_sciences`,
    category: [`courses`],
    link: `https://mit6874.github.io/`,
    labels: [`Machine Learning`, `Computation Biology`],
    name: `Computational Systems Biology: Deep Learning in the Life Sciences`,
    author: `Prof. Manolis Kellis`,
    description: `This course introduces foundations and state-of-the-art machine learning challenges in genomics and the life sciences more broadly. `,
  },
  // books
  {
    id: `art_statistics`,
    category: [`books`],
    link: `https://www.penguin.co.uk/books/294/294857/learning-from-data/9780241258767.html`,
    labels: [`Statistics`, `Fundamentals`],
    name: `The Art of Statistics: Learning from Data`,
    author: `David Spiegelhalter`,
    description: `A marvelous book covering the fundamental concepts of statistics. This books answers questions such as: "How can statistics help us understand the world?", "Can we come to reliable conclusions when data is imperfect?" and "How is statistics changing in the age of data science?"`,
  },
  {
    id: `how_phd`,
    category: [`books`],
    link: `https://global.oup.com/academic/product/how-to-get-your-phd-9780198866923?cc=at&lang=en&`,
    labels: [`PhD`, `Research`],
    name: `How to Get Your PhD`,
    author: `Gavin Brown`,
    description: `Compiled by a leading UK researcher, and written in a highly personal one-to-one manner, How to Get Your PhD showcases the thoughts of diverse and distinguished minds hailing from the UK, EU, and beyond, spanning both academia and industry. With over 150 bitesize nuggets of actionable advice, it offers more detailed contributions covering topics such as career planning, professional development, diversity and inclusion in science, and the nature of risk in research.`,
  },
  {
    id: `genetics_101`,
    category: [`books`],
    link: `https://www.amazon.de/Genetics-101-Chromosomes-Cloning-Everything/dp/1507207646`,
    labels: [`Genetics`, `Biology`, `Fundamentals`],
    name: `Genetics 101`,
    author: `Beth Skwarecki`,
    description: `Genetics 101 breaks down the science of how genes are inherited and passed from parents to offspring, what DNA is and how it works, how your DNA affects your health, and how you can use your personal genomics to find out more about who you are and where you come from.`,
  },
  {
    id: `craft_research`,
    category: [`books`],
    link: `https://press.uchicago.edu/ucp/books/book/chicago/C/bo23521678.html  `,
    labels: [`Research`, `Writing`],
    name: `The Craft of Research`,
    author: `Wayne C. Booth et al.`,
    description: `Learn how to conduct effective and meaningful research. This fundamental work explains how to find and evaluate sources, anticipate and respond to reader reservations, and integrate these pieces into an argument that stands up to reader critique.`,
  },
];
export default Bibs;
