export interface pinnedRepoType {
  id: string;
  name: string;
  image?: string;
  deployedLink?: string;
  longDescription: string;
  stack?: string[];
}

export const pinnedRepos: pinnedRepoType[] = [
  {
    id: `ischleseg`,
    name: `M.Sc. Dissertation: Ischemic Stroke Lesion Segmentation using Convolutional Neural Networks`,
    stack: ['Python', 'Keras', 'Jupyter Lab'],
    longDescription: `Ischemic stroke is the most common cerebrovascular disease worldwide and only in the US represents 87% of all strokes. It is produced when a brain artery is obstructed, interrupting the blood flow and eventually killing brain cells. The efficacy of possible treatments highly depends on the time since the stroke onset. Accurately segmenting the stroke lesion (i.e. the affected area of the brain) is a very tedious task that requires examining multiple MRI sequences and has low inter-observer agreement. The stroke lesion can happen anywhere in the brain with different sizes and its characteristics are highly variable. Manual segmentation is the gold standard, but it is impractical in the medical routine. Therefore, it is necessary to develop segmentation algorithms that are able to locate and segment stroke lesions automatically. Such an algorithm is DeepMedic, winner of the first iteration of the Ischemic Stroke Lesion Segmentation Challenge (ISLES). This project uses DeepMedic as core algorithm, but focuses on data pre-processing and post-processing using the ISLES 2017 data set in order to find new ways of improving performance. Of all techniques implemented, data augmentation with binary closing achieved the best results, obtaining an improvement of DICE score of 17% over the baseline model. Also, the results show that DeepMedic performs better for big lesions than for small ones.`,
    deployedLink: 'https://www.frontiersin.org/articles/10.3389/fninf.2019.00033/full',
  },
  {
    id: `Emotion-Recognition`,
    name: `B.Sc. Thesis: Facial Emotion Recognition with Convolutional Neural Networks`,
    stack: ['R', 'Python', 'MxNet', 'OpenCV'],
    longDescription: `Deep Learning and Neuromarketing, two disciplines representing the state of the art in their corresponding fields of knowledge, act together for the first time to solve a problem that has been addressed multiple times. To understand what the consumers really want. By using advanced artificial intelligence techniques, such as convolutional neural networks, this work tries (and succeeds) to detect emotions through the analysis of a person’s facial expressions. With the outcome of said analysis, it is possible to predict the effectiveness of ads depending on which emotions advertisers want their consumers to feel.`,
  },
];
