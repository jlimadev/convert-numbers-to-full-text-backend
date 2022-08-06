export type AllowedMethods = 'get' | 'post' | 'patch' | 'put' | 'delete';

export default interface Http {
  on(method: AllowedMethods, url: string, callback: Function): void;
  listen(port: number): void;
}
