export type categories = `development` | `research` | `visualization` | `productivity`;

export interface ToolType {
  link: string;
  id: string;
  name: string;
  category: categories[];
  labels?: string[];
  description: string;
}

const Tools: ToolType[] = [
  // development
  {
    id: `vscode`,
    category: [`development`],
    link: `https://code.visualstudio.com/`,
    labels: [`IDE`],
    name: `Visual Studio Code`,
    description: `A lightweight code editor with plenty of plugins.`,
  },
  {
    id: `pycharm`,
    category: [`development`],
    link: `https://www.jetbrains.com/pycharm/`,
    labels: [`IDE`, `Python`],
    name: `PyCharm`,
    description: `Possibly the most fully-featured Python IDE for professionals.`,
  },
  {
    id: `jupyter`,
    category: [`development`],
    link: `https://jupyter.org/`,
    labels: [`IDE`, `Python`, `R`],
    name: `JupyterLab`,
    description: `A web-based interactive development environment for Jupyter notebooks, code and data.`,
  },
  // research
  {
    id: `mendeley`,
    category: [`research`],
    link: `https://www.mendeley.com/`,
    labels: [`Reference Manager`, `Research Library`],
    name: `Mendeley`,
    description: `Used to manage and share research papers and generate bibliographies for scholarly articles.`,
  },
  // visualization
  {
    id: `biorender`,
    category: [`visualization`],
    link: `https://biorender.com/`,
    labels: [`Publication Figures`, `Online`],
    name: `BioRender`,
    description: `Create Professional Science Figures in Minutes. Browse thousands of pre-made icons and templates from more than 30 fields of life sciences.`,
  },
  // productivity
  {
    id: `todoist`,
    category: [`productivity`],
    link: `https://todoist.com/`,
    labels: [`Task Manager`],
    name: `Todoist`,
    description: `A great task manager and organizer.`,
  },
  {
    id: `obsidian`,
    category: [`productivity`],
    link: `https://obsidian.md/`,
    labels: [`Knowledge base`],
    name: `Obsidian`,
    description: `Supercharged note-taking in markdown.`,
  },
  {
    id: `slack`,
    category: [`productivity`],
    link: `https://slack.com/`,
    labels: [`Team chat`, `Communication`, `File share`],
    name: `Slack`,
    description: `Supercharged note-taking in markdown.`,
  },
];
export default Tools;
