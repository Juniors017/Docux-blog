import React from 'react';
// Importe le mapper original + nos composants selon la doc docusaurus
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocusaurusButton from '@site/src/components/DocusaurusButton';
import Timeline from '@site/src/components/Timeline';
import TimelineItem from '@site/src/components/Timeline/TimelineItem';
import LatestBlogPosts from '@site/src/components/LatestBlogPosts';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';

export default {
  // Réutilise la correspondance par défaut
  ...MDXComponents,
  // Ajoute la balise "highlight" à notre composant <Highlight> };
  // `Highlight` recevra tous les props qui ont été passés à `<Highlight>` dans MDX
  Highlight,
  // ajout de la balise ImageOnClick je suit le process docu
 
  TabItem,
  Tabs,
  DocusaurusButton,
  Timeline,
  TimelineItem,
  LatestBlogPosts,
  Columns,
Column

};