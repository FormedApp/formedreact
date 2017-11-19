import * as moment from "moment";
import * as React from "react";
import { connect } from "react-redux";
import { SessionState } from "../../login/login.state";
import { PostState } from "../../post/post.state";
import { requestPosts } from "../post.actions";
import { Post } from "../post.state";

interface PostComponentProps {
  dispatch: any;
  session: SessionState;
  posts: PostState;
}

class PostEntryListComponent extends React.Component<PostComponentProps, {}> {
  public componentDidMount() {
    this.props.dispatch(requestPosts(this.props.session.token));
  }

  public renderPostEntry(post: Post) {
    return <li key={post.id}>{moment(post.created_at).format("MMMM Do YYYY - h:mm:ss a")} {post.content}</li>;
  }

  public render() {
    console.log(this.props);
    if (!this.props.posts) { return null; }
    const { postEntries } = this.props.posts;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" />
          <ul>
          {postEntries && postEntries.length > 0 ? (
            postEntries.map((post: Post) => {
              return this.renderPostEntry(post);
            })
          ) : (
            <li>No Posts</li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

interface StateFromProps {
  session: SessionState;
  posts: PostState;
}

const mapStateToProps = (state: any) => ({
  session: state.session,
  posts: state.posts
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  PostEntryListComponent
);
