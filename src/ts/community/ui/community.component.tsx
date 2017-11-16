import * as React from "react";
import NavBar from "../../common/ui/nav.bar.component";
class Community extends React.Component<any, {}> {
  private entry: string;
  constructor(props: any) {
    super(props);
  }

  public render() {
    // console.log(this.props);
    return (
      <div>
        <NavBar />
        Community Page
      </div>
    );
  }
}

export default Community;
