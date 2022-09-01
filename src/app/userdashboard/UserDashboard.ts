export class userdashboard {
    applicationId: string = "";       
    user:any=0;

  
    constructor(applicationId: string, user:any) {
      this.applicationId = applicationId;
      this.user=user.userId;
    }
  }