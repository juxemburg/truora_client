import { Observable } from 'rxjs';
import { HttpClient } from '.';
import { DomainInfoModel } from '@/models/domain.models';

const httpClient = new HttpClient();

export const getInfo: (
  domainName: string
) => Observable<DomainInfoModel> = domainName =>
  httpClient.Get(`domainInfo/host?domain=${domainName}`);

export const domainInfoService = {
  getInfo,
};
