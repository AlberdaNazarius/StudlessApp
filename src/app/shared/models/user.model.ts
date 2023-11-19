export class User {
  constructor(public id: number,
    public imagePath: string,
    public bannerPath: string,
    public name: string,
    public status: string,
    public rating: number,
    public messages: number,
    public solutions: number,
    public featuredContent: number,
    public reactionsScore: number,
    public points: number, 
    public joinDate: Date,
    public onlineStatus: number
              
  ) {}
}
