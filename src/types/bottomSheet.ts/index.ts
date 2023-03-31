import { SectionListData } from 'react-native';

export interface ISection
  extends SectionListData<string, { title: string; data: string[] }> {}
