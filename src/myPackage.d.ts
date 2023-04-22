interface Config {
  url: string;
}

declare module "myPackge" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
