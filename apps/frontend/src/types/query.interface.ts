
export interface Query {  
  limit?: number;
  count?: number;
  page?: number;
  hobby?: string[];
  music?: string[];
  meal?: string;
  transport?: string[];
  country?: string[];
  continent?: string[];
  levelMin?: number;
  levelMax?: number;
}