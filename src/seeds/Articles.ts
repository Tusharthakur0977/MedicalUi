import { ImageSourcePropType } from 'react-native';
import IMAGES from '../assets';

export const TrendingArticles = [
  {
    id: 1,
    description:
      'Adding salt in your food may increase the risk of hypertension.',
    avatarUrl: IMAGES.articletrend1,
  },
  {
    id: 2,
    description: 'COVID-19 Reinfection May increases the Risk of Deaths.',
    avatarUrl: IMAGES.covidTrend2,
  },
  {
    id: 3,
    description:
      'Adding salt in your food may increase the risk of hypertension.',
    avatarUrl: IMAGES.articletrend1,
  },
  {
    id: 4,
    description: 'COVID-19 Reinfection May increases the Risk of Deaths.',
    avatarUrl: IMAGES.covidTrend2,
  },
];
export const Data = [
  { key: '1', label: 'All', backgroundColor: '#286cfc', color: 'white' },
  { key: '2', label: 'Newest', backgroundColor: 'white', color: '#286cfc' },
  { key: '3', label: 'Covid-19', backgroundColor: 'white', color: '#286cfc' },
  {
    key: '4',
    label: 'Lifestyle',
    backgroundColor: 'white',
    color: '#286cfc',
  },
  {
    key: '5',
    label: 'Health',
    backgroundColor: 'white',
    color: '#286cfc',
  },
  { key: '6', label: 'Medical', backgroundColor: 'white', color: '#286cfc' },
];
export const ArticleNews = [
  {
    key: 1,
    date: 'Dec 22, 2022',
    description:
      'The Covid-19 variant KP.2 has become the dominant strain in the US in recent weeks. We talked to our wellness expert to get the facts about...',
    label: 'Covid-19',
    image: IMAGES.articleNews1,
  },
  {
    key: 2,
    date: 'Dec 21, 2022',
    description:
      'Vitamin E capsules are praised for their skin, hair and eye benefits. But how effective are they?',
    label: 'Health',
    image: IMAGES.An2,
  },
  {
    key: 3,
    date: 'Nov 12, 2022',
    description:
      'Our lifestyle decisions have a big impact on whether kidney illnesses arise or not, as well as on maintaining the health of the kidneys.',
    label: 'Lifestyle',
    image: IMAGES.articlen2,
  },
  {
    key: 4,
    date: 'Oct 2, 2022',
    description:
      'Adding salt in your food may increase the risk of hypertension.',
    label: 'Medical',
    image: IMAGES.articlenews3,
  },
  {
    key: 5,
    date: 'Aug 22, 2022',
    description:
      'Adding salt in your food may increase the risk of hypertension.',
    label: 'Covid-19',
    image: IMAGES.articleNews1,
  },
  {
    key: 6,
    date: 'Oct 2, 2022',
    description:
      'Adding salt in your food may increase the risk of hypertension.',
    label: 'Medical',
    image: IMAGES.articlenews3,
  },
  {
    key: 7,
    date: 'Nov 12, 2022',
    description:
      'Our lifestyle decisions have a big impact on whether kidney illnesses arise or not, as well as on maintaining the health of the kidneys.',
    label: 'Lifestyle',
    image: IMAGES.articlen2,
  },
  {
    key: 8,
    date: 'Jul 10, 2022',
    description:
      'Discover the benefits of a plant-based diet and how it can improve your overall health and well-being.',
    label: 'Health',
    image: IMAGES.articleNews1,
  },
  {
    key: 9,
    date: 'Jun 18, 2022',
    description:
      'Sleep deprivation can have severe consequences on your health. Find out how to improve your sleep quality.',
    label: 'Medical',
    image: IMAGES.articlenews3,
  },
  {
    key: 10,
    date: 'May 25, 2022',
    description:
      'The importance of hydration: Learn why drinking enough water is essential for maintaining good health.',
    label: 'Health',
    image: IMAGES.articleNews1,
  },
  {
    key: 11,
    date: 'Apr 14, 2022',
    description:
      'The rise of telemedicine: How virtual healthcare is changing the medical industry.',
    label: 'Medical',
    image: IMAGES.articlen2,
  },
  {
    key: 12,
    date: 'Mar 30, 2022',
    description:
      'Exploring the benefits of yoga for mental and physical health.',
    label: 'Lifestyle',
    image: IMAGES.An2,
  },
  {
    key: 13,
    date: 'Feb 18, 2022',
    description:
      'Understanding the impact of diet on mental health: Foods that boost mood and cognitive function.',
    label: 'Medical',
    image: IMAGES.An2,
  },
  {
    key: 14,
    date: 'Jan 5, 2022',
    description:
      'The importance of regular health check-ups: How early detection can save lives.',
    label: 'Medical',
    image: IMAGES.articleNews1,
  },
  {
    key: 15,
    date: 'Dec 5, 2022',
    description:
      'The Covid-19 pandemic has led to increased awareness about the importance of vaccination.',
    label: 'Covid-19',
    image: IMAGES.articlenews3,
  },
  {
    key: 16,
    date: 'Nov 18, 2022',
    description:
      'Exercise is vital for maintaining mental health and reducing stress.',
    label: 'Health',
    image: IMAGES.articleNews1,
  },
  {
    key: 17,
    date: 'Oct 22, 2022',
    description:
      'The connection between lifestyle choices and heart disease: What you need to know.',
    label: 'Lifestyle',
    image: IMAGES.articlenews3,
  },
  {
    key: 18,
    date: 'Sep 11, 2022',
    description:
      'Advancements in medical technology are improving patient outcomes.',
    label: 'Medical',
    image: IMAGES.articleNews1,
  },
  {
    key: 19,
    date: 'Aug 14, 2022',
    description: 'How proper nutrition can help manage chronic illnesses.',
    label: 'Covid-19',
    image: IMAGES.An2,
  },
  {
    key: 20,
    date: 'Jul 25, 2022',
    description:
      'The role of vaccines in preventing the spread of infectious diseases.',
    label: 'Covid-19',
    image: IMAGES.articleNews1,
  },
  {
    key: 21,
    date: 'Jun 15, 2022',
    description:
      'The benefits of mindfulness and meditation for mental well-being.',
    label: 'Lifestyle',
    image: IMAGES.articlen2,
  },
  {
    key: 22,
    date: 'May 5, 2022',
    description:
      'Healthy eating habits that can improve overall health and longevity.',
    label: 'Health',
    image: IMAGES.articlen2,
  },
];

export type TrendingArticleParamTypes = {
  id: number;
  description: string;
  avatarUrl: ImageSourcePropType;
};
export type ArticleNewsParamsTypes = {
  key: number;
  date: string;
  description: string;
  label: string;
  image: ImageSourcePropType;
};
export type CategoryDataParamTypes = {
  key: number;
  label: string;
  backgroundColor: string;
  color: string;
};
