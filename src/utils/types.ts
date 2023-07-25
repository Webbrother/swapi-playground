export type Maybe<T = unknown> = T | null;

export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};

export type Gender = 'male' | 'female';

// export interface PaginationDTO {
//   limit: number;
//   page: number;
//   total: number;
// }
//
// export interface Pagination {
//   pageSize: number;
//   current: number;
//   total: number;
// }
//
// export type WithPagination<T = unknown> = { data: T } & { pagination: Pagination };
