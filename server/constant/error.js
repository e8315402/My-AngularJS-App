export class LackNecessaryArgumentError extends Error {
  constructor(args){
    super(args);
    this.status = 400;
    this.message = args;
  }
};

export class UnknownParameterError extends Error {
  constructor(args){
    super(args);
    this.status = 400;
    this.message = args;
  }
}