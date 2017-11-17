import axios from "axios";
import * as React from "react";
import { posts } from "../../../assets/scripts/posts.js";
import NavBar from "../../common/ui/nav.bar.component";

console.log(posts);

class Community extends React.Component<any, {}> {
  private entry: string;
  constructor(props: any) {
    super(props);
    this.state = { userPosts: posts };
  }
  // tslint:disable-next-line:arrow-parens
  public displayPosts = key => {
    const data = posts[key];
    return data.user_id;
    // tslint:disable-next-line:semicolon
  };

  public render() {
    return (
      <div>
        <NavBar />
        Display Posts
        {Object.keys(posts).map(this.displayPosts.bind(this))}
      </div>
    );
  }
}

export default Community;
