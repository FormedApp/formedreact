import axios from "axios";
import * as React from "react";
import { posts } from "../../../assets/scripts/posts.js";
import NavBar from "../../common/ui/nav.bar.component";
import JournalEntryComponent from "../../journal/ui/journal.component";

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
        <div>Community Page</div>
        <JournalEntryComponent />
      </div>
    );
  }
}

export default Community;
