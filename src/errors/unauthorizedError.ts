import HttpException from '../middlewares/httpException';

export default class UnauthorizedError extends HttpException {
  public status: number;

  constructor(status: number, message: string) {
    super(status, message);
    this.name = 'UnauthorizedError';
    this.status = 401;
  }
}