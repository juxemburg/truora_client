export interface DomainInfoModel {
  host: string;
  serversChanged: boolean;
  sslGrade: string;
  previousSslGrade: string;
  logo: string;
  title: string;
  isDown: boolean;
  servers: DomainServer[];
}

export interface DomainServer {
  address: string;
  sslGrade: string;
  country: string;
  owner: string;
}
