export class User {
  constructor(
    public imagePath: string,
    public bannerPath: string,
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public rating: number,
    public messagesCount: number,
    public solutionCount: number,
    public featuredContentCount: number,
    public reactionScoreCount: number,
    public points: number, 
    public joinDate: Date,
    public onlineStatus: number,
    public answersId: number[],
    public questionsId: number[],
    public id?: number
              
  ) {}
}
