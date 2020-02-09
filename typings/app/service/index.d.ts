// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNews from '../../../app/service/News';

declare module 'egg' {
  interface IService {
    news: ExportNews;
  }
}
